 // Get the display element
 var display = document.getElementById("display");
        
 //  number button
 var numberButtons = document.querySelectorAll(".btn-num");
 for (var i = 0; i < numberButtons.length; i++) {
     numberButtons[i].addEventListener("click", function(event) {
         event.preventDefault();
         display.value += this.value;
     });
 }
 
// Equal to provide evaluation on display

 var equalButton = document.getElementById("equal");
equalButton.addEventListener("click", function(event) {
    event.preventDefault();
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
});

 // DE delete one character from the display
 var deButton = document.getElementById("btn-DE");
 deButton.addEventListener("click", function(event) {
   event.preventDefault();
   display.value = display.value.slice(0, -1);;
 });

// AC delete All Character
  var acButton = document.getElementById("btn-AC");
  acButton.addEventListener("click", function(event) {
    event.preventDefault();
    display.value = " ";;
});


// Square root button
var sqrtButton = document.getElementById("btn-sqrt");
sqrtButton.addEventListener("click", function(event) {
  event.preventDefault();
  display.value = calculateSquareRoot(display.value);
});

// Calculate the square root
function calculateSquareRoot(expression) {
  var number = parseFloat(expression);
  
  // Check if the number is valid and non-negative
  if (!isNaN(number) && number >= 0) {
    var result = Math.sqrt(number);
    return result;
  } else {
    return "Error";
  }
}



