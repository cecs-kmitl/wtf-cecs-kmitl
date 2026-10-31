# md-mocktest: Design direction

Status: Design requirements for approval, not a running or browser-tested interface.

## 1. Design Read

Reading this as: a practice exam tool for students, using the visual language of printed question sheets and answer fields in black, white, and gray, with ENERGY 1 / RHYTHM 1 / MOTION 1.

The owner's direction is minimal, functional, grayscale, with Light/Dark themes and small animations. Dial values are design requirements, not measured scores.

The character is an organized study desk. Questions take priority. Repeated question numbers, answer fields, and the relationship between prompts and explanations establish identity without illustrations or marketing sections.

All project documentation and authored interface copy are English. Exam content can use any language. The English shell must not translate imported content or force it into left-to-right layout.

## 2. Reasons for major decisions

| Decision | Reason |
| --- | --- |
| Grayscale only | Matches the owner's palette and keeps attention on the question. |
| Working Light/Dark themes | Lets students choose a suitable reading surface for their environment. |
| One question at a time | Limits competing content while numbered navigation permits skipping. |
| Prominent numbers and consistent alignment | Keeps prompts, instructions, and navigation predictable. |
| Inverted surfaces and weight as the accent | Identifies the primary action and current question without another color. |
| Bounded reading width | Prevents long lines in prompts and explanations. |
| Separators only between distinct functions | Distinguishes navigation, question content, and results without nested cards. |
| System UI fonts with script fallbacks | Keeps English controls familiar and lets imported content use available fonts for its script. |
| Tighter spacing within answers than between sections | Shows grouping while preserving comfortable targets. |
| No generated logo, illustration, or icon library | Text labels and native controls already communicate the required actions. |
| Motion only for control feedback | Confirms interaction without interrupting reading or moving content. |

Show `md-mocktest` as ordinary text. Do not create a logo or other visual asset in this phase.

## 3. Colors and theme tokens

Use CSS custom properties referenced through Tailwind. Avoid scattered component color literals. Correct, incorrect, and unanswered states require words and structural cues, never red/green or grayscale differences alone.

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `background` | `#FAFAFA` | `#111111` | Page background. |
| `surface` | `#FFFFFF` | `#1C1C1C` | Answer controls and dialogs. |
| `text` | `#171717` | `#F5F5F5` | Prompts, labels, and primary text. |
| `muted` | `#525252` | `#BDBDBD` | Secondary explanations and metadata. |
| `control-border` | `#767676` | `#858585` | Input boundaries needed to identify controls. |
| `divider` | `#D4D4D4` | `#404040` | Decorative separators, never the sole control boundary. |
| `action-bg` | `#171717` | `#F5F5F5` | Primary actions and the current question number. |
| `action-text` | `#FFFFFF` | `#171717` | Text on the action surface. |
| `focus` | `#171717` | `#F5F5F5` | Focus outline with an offset from the control surface. |

Honor a saved theme choice before `prefers-color-scheme`. Without a saved preference, use the system theme. Provide a working toggle and persist its choice. Set `color-scheme` so native controls match. Apply the initial theme before paint with a small first-party script that handles storage errors, or an equivalent approach without hydration mismatches.

Do not lower opacity until text becomes unreadable. Disabled controls use native disabled behavior and distinguishable styling, with explanatory text where needed.

## 4. Typography, language, and spacing

