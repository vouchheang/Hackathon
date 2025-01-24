const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}
function clearDisplay() {
  display.value = "";
}
function backspace() {
  display.value = display.value.slice(0, -1);
}
function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}


function squareRoot() {
  display.value = Math.sqrt(display.value);
}
function percentage() {
  display.value = display.value / 100;
}
function double() {
  display.value = display.value ** 2;
}


