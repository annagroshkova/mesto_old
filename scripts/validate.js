enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: '.popup__button[disabled]',
  inputErrorClass: '.popup__input_type_error',
  errorClass: '.popup__error_visible'
});

function enableValidation (opt) {
  const form = document.querySelector(opt.formSelector)
}
