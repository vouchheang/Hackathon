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
function square() {
  display.value = Math.pow(display.value, 2);
}
function squareRoot() {
  display.value = Math.sqrt(display.value);
}
function percentage() {
  display.value = display.value / 100;
}


function sin() {
  display.value = Math.sin((display.value * Math.PI) / 180);
}
function cos() {
  display.value = Math.cos((display.value * Math.PI) / 180);
}
function tan() {
  display.value = Math.tan((display.value * Math.PI) / 180);
}
function log() {
  display.value = Math.log10(display.value);
}
function ln() {
  display.value = Math.log(display.value);
}
function exp() {
  display.value = Math.exp(display.value);
}
function factorial() {
  let result = 1;
}
function power() {
  display.value = Math.pow(display.value, display.value);
}
function inverse() {
  display.value = 1 / display.value;
}
function absolute() {
  display.value = Math.abs(display.value);
}
function round() {
  display.value = Math.round(display.value);
}
function floor() {
  display.value = Math.floor(display.value);
  }
