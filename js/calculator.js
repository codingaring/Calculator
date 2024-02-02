const display = document.querySelector("#display");
const buttonSection = document.querySelector("#buttons");
const modeChangeBtn = document.querySelector("#mode-change-btn");
const calculatorSection = document.querySelector("#calculator-section");
const buttons = document.getElementsByTagName("button");
const button = Array.from(buttons);
console.log(button);
const toggleList = [calculatorSection, buttons, display];

function selectBtn(btn) {
  btn.classList.toggle("keydown");
}

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

function changeMode(list) {
  list.classList.toggle("dark");
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

buttons.addEventListener("click", function (event) {
  selectBtn(evnet.target);
});
