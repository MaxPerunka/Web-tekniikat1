const text1 = document.getElementById("fname");
const text2 = document.getElementById("note");
const button1 = document.getElementById("button");
const out1 = document.getElementById("output1");

var time = new Date();
var date = time.getFullYear()+'.'+(time.getMonth()+1)+'.'+time.getDate();

function display() {
    out1.innerHTML += "<p>" + "<strong>" + date + " " + "(" + text1.value + ")" + "</strong>" + "<br>" + text2.value + "</p>"  ;
}



button1.addEventListener('click',display);