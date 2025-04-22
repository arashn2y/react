let result = [];

// ================= Destructuring & Spread Operator =================

// const [first, second, ...rest] = colors;
// console.log("First:", first);
// console.log("Second:", second);
// console.log("Rest:", rest);

// const newColors = [...colors, { id: 11, name: "pink" }];
// console.log("New Colors:", newColors);

// const [firstStudent, secondStudent, ...restStudents] = students;
// const { first_name: fn1, last_name: ln1, age: age1 } = firstStudent;
// const { first_name: fn2, last_name: ln2, age: age2 } = secondStudent;
// console.log("Student 1:", fn1, ln1, age1);
// console.log("Student 2:", fn2, ln2, age2);

// ================= Array Functions =================

// 1. push()
// numbers.push(5);
// colors.push({ id: 11, name: "pink" });

// 2. pop()
// colors.pop();

// 3. unshift()
// numbers.unshift(0);
// colors.unshift({ id: 0, name: "violet" });

// 4. shift()
// colors.shift();

// 5. forEach() => iterate through each element
// Think of .forEach() as a tour guide — it takes you through each element in an array and shows you around.
// numbers.forEach((number) => console.log("forEach:", number));

// 6. map() => transform each element
// Think of .map() as a translator — it takes every value in an array and transforms it into something new.
// result = numbers.map((number) => number * 2);
// console.log("map:", result);

// 7. filter() => filter elements based on a condition
// Think of .filter() as a bouncer — it checks each element and only lets the ones that meet the criteria through.
// result = numbers.filter((number) => number > 5);
// console.log("filter:", result);

// 8. find() => find the first element that matches a condition
// Think of .find() as a detective — it searches through the array and finds the first element that matches the criteria.
// result = numbers.find((number) => number === 5);
// console.log("find:", result);

// 9. every() => check if all elements match a condition
// Think of .every() as a strict teacher — it checks if every single element meets the criteria.
// result = numbers.every((number) => number > 0);
// console.log("every:", result);

// 10. some() => check if at least one element matches a condition
// Think of .some() as a cheerleader — it checks if at least one element meets the criteria.
// result = numbers.some((number) => number > 5);
// console.log("some:", result);

// 11. reduce() => reduce the array to a single value
// Think of .reduce() as a chef — it takes all the ingredients (elements) and combines them into one final dish (value).
// result = numbers.reduce((acc, number) => acc + number, 0);
// console.log("reduce:", result);

// 12. sort() => sort the array
// Think of .sort() as a librarian — it organizes the books (elements) in a specific order. (it mutates the original array)
// students.sort((a, b) => a.first_name.localeCompare(b.first_name));
// console.log("sort by first name:", students);
// students.sort((a, b) => a.age - b.age);
// console.log("sort by age:", students);

// 12.1 toSorted() => sort the array
// Think of .toSorted() as a librarian who makes a copy of the books (elements) in a specific order. (it does not mutate the original array)
// result = students.toSorted((a, b) => a.first_name.localeCompare(b.first_name));
// console.log("toSorted by first name:", result);
// result = students.toSorted((a, b) => a.age - b.age);
// console.log("toSorted by age:", result);

// 13. reverse() => reverse the order of the array
// Think of .reverse() as a time machine — it takes you back to the beginning of the array. (it mutates the original array)
// students.reverse();
// console.log("reverse:", students);

// 13.1 toReversed() => reverse the order of the array
// Think of .toReversed() as a time machine that makes a copy of the array in reverse order. (it does not mutate the original array)
// result = students.toReversed();
// console.log("toReversed:", result);

// 14. isArray() => check if a variable is an array
// Think of Array.isArray() as a detective — it checks if the variable is an array or not.
// result = Array.isArray(students);
// console.log("isArray:", result);
