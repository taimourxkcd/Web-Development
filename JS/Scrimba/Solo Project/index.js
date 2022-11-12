
let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");
let btn3 = document.getElementById("btn-3");

let scoreHome = document.getElementById("home-score");
let scoreGuest = document.getElementById("guest-score");



let count = 0;

function Hplus1(){
    count += 1;
    scoreHome.textContent = count;
}
function Hplus2(){
    count += 2;
    scoreHome.textContent = count;
}
function Hplus3(){
    count += 3;
    scoreHome.textContent = count;
}

function Gplus1(){
    count += 1;
    scoreGuest.textContent = count;
}
function Gplus2(){
    count += 2;
    scoreGuest.textContent = count;
}
function Gplus3(){
    count += 3;
    scoreGuest.textContent = count;
}

