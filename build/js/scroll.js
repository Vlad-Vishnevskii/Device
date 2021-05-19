'use strict';
(function () {

  var advantages = document.querySelector('.advantages');
  var buttonToAdvantages = document.querySelector('.header__link-bottom');
  var buttonToForm = document.querySelector('.button_scroll-js');
  var form = document .querySelector('.questions');

  function buttonToAdvantagesClick(evt) {
    evt.preventDefault();
    advantages.scrollIntoView({block: 'center', behavior: 'smooth'});
  }

  function buttonToFormClick(evt) {
    evt.preventDefault();
    form.scrollIntoView({block: 'center', behavior: 'smooth'});
  }


  buttonToAdvantages.addEventListener('click', buttonToAdvantagesClick);
  buttonToForm.addEventListener('click', buttonToFormClick);

})();
