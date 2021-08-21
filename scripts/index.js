const editButton = document.querySelector(".profile__edit-button");
const popupElement = document.querySelector(".popup");
const popupCloseButton = document.querySelector(".popup__close");
const editFormElement = document.querySelector(".popup__form");
const nameInput = editFormElement.querySelector(".popup__form-item_name_fullname");
const jobInput = editFormElement.querySelector(".popup__form-item_name_occupation");
const nameElement = document.querySelector(".profile__name");
const jobElement = document.querySelector(".profile__about");

function editClick () {
  nameInput.value = nameElement.textContent.trim();
  jobInput.value = jobElement.textContent.trim();
  openPopup(popupElement)
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

  closePopup(popupElement);
}

editButton.addEventListener("click", editClick);
popupCloseButton.addEventListener("click", () => closePopup(popupElement));
editFormElement.addEventListener("submit", formSubmitHandler);


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
const profileAddButton = document.querySelector(".profile__add-button");
const popupAdd = document.querySelector(".popup_name_add");
const popupAddCloseButton = popupAdd.querySelector(".popup__close_name_add");

const formAddElement = document.querySelector(".popup__form_name_add");
const placeNameInput = formAddElement.querySelector(".popup__form-item_name_picture-title");
const placeLinkImput = formAddElement.querySelector(".popup__form-item_name_picture-link");
const popupNameImage = document.querySelector('.popup_name_image');
const popupCloseImageButton = popupNameImage.querySelector('.popup__close_name_image');
const popupImage = document.querySelector('.popup__image');
const popupImageTitle = document.querySelector('.popup__image-title');
const placeTemplate = document.querySelector('#place').content

function updatePlaces() {
  placesElement.innerHTML = ''

  places.forEach((place) => {
    const p = placeTemplate.cloneNode(true)
    const img = p.querySelector('.places__image')
    img.src = place.link
    img.alt = place.name
    p.querySelector('.places__title').textContent = place.name

    p.querySelector('.places__image-button').addEventListener('click', function () {
      popupImage.src = place.link;
      popupImage.alt = place.name;
      popupImageTitle.textContent = place.name;
      openPopup(popupNameImage)
    });

    p.querySelector('.places__like-button').addEventListener('click', function (evt) {
      const eventTarget = evt.target;
      eventTarget.classList.toggle('places__like-button_active');
    });

    p.querySelector('.places__delete-button').addEventListener('click', function (evt) {
      evt.target.closest('.places__place').remove();
    });

    placesElement.append(p)
  })
}

profileAddButton.addEventListener("click", () => openPopup(popupAdd));

popupAddCloseButton.addEventListener("click", () => closePopup(popupAdd));

popupCloseImageButton.addEventListener("click", () => closePopup(popupNameImage));


formAddElement.addEventListener("submit", (event) => {
  event.preventDefault();
  places.unshift(
    {name: placeNameInput.value,
     link: placeLinkImput.value
    })
    updatePlaces();
    closePopup(popupAdd);
});

updatePlaces();

