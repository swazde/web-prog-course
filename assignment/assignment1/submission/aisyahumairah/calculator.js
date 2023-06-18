function clearInput()
{
    document.getElementById("display").value = "";
}

function addToInput(value)
{
    document.getElementById("display").value += value;
}

function calcInput()
{
    var input = document.getElementById("display");
    var result = eval(input.value);
    input.value = result;
}

// function offButton()
// {
//     document.getElementById("display").disabled = true;
//     document.getElementById("display").value = "";
    
// }

function deleteLastChar()
{
    var input = document.getElementById("display");
    input.value = input.value.slice(0, -1);
}

// function onButton()
// {
//     document.getElementById("display").disabled = false;
//     document.getElementById("display").value = "";
// }