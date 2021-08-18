
const places = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {

    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];




const placesElement = document.querySelector('.places');
const addButton = document.querySelector(".profile__add-button");
const popupAdd = document.querySelector(".popup_name_add");
const closePopupAddButton = popupAdd.querySelector(".popup__close_name_add");

const addFormElement = document.querySelector(".popup__form_name_add");
const placeNameInput = addFormElement.querySelector(".popup__form-item_name_picture-title");
const placeLinkImput = addFormElement.querySelector(".popup__form-item_name_picture-link");






function addClick () {
  popupAdd.classList.add("popup_opened");
}

function closePopupAdd () {
  popupAdd.classList.remove("popup_opened");
}


function updatePlaces() {
  const placesHTML = places.map((place) => {
    return `
    <div class="places__place">
      <button type="button" class="places__image-button"><img
        class="places__image"
        src="${place.link}"
        alt="${place.name}"
      /></button>
      <button class="places__delete-button" type="button"></button>
      <div class="places__info">
        <h2 class="places__title">${place.name}</h2>
        <button class="places__like-button" type="button"></button>
      </div>
    </div>
    `
  }).join('')

  placesElement.innerHTML = placesHTML
}


addButton.addEventListener("click", addClick);

closePopupAddButton.addEventListener("click", closePopupAdd);


addFormElement.addEventListener("submit", (event) => {
  event.preventDefault();
  places.unshift(
    {name: placeNameInput.value,
     link: placeLinkImput.value
    })
    updatePlaces();
    closePopupAdd();
});

updatePlaces();


