
 const likeButtons = document.querySelectorAll('.places__like-button');
 likeButtons.forEach (button => {
  button.addEventListener('click', function (evt) {
    const eventTarget = evt.target;
    eventTarget.classList.toggle('places__like-button_active');

  });
 })

 const deleteButtons = document.querySelectorAll('.places__delete-button');

 function removePlace (evt) {
  const placeCard = evt.target.closest('.places__place');
  placeCard.remove();
}


deleteButtons.forEach (button => {
  button.addEventListener('click', removePlace)
});
