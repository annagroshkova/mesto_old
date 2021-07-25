let editButton = document.querySelector(".profile__edit-button");
let popupElement = document.querySelector(".popup");
let closePopupButton = document.querySelector(".popup__close");
let formElement = document.querySelector(".popup__container");
let nameInput = formElement.querySelector(".popup__name");
let jobInput = formElement.querySelector(".popup__about");
let nameElement = document.querySelector(".profile__name");
let jobElement = document.querySelector(".profile__about");

editButton.addEventListener("click", function () {
  nameInput.value = nameElement.textContent.trim();
  jobInput.value = jobElement.textContent.trim();
  popupElement.classList.add("popup_opened");
});

closePopupButton.addEventListener("click", function () {
  popupElement.classList.remove("popup_opened");
});

function formSubmitHandler(event) {
  event.preventDefault();

  nameElement.textContent = nameInput.value.trim();
  jobElement.textContent = jobInput.value.trim();

  popupElement.classList.remove("popup_opened");
}

formElement.addEventListener("submit", formSubmitHandler);
