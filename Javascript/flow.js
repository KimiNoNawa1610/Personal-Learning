// for loop
console.log("loop starts")
for(let i=0;i<5;i++){
    console.log("something in loop",i)
}
console.log("loop ends")

// for each
let set = [1,2,3,4,5]
set.forEach((ele)=>{
    console.log(ele-1)
})


// while loop
let i = 0
while(i<10){
    console.log(i)
    i++
}

// do while
// start at least one even if the condition is not true
do{
    console.log(i)
    i++
}while(i<100)

// conditional check
const age = 20
if(age >= 20){
    console.log("you are over 20")
}
else if(age < 20){
    console.log("you are not 20") // else if only check one and if that condition is satisfy, it will not check other condition
} else{
    console.log("something else")
}

// logical operator

// and, or, not
console.log(true && false) // and
console.log(true || false) // or
console.log(!true) // not

// switch case
var letter_grade = "A"

switch(letter_grade){ // if we do not use break, the correct case and any cases after it will be executed.
    case "A":
        console.log("you get an A");
        break
    case "B":
        console.log("you get a B");
        break
    case "C":
        console.log("you get a C");
        break
    case "D":
        console.log("you get a D");
        break
    case "F":
        console.log("you fail");
        break
    default:
        console.log("not a valid grade");
        break

}
