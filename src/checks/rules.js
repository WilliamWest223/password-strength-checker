/**
 * TODO: Define the password rules and return structured rule results.
 */

export function checkRules(_password) {
  if (typeof _password !== "string") {
    throw new Error("Password must be a string");
  }else if (_password.length === 0) {
    throw new Error("Password cannot be empty");
  } else if (_password.length < 8) {
    throw new Error("Password must be at least 8 characters long");
  } else if (!/[A-Z]/.test(_password)) {
    throw new Error("Password must contain at least one uppercase letter");
  } else if (!/[a-z]/.test(_password)) {
    throw new Error("Password must contain at least one lowercase letter");
  } else if (!/[0-9]/.test(_password)) {
    throw new Error("Password must contain at least one digit");
  } else if (!/[^A-Za-z0-9]/.test(_password)) {
    throw new Error("Password must contain at least one special character");
  }else if (/\s/.test(_password)) {
    throw new Error("Password must not contain whitespace");
  } else {
    return {
      length: _password.length,
      hasUppercase: /[A-Z]/.test(_password),
      hasLowercase: /[a-z]/.test(_password),
      hasDigit: /[0-9]/.test(_password),
      hasSpecialChar: /[^A-Za-z0-9]/.test(_password),
      hasWhitespace: /\s/.test(_password),
    };
  }
  
  
}
