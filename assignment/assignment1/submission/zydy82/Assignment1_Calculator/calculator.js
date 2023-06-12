/* Name:Zaidi bin Ahmad
Matrix No:SX222136ECJHF03
Github id:zydy82
Assignment1: Calculator */

function Solve (val) {
    let v = document.getElementById("display");
    v.value += val;
}

function Result() {
    let num1 = document.getElementById("display").value;
    let num2 = eval(num1);
    document.getElementById("display").value = num2;   
}

function Clear() {
    let inp = document.getElementById("display");
    inp.value = "";
}




