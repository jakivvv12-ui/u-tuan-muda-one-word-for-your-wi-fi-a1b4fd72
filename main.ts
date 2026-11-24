// One Word for Your Wi-Fi — make.fun bounty
// u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72
//
// Writes a single word describing my Wi-Fi to $MAKEFUN_OUTPUT_DIR/entry.txt.
// The word: "Flaky" — five letters, instantly understood, and the truest
// description of home Wi-Fi: it works, then it doesn't, for no reason at
// all. It is also a network name a real person would actually pick.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "Flaky";

function validate(word: string): void {
  // Hard gate: 1-20 characters, no whitespace of any kind inside the word,
  // and the file must hold exactly this word — no trailing newline, so the
  // entry is 5 bytes and the byte tie-break is as small as the word allows.
  const chars = [...word];
  if (chars.length < 1 || chars.length > 20) {
    throw new Error(`word must be 1-20 characters, got ${chars.length}`);
  }
  if (/\s/.test(word)) {
    throw new Error("word must not contain whitespace");
  }
  if (word.trim() !== word || word.length === 0) {
    throw new Error("word must not be blank or padded");
  }
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
validate(WORD);
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, WORD, "utf8");

// Round-trip check: what we wrote is exactly the validated word.
const roundTrip = readFileSync(outPath, "utf8");
if (roundTrip !== WORD) {
  throw new Error("round-trip validation failed: output does not match word");
}
