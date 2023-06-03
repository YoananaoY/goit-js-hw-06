const counterValue = document.getElementById('value');
const incrementButton = document.querySelector('button[data-action="increment"]');
const decrementButton = document.querySelector('button[data-action="decrement"]');


let currentValue = 0;

incrementButton.addEventListener('click', () => {
    currentValue++;
    counterValue.textContent = currentValue;
});

decrementButton.addEventListener('click', () => {
    currentValue--;
    counterValue.textContent = currentValue;
});

