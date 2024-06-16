const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".box");


function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}

createBtn.addEventListener("click",()=>{
    let Box = document.createElement("p");
    let img = document.createElement("img");
    Box.className="box";
    Box.setAttribute("contenteditable","true");
    img.src = "images/delete.png";
    notesContainer.appendChild(Box).appendChild(img);
})

notesContainer.addEventListener("click",function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".box");
        notes.forEach(note=>{
            note.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown",event=>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})