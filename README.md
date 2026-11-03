# Password Strength Checker

Command-line password strength checker for the CSCE 201 project.

## Roadmap

- [x] Rules check, entropy in bits, and CLI
- [x] Common-password list check and crack-time estimate at 10¹⁰ guesses/second
- [x] Tests, README completion, and GitHub publication

## Project layout

```text
src/
  cli.js                         # Command-line entry point
  checks/
    rules.js                     # Password rule checks
    entropy.js                   # Entropy calculation
    commonPasswords.js           # Common-password list lookup
    crackTime.js                 # Crack-time estimate
tests/
  checks/                        # Unit-test suites by domain
  cli.test.js                    # CLI integration tests
data/
  common-passwords.txt           # Input data for the common-password check
```

## Development

Requires Node.js 20 or newer.

```sh
npm test
npm start -- 'MyP@ssw0rd'
```

## How it works

- **Rules**: at least 8 characters, upper + lower case, a digit, a special character, no whitespace.
- **Entropy**: `length * log2(pool)`, where the pool is the sum of character classes used
  (lowercase 26, uppercase 26, digits 10, symbols 33).
- **Common passwords**: case-insensitive lookup in `data/common-passwords.txt` (`#` lines are comments).
- **Crack time**: worst-case brute force, `2^entropy / 10^10` seconds. Common passwords count as instant.

Example:

```text
$ npm start -- 'x7#Lq!9vR2@m'
Password received.
Rules: all passed
Common password: no
Entropy: 78.8 bits
Crack time at 1e+10 guesses/s: 1.71e+6 years
Verdict: STRONG
```
