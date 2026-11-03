/**
 * Load the common-password list and check passwords against it (case-insensitive).
 */

import { readFileSync } from "node:fs";

export const DEFAULT_LIST_PATH = new URL("../../data/common-passwords.txt", import.meta.url);

export function loadPasswordList(path = DEFAULT_LIST_PATH) {
  return new Set(
    readFileSync(path, "utf8")
      .split(/\r?\n/)
      .map((line) => line.trim().toLowerCase())
      .filter((line) => line && !line.startsWith("#")),
  );
}

export function isCommonPassword(password, passwordList) {
  return passwordList.has(password.toLowerCase());
}
