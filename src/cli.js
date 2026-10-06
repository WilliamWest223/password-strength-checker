#!/usr/bin/env node

/**
 * CLI entry point.
 *
 * The check modules will be composed here as they are implemented.
 */

export function run(args = process.argv.slice(2), output = console) {
  if (args.includes("--help") || args.includes("-h")) {
    output.log("Usage: password-strength <password>");
    output.log("");
    output.log("Check the strength of a password.");
    return 0;
  }

  if (args.length !== 1 || args[0].length === 0) {
    output.error("Usage: password-strength <password>");
    return 1;
  }

  output.log("Password received.");
  output.log("Strength checks are not implemented yet.");
  output.log("Please implement the strength checks in src/checks/.");
  return 0;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  process.exitCode = run();
}
