const display = document.querySelector("#display");
const buttonSection = document.querySelector("#buttons");
const modeChangeBtn = document.querySelector("#mode-change-btn");
const calculatorSection = document.querySelector("#calculator-section");
const buttons = document.getElementsByTagName("button");

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

// 입력값 display에 띄우는 이벤트 등록
buttonSection.addEventListener("click", function (event) {
  handleButtonClick(event.target.textContent);
});

// 아이콘 클릭하면 전환 (다크모드 설정)
modeChangeBtn.addEventListener("click", function () {
  modeChangeBtn.getAttribute("src") === "./imgs/dark-mode-icon.png"
    ? (modeChangeBtn.setAttribute("src", "./imgs/bright-mode-icon-white.png"),
      modeChangeBtn.setAttribute("alt", "기본 모드"),
      toggleList.forEach(changeMode))
    : (modeChangeBtn.setAttribute("src", "./imgs/dark-mode-icon.png"),
      modeChangeBtn.setAttribute("alt", "다크 모드"),
      toggleList.forEach(changeMode));
});

function changeMode(list) {
  list.classList.toggle("dark");
}
