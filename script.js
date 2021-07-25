let editButton = document.querySelector('.profile__edit-button');
let openPopup = document.querySelector('.popup');
let closePopup = document.querySelector('.popup__close');

editButton.addEventListener('click', function () {
  let formElement = document.querySelector('.popup__container');
  let nameInput = formElement.querySelector('.popup__name');  // Воспользуйтесь инструментом .querySelector()
  let jobInput = formElement.querySelector('.popup__about');
  let nameElement = document.querySelector('.profile__name');
  let jobElement = document.querySelector('.profile__about'); 
  nameInput.value = nameElement.textContent;
  jobInput.value = jobElement.textContent;
  openPopup.classList.add('popup_opened');
});

closePopup.addEventListener('click', function (event) {
  event.preventDefault();
  openPopup.classList.remove('popup_opened');
});


// Находим форму в DOM
let formElement = document.querySelector('.popup__container'); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = formElement.querySelector('.popup__name'); // Воспользуйтесь инструментом .querySelector()
let jobInput = formElement.querySelector('.popup__about'); // Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(event) {
  event.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

 // Получите значение полей jobInput и nameInput из свойства value


  let nameElement = document.querySelector('.profile__name');
  let jobElement = document.querySelector('.profile__about'); // Выберите элементы, куда должны быть вставлены значения полей

   // Вставьте новые значения с помощью textContent
  nameElement.textContent = nameInput.value;
  jobElement.textContent = jobInput.value;

  openPopup.classList.remove('popup_opened');

}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);



