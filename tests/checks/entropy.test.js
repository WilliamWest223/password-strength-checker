import test from "node:test";
import assert from "node:assert/strict";

import { calculateEntropy, poolSize } from "../../src/checks/entropy.js";

test("pool size counts each character class once", () => {
  assert.equal(poolSize(""), 0);
  assert.equal(poolSize("abc"), 26);
  assert.equal(poolSize("aB"), 52);
  assert.equal(poolSize("aB3"), 62);
  assert.equal(poolSize("aB3!"), 95);
});

test("entropy is length * log2(pool)", () => {
  assert.equal(calculateEntropy(""), 0);
  assert.equal(calculateEntropy("aaaa"), 4 * Math.log2(26));
  assert.equal(calculateEntropy("aB3!aB3!"), 8 * Math.log2(95));
});
