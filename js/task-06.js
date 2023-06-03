const validationInput = document.getElementById('validation-input');


validationInput.addEventListener('blur', () => {
  const expectedLength = parseInt(validationInput.getAttribute('data-length'));
  const enteredValue = validationInput.value.trim();

  
  if (enteredValue.length === expectedLength) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
});