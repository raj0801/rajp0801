var trigger = window.innerHeight / 3;

window.addEventListener("scroll", processall)

function processall() {

    var animation1=document.getElementById("raj");

    var prog=raj.getBoundingClientRect().top;

    if(prog<trigger){
    var progress1 = document.getElementById("doneHTML");
    progress1.style.width = progress1.getAttribute("data-done");

    var progress2 = document.getElementById("doneCSS");
    progress2.style.width = progress2.getAttribute("data-done");

    var progress3 = document.getElementById("doneBOOTSTRAP");
    progress3.style.width = progress3.getAttribute("data-done");

    var progress4 = document.getElementById("doneSASS");
    progress4.style.width = progress4.getAttribute("data-done");

    var progress5 = document.getElementById("doneJAVASCRIPT");
    progress5.style.width = progress5.getAttribute("data-done");

    var progress6 = document.getElementById("doneREACT");
    progress6.style.width = progress6.getAttribute("data-done");
    }
}

