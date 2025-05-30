import { students } from "../data.js";

// ✅ What is a Promise?
// A Promise is a built-in object in JavaScript that represents the result of an asynchronous operation.
// It can be in one of three states:
// 1. pending (waiting)
// 2. fulfilled (successful)
// 3. rejected (failed)

// 🔧 Custom callback to simulate async data (like a server)
const callback = (resolve, reject) => {
  setTimeout(() => {
    resolve({ status: 200, data: students });
  }, 3000);
};

const firstResolvedPromise = new Promise(callback);

// const secondResolvedPromise = new Promise(resolve => {
//   setTimeout(() => {
//     resolve({ status: 200, data: randomNumbers });
//   }, 1000);
// });

// const rejectedPromise = new Promise((_, reject) => {
//   setTimeout(() => {
//     reject({ status: 404, error: "Not found" });
//   }, 1000);
// });

// ✅ .then() / .catch() / .finally()
// firstResolvedPromise
//   .then(result => {
//     console.log("✅ First Resolved:", result);
//     // id
//     secondResolvedPromise
//     .then()
//     .catch();
//   })
//   .catch(error => console.log("❌ Error:", error))
//   .finally(() => console.log("🔚 Closed firstResolvedPromise connection\n"));

// ✅ Async/Await version
const fetchData = async () => {
  try {
    const response = await firstResolvedPromise;
    console.log("✅ Async/Await:", response);
  } catch (error) {
    console.log("❌ Async/Await Error:", error);
  }
};
fetchData(); // Uncomment to test async/await

// ✅ Rejected Promise
// rejectedPromise
//   .then((res) => console.log(res))
//   .catch((err) => console.log("❌ Rejected:", err))
//   .finally(() => console.log("🔚 Closed rejectedPromise connection\n"));

// ✅ Promise.all with a rejection (will go to catch)
// Promise.all([firstResolvedPromise, rejectedPromise])
//   .then((results) => console.log("✅ All resolved:", results))
//   .catch((error) => console.log("❌ One failed in Promise.all:", error))
//   .finally(() => console.log("🔚 Promise.all with rejectedPromise done\n"));

// ✅ Promise.all with only fulfilled promises
// Promise.all([firstResolvedPromise, secondResolvedPromise])
//   .then((results) => console.log("✅ All resolved (no errors):", results))
//   .catch((error) => console.log("❌ Error in Promise.all:", error))
//   .finally(() => console.log("🔚 Promise.all with secondResolvedPromise done\n"));
