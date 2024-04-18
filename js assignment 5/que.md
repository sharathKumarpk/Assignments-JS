# 1 Write short notes on string methods with code examples

# toLowerCase()
# toUpperCase()
# substring()
# replace()
# trim()
# split()
# slice()

# Ans. 
# toLowerCase():method converts a string to lowercase letters.
#               method does not change the original string.
```js
let str ="ZAREEL"
console.log(str.toLowerCase())

output= zareel

```
# toUpperCase():The `toUpperCase()` function in JavaScript is a method that allows you to convert a JavaScript string to uppercase
```js
let str = "ZAREEL"
console.log(str.toUpperCase())

output=ZAREEL
```

# substring():The substring() method extracts characters, between two indices (positions), from a string, and returns the substring. 
```js
let str = "what is name ,my name is ?"
let substr = str.substring(0,15)
console.log(substr)

output=what is name ,m
```

# replace():It is used to replace a specified substring or pattern in a string with a new substring or pattern.
```js
let wish = " hey subin"
let newwish = (wish.replace("hey","hello"))
console.log(newwish)

output=hello subin
```

# trim():It is a built-in string method that removes whitespace characters from the beginning and end of a string. 
```js
let name = " zareel "
console.log(name.trim())

output=zareel
```
# split():splits a string into an array of substrings.
```js
let str = "what is my name"
console.log(str.split())
let str = "what is my name"
console.log(str.split(""))
let str = "what is my name"
console.log(str.split(" "))

output=["what is my name"]
output=["w","h","a","t"," ","i","s"," ","m","y"," ","n","a","m","e"]
output=["what","is","my","name"]
```

# slice():It is used to extracts a part of a string
```js
let str = "subin"
console.log(str.slice(0,3))

output=sub
```

# 2 create a simple app that takes the user’s name and greets him/her after capitalizing the first letter of the user’s name and changing the rest of the letters into lowercase (toUpperCase(), toLowerCase(), slice(), length property, string concatenation)
# Ans.
```js
let str = prompt("Enter your name")
let firstLetter = str.slice(0,1)
let upperCaseFirstLetter = firstLetter.toUpperCase();
let restOfTheLetters = str.slice(1,  str.length)
let lowerCaseLetters = restOfTheLetters.toLowerCase()
let nameToDisplay = upperCaseFirstLetter+lowerCaseLetters
let greeting = "hello " + nameToDisplay
alert(greeting);
```
![screenshot 1](./Screenshot%20(19).png)
![screenshot 2](./Screenshot%20(20).png)
