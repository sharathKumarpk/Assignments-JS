# - Write short notes on below array methods with code examples
# reverse()
# sort()
# fill()
# filter()
# some()
# every()
# map()
# forEach()
# reduce()
# indexOf()
# Ans.
reverse():
# Reverses the order of the elements in an array.
# Overwrites the original array.
```js
let arr = [1,2,3,4,5,6]
console.log(arr.reverse());
//[ 6, 5, 4, 3, 2, 1 ]
```
sort()
# sorts the elements of an array.
# overwrites the original array.
# sorts the elements as strings in alphabetical and ascending order.
```js
let arr = [1,2,3,4,6,5]
console.log(arr.sort());
//[ 1, 2, 3, 4, 5, 6 ]
```
fill()
# fills specified elements in an array with a value.
# Overwrites the original array.
```js
let arr = [1,2,3,4,5,6]
console.log(arr.fill("z",1,2));
[ 1, 'z', 3, 4, 5, 6 ]
```
filter()
# Creates a new array filled with elements that pass a test provided by a function.
# Does not execute the function for empty elements.
# Does not change the original array.
```js
let arr = [1,2,3,4,5,6]
let outPut = arr.filter((item) => {
    return item < 4
})
console.log(outPut);
//[ 1, 2, 3 ]
```
some()
# Checks if any array elements pass a test (provided as a callback function).
# Executes the callback function once for each array element.
# Returns true (and stops) if the function returns true for one of the array elements.
# Returns false if the function returns false for all of the array elements
# Does not execute the function for empty array elements.
# Does not change the original array
```js
let arr =[1,2,3,4,5,6]
let outPut = arr.some((item) => {
    return item > 4
})
console.log(outPut);
//true
```
every()
# Executes a function for each array element.
# Returns true if the function returns true for all elements.
# Returns false if the function returns false for one element.
# Does not execute the function for empty elements.
# Does not change the original array
```js
let arr = [1,2,3,4,5,6]
let outPut = arr.every((item) => {
    return item > 4
})
console.log(outPut);
//false
```
map()
# Creates a new array from calling a function for every array element.
# Execute the function for empty elements.
# Change the original array.
```js
let arr =[1,2,3,4,5,6]
let outPut = arr.map((item) => {
    return item * 2
})
console.log(outPut);
//[ 2, 4, 6, 8, 10, 12 ]
```
forEach()
# Calls a function for each element in an array.
# Not executed for empty elements.
```js
let arr=[1,2,3,4,5]
let double=arr.forEach((item) => {
    console.log(item*2);
})
/*
6
2
4
6
8
10 
*/
```
reduce()
# Executes a reducer function for array element.
# Returns a single value: the function's accumulated result.
# Does not execute the function for empty array elements.
# Does not change the original array.
```js
let arr =[100,9,5]
let result = (total,num) =>{
    return total-num
}
console.log(arr.reduce(result));
//86
```
indexOf()
# Returns the first index (position) of a specified value.
# Returns -1 if the value is not found.
# Starts at a specified index and searches from left to right (from the given start postion to the end of the array).
# By default the search starts at the first element and ends at the last.
# Negative start values counts from the last element (but still searches from left to right).

```js
let arr = ["ram","raj","rahul","raju"]
console.log(arr.indexOf("ram"));
//0
```

# - write a function that takes an array of numbers as an argument and returns the sum of its elements.
# Ans.
```js
let arr =[100,9,5]
let result = (total,num) =>{
    return total+num
}
console.log(arr.reduce(result));
//114
```
# - Create a function that filters strings in an array by their length
# Ans.
```js
let arr=["apple","mango","orange","pineapple","banana"]
let filteredArr=arr.filter((str)=>
   str.length<6
    
)
console.log(filteredArr);
//[ 'apple', 'mango' ]
```
# - Create a function that returns a new array containing the square roots of each number in the original array [1,4,9,16,25](Math.sqrt())
# Ans.
```js
let numbers=[1,4,9,16,25]
let result=numbers.map((num)=>{
   return Math.sqrt(num)
})
console.log(result);
//[ 1, 2, 3, 4, 5 ]
```

# - Write a function that prints the number 1 to 100. But for multiples of 3, print Fizz instead of the number, and for multiples of 5, print Buzz. For the numbers that are multiples of both 3 and 5, print FizzBuzz(write the code in the browser’s snippet and invoke the function inside the console)
# Ans.
```js
let count=1
let outPut=[]
let counter=()=>{
    if(count%3 == 0 && count%5==0){
      outPut.push("FizzBuzz")  
    }
    else if(count%3==0){
        outPut.push("Fizz")
    }
    else if(count%5==0){
        outPut.push("Buzz")
    }
    else {
        outPut.push(count)
    }
    
    count++
    console.log(outPut)
}
counter()
//[ 1 ]
```
