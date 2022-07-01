var more=document.getElementById("more");
var btn=document.getElementById("btn");

console.log("hello");
function myfunction(){
more.classList.toggle('hide');
btn.innerHTML = more.classList.contains('hide') ? "Read More" : "Read Less" ;
}