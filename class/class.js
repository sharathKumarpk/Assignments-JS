/*
const arr=["steny","subin","alvin","sarath"]
arr.push("dary")
console.log(arr);
*/
/* let arr=[[1,2],[3,4],[5,6]]
 arr.pop()
 console.log(arr);*/
 /* let arr=[1,2,3]
 arr.unshift(0)
 console.log(arr);*/
/* let text =[ "steny","subin","alvin","sarath"];
 console.log(text.includes("alvin"));*/
/* let arr= ["Hello","World!"]
let str =arr.toString()
console.log(str);*/

/* let arr = ["Hello","World!"]
let str = arr.reverse()
console.log(str);*/

/* let array =[ "steny","subin","alvin","sarath"];
let str=array.join("-")

console.log(str); */
// const myArr = [1, 2, [3, [4, 5, 6], 7], 8];
// const newArr = myArr.flat(2);
// console.log(newArr);

// let greeting = (a,b) =>
// {
//       let sum=a+b
//    return sum
// }
// console.log(greeting(1,2));
// let arr = [[1,2],[3,4],[5,6]]
// console.log(arr.flat());
//? fill()
/*
let arr = [1,2,3,4,5,6]
console.log(arr.fill("z",1,2));
*/
//? filter()
/*
let arr = [1,2,3,4,5,6]
let outPut = arr.filter((item) => {
    return item < 4
})
console.log(outPut);
*/
// ? every()
/*
let arr = [1,2,3,4,5,6]
let outPut = arr.every((item) => {
    return item > 4
})
console.log(outPut);
*/
// ? some()
/*
let arr =[1,2,3,4,5,6]
let outPut = arr.some((item) => {
    return item > 4
})
console.log(outPut);
*/
// ? map()
/*
let arr =[1,2,3,4,5,6]
let outPut = arr.map((item) => {
    return item * 2
})
console.log(outPut);
*/
// ? index of()
/*
let arr = ["ram","raj","rahul","raju"]
console.log(arr.indexOf("ram"));
*/

//? reduce()
/*
let arr =[100,9,5]
let result = (total,num) =>{
    return total+num
}
console.log(arr.reduce(result));
*/
/*
let myNumbers = [1,2,3,4,5]

let isArr = (arr) =>{
    return Array.isArray(arr)
}
let result = isArr(myNumbers)
console.log(result);
*/
/*
let arr = [1,2,3,4,5]

let firstElement = (arr1) =>{
 return arr1.shift()
}
console.log(firstElement(arr));*/
 /*
 let arr = [1,2,3,4,5]

let lastElement =(arr1) => {
     return arr1.pop()
}
console.log(lastElement(arr));
*/
/*
let myNumbers = [1,2,3,4,5]
let isArr = (arr) =>{
    return Array.isArray(arr)
}
let result = isArr(myNumbers)
console.log(result);
*/
/*
let myNumbers = [0,2,5,4,6,8]
console.log(myNumbers.join("-"));
*/
/*
let num = 32
let isEven = (number) => {
let result = number % 2 === 0 ? console.log(true) :console.log(false);
return result
}

isEven(num)
*/
/*
let checkGuestList = (name) =>{
    let guestList =["alvin","steni","subin","binzy","saliha"]
    return guestList.includes(name)? console.log("welcome"):console.log("Sorry, good luck next time");
   
}
 checkGuestList("sharath")
 */  
/*
let num = 123456789
let toReverse= (number) => {
    let outPut = String(number).split("").reverse().join("")
    return Number(outPut)

}
console.log(toReverse(num));
*/
/*
let txt = "javascript"
let firstLetter = txt.slice(0,1)
let upperCaseLetter = firstLetter.toUpperCase();
let restOfTheLetters = txt.slice(1,  txt.length)
let lowerCaseLetters = restOfTheLetters.toLowerCase()
let nameToDisplay = upperCaseLetter+lowerCaseLetters
console.log(nameToDisplay);
*/
/*
let arr = [1,2,3,4,5,6]
console.log(arr.reverse());
*/
/*
let arr = [1,2,3,4,6,5]
console.log(arr.sort());*/
/*
let arr=[1,2,3,4,5]
let double=arr.forEach((item) => {
    console.log(item*2);
})
 */
/*
let numbers=[1,4,9,16,25]
let result=numbers.map((num)=>{
   return Math.sqrt(num)
})
console.log(result);
*/
/*
let arr=["apple","mango","orange","pineapple","banana"]
let filteredArr=arr.filter((str)=>
   str.length<6
    
)
console.log(filteredArr);
*/
/*
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
*/