- Use `ui-sans-serif, system-ui, sans-serif` for the English application shell and allow browser font fallback for exam scripts. Do not fetch third-party fonts at runtime. Rendering depends on fonts available on the device; do not claim coverage of every Unicode glyph.
- Body text and answers start at `1rem` with approximately `1.7` line-height to accommodate varied scripts. Headings use `clamp()` around `1.5rem` to `2rem` instead of oversized display type.
- Question numbers and scores use tabular numerals without imposing monospace on the page.
- Limit prompt reading width to approximately `44rem`, adapting for code and matching. Do not fix text container heights.
- Use spacing steps of 4, 8, 12, 16, 24, 32, and 48 CSS pixels according to relationships. Begin page gutters at 16px and expand when space permits.
- Provide at least 44px targets in each axis for controls and at least 8px between adjacent targets. Long answer text wraps.
- Use 6px control radii and 10px dialog radii. Radios remain circular because of their function. Do not make every element pill-shaped.
- The document shell is `lang="en"`. Apply `dir="auto"` to exam text, answer inputs, and relevant item labels without reversing the English navigation. Keep code blocks left-to-right.
- Preserve mixed-language text and combining marks. Do not use an English-only regular expression to validate content. Use logical CSS properties where alignment or spacing depends on text direction.
- No content translation or automatic language detection service is required. Do not assign guessed language tags to imported passages.

## 5. View composition

### Import and Ready

Place the text project name and theme toggle at the top. The main area briefly explains the required `.md` format, followed by Choose exam file and a dashed drop boundary that identifies the actual drop target.

Download template.md retrieves the real file. Open sample exam loads that same file. A valid import shows the title, question count, total points, and Start exam, without a marketing page in between.

If a session can be restored, show its real exam title and progress, then Resume exam or View latest results, plus Choose another exam. Do not substitute invented progress numbers.

### Taking

```text
md-mocktest                                  Theme: Light/Dark
Exam title

Question navigator       Current question / Total questions
and progress             Prompt
                         Instructions
                         Question-specific answer input

                                                  Previous     Next        Submit exam
```

This is a proposed wireframe, not an implementation screenshot. Completed question buttons have a text/symbol cue and accessible name. The current question uses an inverted surface and stronger boundary.

The question is the focal point. Hide scores until submission. Each true/false statement uses a radio group with neither answer initially selected. User-authored instructions and choices remain in their original language; surrounding actions remain English.

### Results

Lead with the actual score and Submitted, followed by correct, incorrect, and unanswered counts. Filters are buttons with clear state. Each question shows its prompt, instructions, response, correct answer, explanation, and awarded points.

Use the English status labels Correct, Incorrect, and Incomplete. Preserve the original language of responses and explanations. Show both answered and missing parts of incomplete questions. Retry this exam opens a confirmation before clearing the attempt.

### Dialogs

Prefer native `<dialog>` when supported by target browsers. Include a title, explanation, confirmation, and cancellation action. Initially focus the choice that preserves data. Escape and Cancel close the dialog. Keep Tab inside an open modal and return focus to its trigger when closing.

## 6. Responsive behavior

These are starting ranges. Adjust breakpoints if real content does not fit.

| Width | Layout |
| --- | --- |
| Below 640px | One column. Question navigation is inside `<details>` labeled Question list. Navigation actions wrap. Matching uses one source and target select per row. |
| 640px to 1023px | Bounded single-column questions with a wrapping navigator above. Use two-column matching only where its content fits. |
| At least 1024px | Approximately 14rem navigation sidebar and a question area within a 76rem maximum container. Use two-column matching with connecting lines. |

Do not use a fixed bottom bar in the first release. Keep actions in document flow so they cannot cover answers or the mobile keyboard. Use `min-width: 0`, wrapping for long text and code, and content-driven height. Do not hide overflow to conceal missing content.

Check 320, 375, 768, 1024, and 1440px, 200% text zoom, and continuous resizing between them. Include long unbroken text, non-Latin scripts, mixed-direction passages, and matching items. Switch to select-based matching whenever two columns are not readable.

## 7. Interaction and animation

MOTION 1: use 100ms to 150ms transitions only for control backgrounds/borders on hover, press, and selection. Do not add scroll reveals, parallax, floating, smooth auto-scrolling, looping animation, or question transitions that delay answering.

Disable nonessential transitions under `prefers-reduced-motion: reduce`. Loading and results must not depend on animation.

