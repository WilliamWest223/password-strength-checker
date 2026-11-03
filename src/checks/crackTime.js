/**
 * Worst-case brute-force crack time at the project rate of 10^10 guesses/second.
 */

import { calculateEntropy } from "./entropy.js";

export const GUESSES_PER_SECOND = 1e10;

export function estimateCrackTime(password, guessesPerSecond = GUESSES_PER_SECOND) {
  return 2 ** calculateEntropy(password) / guessesPerSecond;
}

const UNITS = [
  ["years", 365.25 * 24 * 3600],
  ["days", 24 * 3600],
  ["hours", 3600],
  ["minutes", 60],
  ["seconds", 1],
];

export function formatDuration(seconds) {
  if (seconds < 1) return "less than a second";
  const [unit, size] = UNITS.find(([, s]) => seconds >= s);
  const value = seconds / size;
  return `${value < 1e6 ? value.toFixed(1) : value.toExponential(2)} ${unit}`;
}
