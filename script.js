// --------------- UI
const lastCalc = document.querySelector('#last-calculation');
const currentCalc = document.querySelector('#current-calculation');
const numberBtns = document.querySelectorAll('.numeric');
const operatorBtns = document.querySelectorAll('.operator');
const operatorDisplay = document.querySelector('#operator-display')
const equalBtn = document.querySelector('#equal');

let num1;
let num2;
let total;
let operator;
let toRemove = false;

// document.addEventListener('keydown', (e) => {
//   const regex = /\d|[\/\*\-\+\=]/g;
//   keyboardInput = e.key.match(regex);
//   if (e.key == 'Enter') { console.log(e.key) }
//   else if (keyboardInput) {
//   console.log(keyboardInput)
// }})

numberBtns.forEach(button => {
  button.addEventListener('click', () => {
  
  })
});

operatorBtns.forEach(button => {
  button.addEventListener('click', () => {

  })
});

equalBtn.addEventListener('click', () => {

});

function divide(a, b) {
  total = a / b;
  return total
}

function multiply(a, b) {
  total = a * b;
  return total
}

function substract(a, b) {
  total = a - b;
  return total
}

function add(a, b) {
  total = a + b;
  return total;
}

function operate(operator) {
switch (operator) {
  case '/':
    currentCalc.textContent = divide(num1,num2);
    break;
  case '*':
    currentCalc.textContent = multiply(num1, num2);
    break;
  case '-':
    currentCalc.textContent = substract(num1, num2);
    break;
  case '+':
    currentCalc.textContent = add(num1, num2);
    break;
  default:
    break;
}}