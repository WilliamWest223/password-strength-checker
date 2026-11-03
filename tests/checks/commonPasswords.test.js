import test from "node:test";
import assert from "node:assert/strict";

import { isCommonPassword, loadPasswordList } from "../../src/checks/commonPasswords.js";

const list = loadPasswordList();

test("list loads and skips comments", () => {
  assert.ok(list.size > 0);
  assert.ok(![...list].some((p) => p.startsWith("#")));
});

test("detects common passwords case-insensitively", () => {
  assert.equal(isCommonPassword("password", list), true);
  assert.equal(isCommonPassword("PASSWORD", list), true);
  assert.equal(isCommonPassword("Passw0rd!", list), true);
});

test("uncommon password is not flagged", () => {
  assert.equal(isCommonPassword("x7#Lq!9vR2@m", list), false);
});
