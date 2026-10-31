# md-mocktest exam template

This is an importable template with sample questions, not an actual course examination. It demonstrates five question types worth 10 points in total.

The guide and samples are written in English to follow the project's documentation policy. Your own exam titles, descriptions, prompts, instructions, choices, accepted answers, and explanations may use any language or mix languages. Keep schema keys, type names, and IDs in their specified ASCII format. The application preserves exam text without translating it.

## Create your exam

1. Copy this file, keep its `.md` extension, and save it as UTF-8.
2. Edit `exam.id`, `exam.title`, `exam.description`, and `questions`.
3. Copy the question types you need. Add or remove questions and keep each question ID unique.
4. Write the question in `prompt`, response guidance in `instructions`, correct answers in `answer`, and the reasoning in `explanation`.
5. Keep exactly one `yaml mocktest` fenced block. Use spaces, not tabs, for YAML indentation.
6. Open the website, choose this file, review its summary, choose when answers are revealed, and start the exam.

Text outside the data block is author guidance. The application reads only the `yaml mocktest` block, so this entire file can be imported without deleting the guide.

The answer key is readable by anyone holding the file. Use this for practice, not for storing a secret examination key.

## Importable sample data

```yaml mocktest
schema_version: 1
exam:
  id: example-computing-basics
  title: "Sample: Computing basics"
  description: "Five sample question types for learning the interface, not an actual course exam"

questions:
  - id: q1
    type: single_choice
    points: 2
    prompt: |
      What is the decimal value of the binary number `1010`?
    instructions: "Select one answer."
    options:
      - id: a
        text: "8"
      - id: b
        text: "10"
      - id: c
        text: "12"
      - id: d
        text: "14"
    answer: b
    explanation: |
      The place values in `1010` give the following sum, which equals **10**:

      $$
      (1 \times 2^3) + (0 \times 2^2) + (1 \times 2^1) + (0 \times 2^0) = 10
      $$

  - id: q2
    type: multiple_choice
    points: 2
    prompt: |
      Which memory types normally lose their stored data when power is removed?
    instructions: "Select every correct answer. All correct choices and no incorrect choices are required for points."
    options:
      - id: a
        text: "SRAM"
      - id: b
        text: "DRAM"
      - id: c
        text: "ROM"
      - id: d
        text: "Flash memory"
    answer:
      - a
      - b
    explanation: |
      **SRAM** and **DRAM** are volatile memory and require power to retain data.
      ROM and Flash memory are non-volatile.

  - id: q3
    type: true_false
    points: 2
    prompt: |
      Evaluate the following statements about data structures.
    instructions: "Answer true or false for every statement. All statements must be correct to earn points."
    statements:
      - id: s1
        text: "A stack removes items in Last In, First Out (LIFO) order."
      - id: s2
        text: "A FIFO queue removes the most recently inserted item first."
      - id: s3
        text: "Binary search on a sorted array roughly halves the search interval on each iteration."
    answer:
      s1: true
      s2: false
      s3: true
    explanation: |
      - The first statement is **true** because a stack uses LIFO order.
      - The second is **false** because FIFO removes the earliest inserted item first.
      - The third is **true** because comparison with the middle element eliminates the irrelevant half.

  - id: q4
    type: matching
    points: 2
    prompt: |
      Match each data structure to its removal behavior.
    instructions: "Drag from a source to a target, or select a source and then a target. On narrow screens, use the selection lists. Match every source without reusing a target."
    left:
      - id: stack
        text: "Stack"
      - id: queue
        text: "Queue"
      - id: priority_queue
        text: "Priority queue"
    right:
      - id: priority
        text: "Remove items according to the defined priority."
      - id: lifo
        text: "Remove the most recently inserted item first."
      - id: fifo
        text: "Remove the earliest inserted item first."
    answer:
      stack: lifo
      queue: fifo
      priority_queue: priority
    explanation: |
      A stack uses LIFO, a queue uses FIFO, and a priority queue uses the defined priority.
      All three pairs must match the key to earn points for this question.

  - id: q5
    type: short_answer
    points: 2
    prompt: |
      What is the abbreviation for removing the earliest inserted item first?
    instructions: "Enter the abbreviation or its full name, without punctuation."
    answer:
      - "FIFO"
      - "First In First Out"
    explanation: |
      **FIFO** stands for **First In First Out**.
      Comparison ignores case and repeated whitespace, but does not remove punctuation.
```

## Write each question type

| Type | Data | Answer key |
| --- | --- | --- |
| `single_choice` | `options`, with an `id` and `text` for each item. | One option ID as a string. |
| `multiple_choice` | The same `options` structure. | A list of every correct option ID. |
| `true_false` | `statements`, each with an ID. | A mapping from every statement ID to boolean `true` or `false`. |
| `matching` | `left` and `right` lists, each item with an ID. | A mapping from every left ID to one right ID. |
| `short_answer` | `prompt` and `instructions`, without options. | A list of accepted answer strings in the exam's language. |

Every question requires `id`, `type`, `points`, `prompt`, `instructions`, `answer`, and `explanation`. Do not add unknown fields as notes. Write notes outside the block or use YAML comments.

`points` must be an integer from 1 to 100. IDs contain ASCII letters, digits, `_`, or `-`, begin with a letter or digit, and have at most 64 characters, such as `q6` or `chapter2_q1`. Reserved names `__proto__`, `constructor`, and `prototype` are forbidden. An exam contains 1 to 100 questions and the file must not exceed 1 MiB.

Choice questions contain 2 to 10 options. True/false questions contain 1 to 10 statements. Matching contains 2 to 10 items on each side; the right side may contain distractors but cannot contain fewer items than the left. The answer key must not reuse a matching target.

Quote text that looks like a number or boolean, or contains `:`, to keep it a string: for example, `text: "10"` and `text: "true"`. True/false answer keys must instead use unquoted boolean `true` and `false`.

Use YAML `|` for multiline `prompt` and `explanation` values. These fields support basic Markdown, including **strong text**, *emphasis*, lists, inline code, and LaTeX math. Use `$x^2$` for inline math and `$$x^2$$` on separate lines for display math. Other fields are plain text. HTML, MDX, and images are not supported. LaTeX math is rendered with KaTeX.

Content fields support Unicode text in any language. Their IDs and schema keys remain ASCII. Write accepted answers in the forms you actually want to accept; the application does not translate responses or infer equivalent meanings.

Short-answer questions accept 1 to 10 strings, each limited to 200 Unicode code points. Normalization applies NFC, trimming, whitespace collapsing, and JavaScript lowercase conversion. It does not remove diacritics or punctuation, convert numeral systems, or perform locale-specific/semantic matching. In this sample, ` fifo ` passes but `FIFO!` does not.

## Scoring

Each question awards all its points only when fully correct. There are no partial points. Missing or extra multiple-choice selections earn zero. True/false and matching questions require every part; incomplete questions are unanswered and earn zero.

The sample key is `q1 = b`, `q2 = a,b`, `q3 = true,false,true`, `q4 = stack:lifo / queue:fifo / priority_queue:priority`, and `q5 = FIFO` or the full name. A fully correct attempt scores 10/10.
