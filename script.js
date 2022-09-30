let firstNumber = "";
let secondNumber = "";
let sign = "";
let total = false;

const numberBtn = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];

const signBtn = ["=", "+", "-", "*", "/", "%"];

const outTotal = document.querySelector(".calculator__total");

function clearAll() {
  firstNumber = "";
  secondNumber = "";
  sign = "";
  total = false;
  outTotal.textContent = 0;
}

document.querySelector(".js-set-clear").onclick = clearAll;

document.querySelector(".calculator__wrapper").addEventListener("click", function (event) {
    if (!event.target.classList.contains("calculator__btn")) return;
    if (event.target.classList.contains("js-set-clear")) return;

    outTotal.textContent = "";

    const key = event.target.value;

    if (numberBtn.includes(key)) {
      if (secondNumber === "" && sign === "") {
        firstNumber += key;
        outTotal.textContent = firstNumber;
      }
      else if (firstNumber !== "" && secondNumber !== "" && total ) {
        secondNumber = key;
        total = false;
        outTotal.textContent = secondNumber;
      } 
        else {
        secondNumber += key;
        outTotal.textContent = secondNumber;

      }
      return;
    } 
    if (signBtn.includes(key) && key !== '=') {
      sign = key;
      outTotal.textContent = sign;
      return;
    }
    if (key === '=') {
      if (secondNumber === "") secondNumber = firstNumber;
      switch (sign) {
        case "+":
          firstNumber = (+firstNumber) + (+secondNumber);
          break;
        case "-":
          firstNumber = firstNumber - secondNumber;
          break;
        case "*":
          firstNumber = firstNumber * secondNumber;
          break;  
        case "/":
          if (secondNumber === '0') {
            outTotal.textContent = "¯\_(ツ)_/¯";
            firstNumber - '';
            secondNumber = '';
            sign = '';
            return;
          }
          firstNumber = firstNumber / secondNumber;
          break;
      }
      total = true;
      outTotal.textContent = firstNumber;
    }
  });

