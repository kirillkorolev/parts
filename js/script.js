'use strict';

(function () {
  var pageHeader = document.querySelector('.page-header');
  var menuToggle = document.querySelector('.js-menu-toggle');
  var basket = document.querySelector('.basket');
  var submitButton = basket.querySelector('.js-submit-button');
  var confirmationCheckbox = basket.querySelector('.js-confirmation');

  menuToggle.addEventListener('click', function () {
    pageHeader.classList.toggle('page-header--menu-closed');
  });

  var validateCheckbox = function (input) {
    if (input.checked === false) {
      input.setCustomValidity('подтвердите согласие');
      input.classList.add('basket__confirmation-input--error');
      return false;
    } else {
      input.setCustomValidity('');
      if (input.classList.contains('basket__confirmation-input--error')) {
        input.classList.remove('basket__confirmation-input--error');
      }
      return true;
    }
  };

  submitButton.addEventListener('click', function (evt) {
    if (validateCheckbox(confirmationCheckbox)) {
      evt.preventDefault();
    }
  });
})();
