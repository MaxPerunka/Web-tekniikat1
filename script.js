const text1 = document.getElementById("fname");
const text2 = document.getElementById("note");
const button1 = document.getElementById("button");
const out1 = document.getElementById("output1");

function display() {
    out1.innerHTML = text1.value;
}

button1.addEventListener('click',display);