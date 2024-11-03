var addbutton=document.querySelector(".add-button")
var overlay=document.querySelector(".overlay")
var popup=document.querySelector(".popup")
var cancelbook=document.getElementById("cancel-book")

addbutton.addEventListener("click",function(){
overlay.style.display="block"
popup.style.display="block"
}
)
cancelbook.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display="none"
    popup.style.display="none"
})

var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var bookauthorinput=document.getElementById("book-author-input")
var booktitleinput=document.getElementById("book-title-input")
var bookdescription=document.getElementById("book-description")

addbook.addEventListener("click",function(event){
event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
                <h5>${bookauthorinput.value}</h5>
                <p>${bookdescription.value}</p>
                <button onclick="closetab(event)">close</button>`
                container.append(div)
    overlay.style.display="none"
    popup.style.display="none"
})
function closetab(event)
{
event.target.parentElement.remove()
}
