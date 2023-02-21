class Alumno {
    nombre: string;
    edad:number;
    curso:string;

    constructor(nombre: string, edad:number,curso:string) {
      this.nombre = nombre;
      this.edad=edad;
      this.curso=curso
    }

    imprimir(){
      return "Hola: "+this.nombre+this.edad+this.curso
  }
}
let pedro = new Alumno("Pedro Lopez",18,"1cfj");
document.body.innerHTML=pedro.imprimir()