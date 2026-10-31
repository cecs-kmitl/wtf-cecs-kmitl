# md-mocktest: Agent handoff

Status: Instructions for development after the owner approves the specification. No application implementation exists yet.

## 1. Reading order and language policy

Read `spec.md` -> `design.md` -> `agent.md` -> `template.md`. The specification defines behavior, the design defines presentation, and the template demonstrates the data contract.

All project code and Markdown must be 100% English, including identifiers, comments, test descriptions, documentation, configuration notes, UI copy, validation errors, and accessibility labels. The English template guide and sample exam follow the same rule.

Exam content is the explicit exception. User-authored exam files and exam-content fixtures may use any language or mixed languages. Preserve their titles, descriptions, prompts, instructions, options, statements, accepted answers, explanations, and user responses. Do not translate, transliterate, or restrict content to English. Schema keys, question type values, and IDs retain the ASCII format defined in `spec.md`. Keep English developer explanations outside multilingual fixture payloads.

Use `agent.md` as requested. This is not the `AGENTS.md` filename that Codex automatically reads for repository instructions. Developers must explicitly read this file. If automatic loading is wanted, add an `AGENTS.md` pointer after confirming that scope with the owner.

The owner's latest instruction takes priority if requirements conflict. Do not silently change schema semantics or grading. Record changes that affect existing exam files in the specification.

## 2. Authorized documentation scope

- Create the four requested documents and a local Git repository named `md-mocktest`.
- Do not create a remote repository, push, open a pull request, create a Pages project, link GitHub with Pages, or deploy before approval. The owner requested written structure first and approval before posting.
- Do not scaffold Next.js, install application dependencies, or start implementation during this documentation phase.
- Do not add files from sibling course directories to this repository.

After GitHub approval, use a private repository unless the owner specifies another visibility. The proposed name is `md-mocktest`; if unavailable, use `md-mocktest-web` and report the actual URL. Do not invent a repository link before creation.

## 3. Requirements that must not drift

- Next.js, TypeScript strict mode, Tailwind, static export, and browser-only exam processing.
- A single `/` page; no runtime dynamic exam routes for newly imported files.
- Schema version 1 and exactly one `yaml mocktest` block; no guessing at arbitrary Markdown.
- Five question types and complete non-drag matching alternatives in the first release.
- All-or-nothing points per question. Incomplete true/false or matching responses are unanswered and earn zero. A nonempty multiple-choice selection that differs from the expected set is incorrect.
- English project code, Markdown, application labels, errors, and accessibility copy; unrestricted Unicode languages for imported exam content.
- No accent color outside grayscale. Do not rely on red/green for results.
- Do not render answer keys before submission or claim that file owners cannot inspect them.
- No backend, external upload, accounts, telemetry, AI generation, or speculative dependencies.
- Every theme and control works, including keyboard operation.

## 4. Code responsibilities

| Module | Input -> Output | Boundary |
| --- | --- | --- |
| Parser | File bytes/Markdown -> validated Exam or errors. | Invalid imports must not overwrite a session. |
| Schema | Unknown data -> typed Exam/Session. | Validate types, limits, and references; do not cast around validation. |
| Grader | Exam + responses -> per-question results and totals. | Pure function; no DOM/storage access or trust in stored scores. |
| Session storage | Validated snapshot -> save/load result. | Handle JSON/storage failures and separate storage/schema versions. |
| Matching input | Existing pairs + action -> updated pairs. | Drag/click/keyboard/select share one model. |
| Views | State -> appropriate controls. | Confirm before clearing; hide answer keys before submission. |

Start with the proposed structure in the specification. Do not add a generic engine, plugin system, service layer, or native API wrapper without a concrete responsibility.

## 5. Development order after approval

