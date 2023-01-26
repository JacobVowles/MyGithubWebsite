"use strict";
const boxes = document.getElementsByClassName("item");
const moreButton = document.getElementsByTagName("button");
const modals = document.getElementsByClassName("modal");
const overlay = document.getElementsByClassName("overlay");

//functions
function hideOverlay() {
  overlay[0].classList.remove("hidden");
}
function closeModal() {
  overlay[0].classList.add("hidden");
  for (let i = 0; i < modals.length; i++) {
    modals[i].classList.add("hidden");
  }
}

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("mouseover", function () {
    boxes[i].classList.add("onHover");
  });
  boxes[i].addEventListener("mouseleave", function () {
    boxes[i].classList.remove("onHover");
  });
}
for (let i = 0; i < moreButton.length; i++) {
  moreButton[i].addEventListener("click", function () {
    modals[i].classList.remove("hidden");
    hideOverlay();
  });
}
overlay[0].addEventListener("click", closeModal);
