import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { spawnSync } from "node:child_process";

test("library build publishes valid exams and rejects duplicate IDs", () => {
 const dir = mkdtempSync(join(tmpdir(), "cecs-library-"));
 try {
  mkdirSync(join(dir, "exams")); mkdirSync(join(dir, "public"));
  const sample = readFileSync("template.md");
  writeFileSync(join(dir, "exams", "example.md"), sample);
  const build = () => spawnSync(process.execPath, [resolve("node_modules/tsx/dist/cli.mjs"), resolve("scripts/build-library.ts")], {cwd:dir, encoding:"utf8"});
  assert.equal(build().status, 0);
  const library = JSON.parse(readFileSync(join(dir, "public", "library.json"), "utf8"));
  assert.equal(library.length, 1); assert.equal(library[0].questions, 5);
  writeFileSync(join(dir, "exams", "duplicate.md"), sample);
  const duplicate = build(); assert.notEqual(duplicate.status, 0); assert.match(duplicate.stderr, /Duplicate exam ID/);
 } finally { rmSync(dir, {recursive:true, force:true}); }
});
