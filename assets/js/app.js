/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
require('../css/app.scss');

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// const $ = require('jquery');



let modal1 = document.getElementById('myModal1');
let modal2 = document.getElementById('myModal2');
let modal3 = document.getElementById('myModal3');
let modal4 = document.getElementById('myModal4');

let btn1 = document.getElementById('btnModal1');
let btn2 = document.getElementById('btnModal2');
let btn3 = document.getElementById('btnModal3');
let btn4 = document.getElementById('btnModal4');
let btn5 = document.getElementById('btnModal5');
let btn6 = document.getElementById('btnModal6');

let span1 = document.getElementById('closeModal1');
let span2 = document.getElementById('closeModal2');
let span3 = document.getElementById('closeModal3');
let span4 = document.getElementById('closeModal4');

window.onresize = function() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "none";
    modal3.classList.remove("fadeIn");
    modal4.classList.remove("fadeIn");
}

btn1.onclick = function() {
    modal1.style.display = "block";
    modal2.style.display = "none";
}
span1.onclick = function() {
    modal1.style.display = "none";
}
btn2.onclick = function() {
    modal2.style.display = "block";
    modal1.style.display = "none";
}
span2.onclick = function() {
    modal2.style.display = "none";
}

btn3.onclick = function() {
    modal3.style.display = "block";
    modal4.style.display = "none";
    modal3.classList.add("fadeIn");
    modal4.classList.remove("fadeIn");
}
span3.onclick = function() {
    modal3.style.display = "none";
    modal3.classList.remove("fadeIn");
    modal4.classList.add("fadeIn");
}
btn4.onclick = function() {
    modal4.style.display = "block";
    modal3.style.display = "none";
    modal3.classList.remove("fadeIn");
    modal4.classList.add("fadeIn");
}
span4.onclick = function() {
    modal4.style.display = "none";
    modal3.classList.add("fadeIn");
    modal4.classList.remove("fadeIn");
}
btn5.onclick = function() {
    document.getElementById("mySidenav").style.width = "350px";
    document.getElementById("main").style.marginLeft = "350px";
    document.body.style.backgroundColor = "rgba(35,114,124,0.5)";
}

btn6.onclick = function() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    modal[0].style.display = "none";
    modal[1].style.display = "none";
    modal[2].style.display = "none";
    modal[3].style.display = "none";
    modal[0].classList.remove("fadeIn");
    modal[1].classList.remove("fadeIn");
    modal[2].classList.remove("fadeIn");
    modal[3].classList.remove("fadeIn");
    document.body.style.backgroundColor = "rgba(35,114,124,0.5)";
}