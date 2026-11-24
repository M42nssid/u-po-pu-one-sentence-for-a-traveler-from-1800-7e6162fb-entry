// One Sentence for a Traveler from 1800.
// Writes a single sentence (<= 200 chars) explaining the modern internet
// to someone arriving from 1800, using only words and things they would
// already know: libraries, post offices, letters, books, doors.
import { mkdirSync, writeFileSync } from "node:fs";

// Revision: sharpen the picture. Instead of the generic "roads you cannot
// see", give the traveler two vivid negations of things he knows — a
// library with no walls (all knowledge, no building) and a post office
// with no horses (messages with no physical carrying) — then the same
// consequence: anything written reaches any door in a blink, and any
// door can answer back. One image, no list, every word pre-1800.
const SENTENCE =
  "Imagine a library with no walls and a post office with no horses, where any letter or book in the world reaches any door before you can blink, and any door can answer back.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
