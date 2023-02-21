var numero1 = (prompt("introduce el primer numero"));
var numero2 = (prompt("introduce el segundo numero"));
var p1 = document.createElement("p");
var p2 = document.createElement("p");
p1.textContent = numero1;
p2.textContent = numero2;
p1.setAttribute("id", "n1");
p2.setAttribute("id", "n2");
document.body.append(p1);
document.body.append(p2);
var input1 = Number(document.getElementById('n1').innerHTML);
var input2 = Number(document.getElementById('n2').innerHTML);
alert(input1);
function suma2(input1, input2) {
    return input1 + input2;
}
var p3 = document.createElement("p");
p3.textContent = (suma2(input1, input2)).toString();
document.body.appendChild(p3);
