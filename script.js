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

document.addEventListener('keydown', (e) => {
  const keyNumber = e.key.match(/\d/g);
  const keyOperator = /[\/\*\-\+\=\.]/g
  if (e.key == 'Enter') {
    inputEqual();
  } else if (keyNumber) {
    inputKeyNumber(e.key)
  } else if (keyOperator) {
    operator = e.key
    inputOperator();
  }
});

function inputKeyNumber(key) {
  if (total) {clear()}
  if (key == '.' && currentCalc.textContent.includes('.')) {return}
  currentCalc.textContent += key;
}

function inputKeyOperator(key) {
  inputOperator()
  operator = key;
}

numberBtns.forEach(button => {
  button.addEventListener('click', () => {
    inputNumber(button)
  })
});

operatorBtns.forEach(button => {
  button.addEventListener('click', () => {
    operator = button.textContent;
    inputOperator()

  })
});

equalBtn.addEventListener('click', inputEqual);

function inputNumber(btn) {
  if(total) {clear()}
  if(btn.textContent == '.' && currentCalc.textContent.includes('.')) {return}
  currentCalc.textContent += btn.textContent;
}

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

function inputEqual() {
  num2 = currentCalc.textContent;
  total = operate(operator);
  lastCalc.textContent = `${num1} ${operator} ${num2}`;
  currentCalc.textContent = total;
}

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