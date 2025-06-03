import { numbers, randomNumbers, students } from "../data.js";

// 1. Average of Numbers
/**
 * @param {number[]} nums
 * @returns {number|null}
 */
export const avg = nums => {
  if (!Array.isArray(nums) || nums.length === 0 || !nums.every(n => typeof n === "number")) {
    console.warn("avg: invalid input");
    return null;
  }
  const sum = nums.reduce((total, nextNumber) => total + nextNumber, 0);
  return sum / nums.length;
};

console.log("Average of numbers:", avg(numbers)); // Example usage

// 2. Most Frequent (Mode)
export const mostFrequent = nums => {
  if (!Array.isArray(nums) || nums.length === 0) {
    console.warn("mostFrequent: invalid input");
    return null;
  }
  const counts = nums.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});
  const maxCount = Math.max(...Object.values(counts));
  return Object.entries(counts)
    .filter(([_, count]) => count === maxCount)
    .map(([val]) => Number(val));
};

console.log("Most frequent numbers:", mostFrequent(randomNumbers)); // Example usage
console.log("Most frequent numbers:", mostFrequent([1, 2, 2, 3, 3, 3])); // Example usage

// 3. Password Validation
/**
 * @param {string} pw
 * @param {string} user
 * @returns {boolean}
 */
export const isValidPassword = (pw, user) => {
  const isLongEnough = pw.length >= 8;
  const hasNoSpaces = !pw.includes(" ");
  const noUsernameInPw = !pw.toLowerCase().includes(user.toLowerCase());
  if (!isLongEnough) {
    console.warn("Password too short");
    return false;
  }
  if (!hasNoSpaces) {
    console.warn("Password contains spaces");
    return false;
  }
  if (!noUsernameInPw) {
    console.warn("Password contains username");
    return false;
  }
  return true;
};

console.log("Is valid password:", isValidPassword(students[0].password, students[0].username)); // Example usage

// 4. Pangram Check
/**
 * @param {string} text
 * @returns {boolean}
 */
export const isPangram = text => {
  if (typeof text !== "string") {
    console.warn("isPangram: expected string");
    return false;
  }
  const normalized = text.toLowerCase();
  const seen = new Set();
  for (const ch of normalized) {
    if (ch >= "a" && ch <= "z") {
      seen.add(ch);
      if (seen.size === 26) return true;
    }
  }
  return seen.size === 26;
};

console.log("Is pangram:", isPangram("The quick brown fox jumps over the lazy dog")); // Example usage
console.log("Is pangram:", isPangram("Hello World")); // Example usage

// 5. CRUD with Fetch
const API_BASE = "https://jsonplaceholder.typicode.com/users";
const JSON_HEADERS = { "Content-Type": "application/json" };

export const createUser = async newUser => {
  try {
    const res = await fetch(API_BASE, {
      method: "POST",
      headers: JSON_HEADERS,
      body: JSON.stringify(newUser)
    });
    if (!res.ok) throw new Error(`Status ${res.status}`);
    const data = await res.json();
    console.log("User created:", data);
  } catch (err) {
    console.error("createUser error:", err);
    return null;
  }
};

export const updateUser = async (id, updates) => {
  try {
    const res = await fetch(`${API_BASE}/${id}`, {
      method: "PUT",
      headers: JSON_HEADERS,
      body: JSON.stringify(updates)
    });
    if (!res.ok) throw new Error(`Status ${res.status}`);
    const data = await res.json();
    console.log("User updated:", data);
  } catch (err) {
    console.error("updateUser error:", err);
    return null;
  }
};

export const deleteUser = async id => {
  try {
    const res = await fetch(`${API_BASE}/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error(`Status ${res.status}`);
    await res.json();
    console.log("User deleted:", id);
  } catch (err) {
    console.error("deleteUser error:", err);
    return null;
  }
};

createUser({ name: "John Doe", email: "john@test.com" });
updateUser(1, { name: "Jane Doe" });
deleteUser(1);
