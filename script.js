let currentInput = '';
let previousInput = '';
let currentOperation = null;

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function selectOperation(operator) {
  if (currentInput === '') return;

  if (previousInput !== '') {
    calculateResult();
  }

  currentOperation = operator;
  previousInput = currentInput;
  currentInput = '';
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  currentOperation = null;
  updateDisplay();
}

function calculateResult() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(current)) return;

  switch (currentOperation) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      if (current === 0) {
        result = 'Error';
      } else {
        result = prev / current;
      }
      break;
    default:
      return;
  }

  currentInput = result;
  currentOperation = null;
  previousInput = '';
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = currentInput;
}