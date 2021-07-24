let editButton = document.querySelector('.profile__edit-button');
let openPopup = document.querySelector('.popup_opened');
let closePopup = document.querySelector('.popup__close');

editButton.addEventListener('click', function () {
  openPopup.style.display = 'flex'
});

closePopup.addEventListener('click', function () {
  openPopup.style.display = 'none'
});