Use native `<button>`, `<a href>`, `<input>`, `<select>`, `<fieldset>`, and `<legend>` according to their roles. Radio/checkbox labels activate their controls. Actions are buttons, not clickable divs.

Set pointer cursors in the base layer for enabled buttons, links, selects, summaries, radio/checkbox controls, and their labels. Disabled controls use `not-allowed`. Every control needs observable hover, active, focus, and disabled states with cues beyond color alone.

## 8. Accessibility and content states

- Use `<html lang="en">`, a title identifying md-mocktest and its current view, header/main/footer landmarks, navigation for the question list, and a skip link to main.
- Each view has one h1 and ordered subheadings. Imported Markdown must not break that hierarchy.
- Require text contrast of at least 4.5:1, and at least 3:1 for qualifying large text and essential control/focus boundaries in both themes.
- Use focus outlines at least 2px thick with an offset visible around inverted buttons. Never remove the outline without a replacement.
- Every field has a visible label and radio groups have legends. Any future decorative icon must be hidden from assistive technology.
- Matching supports keyboard and selects. SVG lines are `aria-hidden`; textual summaries expose the selected pairs.
- Import, restore, and results-filter empty/loading/error states follow `spec.md` section 9.
- Theme controls have English accessible names identifying the current theme and action. Tooltips are not the only explanation.
- Keep application accessibility copy in English and preserve exam content in its source language. Do not falsely label all imported text as English.
- Do not disable pinch zoom or set `maximum-scale=1` or `user-scalable=no`.

## 9. Required implementation click-through record

Exercise Light/Dark themes with mouse and keyboard-only input, plus touch for matching. Record actual outcomes and console errors. This document is not evidence of a browser test.

| Control or flow | Required observation |
| --- | --- |
| File picker / drop / picker cancellation | Read the correct file; canceling preserves the session. |
| Template download | Download matches the root template byte for byte. |
| Open sample / failed load / retry | Load the real sample file and recover from loading errors. |
| Start / Previous / Next / question numbers | Navigate correctly, preserve responses, and manage focus. |
| Radio / checkbox / true-false / short answer | Update the correct response type without revealing the key. |
| Drag / click / keyboard / select matching | Identical state, including occupied targets, reassignment, clearing, cancellation, and resize. |
| Feedback mode | Reveal an answer and explanation after a question is checked, or wait until submission. |
| Submit / cancel / confirm | Report incomplete questions, submit, lock the attempt, and grade correctly. |
| Results filters / empty filter / Show all | Show the correct subset and recover from an empty filter. |
| Retry / replace exam / cancel | Confirm before clearing; preserve data on cancellation or invalid replacement. |
| Refresh / resume / latest results / corrupt storage | Recover valid data and provide an exit when recovery fails. |
| Theme / reload / system preference | Style every component correctly, persist the choice, and avoid hydration warnings. |
| Every dialog | Open, close, handle Escape, contain focus, and return focus correctly. |
| Multilingual content | Preserve original text through rendering, input, restore, and results; handle direction and long text without replacing English application labels. |

## 10. antislop Delivery Gate for documents

This review covers design documents and the template, not an implemented interface. PASS indicates verified document content or requirements. Runtime behavior remains N/A until implementation. Do not present this report as proof of a successful build, browser click-through, or accessibility conformance.

### Hard Gate

