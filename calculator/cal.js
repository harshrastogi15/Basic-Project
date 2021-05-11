console.log("hello everyone");

arr = new Array();

function getelement(e) {
    arr.push(e);
    output();
}

function output() {
    if (arr[0] == '-' || arr[0] == '*' || arr[0] == '/') {
        alert("SORRY, THIS CALCULATOR IS NOT WORKING FOR FIRST SIGN.");
    }

    var html = ``;
    arr.forEach(function (element) {
        html += element;
    });
    input = document.getElementById("cal_input");
    input.innerHTML = `<p>${html}</p>`
    // return e;
    result();
}

function result() {
    var arr2 = new Array();
    var html2 = ``;
    for (var i = 0; i < arr.length; i += 1) {
        if (arr[i] == '+' || arr[i] == '-' || arr[i] == '*' || arr[i] == '/') {
            arr2.push(html2);
            html2 = ``;
            arr2.push(arr[i]);
        }
        else {
            html2 += arr[i];
        }
    };
    arr2.push(html2);
    var num;
    for (var i = 0; i < arr2.length; i += 1) {
        if (arr2[i] == '/') {
            num = (Number)(arr2[i - 1]) / (Number)(arr2[i + 1]);
            arr2.splice(i, 2)
            arr2[i - 1] = num;
            i = 0;
        }
    }
    for (var i = 0; i < arr2.length; i += 1) {
        if (arr2[i] == '*') {
            num = (Number)(arr2[i - 1]) * (Number)(arr2[i + 1]);
            arr2.splice(i, 2)
            arr2[i - 1] = num;
            i = 0;
        }
    }
    for (var i = 0; i < arr2.length; i += 1) {
        if (arr2[i] == '+') {
            num = (Number)(arr2[i - 1]) + (Number)(arr2[i + 1]);
            arr2.splice(i, 2)
            arr2[i - 1] = num;
            i = 0
        }
    }
    for (var i = 0; i < arr2.length; i += 1) {
        if (arr2[i] == '-') {
            num = (Number)(arr2[i - 1]) - (Number)(arr2[i + 1]);
            arr2.splice(i, 2)
            arr2[i - 1] = num;
            i = 0;
        }
    }
    num2 = arr2[0];
    input2 = document.getElementById("cal_output");
    input2.innerHTML = `<p>${num2}</p>`
}

function C_clear() {
    arr.pop();
    output();
    result();
}

function CE_clear() {
    arr=new Array();
    output();
    result();
}

