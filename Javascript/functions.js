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

// Arrow Function
// function to calculate sphere radius
const cal_volume = (radius) => {
    let volume = 4/3*(3.14)*(radius**3)
    return volume.toPrecision(6) //round to the 4th decimal
}

const vol = cal_volume(2.4)
console.log(vol)

const bill = (products, tax) => {
    let total = 0 
    products.forEach(product => {
        total += product + product * tax
    });
    return total 
}

var gundams = [10,20,30,15,120,1]
const new_bill = bill(gundams,0.75)
console.log(new_bill)

// Function vs Method

// method
// method is just a function that is related to an object or datatype



