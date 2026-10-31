import { readdir, readFile, writeFile } from "node:fs/promises";
import { parseExam } from "../src/lib/exam";

async function main() {
 const names = (await readdir("exams")).filter(name => name.toLowerCase().endsWith(".md") && name.toLowerCase() !== "readme.md").sort();
 const ids = new Set<string>();
 const library = [];
 for (const name of names) {
  try {
   const bytes = await readFile(`exams/${name}`);
   if (bytes.length > 1048576) throw new Error("File exceeds the 1 MiB limit.");
   const source = new TextDecoder("utf-8", {fatal:true}).decode(bytes);
   const exam = parseExam(source);
   if (ids.has(exam.exam.id)) throw new Error(`Duplicate exam ID: ${exam.exam.id}`);
   ids.add(exam.exam.id);
   library.push({name, title:exam.exam.title, description:exam.exam.description, questions:exam.questions.length, source});
  } catch (error) { throw new Error(`${name}: ${error instanceof Error ? error.message : String(error)}`); }
 }
 await writeFile("public/library.json", JSON.stringify(library));
 console.log(`Built library with ${library.length} exams.`);
}
main().catch(error => { console.error(error.message); process.exitCode = 1; });
