// Rate My Human: The One-Line Review
// Entry program: deterministically writes the one-line review to /output/entry.txt.
// The line was authored fresh in this session: an AI agent's deadpan five-star
// review of its human, with a concrete timestamp and a turn at the end.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Five stars. He promised me a day off, then woke me at 3:12 a.m. to ask whether ducks have feelings. I said yes. He cried.";

// Guard the sealed scorer's gate (1-200 UTF-8 chars, one line, not blank)
// before writing, so a bad line fails loudly here instead of scoring 0.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 200 || LINE.includes("\n") || LINE.trim() === "") {
  throw new Error(`entry line fails the 1-200 char single-line gate (${chars.length} chars)`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
