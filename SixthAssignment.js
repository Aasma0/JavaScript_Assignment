// 1. Promises
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = [
                { id: 1, name: "Alice", age: 25 },
                { id: 2, name: "Bob", age: 30 },
                { id: 3, name: "Charlie", age: 35 }
            ];
            // Randomly resolve or reject the promise to simulate an error
            if (Math.random() > 0.5) {
                resolve(data);
            } else {
                reject("Failed to fetch data");
            }
        }, 2000);
    });
}

// 2. Closures
function createCounter() {
    let count = 0;
    return {
        increment: () => { count++; },
        getCount: () => count
    };
}

// 3. Callbacks
function processData(numbers, callback) {
    return numbers.map(callback);
}

// 4. Async/Await
async function fetchDataAsync() {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

// 5. Array Manipulation: Map
function doubleNumbers(numbers) {
    return numbers.map(num => num * 2);
}

// 6. Array Manipulation: Filter
function filterNumbers(numbers) {
    return numbers.filter(num => num >= 10);
}

// 7. Array Manipulation: Find
function findNumber(numbers) {
    return numbers.find(num => num > 15);
}

// 8. Array Manipulation: Reduce
function sumNumbers(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

// 9. Object Manipulation
function transformUsers(users) {
    return users.reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
    }, {});
}

// 10. Classes and Objects
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    describe() {
        return `${this.name} is ${this.age} years old.`;
    }
}

// 11. Inheritance
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    study() {
        return `${this.name} is studying.`;
    }
}

// 12. Error Handling with Promises
fetchData()
    .then(data => console.log(data))
    .catch(error => console.error(error));

// 13. Error Handling with Async/Await
async function fetchDataWithErrorHandling() {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

// 14. Complex Array Manipulation
function uniqueHobbies(users) {
    return users
        .reduce((acc, user) => {
            user.hobbies.forEach(hobby => {
                if (!acc.includes(hobby)) {
                    acc.push(hobby);
                }
            });
            return acc;
        }, []);
}

// Conceptual Questions
/**
1. Why are promises used in JavaScript? Explain the advantages of using promises over traditional callback functions.
   Promises are used to handle asynchronous operations in JavaScript. They provide a cleaner and more manageable way
   to handle async operations compared to traditional callbacks, avoiding callback hell and making code more readable
   and maintainable.

2. What is a closure in JavaScript? Provide an example.
   A closure is a function that retains access to its lexical scope even when the function is executed outside that scope.
   Example:
   function outerFunction() {
       let count = 0;
       return function innerFunction() {
           count++;
           return count;
       }
   }
   const counter = outerFunction();
   console.log(counter()); // 1
   console.log(counter()); // 2

3. What is a callback function and why is it used in JavaScript?
   A callback function is a function passed into another function as an argument, which is then invoked inside the outer function.
   Callbacks are used to handle asynchronous operations and to execute code after an asynchronous task is completed.

4. What are async/await in JavaScript and how do they improve asynchronous programming?
   Async/await are syntactic sugar built on top of Promises, providing a more readable and synchronous-looking code for handling
   asynchronous operations. They make code easier to write and understand by eliminating the need for chaining `.then()` calls.

5. Write the difference between ES6 and JS.
   JavaScript (JS) is the language itself, and ES6 (ECMAScript 6) is the 6th edition of the ECMAScript standard, which introduced
   new features and syntax improvements to JavaScript. ES6 is a version of JavaScript with enhancements over previous versions.

6. What are some of the major features introduced in ES6?
   - Arrow functions
   - Classes
   - Template literals
   - Destructuring assignment
   - Default parameters
   - Let and const
   - Modules
   - Promises
   - Rest and spread operators
*/

