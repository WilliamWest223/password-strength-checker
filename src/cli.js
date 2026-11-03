#!/usr/bin/env node

/**
 * CLI entry point: runs every check and prints a strength report.
 */

import { realpathSync } from "node:fs";
import { pathToFileURL } from "node:url";

import { checkRules } from "./checks/rules.js";
import { calculateEntropy } from "./checks/entropy.js";
import { isCommonPassword, loadPasswordList } from "./checks/commonPasswords.js";
import { estimateCrackTime, formatDuration, GUESSES_PER_SECOND } from "./checks/crackTime.js";

const USAGE = "Usage: password-strength <password>";

export function run(args = process.argv.slice(2), output = console) {
  if (args.includes("--help") || args.includes("-h")) {
    output.log(USAGE);
    output.log("");
    output.log("Check the strength of a password.");
    return 0;
  }

  if (args.length !== 1 || args[0].length === 0) {
    output.error(USAGE);
    return 1;
  }

  const password = args[0];
  output.log("Password received.");

  let rulesPassed = true;
  try {
    checkRules(password);
    output.log("Rules: all passed");
  } catch (err) {
    rulesPassed = false;
    output.log(`Rules: FAILED - ${err.message}`);
  }

  const common = isCommonPassword(password, loadPasswordList());
  output.log(`Common password: ${common ? "YES - found in common-password list" : "no"}`);

  output.log(`Entropy: ${calculateEntropy(password).toFixed(1)} bits`);

  const seconds = common ? 0 : estimateCrackTime(password);
  output.log(`Crack time at ${GUESSES_PER_SECOND.toExponential(0)} guesses/s: ${formatDuration(seconds)}`);

  output.log(`Verdict: ${rulesPassed && !common ? "STRONG" : "WEAK"}`);
  return 0;
}

const entry = process.argv[1] && pathToFileURL(realpathSync(process.argv[1])).href;
if (import.meta.url === entry) {
  process.exitCode = run();
}
