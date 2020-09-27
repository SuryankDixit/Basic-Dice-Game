let num1 = Math.floor((Math.random() * 6) + 1);
let num2 = Math.floor((Math.random() * 6) + 1);

img1 = "images/dice" + String(num1) + ".png";
img2 = "images/dice" + String(num2) + ".png";

console.log(img1);
console.log(img2);

document.querySelector("img.img1").setAttribute("src", img1);
document.querySelector("img.img2").setAttribute("src", img2);

if (num1 > num2) {
    document.querySelector("h2").innerHTML = "Player1 Wins!";
} else if (num2 > num1) {
    document.querySelector("h2").innerHTML = "Player2 Wins!";
} else {
    document.querySelector("h2").innerHTML = "Draw!";
}