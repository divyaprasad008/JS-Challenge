/* Activity 1 : Variable Declaration*/

// Task 1: Declare a variable using var, assign it a number and log the value to the console.
var num = 34
console.log(`num: ${num}`)
// Task 2: Declare a variable using let, assign it a string and log the value to the console.
let myname = "Divya"
console.log(`Name: ${myname}`)


/* Activity 2 : Constant Declaration*/

// Task 3: Declare a variable using const, assign it a boolean value, and log the value to console
const isDeveloper = true
console.log(`Is Developer: ${isDeveloper}`)

/* Activity 3: Data Types */
// Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using typeof operator
let score = 10
let subject = "Maths"
let isPass = true
let student = {name:"Divya", email:"divyaprasad008@gmail.com"}
let subjects = ["Maths", "Science", "Physics", "Chemistry"]
console.log(`Type of variable score is ${typeof(score)}`)
console.log(`Type of variable subject is ${typeof(subject)}`)
console.log(`Type of variable isPass is ${typeof(isPass)}`)
console.log(`Type of variable student is ${typeof(student)}`)
console.log(`Type of variable subjects is ${typeof(subjects)}`)

/* Activity 4: Reassigning Variables */
// Task 5: Declare a variable using let, assign it an initial value, reassign a new value and log both values to console
let test1 = 20
console.log(`old value: ${test1}`)
test1=40
console.log(`new value: ${test1}`)


/* Activity 5: Understanding Const */
// Task 6: Try reassigning a variable declared with const and observe the error
const price = 40
console.log(`old value: ${price}`)
// price = 50 // Error assignment to a constant variable


/* =========== Feature Request =========== 
* 1. Variable Types Console log:  Write a script that declares variables of 
different data types and log both the value and type of each variable to the console
* 2. Reassignment Demo: Create a script that demonstrates the difference in behavior let and const 
when it comes to reassignment
 */


/* =========== Achievement =========== 

By the end of these activities, you will:

* know how to declare variables using var, let and const
* Understand the different data types in javascript
* Be able to use the typeof operator to identify the data type of variable
* Understand the concept of variable reassignment and the immutability of const variables

*/