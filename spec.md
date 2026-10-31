# md-mocktest: Product and technical specification

Status: Initial implementation deployed to Cloudflare Pages. This document defines the target behavior; see `README.md` for known gaps and verification limits.

Read these documents in the requested order: `spec.md`, `design.md`, `agent.md`, `template.md`.

## 1. Goal and language policy

Build a mock exam website that reads a local `.md` file, presents each question using its specified interaction, grades the answers, and reveals the answer key and explanations after submission.

Use Next.js, TypeScript, and Tailwind CSS with a static export for Cloudflare Pages. File processing and grading run entirely in the browser. Visitors open a hosted URL without running their own server.

The primary audience is students using question sets they prepare themselves or receive from instructors.

All project code and Markdown documentation must be written entirely in English. This includes identifiers, comments, test descriptions, configuration notes, validation errors, application UI labels, accessibility labels, and the template instructions. The application shell uses English.

Exam content is the explicit exception: imported exam titles, descriptions, prompts, instructions, choices, statements, accepted answers, and explanations may use any language or mix languages. Preserve Unicode text without translating, transliterating, or rejecting it based on language. Schema keys, question type names, and IDs retain their specified English/ASCII format. This language policy does not change the schema version.

The repository's `template.md` uses English instructions and English sample questions. Users may replace its exam content with any language. Render exam content with automatic text direction where appropriate, independently of the English application shell.

## 2. First-release scope

| Capability | Required behavior |
| --- | --- |
| Import `.md` | Select or drop one local exam file at a time. |
| Validate | Report the problem, field location, and how to fix it before starting. |
| Single choice | Select one answer using a radio group. |
| Multiple choice | Select several answers using checkboxes. |
| True/false | Answer each statement separately, with an initially unanswered state. |
| Matching | Draw connections or select a source and target, with a keyboard alternative. |
| Short answer | Compare text against accepted answers using the normalization rules. |
| Take an exam | Show one question at a time; navigate backward and skip questions. |
| Grade | Submit the whole attempt, then show scores, responses, correct answers, and explanations. |
| Resume | Recover the latest local exam and responses after refreshing the same browser. |
| Theme | Support Light/Dark themes with green correct-answer and red incorrect-answer feedback. |
| Example | Download `template.md` or open the same file as a sample exam. |

The first release excludes accounts, instructor administration, a database, external file uploads, multi-exam history, randomization, timers, AI question generation, immediate answer reveals, essay grading, and arbitrary Markdown that does not follow the schema.

Numerical limits in this document are product requirements, not measured performance claims.

## 3. Alternatives and decision

| Approach | Benefit | Tradeoff |
| --- | --- | --- |
| Next.js static export with browser grading (selected) | Matches the requested stack, works on Pages, and needs no backend. | Cannot conceal the answer key from the file owner. |
| Static React with Vite | A simple browser application setup. | Changes the requested Next.js stack. |
| Next.js with a backend | Supports cross-device records and server-side grading. | Adds infrastructure and changes the hosting scope. |

Use Markdown with an explicit YAML data block rather than guessing meaning from headings or lists. Do not use MDX: exam files are data and must not execute code.

## 4. Views and user flow

Use one URL, `/`, with React state controlling the views. An exam imported after build time must not require a dynamic route such as `/exam/[id]`.

```text
Import -> Validate -> Ready -> Taking -> Results
                       ^                   |
                       +------ Retry ------+
```

| View | Content and actions |
| --- | --- |
| Import | Text project name, file picker, drop target, template download, sample loader, and theme toggle. |
| Ready | Exam title, description, question count, total points, question types, and Start exam. |
| Taking | Exam title, question number, prompt, instructions, answer input, question navigator, Previous, Next, and Submit exam. |
| Submit dialog | Incomplete-question count, Continue answering, and Confirm submission. Incomplete attempts may be submitted. |
| Results | Total score, correct/incorrect/unanswered counts, All/Correct/Incorrect/Unanswered filters, responses, and explanations. |
| Restart dialog | Confirm clearing the current attempt to retry the same exam. |

