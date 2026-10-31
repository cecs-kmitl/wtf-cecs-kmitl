import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { parseExam, grade } from "../src/lib/exam";
const source = readFileSync("template.md", "utf8");
test("sample parses and grades every question", () => {
 const exam = parseExam(source);
 assert.equal(exam.questions.length, 5);
 for (const q of exam.questions) { assert.equal(grade(q, q.type === "short_answer" ? q.answer[0] : q.answer), "correct"); assert.equal(grade(q, undefined), "unanswered"); }
 assert.equal(grade(exam.questions[4], "  FIRST   IN FIRST OUT  "), "correct");
 assert.equal(grade(exam.questions[4], "FIFO!"), "incorrect");
});
test("rejects duplicate keys and aliases", () => {
 assert.throws(() => parseExam(source.replace("schema_version: 1", "schema_version: 1\nschema_version: 1")));
 assert.throws(() => parseExam(source.replace("id: example-computing-basics", "id: &ref example-computing-basics")));
});
test("accepts multilingual content", () => {
 const exam = parseExam(source.replace("Sample: Computing basics", "ข้อสอบ العربية 日本語"));
 assert.equal(exam.exam.title, "ข้อสอบ العربية 日本語");
});
