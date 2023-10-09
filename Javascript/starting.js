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

// good use case for template string is to create html template
let html =`
<h2>${title}</h2>
<p>By ${author}</p>
<span>This blog has ${likes} likes</span>
`

// ARRAY
// we can store different datatype in an array
let ninjas = ['shaun','ryu','chun-li']
console.log(ninjas[1])
ninjas[1] = 'fate'
console.log(ninjas)
let many = ['ok',12,213,'random']
console.log(many)


// get the index
console.log(ninjas.indexOf('fate'))

// concat two arrays
let new_list = ninjas.concat(many) // return a combination of the two lists
console.log(new_list)

// push element into an array (destructive methods)
ninjas.push('ken')
console.log(ninjas)

// pop element out of an array
let ken = ninjas.pop()
console.log(ken)

// null and undefine
let n = null // we use null when we initiate a variable or clear a variable

// boolean
let t = true
let f = false

console.log(true=="true") // expected false
console.log(true==="true") // expected false
console.log(false == "false") // expected false
console.log(false ==="false") // expected false

let ggez = 'ggez'
console.log(ggez.includes("gg")) // expected true


// there are two type of equal comparision in Javascript,
// one is the == which will do a conversion of the two value two see if they are equal
// second is === which will do a strict compare with the type and value of the two sides of the comparison. 

// Type conversion

score = "1000"
score = Number(score)
console.log(typeof(score))

// string of any len is always true
console.log(String(f),typeof(String(f)))
