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

// keyboard handler
document.addEventListener('keydown', (e) => {
  const keyNumber = e.key.match(/[.\d]/g);
  const keyOperator = e.key.match(/[\/\*\-\+\=]/g);
  if (e.key == 'Enter') {
    inputEqual();
  } else if (e.key == 'Backspace') {
    removeLastChar();
  } else if (e.key == 'Escape') {
    clear();
  } else if (keyNumber) {
    inputNumber(e);
  } else if (keyOperator) {
    operator = e.key
    inputOperator();
  }
});

// numbers eventListener (mouse)
numberBtns.forEach(button => {
  button.addEventListener('click', () => {
    inputNumber(button)
  })
});

// operator eventListener (mouse)
operatorBtns.forEach(button => {
  button.addEventListener('click', () => {
    operator = button.textContent;
    inputOperator()
  })
});

// eqaul eventListener (mouse)
equalBtn.addEventListener('click', inputEqual);

// register Number input for mouse and Keyboard
function inputNumber(e) {
  if(total) {clear()}
  if((e.key == '.' || e.textContent == '.') && currentCalc.textContent.includes('.')) {return}
  currentCalc.textContent += e.key || e.textContent;
}

// register operator input for mouse and keyboard
function inputOperator() {
  if (!num1) {
    num1 = currentCalc.textContent;
  } else if (currentCalc.textContent){
    if(total) {
      num1 = total;
      total = undefined;
    } else {
      num2 = currentCalc.textContent;
      num1 = operate(operator);
  }}
  currentCalc.textContent = undefined;
  lastCalc.textContent = `${num1} ${operator} `;
}

// register equal input for mouse and keyboard
function inputEqual() {
  num2 = currentCalc.textContent;
  total = operate(operator);
  lastCalc.textContent = `${num1} ${operator} ${num2}`;
  currentCalc.textContent = total;
}

// clear and delete eventListeneres for mouse
clearBtn.addEventListener('click', clear)
deleteBtn.addEventListener('click', removeLastChar)

function clear() {
  num1 = 0;
  num2 = 0;
  total = 0;
  operator = null;
  currentCalc.textContent = null;
  lastCalc.textContent = null;
}

function removeLastChar() {
  string = currentCalc.textContent.split('');
  string.pop();
  currentCalc.textContent = string.join('');
}

// Math functions:
function divide(a, b) {
  if (b > 0) {
  return Number(a) / Number(b);
  } else {
    return 'Cannot divide by zero';
  }
}

function multiply(a, b) {
  return Number(a) * Number(b);
}

function substract(a, b) {
  return Number(a) - Number(b);
}

function add(a, b) {
  return Number(a) + Number(b);
}

// function to operate a Math based on operator chosen and return a result
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