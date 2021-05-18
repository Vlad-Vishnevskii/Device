'use strict';
(function () {

var inputPhone = document.querySelector('.feedback__field_phone input');
var inputPhonePopup = document.querySelector('.popup__field_phone input');
var openingBrackets = '+7(';
var closingBrackets = ')';
var separator = '-';

inputPhone.onfocus = function () {
  inputPhone.value = openingBrackets;
}

inputPhonePopup.onfocus = function () {
  inputPhonePopup.value = openingBrackets;
}

inputPhone.oninput = function () {
   if(inputPhone.value.length === 6) {
     inputPhone.value += closingBrackets;
  }

  if(inputPhone.value.length === 10 || inputPhone.value.length === 13) {
    inputPhone.value += separator;
  }
};

inputPhonePopup.oninput = function () {
  if(inputPhonePopup.value.length === 6) {
    inputPhonePopup.value += closingBrackets;
  }

 if(inputPhonePopup.value.length === 10 || inputPhonePopup.value.length === 13) {
   inputPhonePopup.value += separator;
  }
};


function onInputKeydown (evt) {
  if (evt.keyCode === 8 ) {
    this.value = openingBrackets;
  }
}

inputPhone.addEventListener('keydown', onInputKeydown);
inputPhonePopup.addEventListener('keydown', onInputKeydown);

})();
