
const button = document.querySelector("button")

// more events can be seen at https://developer.mozilla.org/en-US/docs/Web/Events
button.addEventListener('click',()=>{
    console.log("button clicked")
})

const ul = document.querySelector("ul") 
//ul.remove() // remove element from the html
const e_li = document.createElement("li")
const s_li = document.createElement("li")
e_li.textContent = "new list item end"
s_li.textContent = "new list item start"
ul.append(e_li) // add the new item to the end of html page
ul.prepend(s_li) // add the new item to the start of html page

// const items = document.querySelectorAll("li");
// console.log(items)
// items.forEach((element) => {
//     element.addEventListener('click',(e)=>{
//         console.log(e.target.innerText+" item clicked in li")
//         e.stopPropagation()// stop the event bubbling to the parent
//     })
// });


// event bubbling the event of the children will trigger the event of the parent
ul.addEventListener('click',(e)=>{
    //console.log("event in ul")

    // instead of add event listener to each children, we can add that to a parent and apply for all children
    if (e.target.tagName === 'LI'){
        console.log(e.target.innerText+" clicked")
    }
    
})

// making popup

const popup_button = document.querySelector(".popup-button")
const popup = document.querySelector(".popup-wrapper")
const close = document.querySelector(".popup-close")
popup_button.addEventListener('click',()=>{
    popup.style.display = 'block'
})
close.addEventListener('click',()=>{
    popup.style.display = 'none'
})