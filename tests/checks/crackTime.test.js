import test from "node:test";
import assert from "node:assert/strict";

import { estimateCrackTime, formatDuration } from "../../src/checks/crackTime.js";

test("crack time is 2^entropy / rate", () => {
  // "0000": pool 10, length 4 -> 10^4 guesses
  assert.ok(Math.abs(estimateCrackTime("0000", 1) - 1e4) < 1e-6);
  assert.ok(Math.abs(estimateCrackTime("0000") - 1e-6) < 1e-12);
});

test("longer passwords take longer", () => {
  assert.ok(estimateCrackTime("aB3!aB3!aB3!") > estimateCrackTime("aB3!aB3!"));
});

test("formatDuration picks a readable unit", () => {
  assert.equal(formatDuration(0.5), "less than a second");
  assert.equal(formatDuration(90), "1.5 minutes");
  assert.equal(formatDuration(2 * 86400), "2.0 days");
  assert.match(formatDuration(1e30), /e\+\d+ years$/);
});
