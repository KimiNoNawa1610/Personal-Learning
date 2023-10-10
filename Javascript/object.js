// object literals
let user = {
    name: "crystal",
    age: 30,
    email:"crystal@gmail.com",
    blogs:["ggez"]
}// this is the syntax to make an object literals

console.log(user)
console.log(user.name)
console.log(user['name'])// the same as user.name
console.log(user.email)
user.email = "changed"
console.log(user.email)

// adding method to object
let new_user = {
    name: "Talon",
    age: 30,
    email:"Talon@gmail.com",
    blogs:["gg not ez","ok1","DCME"],
    login: ()=>{console.log("new user logged in")},// this is how we can add method to an object
    logout: ()=>{console.log("user logged out")},
    getblog(){this.blogs.forEach((blog,index)=>{
        console.log(blog,index)
    })} // this keyword cannot be used with an arrow function
}
new_user.login()
new_user.getblog()
new_user.logout()

// Math object
// helpful method for mathematical computation
console.log(Math)

// primitives types are stored in a stack (limited space but faster to access)
// while refrenece types are stored in heap (more space but slower)