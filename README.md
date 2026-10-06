# Password Strength Checker

Scaffold for the CSCE 201 password-strength checker project.

## Roadmap

- [ ] Rules check, entropy in bits, and CLI
- [ ] Common-password list check and crack-time estimate at 10¹⁰ guesses/second
- [ ] Tests, README completion, and GitHub publication

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
npm start
```

The implementation is intentionally not included in this scaffold yet.
