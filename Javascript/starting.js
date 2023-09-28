//js running top to buttom

console.log(1);
console.log(2);

// variable
// let allow us to override variable

let age = 25;
let year = 2019
console.log(age,year)

// const
// const cannot be override. And it will cause error if we try to override them
const string= "cannot override";
console.log(string)

// var
// var can be override, similar to let, older way to make variable
var score = 75;
console.log(score)

// there are reserve keywords in js. Following the link to find more detail: https://www.w3schools.com/js/js_reserved.asp

/*----------------------------------------------------------------------------------------------------------------------- */

//Data Types: https://www.programiz.com/javascript/data-types

// STRING

console.log("Hello World")
let email = "email@email.com"
console.log(email)

// string concatination
let first_name = "Brandon"
let last_name = "Anderson"
let full_name = first_name+" "+last_name
console.log(full_name)

// extract character from a string
console.log(full_name[1])

// String methods/ properties
console.log(full_name.length) // find the length of the string
console.log(full_name.toLocaleUpperCase()) // make the string to upper case
console.log(full_name.toLocaleLowerCase()) // make the string to lower case
console.log(typeof(full_name)) // get what type of the full_name variable
console.log(email.indexOf("@")) // get index of a character from a string
console.log(email.lastIndexOf("e")) // get the last index of a character from a string

// slice - slice a section from a string

console.log(email.slice(0,2)) // slice from position (x,y-1)
console.log(email.substring(2,5)) // get how many characters from the starting position
console.log(email.replace("@","%")) // replace a character with another character in the string

// NUMBER

let radius = 10
const pi = 3.14
console.log(radius, pi)

// number math operation
console.log(radius+pi)
console.log(radius*pi)
console.log(radius-pi)
console.log(radius**pi)
console.log(radius/pi)
console.log(radius%pi)
radius++
console.log(radius)
radius--
radius--
console.log(radius)
radius+=10
console.log(radius)

//template string
//instead of using string concatenation, which sometimes can be complicated and make the code messy, 
//we can use template string

const title = "Best reads of 2019"
const author = "Mario"
const likes = 30;
let result = `The blog called ${title} by ${author} has ${likes}`
console.log(result)