Returning to import or replacing an exam with an existing session requires confirmation. An invalid replacement file must not overwrite the previous session. Canceling the file picker changes nothing.

Changing questions preserves answers, focuses the question heading, and brings the prompt into view. Submission locks the attempt. Retrying clears its responses and results while retaining the exam.

## 5. Markdown file format, version 1

Accept UTF-8 files with a case-insensitive `.md` extension. Require exactly one top-level fenced code block with language `yaml` and metadata `mocktest`, as shown in `template.md`. Markdown outside that block is author guidance and is not exam content.

Processing order: validate file size and UTF-8 -> parse Markdown AST -> locate `yaml mocktest` -> parse YAML -> validate schema and references -> produce a validated Exam. Do not implement the application parser using regular-expression extraction or MDX execution.

| Level | Field | Requirement |
| --- | --- | --- |
| Root | `schema_version` | Integer `1` only. |
| Root | `exam` | Exam metadata object. |
| Root | `questions` | Array containing 1 to 100 questions. |
| Exam | `id` | Exam ID string. |
| Exam | `title` | Nonempty string, in any language. |
| Exam | `description` | Nonempty string, in any language. |
| Every question | `id`, `type` | Unique question ID within the exam and a supported type. |
| Every question | `points` | Integer from 1 to 100. |
| Every question | `prompt` | Nonempty Markdown string, in any language. |
| Every question | `instructions` | Nonempty answer instructions, in any language. |
| Every question | `explanation` | Nonempty Markdown explanation, in any language. |

IDs at every level contain 1 to 64 characters matching `[A-Za-z0-9][A-Za-z0-9_-]*`. Reserved names `__proto__`, `constructor`, and `prototype` are forbidden. Item IDs must be unique within their list. Answers reference IDs, not positions or display letters assigned by the UI.

| `type` | Additional data | Answer key |
| --- | --- | --- |
| `single_choice` | `options: [{id, text}]`, containing 2 to 10 items. | `answer: string`, referencing one option ID. |
| `multiple_choice` | The same `options` structure. | `answer: string[]`, nonempty, unique, and referencing existing options. |
| `true_false` | `statements: [{id, text}]`, containing 1 to 10 items. | `answer: {statementId: boolean}`, covering every statement with no extra keys. |
| `matching` | `left` and `right` lists of `{id, text}`, each containing 2 to 10 items; right count must be at least left count. | `answer: {leftId: rightId}`, covering every left item, referencing valid right items, and not reusing a target. |
| `short_answer` | No `options` or fields belonging to other types. | `answer: string[]`, containing 1 to 10 accepted answers in any language. |

Unknown fields, including fields from another question type, are validation errors. General text fields have a maximum of 10,000 Unicode code points. IDs follow their separate limit. Each accepted short answer and each user short-answer response has a maximum of 200 Unicode code points. Accepted answers must be nonempty and unique after normalization.

All documented fields are required. Do not silently supply defaults that change an exam's meaning. Item `text` and other required textual fields must not contain only whitespace. Non-English characters are allowed in content fields, not in IDs or schema keys.

### Validation boundaries

- Reject files larger than 1 MiB (1,048,576 bytes) before reading. Do not rely only on MIME type.
- Accept UTF-8 BOM and CRLF; reject invalid UTF-8 byte sequences.
- Use YAML 1.2 core schema. Reject custom tags, anchors, aliases, merge keys, and duplicate mapping keys.
- Require one YAML document with an object root. Reject multiple documents and incorrect value types.
- Reject `__proto__`, `constructor`, and `prototype` keys at every level. Use Map or safe objects for ID-keyed data.
- Limit Markdown/YAML nesting to 20 levels. Check before conversion to objects and when restoring stored data.
- Use English error messages and field paths such as `questions[2].answer`. Include original file line/column offsets when available.
- Validate the entire exam before allowing it to start. Never start using only the valid subset.

