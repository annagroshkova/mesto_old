let editButton = document.querySelector(".profile__edit-button");
let popupElement = document.querySelector(".popup");
let closePopupButton = document.querySelector(".popup__close");

editButton.addEventListener("click", function () {
  let formElement = document.querySelector(".popup__container");
  let nameInput = formElement.querySelector(".popup__name");
  let jobInput = formElement.querySelector(".popup__about");
  let nameElement = document.querySelector(".profile__name");
  let jobElement = document.querySelector(".profile__about");
  nameInput.value = nameElement.textContent;
  jobInput.value = jobElement.textContent;
  popupElement.classList.add("popup_opened");
});

closePopupButton.addEventListener("click", function (event) {
  event.preventDefault();
  popupElement.classList.remove("popup_opened");
});

let formElement = document.querySelector(".popup__container");
let nameInput = formElement.querySelector(".popup__name");
let jobInput = formElement.querySelector(".popup__about");

function formSubmitHandler(event) {
  event.preventDefault();

  let nameElement = document.querySelector(".profile__name");
  let jobElement = document.querySelector(".profile__about");

  nameElement.textContent = nameInput.value;
  jobElement.textContent = jobInput.value;

  popupElement.classList.remove("popup_opened");
}

formElement.addEventListener("submit", formSubmitHandler);
