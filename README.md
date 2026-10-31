# CECS Mock

A static practice exam application. Import a Markdown file based on `template.md` to answer and review questions in the browser. Exam content may use any language; application text and documentation are English.

## Exam library

Add Markdown exam files to `exams/` and push to the connected GitHub repository. Cloudflare Pages builds the library from those files. The build validates each file and fails if an exam is invalid or has a duplicate ID. Library files and their answer keys are public. See `exams/README.md`.

## Development

Install dependencies with `bun install`, then run `npm run dev`. Run `npm test` for parser and grading checks and `npm run build` to create the static `out/` directory. Cloudflare Pages can serve that directory without a server runtime.

Choose to reveal answers after submission or as you complete each question. Multiple-choice and short-answer questions use a Check answer button in immediate feedback mode. Checked answers are locked.

Exam files and responses are processed in the browser and the latest session is saved in local storage when available. The answer key is part of the file, so this application is intended for practice, not secret examinations.

## Current limitations

The implementation is an initial release. It does not yet implement every acceptance criterion in `spec.md`: saved response shapes and file fingerprints are not fully validated on restore; Markdown nesting limits and file line offsets are not enforced; and the full responsive, accessibility, and matching interaction matrix has not been verified. Use trusted practice files and keep a copy of your exam file.