### Markdown rendering

Allow paragraphs, emphasis, strong text, lists, blockquotes, inline code, and code blocks in `prompt` and `explanation` only. Treat `instructions`, item `text`, `title`, and `description` as plain text. Preserve the content's language and apply appropriate automatic direction to text containers, inputs, and mixed-language content. Keep code blocks left-to-right.

Do not render raw HTML, scripts, iframes, images, MDX, event handlers, or file-provided styles. Render embedded headings as ordinary text to preserve the application's heading hierarchy. Links must be absolute `https:` or `http:` URLs validated with the URL parser. Reject other schemes and relative URLs. Open external links with `rel="noopener noreferrer"`. Do not automatically fetch resources referenced by exam content.

Render inline and display LaTeX math with remark-math and KaTeX in prompts and explanations. Keep wide display equations readable on narrow screens with horizontal overflow. The first release does not render images, audio, video, or GFM tables.

## 6. Answers and grading

Award all points for a fully correct question, otherwise zero. There are no penalties or partial points. Total available points are the sum of `points`. Correct-question counts refer to questions, not individual statements or matched pairs.

| Type | Correct when | Complete when |
| --- | --- | --- |
| Single choice | Selected ID equals the answer ID. | One option is selected. |
| Multiple choice | Selected and expected ID sets are equal, regardless of order. | At least one option is selected. Do not reveal the expected selection count. |
| True/false | Every statement matches its expected boolean. | Every statement has a boolean response; `false` is an answer, not a missing value. |
| Matching | Every source maps to its expected target. | Every source has a unique valid target. |
| Short answer | Normalized response equals at least one normalized accepted answer. | Normalized response is nonempty. |

Normalize short answers in this order: Unicode NFC -> trim -> collapse consecutive Unicode whitespace into one ASCII space -> JavaScript `toLowerCase()`. Apply the same rules to accepted answers and responses. Do not remove diacritics, punctuation, translate words, convert numeral systems, or use semantic/fuzzy matching. Case conversion is JavaScript's default, not locale-specific grading.

Each question has one status: `correct`, `incorrect`, or `unanswered`. An incomplete question is `unanswered` and earns zero, even if some parts have responses; still display those responses. A complete but nonmatching response is `incorrect` and earns zero. A nonempty, incomplete selection set in multiple choice is complete for submission purposes but incorrect if it differs from the key.

Display actual points as `earned / total` and a percentage with one decimal place. Do not invent a passing threshold. Show full answer text, not just IDs.

In after-submission mode, do not render correct answers or explanations before submission. In immediate-feedback mode, reveal the answer and explanation when a question is checked and lock that answer. Single choice, true/false, and matching are checked when complete; multiple choice and short answers use a Check answer button. The original file and browser memory still contain the key; this is a practice tool, not a secure examination system.

## 7. Matching behavior

- On desktop, show two columns with SVG lines representing the current pairs. Lines are presentation, not separate controls.
- Use Pointer Events for dragging from source to target with mouse, pen, or touch. Other text areas must remain scrollable.
- Also support selecting a source button followed by a target button using click, Tab, Enter, or Space.
- On narrow screens, show each source with a native target `<select>` and a textual pair summary instead of squeezing two columns.
- Every method edits the same answer model. Resizing must preserve answers and scores.
- A target can be used once. Assigning an occupied target moves it to the new source, clears the old pair, and announces the move in English while preserving the original item text.
- Selecting an existing pair again removes it. The mobile selection list can return to its empty option. Escape cancels an unfinished selection or drag.
- Dropping outside a target or receiving `pointercancel` must preserve the answer. Clean up pointer capture.
- Recalculate SVG geometry after wrapping, resizing, or scrolling. Provide textual pair summaries for screen readers.
- Preserve file order; do not randomize. The sample's targets must not accidentally reveal all answers through matching row positions.

## 8. State and local persistence

