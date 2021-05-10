console.log("hello everyone");
shownotes();
var submit=document.getElementsByClassName("contain");

submit[0].addEventListener("click",function input(){
    var note_tittle =document.getElementById("note-tittle");
    var note_text =document.getElementById("text");
    var notes=localStorage.getItem("notes");
    // console.log(notes);
    if(notes==null){
        notes_obj=[];
    }
    else{
        notes_obj=JSON.parse(notes);
    }

    if(note_text.value==""){
        let confirmation=confirm("Do you want to save? You are not written anynotes.");
        if(confirmation==false){
        return;}
    }
    note_date=Date();
    note_W_tittle={
        Tittle:note_tittle.value,
        Text:note_text.value.toLowerCase(),
        date:note_date
    };
    notes_obj.push(note_W_tittle);
    localStorage.setItem("notes",JSON.stringify(notes_obj));
    note_text.value="";
    note_tittle.value="";
    shownotes();
});

function shownotes(){
    var notes=localStorage.getItem("notes");
    if(notes==null){
        notes_obj=[];
    }
    else{
        notes_obj=JSON.parse(notes);
    }
   
    let html=``;
    notes_obj.forEach(function(element,index) {
        html+=`<div class="out_notes">
            <h3>${element.Tittle}</h3> 
            <p>${element.Text}</p>
            <h6 id="date">${element.date}</h6>
            <button id="${index}" onclick="DeleteNote(this.id)">Delete</button>
            </div>`;
    });
    let notesElm=document.querySelector(".output");
    if(notes_obj.length!=0){
        notesElm.innerHTML = html;
    }
    else{
        notesElm.innerHTML = `<h2>Here is no note. let's begin to write some note</h2>`;
    }
}

function DeleteNote(index){
    let del=confirm(`Do you want to delete?`)
    if(del==false){return;}
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notes_obj=[];
    }
    else{
        notes_obj=JSON.parse(notes);
    }
    notes_obj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notes_obj));
    shownotes();
}

let search = document.getElementById("search");
search.addEventListener("input",function (){
    let input_value=search.value.toLowerCase();
    let item=document.getElementsByClassName("out_notes");
    Array.from(item).forEach(function(element){
        let text_search1=element.getElementsByTagName("p")[0].innerText;
        let text_search2=element.getElementsByTagName("h3")[0].innerText;
        
        
        if(text_search1.includes(input_value) || text_search2.includes(input_value)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
});














