import { unified } from "unified";
import remarkParse from "remark-parse";
import { parseAllDocuments, isAlias, isMap, isSeq, isScalar } from "yaml";
import { z } from "zod";

const id = z.string().regex(/^[A-Za-z0-9][A-Za-z0-9_-]{0,63}$/).refine(v => !["__proto__", "constructor", "prototype"].includes(v), "Reserved ID");
const text = z.string().refine(v => v.trim().length > 0 && Array.from(v).length <= 10000, "Expected nonempty text of at most 10000 characters");
const item = z.strictObject({ id, text });
const items = (min: number) => z.array(item).min(min).max(10).refine(v => new Set(v.map(x => x.id)).size === v.length, "Item IDs must be unique");
const base = { id, points: z.number().int().min(1).max(100), prompt: text, instructions: text, explanation: text };
const schema = z.strictObject({ schema_version: z.literal(1), exam: z.strictObject({ id, title: text, description: text }), questions: z.array(z.discriminatedUnion("type", [
 z.strictObject({ ...base, type: z.literal("single_choice"), options: items(2), answer: id }),
 z.strictObject({ ...base, type: z.literal("multiple_choice"), options: items(2), answer: z.array(id).min(1).max(10) }),
 z.strictObject({ ...base, type: z.literal("true_false"), statements: items(1), answer: z.record(id, z.boolean()) }),
 z.strictObject({ ...base, type: z.literal("matching"), left: items(2), right: items(2), answer: z.record(id, id) }),
 z.strictObject({ ...base, type: z.literal("short_answer"), answer: z.array(text.refine(v => Array.from(v).length <= 200, "Maximum 200 characters")).min(1).max(10) })
])).min(1).max(100) });
export type Exam = z.infer<typeof schema>;
export type Question = Exam["questions"][number];
export type Response = string | string[] | Record<string, boolean | string>;
export type Responses = Record<string, Response>;
export const normalize = (s: string) => s.normalize("NFC").trim().replace(/\s+/gu, " ").toLowerCase();
function checkNode(node: unknown, depth = 0): void {
 if (depth > 20) throw new Error("YAML nesting exceeds 20 levels.");
 if (!node || typeof node !== "object") return;
 if (isAlias(node) || ("anchor" in node && node.anchor) || ("tag" in node && node.tag)) throw new Error("YAML anchors, aliases, and tags are not supported.");
 if (isMap(node)) for (const pair of node.items) { if (isScalar(pair.key) && ["__proto__", "constructor", "prototype", "<<"].includes(String(pair.key.value))) throw new Error("Reserved YAML key is not allowed."); checkNode(pair.key, depth + 1); checkNode(pair.value, depth + 1); }
 if (isSeq(node)) for (const child of node.items) checkNode(child, depth + 1);
}
export function validateExam(value: unknown): Exam {
 const result = schema.safeParse(value);
 if (!result.success) throw new Error(result.error.issues.map(i => `${i.path.join(".") || "root"}: ${i.message}`).join("\n"));
 const data = result.data;
 if (new Set(data.questions.map(q => q.id)).size !== data.questions.length) throw new Error("questions: Question IDs must be unique.");
 for (const q of data.questions) {
  const fail = () => { throw new Error(`questions.${q.id}.answer: Answer references are invalid or incomplete.`); };
  if (q.type === "single_choice" && !q.options.some(o => o.id === q.answer)) fail();
  if (q.type === "multiple_choice" && (new Set(q.answer).size !== q.answer.length || q.answer.some(a => !q.options.some(o => o.id === a)))) fail();
  if (q.type === "true_false" && (Object.keys(q.answer).length !== q.statements.length || q.statements.some(s => typeof q.answer[s.id] !== "boolean"))) fail();
  if (q.type === "matching" && (q.right.length < q.left.length || Object.keys(q.answer).length !== q.left.length || q.left.some(l => !q.right.some(r => r.id === q.answer[l.id])) || new Set(Object.values(q.answer)).size !== q.left.length)) fail();
  if (q.type === "short_answer" && (q.answer.some(a => !normalize(a)) || new Set(q.answer.map(normalize)).size !== q.answer.length)) fail();
 }
 return data;
}
export function parseExam(source: string): Exam {
 const ast = unified().use(remarkParse).parse(source);
 const blocks = ast.children.filter(n => n.type === "code" && n.lang === "yaml" && n.meta === "mocktest");
 if (blocks.length !== 1 || blocks[0].type !== "code") throw new Error("File must contain exactly one top-level yaml mocktest block.");
 const docs = parseAllDocuments(blocks[0].value, { uniqueKeys: true, version: "1.2", strict: true });
 if (docs.length !== 1 || docs[0].errors.length) throw new Error(`Invalid YAML: ${docs.flatMap(d => d.errors.map(e => e.message)).join("; ") || "Expected one document."}`);
 checkNode(docs[0].contents);
 return validateExam(docs[0].toJS({ maxAliasCount: 0 }));
}
export function grade(q: Question, response: Response | undefined): "correct" | "incorrect" | "unanswered" {
 if (q.type === "single_choice") return typeof response !== "string" || !response ? "unanswered" : response === q.answer ? "correct" : "incorrect";
 if (q.type === "short_answer") return typeof response !== "string" || !normalize(response) ? "unanswered" : q.answer.some(a => normalize(a) === normalize(response)) ? "correct" : "incorrect";
 if (q.type === "multiple_choice") return !Array.isArray(response) || !response.length ? "unanswered" : response.length === q.answer.length && q.answer.every(a => response.includes(a)) ? "correct" : "incorrect";
 if (!response || typeof response !== "object" || Array.isArray(response)) return "unanswered";
 const keys = q.type === "true_false" ? q.statements : q.left;
 if (keys.some(i => response[i.id] === undefined || response[i.id] === "")) return "unanswered";
 return keys.every(i => response[i.id] === q.answer[i.id]) ? "correct" : "incorrect";
}
