let editButton = document.querySelector(".profile__edit-button");
let popupElement = document.querySelector(".popup");
let closePopupButton = document.querySelector(".popup__close");
let formElement = document.querySelector(".popup__form");
let nameInput = formElement.querySelector(".popup__form-item_name_fullname");
let jobInput = formElement.querySelector(".popup__form-item_name_occupation");
let nameElement = document.querySelector(".profile__name");
let jobElement = document.querySelector(".profile__about");

function editClick () {
  nameInput.value = nameElement.textContent.trim();
  jobInput.value = jobElement.textContent.trim();
  popupElement.classList.add("popup_opened");
}

function closePopup () {
  popupElement.classList.remove("popup_opened");
}

function formSubmitHandler(event) {
  event.preventDefault();

  nameElement.textContent = nameInput.value.trim();
  jobElement.textContent = jobInput.value.trim();

  closePopup();
}

editButton.addEventListener("click", editClick);
closePopupButton.addEventListener("click", closePopup);
formElement.addEventListener("submit", formSubmitHandler);
