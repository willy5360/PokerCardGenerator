/* eslint-disable */
import "bootstrap";
import "./style.css";

const NUMBER_CENTER = ["A", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const ICON = ["♦", "♥", "♠", "♣"];
const BODY = document.querySelector("body");
const randomIcon = randomValue(ICON);
const randomNumber = randomValue(NUMBER_CENTER);

window.onload = function() {
  createButton();
  createCard();
};

function randomValue(list) {
  return Math.floor(Math.random() * list.length);
}

function createButton() {
  let button = document.createElement("button");
  button.classList.add("btn-grad");
  button.innerHTML = "Randomize me";
  BODY.appendChild(button);
  button.addEventListener("click", () => {
    window.location.reload();
  });
}

function createCard() {
  let card = document.createElement("div");
  card.classList.add("card");
  BODY.appendChild(card);

  let top = document.createElement("div");
  top.classList.add("card-topsuit");
  top.innerHTML = ICON[randomIcon];
  card.appendChild(top);

  let center = document.createElement("div");
  center.classList.add("card-centersuit");
  center.innerHTML = NUMBER_CENTER[randomNumber];
  card.appendChild(center);

  let bottom = document.createElement("div");
  bottom.classList.add("card-bottomsuit");
  bottom.innerHTML = ICON[randomIcon];
  card.appendChild(bottom);

  if (ICON[randomIcon] == "♥" || ICON[randomIcon] == "♦") {
    bottom.classList.add("color-red");
    top.classList.add("color-red");
  } else {
    top.classList.add("color-black");
    bottom.classList.add("color-black");
  }
}
