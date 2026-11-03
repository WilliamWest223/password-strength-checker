import test from "node:test";
import assert from "node:assert/strict";

import { checkRules } from "../../src/checks/rules.js";

test("strong password returns rule results", () => {
  assert.deepEqual(checkRules("Abcdef1!"), {
    length: 8,
    hasUppercase: true,
    hasLowercase: true,
    hasDigit: true,
    hasSpecialChar: true,
    hasWhitespace: false,
  });
});

test("each rule rejects with its message", () => {
  assert.throws(() => checkRules(42), /must be a string/);
  assert.throws(() => checkRules(""), /cannot be empty/);
  assert.throws(() => checkRules("Ab1!"), /at least 8/);
  assert.throws(() => checkRules("abcdef1!"), /uppercase/);
  assert.throws(() => checkRules("ABCDEF1!"), /lowercase/);
  assert.throws(() => checkRules("Abcdefg!"), /digit/);
  assert.throws(() => checkRules("Abcdefg1"), /special/);
  assert.throws(() => checkRules("Abc def1!"), /whitespace/);
});