View states are `import`, `validating`, `ready`, `taking`, and `results`. Validation errors belong to the importing view and do not replace the existing session.

Store one active session under `localStorage` key `md-mocktest.session.v1`: storage version, validated Exam, SHA-256 of the original file bytes, responses keyed by question ID, checked question IDs and feedback mode, current question ID, ready/taking/submitted status, and ISO start/submission timestamps.

Use the fingerprint rather than the exam ID alone: an author may reuse an ID after editing the file. File schema version and storage version are separate.

- Access browser APIs after client mount. Initial HTML must match before hydration.
- Save one snapshot with `setItem` on start, navigation, answer changes, feedback selection, and submission. Do not delete the previous snapshot before writing.
- Update short-answer React state immediately and persist each edit within the specified size limits.
- Validate restored snapshots, references, and response shapes before offering to resume.
- When a valid session exists, show its actual summary and offer Resume exam or View latest results, plus Start a new exam. Do not resume automatically.
- For submitted sessions, recompute results from the exam and responses; do not trust stored scores.
- If storage is unavailable or full, allow memory-only use and show an English warning that recovery may be unavailable after closing the page.
- If a snapshot is corrupt or unsupported, explain and offer an explicit clear action. Do not silently delete it.
- Store theme separately under `md-mocktest.theme`. Restarting or clearing an exam must not clear the theme.
- Do not send exam files or responses over the network. Include no analytics or third-party runtime scripts.

Storage is best effort on the same device/browser, with no cross-device sync or recovery guarantee after browser data is cleared. Local storage can be edited and is not evidence of an official exam result.

## 9. Empty, loading, and error states

| Situation | Message and recovery |
| --- | --- |
| No exam | Explain the required `.md` format and offer file selection, template download, and sample exam. |
| Reading/validating | Show Validating exam file, prevent concurrent imports, and retain the existing session. |
| Invalid file | Show English errors with field locations and offer another file selection. |
| Sample load failure | Show Sample exam could not be loaded; offer retry or a local file. |
| Restoring | Show Checking saved session. |
| Storage failure | Distinguish corrupt data from a failed save. Never claim persistence succeeded if it failed. |
| Empty results filter | Show No questions match this filter and offer Show all questions. |
| JavaScript disabled | Explain through `<noscript>` that JavaScript is required for local file reading and exams. |

Use appropriate `role="status"` for loading and `role="alert"` for important errors, without repeated announcements on every keystroke. Application messages are English even when the exam content uses another language.

## 10. Proposed code structure after approval

The following is a file plan, not existing application code.

```text
md-mocktest/
  spec.md
  design.md
  agent.md
  template.md
  package.json
  package-lock.json
  next.config.ts
  tsconfig.json
  postcss.config.mjs
  eslint.config.mjs
  src/
    app/
      layout.tsx              # English shell, title, and document metadata
      page.tsx                # Static / route mounting the client application
      globals.css             # Tailwind, themes, focus, and reduced motion
    components/
      mock-test-app.tsx        # View transitions and composition
      import-exam.tsx         # File input, ready view, and resume actions
      exam-runner.tsx         # Question navigation and submission
      question-input.tsx      # Input selected by question union type
      matching-input.tsx      # Drag, click, select, and state-derived lines
      exam-results.tsx        # Summary, filters, responses, and explanations
      confirm-dialog.tsx      # Submit, retry, and replacement confirmations
      theme-toggle.tsx
    lib/
      exam-schema.ts          # Shared types, schema, and reference validation
      parse-exam.ts           # Markdown AST to YAML to validated Exam
      grade-exam.ts           # Pure Exam + responses to results function
      session-storage.ts      # Snapshot validation, persistence, fingerprint
  public/
    template.md               # Exact copy of the root template
  tests/
    parse-exam.test.ts
    grade-exam.test.ts
    session-storage.test.ts
    exam-flow.spec.ts         # Browser flow and keyboard/touch matching
```

