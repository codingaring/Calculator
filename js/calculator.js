const display = document.querySelector("#display");
const buttons = document.querySelector("#buttons");
const modeChangeBtn = document.querySelector("#mode-change-btn");

let currentInput = "";

// 입력값을 display에 띄우는 함수
function handleButtonClick(input) {
  switch (input) {
    case "=":
      try {
        const result = new Function(
          "return " + currentInput.replace(/x/g, "*")
        )();
        currentInput = result.toString();
      } catch (error) {
        console.log(error);
        currentInput = "에러";
      }
      break;
    case "AC":
      currentInput = "";
      break;
    default:
      currentInput += input;
  }
  display.textContent = currentInput;
}

buttons.addEventListener("click", function (event) {
  handleButtonClick(event.target.textContent);
});
