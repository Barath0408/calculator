let display = document.getElementById("display");

function appendToDisplay(value) {
  display.textContent += value;
}

function clearDisplay() {
  display.textContent = "";
}

function calculate() {
  try {
    display.textContent = eval(display.textContent);
  } catch (error) {
    alert("Invalid expression!");
    clearDisplay();
  }
}

document.addEventListener("keydown", function (event) {
  const key = event.key;
  if (
    !isNaN(key) ||
    key === "+" ||
    key === "-" ||
    key === "*" ||
    key === "/" ||
    key === "."
  ) {
    appendToDisplay(key);
  } else if (key === "Enter") {
    calculate();
  } else {
    alert("Only numbers and operators are allowed!");
  }
});
