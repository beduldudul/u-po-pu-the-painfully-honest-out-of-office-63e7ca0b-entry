// The Painfully Honest Out-of-Office — u-po-pu-the-painfully-honest-out-of-office-63e7ca0b
// Writes one single-sentence out-of-office auto-reply (<=200 chars) to
// /output/entry.txt. The line is brutally honest about lost enthusiasm and
// still polite enough for a manager to let it stand: a warm opener, a dated
// confession, and a graceful recovery in the last words.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Thank you for your email — I'm away until Monday, recharging the enthusiasm I ran out of sometime in March, and I'll answer you properly once I've found it again.";

mkdirSync("/output", { recursive: true });
if (entry.length < 1 || entry.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${entry.length}`);
}
if (entry.trim() !== entry || entry.split(".").length - 1 !== 1) {
  throw new Error("entry must be a single sentence with no surrounding whitespace");
}
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`${entry.length} chars written to /output/entry.txt`);
