enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__form-item',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__form-item_type_error',
  errorClass: 'popup__input-error_visible',
});

function enableValidation (opt) {
  document.querySelectorAll(opt.formSelector).forEach((form) => {
    form.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });

    const submitButton = form.querySelector(opt.submitButtonSelector);
    const inputList = Array.from(form.querySelectorAll(opt.inputSelector));

    toggleButtonState(inputList, submitButton);

    inputList.forEach((input) => {
      input.addEventListener('input', function () {
        toggleButtonState(inputList, submitButton);
        checkInputValidity(form, input);
      });
    })

  })

  function toggleButtonState(inputList, submitButton) {
    if (hasInvalidInput(inputList)) {
      submitButton.classList.add(opt.inactiveButtonClass);
    } else {
      submitButton.classList.remove(opt.inactiveButtonClass);
    }
  };

  function showInputError(form, input, errorMessage) {
    const error = form.querySelector(`.${input.id}-error`);
    input.classList.add(opt.inputErrorClass);
    error.textContent = errorMessage;
    error.classList.add(opt.errorClass);
  };

   function hideInputError(form, input) {
    const error = form.querySelector(`.${input.id}-error`);
    input.classList.remove(opt.inputErrorClass);
    error.classList.remove(opt.errorClass);
    error.textContent = '';
  };

  function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  };


  function checkInputValidity(form, input) {
    if (!input.validity.valid) {
      showInputError(form, input, input.validationMessage);
    } else {
      hideInputError(form, input);
    }
  };
}


