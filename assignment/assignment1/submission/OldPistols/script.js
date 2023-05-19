function addToInput(value) {
    document.getElementById('input').value += value;
  }
  
  function clearInput() {
    document.getElementById('input').value = '';
  }
  
  function backspace() {
    var input = document.getElementById('input');
    input.value = input.value.slice(0, -1);
  }
  
  function calculate() {
    var input = document.getElementById('input');
    var result = eval(input.value);
    input.value = result;
  }
  