'use strict';
(function () {

  // scroll

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

  // focus

  var inputPhone = document.querySelector('.feedback__field_phone input');
  var inputPhonePopup = document.querySelector('.popup__field_phone input');
  var openingBrackets = '+7(';
  var closingBrackets = ')';
  var separator = '-';

  inputPhone.onfocus = function () {
    inputPhone.value = openingBrackets;
  };

  inputPhonePopup.onfocus = function () {
    inputPhonePopup.value = openingBrackets;
  };

  inputPhone.oninput = function () {
    if (inputPhone.value.length === 6) {
      inputPhone.value += closingBrackets;
    }

    if (inputPhone.value.length === 10 || inputPhone.value.length === 13) {
      inputPhone.value += separator;
    }
  };

  inputPhonePopup.oninput = function () {
    if (inputPhonePopup.value.length === 6) {
      inputPhonePopup.value += closingBrackets;
    }

    if (inputPhonePopup.value.length === 10 || inputPhonePopup.value.length === 13) {
      inputPhonePopup.value += separator;
    }
  };


  function onInputKeydown(evt) {
    if (evt.keyCode === 8) {
      inputPhone.value = openingBrackets;
    }
  }

  function onInputPopupKeydown(evt) {
    if (evt.keyCode === 8) {
      inputPhonePopup.value = openingBrackets;
    }
  }

  inputPhone.addEventListener('keydown', onInputKeydown);
  inputPhonePopup.addEventListener('keydown', onInputPopupKeydown);


  // popup

  var buttonPopup = document.querySelector('.button-popup-js');
  var popup = document.querySelector('.popup');
  var escape = 27;
  var closeButton = popup.querySelector('svg');
  var body = document.querySelector('body');

  function openPopup() {
    popup.classList.add('popup_open');
    body.classList.add('modal-open');
    document.addEventListener('keydown', onEscapePress);
    closeButton.addEventListener('click', onCloseButtonClick);
    popup.addEventListener('click', onOverlayClick);
  }

  function closePopup() {
    popup.classList.remove('popup_open');
    body.classList.remove('modal-open');
    document.removeEventListener('keydown', onEscapePress);
    closeButton.removeEventListener('click', onCloseButtonClick);
    popup.removeEventListener('click', onOverlayClick);
  }

  function onButtonPopupClick() {
    openPopup();
  }

  function onEscapePress(evt) {
    if (evt.keyCode === escape) {
      closePopup();
    }
  }

  function onCloseButtonClick() {
    closePopup();
  }

  function onOverlayClick(evt) {
    var target = evt.target;
    if (target.classList.contains('popup')) {
      closePopup();
    }
  }

  buttonPopup.addEventListener('click', onButtonPopupClick);


  // localStorage

  var inputName = document.querySelector('.feedback__field_name input');
  var textareaQuestion = document.querySelector('.feedback__field textarea');
  var inputNamePopup = document.querySelector('.popup__field_name input');
  var textareaQuestionPopup = document.querySelector('.popup__field textarea');

  window.addEventListener('DOMContentLoaded', function () {

    if (inputName) {
      inputName.addEventListener('change', function () {
        localStorage.setItem(inputName.value, 'inputName');
      });
    }

    if (inputPhone) {
      inputPhone.addEventListener('change', function () {
        localStorage.setItem(inputPhone.value, 'inputPhone');
      });
    }

    if (textareaQuestion) {
      textareaQuestion.addEventListener('change', function () {
        localStorage.setItem(textareaQuestion.value, 'inputQuestion');
      });
    }

    if (inputNamePopup) {
      inputNamePopup.addEventListener('change', function () {
        localStorage.setItem(inputNamePopup.value, 'inputNamePopup');
      });
    }

    if (inputPhonePopup) {
      inputPhonePopup.addEventListener('change', function () {
        localStorage.setItem(inputPhonePopup.value, 'inputPhonePopup');
      });
    }

    if (textareaQuestionPopup) {
      textareaQuestionPopup.addEventListener('change', function () {
        localStorage.setItem(textareaQuestionPopup.value, 'inputQuestionPopup');
      });
    }
  });

})();
