let randomNumber1 = Math.floor(Math.random() * 6) + 1;


if(randomNumber1 == 1) {
    let img1 = document.querySelector(".img1");
    img1.setAttribute("src", "images/dice1.png");
}
else if(randomNumber1 == 2) {
    let img1 = document.querySelector(".img1");
    img1.setAttribute("src", "images/dice2.png");
}
else if(randomNumber1 == 3) {
    let img1 = document.querySelector(".img1");
    img1.setAttribute("src", "images/dice3.png");
}
else if(randomNumber1 == 4) {
    let img1 = document.querySelector(".img1");
    img1.setAttribute("src", "images/dice4.png");
}
else if(randomNumber1 == 5) {
    let img1 = document.querySelector(".img1");
    img1.setAttribute("src", "images/dice5.png");
}
else {
    let img1 = document.querySelector(".img1");
    img1.setAttribute("src", "images/dice6.png");
}



let randomNumber2 = Math.floor(Math.random() * 6) + 1;

if(randomNumber2 == 1) {
    let img2 = document.querySelector(".img2");
    img2.setAttribute("src", "images/dice1.png");
}
else if(randomNumber2 == 2) {
    let img2 = document.querySelector(".img2");
    img2.setAttribute("src", "images/dice2.png");
}
else if(randomNumber2 == 3) {
    let img2 = document.querySelector(".img2");
    img2.setAttribute("src", "images/dice3.png");
}
else if(randomNumber2 == 4) {
    let img2 = document.querySelector(".img2");
    img2.setAttribute("src", "images/dice4.png");
}
else if(randomNumber2 == 5) {
    let img2 = document.querySelector(".img2");
    img2.setAttribute("src", "images/dice5.png");
}
else {
    let img2 = document.querySelector(".img2");
    img2.setAttribute("src", "images/dice6.png");
}



if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!!";
}
else if(randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!!";
}
else {
    document.querySelector("h1").innerHTML = "DRAW!!";
}
