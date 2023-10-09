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
    console.log("you are not 20")
}
