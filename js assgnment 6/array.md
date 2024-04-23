# Write short notes on Array method with code example
- push()
- pop()
- shift()
- unshift()
- includes()
- toString()
- reverse()
- join()
- concat()
- flat()
- slice()
- splice()
# Ans.
push():
# Adds new items to the end of an array. 
# The push() method changes the length of the array.
EXAMPLES
```js
const arr=["steny","subin","alvin","sarath"]
arr.push("dary")
console.log(arr);
//[ 'steny', 'subin', 'alvin', 'sarath', 'dary' ]
```
pop()
# Removes the last element from an array and returns that element. 
# This method changes the length of the array.
EXAMPLES
```js
let arr=[[1,2],[3,4],[5,6]]
 arr.pop()
 console.log(arr);
 // [ [ 1, 2 ], [ 3, 4 ] ]
 ```
shift()
# Removes the first element from an array and returns that removed element.
# changes the original array.
EXAMPLES
```js
let arr=[1,2,3]
 arr.shift()
 console.log(arr);
 // [ 2, 3 ]
 ```
 unshift()
 # Adds new elements to the beginning of an array.
 # Overwrites the original array.
 EXAMPLES
 ```js
  let arr=[1,2,3]
 arr.unshift(0)
 console.log(arr);
 //[ 0, 1, 2, 3 ]
 ```
 includes()
 # Method returns true if a string contains a specified string.Otherwise it returns false.
 #  Method is case sensitive.
 EXAMPLES
 ```js
 let text =[ "steny","subin","alvin","sarath"];
 console.log(text.includes("alvin"));
 //true
 ```
 toString()
 # Returns a string as a string.
 # Does not change the original string.
 ```js
let arr= ["Hello","World!"]
let str =arr.toString()
console.log(str);
//Hello,World!
```
reverse()
# Reverses the order of the elements in an array.
# Overwrites the original array.
 ```js
let arr = ["Hello","World!"]
let str = arr.reverse()
console.log(str);
//[ 'World!', 'Hello' ]
```
join()
# Method returns an array as a string.
# Method does not change the original array.
```js
let array =[ "steny","subin","alvin","sarath"];
let str=array.join("-")
console.log(str);
//steny-subin-alvin-sarath
```
concat():
# The concat() method concatenates (joins) two or more arrays.
# concat() method returns a new array, containing the joined arrays.
# The concat() method does not change the existing arrays.
``` js
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin"];
const children = arr1.concat(arr2, arr3);
console.log(children);
// [ 'Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus', 'Robin' ]
```
flat():
# The flat() method concatenates sub-array elements.
``` js
const myArr = [1, 2, [3, [4, 5, 6], 7], 8];
const newArr = myArr.flat(2);
console.log(newArr);
[
  1, 2, 3, 4,
  5, 6, 7, 8
] 

```

slice():
# returns selected elements in an array, as a new array.
#  selects from a given start, up to a (not inclusive) given end.
#  does not change the original array.
``` js
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
console.log(citrus);
// [ 'Orange', 'Lemon' ]
```

splice():
# The splice() method adds and/or removes array elements.
# The splice() method overwrites the original array.
``` js


const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);
// [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ]
```
# ![screenshot 1](./Screenshot%20(21).png)

# Write a JavaScript function to check whether an `input` is an array.
# Ans. 
```js
let myNumbers = [1,2,3,4,5]

let isArr = (arr) =>{
    return Array.isArray(arr)
}
let result = isArr(myNumbers)
console.log(result);
// true
```


# Write a JavaScript function that takes an array as an argument and returns the first element of the array.
# Ans.
```js
let arr = [1,2,3,4,5]

let firstElement = (arr1) =>{
 return arr1.shift()
}
console.log(firstElement(arr));
// 1
```

# Write a JavaScript function that takes an array as an argument and returns the last element of the array.
# Ans.
```js
let arr = [1,2,3,4,5]

let lastElement =(arr1) => {
     return arr1.pop()
}
console.log(lastElement(arr));
// 5
```
# Write a simple JavaScript function to join all elements of the following array into a string.Sample array : myColor = ["Red", "Green", "White", "Black"];
# Ans.
``` js
let myNumbers = [1,2,3,4,5]
let isArr = (arr) =>{
    return Array.isArray(arr)
}
let result = isArr(myNumbers)
console.log(result);
//true
```

# Write a JavaScript program that accepts a number as input and inserts dashes (-) between each. For example, if you accept 025468 the output should be 0-2-5-4-6-8
# Ans.
```js
let myNumbers = [0,2,5,4,6,8]
console.log(myNumbers.join("-"));
// 0-2-5-4-6-8
```


# Write a JavaScript function that checks if the given number is even or odd then returns a Boolean value (use: arrow function, return keyword, ternary operator)
# Ans.
```js
let num = 32
let isEven = (number) => {
let result = number % 2 === 0 ? console.log(true) :console.log(false);
return result
}

isEven(num)
//true
```


# Create an array of guestlist. Write a javascript function that takes the user’s name as an argument and checks if it is there in the guestlist. If yes, return the string “Welcome” else, return “Sorry, good luck next time”.
# Ans.
```js
let checkGuestList = (name) =>{
    let guestList =["alvin","steni","subin","binzy","saliha"]
    return guestList.includes(name)? console.log("welcome"):console.log("Sorry, good luck next time");
   
}
 checkGuestList("sharath")
 //Sorry, good luck next time
 ```



# Write a javascript function that reverses a given number example: 123456789 => 987654321 (split(), reverse (), join())
# Ans.
```js
let num = 123456789
let toReverse= (number) => {
    let outPut = String(number).split("").reverse().join("")
    return Number(outPut)

}
console.log(toReverse(num));
//987654321
```


# Write a JavaScript function that accepts a string as a parameter and converts the first letter into upper case.
# Example: “Javascript” => “Javascript”
# Ans.
```js
let txt = "javascript"
let firstLetter = txt.slice(0,1)
let upperCaseLetter = firstLetter.toUpperCase();
let restOfTheLetters = txt.slice(1,  txt.length)
let lowerCaseLetters = restOfTheLetters.toLowerCase()
let nameToDisplay = upperCaseLetter+lowerCaseLetters
console.log(nameToDisplay);
//Javascript
```