| Rule | Status and document evidence |
| --- | --- |
| R-02 | PASS: All four authored documents omit em dashes. |
| R-03 | PASS for specification: Section 6 defines reflow, targets, and viewport checks. Runtime N/A. |
| R-17 | PASS: Numbers are requirements or explicitly labeled sample exam data, not product statistics. |
| R-18 | PASS: No testimonials or fictional people. |
| R-23 | PASS: The owner requested the page structure; the name is plain text and no assets were generated. |
| R-24 | PASS for specification: The single route and required controls are described. Runtime N/A. |
| R-25 | PASS for palette: Token pairings were checked with the WCAG formula. Rendered UI N/A. |
| R-26 | PASS for specification: Section 9 associates controls with observable outcomes. Runtime N/A. |
| R-27 | PASS for specification: spec section 9 covers empty/loading/error states. Runtime N/A. |
| R-28 | PASS: No invented FAQ. |
| R-32 | PASS for specification: Sections 7 to 9 require keyboard/focus behavior. Runtime N/A. |
| R-33 | PASS: This phase edits Markdown directly and adds no source/CSS patch scripts. |
| R-34 | PASS for specification: Tokens and checks cover both themes. Runtime N/A. |
| R-35 | PASS for document scope: Check document consistency and the template; no application build or click-through is claimed. |
| R-36 | PASS: No fabricated performance, security, compliance, or measurement claims. |
| R-37 | PASS: Section 1 records the owner's direction and the Design Read. |
| R-38 | PASS: The template is labeled as sample data and proposed code is labeled as a plan. |
| R-39 | PASS for specification: Sections 7 and 8 require semantics, cursors, labels, states, and reduced motion. Runtime N/A. |
| R-40 | PASS for specification: No media or third-party runtime scripts are in scope; no performance score is reported. Runtime N/A. |

### Purpose-Gate

| Rule | Status and reason |
| --- | --- |
| R-01 | PASS: Grayscale follows the brief; no gradients or glow. |
| R-04 | PASS: Text and native controls replace generic feature icons. |
| R-06 | PASS: System typography and script fallbacks serve readable English controls and multilingual exams. |
| R-07 | PASS: No decorative background grid or pattern. |
| R-08 | PASS: Buttons name actions without decorative arrows. |
| R-09 | PASS: No decorative capsule badges. |
| R-10 | PASS: No glassmorphism. |
| R-12 | PASS: Flat surfaces and the dialog top layer avoid unnecessary shadows. |
| R-13 | PASS: No glow. |
| R-14 | PASS: No marketing feature-card grid. |
| R-19 | PASS: Section 7 limits motion to purposeful control feedback. |
| R-22 | PASS: No unrelated illustrations. |

### Liveliness

| Check | Status and evidence |
| --- | --- |
| Dials and consistency | PASS: Design Read declares 1/1/1 and interaction requirements match. |
| Focal point | PASS for specification: Import emphasizes file selection, Taking the prompt, Results the actual score. |
| Whitespace | PASS for specification: Section 4 distinguishes within-answer spacing from section separation. |
| Accent | PASS for specification: Inverted surfaces emphasize the primary action and current question. |
| Identity motif | PASS for specification: Question numbering and answer fields continue into explanations. |
| Design Read | PASS: Section 1 states the interpretation before interface requirements. |

### Craftsmanship and Quality Locks

| Rule | Status and evidence |
| --- | --- |
| C-1 / R-31 | PASS: Section 2 records reasons for major decisions. |
| C-2 | PASS for specification: Section 9 defines control outcomes. Runtime N/A. |
| C-3 / R-05 | PASS: Every view serves the exam flow, without template marketing sections. |
| C-4 | PASS for specification: States, themes, responsive behavior, languages, and keyboard input are covered. Runtime N/A. |
| C-5 | PASS: No fabricated customer counts or evidence. |
| R-11 | PASS: Radii follow control/dialog roles, with circular radios. |
| R-15 | PASS: Actions explicitly name file selection, starting, submission, or retrying. |
| R-16 | PASS: Copy describes exam behavior without marketing buzzwords. |
| R-20 | PASS for direction: Question-sheet structure links prompts and explanations. Rendered identity N/A. |
| R-21 | PASS for specification: A working theme toggle is mandatory. Runtime N/A. |
| R-29 | PASS: All color tokens are grayscale. |
| R-30 | PASS: No requirement to clone another product. |

Document checks and measured token contrast are recorded in `agent.md`. Application checks remain unperformed until implementation.
