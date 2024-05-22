# 1) Write short notes on the below with code examples
# 1.while loop
# 2.do-while loop
# 3.for loop
# 4.for in loop
# 5.for of loop
# Ans: 1. The while loop loops through a block code as long as a specified condition is true.
```js
 while(i<10){
    i++;
    console.log(i);
}
```
# 2. The do while statements combo defines a code block to be executed once, and repeated as long as a condition is true.
```js
let text=" "
let i=0;
do{
    text+=i+"<br>";
    i++;
}
while(i<5);
```
# 3. A for loop repeates until a specified condition evaluates to false.
```js
for(let i=0;i<3; i++){
    console.log("hello world")
}
```
# 4. The for in loop statement loops through the properties of an object.
```js
const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x];
}
```
# 5.The JavaScript for of statement loops through the values of an iterable object.
```js
const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x;
}
```
# 2)Explain the scope in Javascript.
# Ans: JavaScript variables have 3 types of scope:
# a)Block scope
# b)Function scope
# c)Global scope
# Variables declared inside a { } block cannot be accessed from outside the block is called block scope.Variables declared within a JavaScript function, # are LOCAL to the function is local scope function. Variables declared with var, let and const are quite similar when declared inside a function. They # all have Function Scope
# 3)What is a callback?
# Ans: A callback is a function passed as an argument to another function. This technique allows a function to call another function. A callback function can run after another function has finished.
# 4)Explain context in JavaScript
# Ans: there are two types of context. global context, executio context.Variable are scan and named undefined functions are scaned and named.
# 5)What is hoisting in JavaScript?
# Ans: in javascript a variablee can be declared after it has been used.
# 6)Explain lexical scope
# ans: The area where the variables and their values are accessible during the execution of the code.
# 7)What is scope chaining?
# Ans:When a variable is accessed javascript first searches for it in the current scope, and if it is not found,it moves up the scope chain until the  variable is found or the global scope is reached.
# 8)Explain closure.
# ans: Closure in javascript is a form of lexical scoping used to preserve variables from the outer scope of a function in the inner scope of a function.
# 9)What is the difference between undefined and not defined in javascript
# Ans: A variable that has been declared but not assigned a value is undefined. A variable that has not been declared at all is not defined.
# 10)Explain spread and rest operator
# Ans: the rest operator is used to gather elements into an array, while the spread operator is used to spread the content of a aray.
# 11)Explain ‘this’ keyword in Javascript.
# Ans: In javascript the this keyword refers to an object.# 