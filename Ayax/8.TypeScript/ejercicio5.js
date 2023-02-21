var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Alumno = /** @class */ (function () {
    function Alumno(nombre, edad, curso) {
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }
    Alumno.prototype.imprimir = function () {
        console.log("Hola: " + this.nombre + " " + this.edad + " " + this.curso);
    };
    return Alumno;
}());
var Curso = /** @class */ (function (_super) {
    __extends(Curso, _super);
    function Curso() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Curso.prototype.imprimir2 = function () {
        _super.prototype.imprimir.call(this);
        console.log("Primero de daw");
    };
    return Curso;
}(Alumno));
var daw = new Curso("joel", 18, "daw");
daw.imprimir2();
