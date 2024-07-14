/* Activity 1 : Arithmetic Operations */

let num1 = 25;
let num2 = 4;
// Task1: Write a program to add two numbers and log the result to console
console.log(`Add: ${num1} + ${num2} = ${num1+num2}`);

// Task2: Write a program to subtract two numbers and log the result to console
console.log(`Subtract: ${num1} - ${num2} = ${num1-num2}`);

// Task3: Write a program to multiply two numbers and log the result to console
console.log(`Multiply: ${num1} * ${num2} = ${num1*num2}`);

// Task4: Write a program to divide two numbers and log the result to console
console.log(`Divide: ${num1} / ${num2} = ${num1/num2}`);

// Task5: Write a program to find the remainder when one number is divided by another and log the result to console
console.log(`Remainder: ${num1} % ${num2} = ${num1%num2}`);


/* Activity 2 : Assignment Operators */

// Task 6: Use += operator to add a number to a variable and log the result to the console.
console.log(`+=Operator will change num1 value: ${num1} += ${num2} = ${num1+=num2}`);

// Task 7: Use -= operator to subtract a number from a variable and log the result to the console
console.log(`-=Operator will change num1 value: ${num1} -= ${num2} = ${num1-=num2}`);


/* Activity 3 : Comparison Operators */

// Task 8: Write a program to compare two numbers using > and < and log the result to the console
if(num1>num2){
    console.log(`Greater than(>): ${num1} > ${num2} = Yes`);
}
else{
    console.log(`Greater than(>): ${num1} > ${num2} = No`);
}

if(num1<num2){
    console.log(`Less than(<): ${num1} < ${num2} = Yes`);
}
else{
    console.log(`Less than(<): ${num1} < ${num2} = No`);
}

// Task 9: Write a program to compare two numbers using >= and <= and log the result to the console
console.log(``)
console.log(`==================`)
num1 = 34
num2 = '34'
console.log(`Now num1=${typeof num1} ${num1} and num2=${typeof num2} ${num2}`)
console.log(``)

if(num1>=num2){
    console.log(`Greater than Equal to(>=): ${num1} >= ${num2} = Yes`);
}
else{
    console.log(`Greater than Equal to(>=): ${num1} >= ${num2} = No`);
}

if(num1<=num2){
    console.log(`Less than Equal to(<=): ${num1} <= ${num2} = Yes`);
}
else{
    console.log(`Less than Equal to(<=): ${num1} <= ${num2} = No`);
}

// Task 10: Write a program to compare two numbers using == and === and log the result to the console
if(num1==num2){
    console.log(`Double Equal to(==): ${num1} == ${num2} = Yes`);
}
else{
    console.log(`Double Equal to(==): ${num1} == ${num2} = No`);
}

if(num1===num2){
    console.log(`Tripple Equal to(===): ${num1} === ${num2} = Yes`);
}
else{
    console.log(`Tripple Equal to(===): ${num1} === ${num2} = No`);
}

/* Activity 4 : Logical Operators */
console.log(``)
console.log(`==================`)
num1 = 34
num2 = 44
num3 = 54
console.log(`Now num1=${typeof num1} ${num1} and num2=${typeof num2} ${num2} and num3=${typeof num3} ${num3}`)
console.log(``)
// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console
if(num1>num2 && num1>num3){
    console.log(`${num1}>${num2} && ${num1}>${num3} : ${num1} is greater`)
}
else if(num2>num1 && num2>num3){
    console.log(`${num2}>${num1} && ${num2}>${num3} : ${num2} is greater`)
}
else if(num3>num1 && num3>num2){
    console.log(`${num3}>${num1} && ${num3}>${num2} : ${num3} is greater`)
}
// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console
if(num1==34 || num2==34 || num3==34){
    console.log(`${num1}==34 || ${num2}==34 || ${num3}==34 : 34 is present`)
}
else{
    console.log(`34 is not present`)
}

// Task 13: Write a program that uses the ! operator to combine two conditions and log the result to the console
if(!(num1==34)){
    console.log(`!(${num1}==34) : ${num1} is not 34`)
}
else{
    console.log(`${num1} is 34`)
}

/* Activity 5 : Ternary Operator */

// Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console
let result = num1>num2?`${num1} is greater`:`${num2} is greater`
console.log(`${num1} > ${num2} ? num1 greater : num2 greater : Result is ${result}`)




/* =========== Feature Request =========== 
1. Arithmetic Operations Script: 
Write a script that performs basic arithmetic operations (addition, substraction, multiplication, division, remainder)
on two numbers and logs the result

2. Comparison and Logical Operators Script:
Create a script that compares two numbers using different comparasion operators and combines conditions using logical operators, logging the results

3. Ternary Operator Script:
Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result

*/

/* =========== Achievement =========== 
By the end of these activities, you will
* Understand and use arithmetic operators to perform basic calculations
* Use assignment operators to modify variable values.
* Compare values using comparasion operators.
* Combine conditions using logical operators.
* Use the ternary operator for consise conditional expressions
*/

