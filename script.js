// --------------- UI
const lastCalc = document.querySelector('#last-calculation');
const currentCalc = document.querySelector('#current-calculation');
const numberBtns = document.querySelectorAll('.numeric');
const operatorBtns = document.querySelectorAll('.operator');
const operatorDisplay = document.querySelector('#operator-display')
const equalBtn = document.querySelector('#equal');
const clearBtn = document.querySelector('#clear');
const deleteBtn = document.querySelector('#delete');

let num1;
let num2;
let total;
let operator;

// document.addEventListener('keydown', (e) => {
//   const regex = /\d|[\/\*\-\+\=]/g;
//   keyboardInput = e.key.match(regex);
//   if (e.key == 'Enter') { console.log(e.key) }
//   else if (keyboardInput) {
//   console.log(keyboardInput)
// }})

numberBtns.forEach(button => {
  button.addEventListener('click', () => {
    if (total) { clear() }
    currentCalc.textContent += button.textContent;
  })
});

operatorBtns.forEach(button => {
  button.addEventListener('click', () => {
    if (!num1) {
      num1 = currentCalc.textContent;
    } else if (currentCalc.textContent){
      num2 = currentCalc.textContent;
      num1 = operate(operator);
    }
    currentCalc.textContent = undefined
    operator = button.textContent;
    lastCalc.textContent = `${num1} ${operator} `;
  })
});

equalBtn.addEventListener('click', () => {
  num2 = currentCalc.textContent;
  total = operate(operator);
  lastCalc.textContent = `${num1} ${operator} ${num2}`;
  currentCalc.textContent = total;
});

clearBtn.addEventListener('click', clear)
deleteBtn.addEventListener('click', deleteFunction)

function clear() {
  num1 = 0;
  num2 = 0;
  total = 0;
  operator = null;
  currentCalc.textContent = null;
  lastCalc.textContent = null;
}

function deleteFunction() {
  string = currentCalc.textContent.split('');
  string.pop();
  currentCalc.textContent = string.join('');
}

function divide(a, b) {
  if (b > 0) {
  return a / b;
  } else {
    return 'Cannot divide by zero';
  }
}

function multiply(a, b) {
  return a * b;
}

function substract(a, b) {
  return a - b;
}

function add(a, b) {
  return a + b;
}

function operate(operator) {
switch(operator) {
  case '/':
    return divide(num1,num2);
    break;
  case '*':
    return multiply(num1, num2);
    break;
  case '-':
    return substract(num1, num2);
    break;
  case '+':
    return add(num1, num2);
    break;
  default:
    break;
}}