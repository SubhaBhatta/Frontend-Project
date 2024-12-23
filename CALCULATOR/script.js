const display = document.getElementById("display");
const MAX_INPUT_LENGTH = 50;
const MAX_EVAL_COMPLEXITY = 100;

function appendToDisplay(value) {
  if (display.value.length < MAX_INPUT_LENGTH) {
    display.value += value;
  }
}

function calculate() {
  try {
    const sanitizedInput = display.value
      .replace(/[^0-9+\-*/().^a-zA-Z]/g, "")
      .replace(/(\d+)(\()/g, "$1*$2");

    if (sanitizedInput.length > MAX_EVAL_COMPLEXITY) {
      throw new Error("Input too complex");
    }

    const result = Function(`"use strict"; return (${sanitizedInput})`)();

    display.value = isFinite(result)
      ? Number(result.toFixed(10)).toString()
      : "Error";
  } catch (error) {
    display.value = "Error";
  }
}

function clearDisplay() {
  display.value = "";
}

document.addEventListener("keydown", (event) => {
  const key = event.key;
  const validKeys = "0123456789.+-*/()^sincostanlnlog";

  if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (validKeys.includes(key.toLowerCase())) {
    appendToDisplay(key);
  }
});
