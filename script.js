// const my_button1 = document.getElementById("my_button1");
// const my_button2 = document.getElementById("my_button2");
// const my_button3 = document.getElementById("my_button3");

//   my_button1.addEventListener("click", function () {
//   my_main.classList.toggle("active");
// });

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }

class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.clear()
}
  
  clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
}

delete() {
}

appendNumber(number) {
}

chooseOperation(operation) {
}

compute() {
}

updateDisplay() {
}
  
  numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay(this.currentOperandTextElement.innerText = this.currentOperand)
  })
})