1. Check compatible stable versions and Node support. Set up static Next.js, TypeScript strict mode, Tailwind, and the lockfile.
2. Implement schema/parser with tests for the template and rejected inputs.
3. Implement the grader with correct, incorrect, blank, partial, and normalization cases.
4. Build import/ready/taking with native controls, then complete all matching input methods.
5. Build results, confirmation dialogs, and session recovery using shared validation.
6. Apply grayscale themes, system typography with script fallbacks, responsive layout, and CSS transitions from the design.
7. Copy the root template into public, verify byte equality, and test browser flows on the static output, including multilingual content.
8. Present actual files and verification evidence before any external action whose approval is still pending.

## 6. Required implementation verification

- Parser unit tests: all five valid types, schema version, unknown fields, duplicate keys/IDs, references, boolean false, size/depth limits, UTF-8, aliases/tags, multiple YAML documents, and unrelated Markdown code blocks.
- Grader unit tests: 10/10, 0/10, unanswered, partial, multiple-choice order, extra selections, false versus missing, matching maps, and short-answer normalization.
- Storage unit tests: corrupt snapshots, unsupported versions, invalid references, unavailable/full storage, and submitted-score recomputation.
- Language fixtures: non-Latin, mixed-language, combining-character, and right-to-left exam content. Exercise parse, render, text input, normalization, save, restore, and result display without translation. Keep IDs ASCII and English test descriptions outside fixture content.
- Browser flow: import -> answer all types -> navigate -> refresh/resume -> submit -> filter -> retry, including keyboard matching and target reassignment.
- Run actual package scripts for typecheck, lint, unit tests, and production build. Do not report nonexistent scripts as passing.
- Serve `out/` using a temporary static HTTP server. Check both themes, design viewports, and application console errors without a Next.js runtime server.
- Record every click-through row from design section 9, focus/keyboard behavior, mobile overflow, and reduced motion. State what was not checked.
- Report performance scores only when measured. Static inspection does not prove Lighthouse results or accessibility conformance.

## 7. antislop in subsequent work

The owner selected DURING for this session. Use `design.md` as direction. Do not assume new assets or colors. Developers with antislop should read the core and relevant UI/human/layoutmobile/copywriting instructions. No skill installation or global preference changes are required by this document.

DURING is a session choice, not a saved global preference. A new development session must resolve the mode according to that session's tools and owner instructions.

## 8. Documentation verification record

Documentation checks, including the English revision, ran on October 31, 2026 using Python's standard library and Ruby/Psych without installing application dependencies. The revision preserves the schema, IDs, points, and answer keys from the original template. Palette values are unchanged.

| Check | Evidence |
| --- | --- |
| Requested files | Four UTF-8 documents with balanced code fences. |
| Language | PASS: All four current Markdown files contain English/ASCII text. Template instructions and samples are English; imported exam content is explicitly exempt. |
| Unicode sample data | PASS: Five in-memory YAML round trips preserved non-Latin, mixed-language, right-to-left, and combining-character content. This does not verify the application. |
| Document hygiene | No em dashes or unfinished placeholders. |
| Template | One readable YAML data block, no duplicate keys/aliases/anchors, five types, and valid answer references. |
| Sample answers | Independent reference arithmetic: 10/10 all-correct, 0/10 all-wrong, and 0/10 all-blank. |
| Edge fixtures | Reordered multiple-choice selections preserve points; partial/extra selections do not earn points for that question; false is a real boolean. |
| Short answer | The whitespace/case variant of the full name passes; FIFO! does not. |
| Light contrast | Text/background minimum 7.49:1, action 17.93:1, essential control boundary minimum 4.35:1. |
| Dark contrast | Text/background minimum 9.07:1, action 16.44:1, essential control boundary minimum 4.62:1. |

Contrast uses specified text/background and text/surface tokens with the WCAG formula, excluding decorative dividers. It is not a DOM or rendering test. Reference grading checks sample data, not the unimplemented application grader.

No Next.js build, browser click-through, multilingual application rendering, mobile rendering, or deployment has been performed. Development and publishing still await approval.
