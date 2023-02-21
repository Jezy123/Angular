function calcularIva(precio:number){
    return (precio*1.21);
};

let precio:number = 100;
let precioConIVA:number= calcularIva(precio);
precioConIVA=Math.round(precioConIVA* 100) / 100;
let Iva:number=precioConIVA-precio;

window.alert(precio);
window.alert(precioConIVA);
window.alert(Iva);