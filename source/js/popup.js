'use strict';
(function () {
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
      popup.classList.remove('popup_open');
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
})();