Extract components only when they clarify a responsibility. Use discriminated unions for answer types rather than converting every response to a string. Use system fonts with script fallbacks as described in `design.md`; no font asset is required for the first release.

## 11. Proposed tools and dependencies

| Area | Choice |
| --- | --- |
| Framework | Next.js App Router, React, and TypeScript strict mode. |
| Styling | Tailwind CSS, following the installed major version's configuration. |
| Markdown parsing | `unified` and `remark-parse` for the AST. |
| YAML | `yaml` with the restrictions in section 5. |
| Runtime schema | `zod` for files and snapshots, with reference checks. |
| Markdown rendering | `react-markdown` with the allowed-node policy and no raw HTML plugin. |
| State | React state/reducer as appropriate; no global state library. |
| Matching lines | SVG, Pointer Events, and ResizeObserver; no automatic drag-library addition. |
| Animation | CSS transitions; no animation library. |
| Logic checks | Vitest. |
| Browser checks | Playwright. |

Select compatible stable versions when implementation starts, record exact versions and a lockfile, and use a Node version supported by the selected Next.js version. This document does not claim any dependency has been installed or any application build has passed.

## 12. Static build and Cloudflare Pages

Configure `output: 'export'` and `trailingSlash: true`. Do not use runtime API routes, Server Actions, SSR, or default image optimization. All work triggered by importing an exam runs in the client.

After implementation, `npm run build` must call `next build` and generate `out/`. Use the Cloudflare Pages Next.js (Static HTML Export) preset, production branch `main`, and output directory `out`. Do not run `next start` on Pages or add a Next-on-Workers adapter for this static project.

Keep build and deploy separate. Local builds must not publish anything. Linking GitHub with Pages may cause pushes to trigger deployments, so obtain the user's approval before linking or uploading. The current phase prepares documentation in a local repository without commits.

Sources checked on October 31, 2026:

- [Next.js: Static exports](https://nextjs.org/docs/app/guides/static-exports)
- [Cloudflare Pages: Deploy a static Next.js site](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/)
- [Cloudflare Pages: Build configuration](https://developers.cloudflare.com/pages/configuration/build-configuration/)

## 13. Implementation acceptance criteria

1. Importing root `template.md` produces five questions covering five types, with 10 available points and no validation errors.
2. Answering every question correctly gives 10/10; all-wrong and all-blank attempts give 0/10, with appropriate statuses.
3. Partial or extra multiple-choice selections earn zero for that question. Selection order does not affect the result.
4. A true/false response of `false` is stored as an answer. Missing any statement makes the question unanswered.
5. Drag, click, keyboard, and select matching produce identical state and scores. Test occupied targets, reassignment, clearing, cancellation, and resizing.
6. The template accepts `  FIRST   IN FIRST OUT  ` as a short answer and rejects `FIFO!`.
7. Malformed files, incorrect roots/versions, unknown fields, duplicate keys/IDs, missing references/answers, aliases/tags, invalid UTF-8, and size/depth violations cannot start an exam or overwrite a session.
8. Unsafe HTML and links do not execute or navigate to forbidden destinations. No request uploads an exam or responses.
9. Answers survive question changes and valid refresh/resume flows. Submitted results can be recovered. Corrupt storage must not crash the application.
10. Canceling dialogs preserves data. Submission locks the attempt. Retrying clears the attempt while retaining the exam.
11. The sample loader uses `public/template.md`, which matches the root file byte for byte. Do not hardcode a separate example.
12. The production build succeeds and `out/` works through a static HTTP server without a Next.js runtime server.
13. Every control passes the click-through checklist in `design.md`, with no application console errors in both themes, the required viewport range, and keyboard-only use.
14. Project-authored code, Markdown, UI copy, comments, and validation messages are English. Import, render, save, restore, and grade multilingual and mixed-language exam content without translation or an English-only content filter. Include non-Latin and right-to-left fixtures while retaining ASCII schema keys and IDs.

The acceptance criteria above remain the target; implementation and verification gaps are recorded in `README.md`.
