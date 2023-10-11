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

