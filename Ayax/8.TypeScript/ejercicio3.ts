
let numero1 : string =  (prompt("introduce el primer numero"));
let numero2 :string =  (prompt("introduce el segundo numero"));
let p1= document.createElement("p")
let p2= document.createElement("p")
p1.textContent=numero1
p2.textContent=numero2

p1.setAttribute("id","n1")
p2.setAttribute("id","n2")

document.body.append(p1);
document.body.append(p2);
var input1 :number = Number((document.getElementById('n1') as HTMLInputElement).innerHTML);
var input2 :number= Number((document.getElementById('n2') as HTMLInputElement).innerHTML);

function suma2(input1:number,input2:number){
    return input1+input2;
}

let p3=document.createElement("p")

p3.textContent= (suma2(input1,input2)).toString();
document.body.appendChild(p3);

