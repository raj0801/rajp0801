var more = document.getElementById("more");
var btn = document.getElementById("btn");


function myfunction() {
    more.classList.toggle('hide');
    btn.innerHTML = more.classList.contains('hide') ? "Read More" : "Read Less";
}

var more1 = document.getElementById("more-1");
var btn1 = document.getElementById("btn-1");

function myfunction1() {
    more1.classList.toggle('hide-1');
    btn1.innerHTML=more1.classList.contains('hide-1') ? "Read More" : "Read Less";
}