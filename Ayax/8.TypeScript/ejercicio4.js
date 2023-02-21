var Alumno = /** @class */ (function () {
    function Alumno(nombre, edad, curso) {
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }
    Alumno.prototype.imprimir = function () {
        return "Hola: " + this.nombre + this.edad + this.curso;
    };
    return Alumno;
}());
var pedro = new Alumno("Pedro Lopez", 18, "1cfj");
document.body.innerHTML = pedro.imprimir();
