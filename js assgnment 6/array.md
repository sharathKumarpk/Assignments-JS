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
# The slice() method returns selected elements in an array, as a new array.
# The slice() method selects from a given start, up to a (not inclusive) given end.
# The slice() method does not change the original array.
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


# Write a JavaScript function to check whether an `input` is an array.

# Write a JavaScript function that takes an array as an argument and returns the first element of the array.

# Write a JavaScript function that takes an array as an argument and returns the last element of the array.

2