let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomImageSource1 = "images/dice" + randomNumber1 + ".png";

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if (randomNumber1 > randomNumber2) document.querySelector("h1").innerHTML = "🥳 ¡Gana el Jugador 1!";
else if (randomNumber1 < randomNumber2) document.querySelector("h1").innerHTML = "🥳 ¡Gana el Jugador 2!";
else document.querySelector("h1").innerHTML = "¡Empate!";
