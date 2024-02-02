// calculator.js

document.addEventListener("DOMContentLoaded", function () {
  // 요소 선택
  const display = document.getElementById("display");
  const buttons = document.getElementById("buttons");

  let currentInput = "";

  // 버튼 클릭 및 마우스 클릭 처리
  buttons.addEventListener("click", function (event) {
    handleButtonClick(event.target.textContent);
  });

  // 키보드 입력 처리
  document.addEventListener("keydown", function (event) {
    // 키보드 입력에서는 event.key를 사용
    handleButtonClick(event.key);
  });

  function handleButtonClick(input) {
    switch (input) {
      case "=":
        try {
          const result = new Function("return " + currentInput)();
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

    // 디스플레이 업데이트
    display.textContent = currentInput;
  }

  // 다크 모드 토글
  const modeChangeBtn = document.getElementById("mode-change-btn");
  modeChangeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
  });
});
