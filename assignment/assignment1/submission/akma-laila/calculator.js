/*
Assignment 1: Calculator

Name: Noor Lailawati Abu bakar
Matrix No: SX222141ECJHF03
Github ID: akma-laila
*/

var display = "";

function appendNum(num) {
  display += String(num.value);
  document.getElementById("display").value = display;
}

function clearDisplay() {
  document.getElementById("display").value = "0";
  display = "";
}

function addNum() {
  display += String("+");
  document.getElementById("display").value = display;
}

function subNum() {
  display += String("-");
  document.getElementById("display").value = display;
}

function multiplyNum() {
  display += String("*");
  document.getElementById("display").value = display;
}

function divideNum() {
  display += String("/");
  document.getElementById("display").value = display;
}

function calculate() {
  var answer = eval(display);
  document.getElementById("display").value = answer;
}