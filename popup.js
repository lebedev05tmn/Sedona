let btnOpen = document.querySelector(".onclick__btn");
let popUp = document.querySelector(".page__popup");
let closePopup = document.querySelector(".popup__close");
btnOpen.onclick = function () {
  popUp.classList.add("popup__display");
};
closePopup.onclick = function () {
  popUp.classList.remove("popup__display");
};
