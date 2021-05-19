'use strict';
(function () {

  var inputPhone = document.querySelector('.feedback__field_phone input');
  var inputName = document.querySelector('.feedback__field_name input');
  var textareaQuestion = document.querySelector('.feedback__field textarea');
  var inputPhonePopup = document.querySelector('.popup__field_phone input');
  var inputNamePopup = document.querySelector('.popup__field_name input');
  var textareaQuestionPopup = document.querySelector('.popup__field textarea');

  window.addEventListener('DOMContentLoaded', function () {

    inputName.addEventListener('change', function () {
      localStorage.setItem(inputName.value, 'inputName');
    });

    inputPhone.addEventListener('change', function () {
      localStorage.setItem(inputPhone.value, 'inputPhone');
    });

    textareaQuestion.addEventListener('change', function () {
      localStorage.setItem(textareaQuestion.value, 'inputQuestion');
    });

    inputNamePopup.addEventListener('change', function () {
      localStorage.setItem(inputNamePopup.value, 'inputNamePopup');
    });

    inputPhonePopup.addEventListener('change', function () {
      localStorage.setItem(inputPhonePopup.value, 'inputPhonePopup');
    });

    textareaQuestionPopup.addEventListener('change', function () {
      localStorage.setItem(textareaQuestionPopup.value, 'inputQuestionPopup');
    });
  });

})();
