import test from "node:test";
import assert from "node:assert/strict";

import { run } from "../src/cli.js";

function createOutput() {
  return {
    logs: [],
    errors: [],
    log(message) {
      this.logs.push(message);
    },
    error(message) {
      this.errors.push(message);
    }
  };
}

test("CLI prints help", () => {
  const output = createOutput();

  const exitCode = run(["--help"], output);

  assert.equal(exitCode, 0);
  assert.match(output.logs[0], /Usage/);
});

test("CLI requires one password argument", () => {
  const output = createOutput();

  const exitCode = run([], output);

  assert.equal(exitCode, 1);
  assert.match(output.errors[0], /Usage/);
});

test("CLI accepts one password argument", () => {
  const output = createOutput();

  const exitCode = run(["example-password"], output);

  assert.equal(exitCode, 0);
  assert.match(output.logs[0], /Password received/);
});
