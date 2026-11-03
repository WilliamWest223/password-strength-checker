/**
 * Entropy in bits: length * log2(size of the character pool the password draws from).
 */

const POOLS = [
  [/[a-z]/, 26],
  [/[A-Z]/, 26],
  [/[0-9]/, 10],
  [/[^A-Za-z0-9]/, 33], // printable ASCII symbols incl. space
];

export function poolSize(password) {
  return POOLS.reduce((size, [re, n]) => (re.test(password) ? size + n : size), 0);
}

export function calculateEntropy(password) {
  const pool = poolSize(password);
  return pool === 0 ? 0 : password.length * Math.log2(pool);
}
