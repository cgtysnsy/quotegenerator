import { sentences } from "./data.js";
console.log("sentences", sentences);

//global variables
const btn = document.querySelector(".generate-btn");
const box = document.querySelector(".quote-box");

const quoteShown = document.querySelector(".quote-shown");
const owner = document.querySelector(".owner-shown");
const boxQuote = document.querySelector(".quote-box-span");
const boxSecondQuote = document.querySelector(".quote-box-span2");
//random color for quote boxes
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
box.addEventListener("mouseover", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  // console.log(hexColor);

  box.style.backgroundColor = hexColor;
  boxQuote.innerText =
    sentences[numberOfquote()]["quot"] + sentences[numberOfquote()]["by"];
});
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

//generate quote with button

btn.addEventListener("click", function () {
  const randomQuote = numberOfquote;

  quoteShown.innerText = sentences[randomQuote()]["quot"];
  owner.innerText = sentences[randomQuote()]["by"];
});
function numberOfquote() {
  return Math.floor(Math.random() * sentences.length);
}

boxSecondQuote.innerText = sentences[3]["quot"];
