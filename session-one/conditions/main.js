function isUserLoggedIn(loginStatus) {
  // 1. if/else
  if (loginStatus === true) {
    return true;
  } else {
    return false;
  }

  // 2. if-only
  // if (loginStatus) {
  //   return true;
  // }
  // return false;

  // 3. one-line if
  // if (loginStatus) return true;
  // return false;

  // 4. ternary operator
  // return loginStatus ? true : false;

  // 5. logical operators
  // return loginStatus && true;
  // return loginStatus || false;
}

// Test cases
console.log("Logged in:", isUserLoggedIn(true)); // true
console.log("Not logged in:", isUserLoggedIn(false)); // false

// Logical operators quick tests
console.log("true && false =", true && false); // false
console.log("true || false =", true || false); // true
