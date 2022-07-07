var d=new Date();
document.querySelector("#date").innerHTML=d.toLocaleString('default',{day:'numeric',month:'long',year:'numeric'});

var d1=new Date();
document.querySelector("#date1").innerHTML=d1.toLocaleString('default',{day:'numeric',month:'long',year:'numeric'});

var more = document.getElementById("more");
var btn = document.getElementById("btn");


function myfunction() {
    more.classList.toggle('hide');
    btn.innerHTML = more.classList.contains('hide') ? "Read More" : "Read Less";
}

var more1 = document.getElementById("more-1");
var btn1 = document.getElementById("btn-1");

function myfunction1() {
    more1.classList.toggle('hide');
    btn1.innerHTML=more1.classList.contains('hide') ? "Read More" : "Read Less";
}