
// Popup edit
const popupEdit = document.querySelector(".popup_name_edit");
const popupCloseButton = document.querySelector(".popup__close");
const editButton = document.querySelector(".profile__edit-button");
const editFormElement = document.querySelector(".popup__form");
const nameInput = editFormElement.querySelector(".popup__form-item_name_fullname");
const jobInput = editFormElement.querySelector(".popup__form-item_name_occupation");


document.addEventListener('keydown', evt => {
  if(evt.key !== 'Escape') return

  const popupOpened = document.querySelector('.popup_opened');
  if(popupOpened) {
    closePopup(popupOpened);
  }
});


popupEdit.addEventListener('click', evt => onPopupClick(evt))



// Popup add
const popupAdd = document.querySelector(".popup_name_add");
const profileAddButton = document.querySelector(".profile__add-button");
const popupAddCloseButton = popupAdd.querySelector(".popup__close_name_add");

popupAdd.addEventListener('click', evt => onPopupClick(evt));


// Popup image
const popupNameImage = document.querySelector('.popup_name_image');
const formAddElement = document.querySelector(".popup__form_name_add");
const placeNameInput = formAddElement.querySelector(".popup__form-item_name_picture-title");
const placeLinkImput = formAddElement.querySelector(".popup__form-item_name_picture-link");
const popupCloseImageButton = popupNameImage.querySelector('.popup__close_name_image');
const popupImage = document.querySelector('.popup__image');
const popupImageTitle = document.querySelector('.popup__image-title');

popupNameImage.addEventListener('click', evt => onPopupClick(evt));


// Other
const nameElement = document.querySelector(".profile__name");
const jobElement = document.querySelector(".profile__about");
const placesElement = document.querySelector('.places');
const placeTemplate = document.querySelector('#place').content;


function onPopupClick(evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup(evt.target)
  }
}

function onKeyPress(evt, popup) {
  if (evt.key === 'Escape') {
    closePopup(popup)
  }
}


function editClick () {
  nameInput.value = nameElement.textContent.trim();
  jobInput.value = jobElement.textContent.trim();
  openPopup(popupEdit)
}

function openPopup(popup) {
  popup.classList.add("popup_opened")
}

function closePopup (popup) {
  popup.classList.remove("popup_opened");
}

function formSubmitHandler(event) {
  event.preventDefault();

  nameElement.textContent = nameInput.value.trim();
  jobElement.textContent = jobInput.value.trim();

  closePopup(popupEdit);
}

editButton.addEventListener("click", editClick);
popupCloseButton.addEventListener("click", () => closePopup(popupEdit));
editFormElement.addEventListener("submit", formSubmitHandler);


const initialPlaces = [
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


function createCard(name, link) {
  const card = placeTemplate.cloneNode(true)
  const img = card.querySelector('.places__image')
  img.src = link
  img.alt = name
  card.querySelector('.places__title').textContent = name

  card.querySelector('.places__image-button').addEventListener('click', function () {
    popupImage.src = link;
    popupImage.alt = name;
    popupImageTitle.textContent = name;
    openPopup(popupNameImage)
  });

  card.querySelector('.places__like-button').addEventListener('click', function (evt) {
    const eventTarget = evt.target;
    eventTarget.classList.toggle('places__like-button_active');
  });

  card.querySelector('.places__delete-button').addEventListener('click', function (evt) {
    evt.target.closest('.places__place').remove();
  });

  return card
}

profileAddButton.addEventListener("click", () => openPopup(popupAdd));

popupAddCloseButton.addEventListener("click", () => closePopup(popupAdd));

popupCloseImageButton.addEventListener("click", () => closePopup(popupNameImage));


formAddElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const card = createCard(placeNameInput.value, placeLinkImput.value);
  placesElement.prepend(card);
  closePopup(popupAdd);
});

initialPlaces.forEach((place) => {
  const card = createCard(place.name, place.link)
  placesElement.append(card)
})

