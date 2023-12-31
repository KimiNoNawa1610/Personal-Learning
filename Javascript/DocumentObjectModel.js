// Document Object Model (DOM)

const para = document.querySelector("p"); // goes into the document, from top to bottom and grab the first p tag
console.log(para)

const err = document.querySelector("div.error") // only select the first div with the class error
console.log(err)

const multi_para = document.querySelectorAll("p") // this will select all p tag and stored as a collection
console.log(multi_para)

multi_para.forEach((para,index)=>{// using multi_para with forEach method
    console.log(para,index)
})

const title = document.getElementById("title")// get element based on the id. We can also get element by class name
console.log(title)

// we cannot use the forEach method for getElementById and getElementByClassName
// because they will return html collections if multiple same classname or id

const par = document.querySelector('p')
console.log(par.innerText)
par.innerText = "OKKKK" // update the text of the html
par.innerText += " 123" // concatenate the text

const mul_par = document.querySelectorAll("p")
mul_par.forEach((para,index)=>{
    para.innerText += " "+index
})

// there are also getAttribute and setAttribute to change an attribute of an element.

// we can change class of html element with js
const content = document.querySelector("p")// get the first p tag element and add class to success
console.log(content.classList);
content.classList.add("success")// to remove class content.classlist.remove("class_name")

// cycle through html collections
const article = document.querySelector("article")
console.log(article.children)

// turn the html collections to an array
let new_array = Array.from(article.children) // convert html or any other type to an array. 
console.log(new_array)
new_array.forEach((child)=>{
    child.classList.add("article-element");// now all element in the article has this class
})

const h_3 = document.querySelector("h3")
console.log(h_3.parentElement) // get the parent element of the html element
console.log(h_3.nextSibling) // get the next siblings of the html element
console.log(h_3.previousSibling) // get the previous siblings of the html element

