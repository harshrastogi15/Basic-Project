
var squares = document.querySelectorAll(".square");
var setColor = document.getElementById("display");
var headColor = document.querySelector(".header");
var checkResult = document.getElementById("result");
var checkRestart = document.getElementById("restart");
var EasyBtn = document.querySelector(".easyBtn");
var HardBtn = document.querySelector(".hardBtn");
var table = document.getElementById("showResultTable");


var box = 6;
var colors = color_decide(box);
start();
var html = `    <tr>
                <th>Chance</th>
                <th>Points</th>
                <th></th>
                </tr>
            `;
var count=0;
var getPoint=0;

var appreciate=``;


EasyBtn.addEventListener("click", function () {
    EasyBtn.classList.add("selected");
    HardBtn.classList.remove("selected");
    box = 3;
    colors = color_decide(box);
    start();
    checkResult.innerHTML = ``;
    checkRestart.textContent = "New Color";
    headColor.style.backgroundColor = `rgb(0, 0, 0)`;

    for (var i = 0; i < squares.length; i++) {
        if (!colors[i]) {
            squares[i].style.display = "none";
        }
        else {
            squares[i].style.display = "block";
        }
    }
});

HardBtn.addEventListener("click", function () {
    HardBtn.classList.add("selected");
    EasyBtn.classList.remove("selected");
    box = 6;
    colors = color_decide(box);
    start();
    checkResult.innerHTML = ``;
    checkRestart.textContent = "New Color";
    headColor.style.backgroundColor = `rgb(0, 0, 0)`;

    for (var i = 0; i < squares.length; i++) {
        if (!colors[i]) {
            squares[i].style.display = "none";
        }
        else {
            squares[i].style.display = "block";
        }
    }
});

function start() {
    getPoint=0;
    getcolor = color_choose(box);
    setColor.innerHTML = `<h2>${getcolor}</h2>`;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
}


for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function () {
        checkColor = this.style.backgroundColor;
        if (checkColor === getcolor) {
            for (var i = 0; i < squares.length; i++) {
                squares[i].style.backgroundColor = checkColor;
            }
            headColor.style.backgroundColor = checkColor;
            checkResult.innerHTML = `<span>Correct!(+5)</span>`;
            checkRestart.textContent = "New Color";
            setTimeout(function () {
                colors = color_decide(box);
                start();
                checkResult.innerHTML = ``;
                checkRestart.textContent = "New Color";
                headColor.style.backgroundColor = `rgb(0, 0, 0)`;
            }, 300);
            count+=1;
            getPoint+=5;
            table_show();
        }
        else {
            this.style.backgroundColor = `rgb(0, 0, 0)`;
            checkResult.innerHTML = `<span>Try Again(-1)</span>`;
            checkRestart.textContent = "New Game";
            getPoint-=1
        }
    });
}

function color_choose(getNum) {
    var num = Math.floor(Math.random() * getNum);
    return colors[num];
}

function color_decide(num1) {
    var arr = new Array();
    for (let i = 0; i < num1; i++) {
        R = Math.floor((Math.random() * 254) + 1);
        G = Math.floor((Math.random() * 254) + 1);
        B = Math.floor((Math.random() * 254) + 1);
        arr.push("rgb(" + R + ", " + G + ", " + B + ")");
    }
    return arr;
}

//new game or new color functioning

checkRestart.addEventListener("click", function () {
    colors = color_decide(box);
    start();
    checkResult.innerHTML = ``;
    headColor.style.backgroundColor = `rgb(0, 0, 0)`;

});



function table_show() {
    if(getPoint==5){
        appreciate=`Excellent`;
    }else if(getPoint==4){
        appreciate=`Very Good`;
    }else if(getPoint==3){
        appreciate=`Good`;
    }else if(getPoint==2){
        appreciate=`Bad`;
    }else if(getPoint==1){
        appreciate=`Very Bad`;
    }else{
        appreciate=`Looser`;
    }
    html += `<tr>
                <td>${count}</td>
                <td>${getPoint}</td>
                <td id="tabletd3">${appreciate}</td>
             </tr>
              `
    table.innerHTML = html;
}