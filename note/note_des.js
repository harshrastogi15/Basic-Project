// console.log("hello everyone");
var move = document.getElementsByClassName("footer");


move[0].addEventListener("mouseenter", function input() {
    var compress = document.getElementById("about");
    compress.style.border = "2px solid black"
    compress.innerHTML = `<h3>About HR NOTE</h3>
                        <p>HR NOTE is created as learning project by Harsh Rastogi.
                         It is a learning project so it is created with the 
                         help of some networks and friends. Its work to keep your note
                        by javascript method and show it to your screen with that time
                         at which you saved your note. If user see any time of
                         error you can mail me at given Email id</p>`

});

move[0].addEventListener("mouseleave",function work(){
    var compress=document.getElementById("about");
    compress.style.border=""
    compress.innerHTML=``

});
