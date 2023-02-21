class Alumno {
    nombre: string;
    edad:number;
    curso:string;

    constructor(nombre: string, edad:number,curso:string) {
      this.nombre = nombre;
      this.edad=edad;
      this.curso=curso;
    }
    imprimir(){
        console.log( "Hola: "+this.nombre+" "+this.edad+" "+this.curso)
    }
}
class Curso extends Alumno {
    imprimir2(){
        super.imprimir();
        console.log( "Primero de daw");
    }
        
}
let daw= new Curso("joel",18,"daw")
daw.imprimir2()