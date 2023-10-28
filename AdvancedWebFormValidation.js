// Filename: AdvancedWebFormValidation.js

// This code demonstrates an advanced web form validation system using JavaScript.
// It validates various input fields like email, phone number, credit card, and date.
// The validation logic involves regular expressions, custom error messages, and dynamic field checks.
// The form is also enhanced with real-time error feedback and custom styling.

// Form Validation Functions

/**
 * Validates the entire form and returns true if all fields are valid, otherwise false.
 */
function validateForm() {
  const emailIsValid = validateEmail();
  const phoneIsValid = validatePhone();
  const creditCardIsValid = validateCreditCard();
  const dateOfBirthIsValid = validateDateOfBirth();

  return emailIsValid && phoneIsValid && creditCardIsValid && dateOfBirthIsValid;
}

/**
 * Validates the email input field and returns true if the value is a valid email address, otherwise false.
 */
function validateEmail() {
  const emailInput = document.getElementById('email');
  const email = emailInput.value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    setError(emailInput, 'Please enter a valid email address.');
    return false;
  }

  clearError(emailInput);
  return true;
}

/**
 * Validates the phone input field and returns true if the value is a valid phone number, otherwise false.
 */
function validatePhone() {
  const phoneInput = document.getElementById('phone');
  const phone = phoneInput.value.trim();

  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
    setError(phoneInput, 'Please enter a 10-digit phone number.');
    return false;
  }

  clearError(phoneInput);
  return true;
}

/**
 * Validates the credit card input field and returns true if the value is a valid credit card number, otherwise false.
 */
function validateCreditCard() {
  const creditCardInput = document.getElementById('creditCard');
  const creditCard = creditCardInput.value.trim().replace(/\s/g, ''); // Remove whitespace

  const creditCardRegex = /^(\d{4}\s){3}\d{4}$/;
  if (!creditCardRegex.test(creditCard)) {
    setError(creditCardInput, 'Please enter a valid credit card number (e.g., 1234 5678 9012 3456).');
    return false;
  }

  clearError(creditCardInput);
  return true;
}

/**
 * Validates the date of birth input field and returns true if the value is a valid date, otherwise false.
 * The date format should be MM/DD/YYYY.
 */
function validateDateOfBirth() {
  const dobInput = document.getElementById('dob');
  const dob = dobInput.value.trim();

  const dobRegex = /^(0[1-9]|1[0-2])\/([0-2][1-9]|3[0-1])\/(19|20)\d{2}$/;
  if (!dobRegex.test(dob)) {
    setError(dobInput, 'Please enter a valid date (e.g., MM/DD/YYYY).');
    return false;
  }

  clearError(dobInput);
  return true;
}

/**
 * Sets an error message and applies error styling to the given input field.
 * @param {HTMLElement} inputElement - The input element to set the error for.
 * @param {string} errorMessage - The error message to display.
 */
function setError(inputElement, errorMessage) {
  inputElement.classList.add('error');
  const errorContainer = document.querySelector('.error-container');
  errorContainer.textContent = errorMessage;
}

/**
 * Clears the error message and styling from the given input field.
 * @param {HTMLElement} inputElement - The input element to clear the error for.
 */
function clearError(inputElement) {
  inputElement.classList.remove('error');
  const errorContainer = document.querySelector('.error-container');
  errorContainer.textContent = '';
}

// Event Listeners

window.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('myForm');
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    if (validateForm()) {
      form.submit(); // Submit the form if all fields are valid
    }
  });
});

// More code for custom styling, error feedback animations, etc.

// ... Rest of the code goes here ...

// End of code