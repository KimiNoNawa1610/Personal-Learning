// function declaration
function greet(){
    console.log("Hello World")
}

// call the function again to run it.
greet()

// function expression
const speak = function(){
    console.log("I can speak")
};

// function expression are called similar to the normal function
speak()

// functions are all declare before the rest of a js file by function declartion but not function expression
// function expression need to be in order (make the function first and call it) 
// while function declaration can be called first and declare later
// function expression are more refreable

// function parameters
const speak_name = function(name){
    console.log(`Hello ${name}`)
}

speak_name("Yu Gi Oh!")

// function return

const cal_area = function(radius){
    let area = 3.14*(radius**2)
    return area
}

const area = cal_area(2.5) // return the area value and store to a new constant
console.log(area) 
