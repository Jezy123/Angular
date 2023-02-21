function calcularIva(precio) {
    return (precio * 1.21);
}
;
var precio = 100;
var precioConIVA = calcularIva(precio);
precioConIVA = Math.round(precioConIVA * 100) / 100;
var Iva = precioConIVA - precio;
window.alert(precio);
window.alert(precioConIVA);
window.alert(Iva);
