var numlist = [2, 4, 6, 8, 100];
var suma = 0;
var mayoresCien = 0;
for (var i = 0; i < 5; i++) {
    if (numlist[i] > 100) {
        mayoresCien++;
    }
    suma = suma + numlist[i];
}
window.alert(suma);
window.alert(mayoresCien);
