class Perro implements Mamifero{
	public raza: string;
  public color: string;
  public velocidad: number;
  
  constructor(raza: string, color:string, velocidad: number){
  	this.raza = raza;
    this.color = color;
    this.velocidad = velocidad;
  }
  
  public ladrar() : void{
  	console.log("Guau");
  }
  
  public caminar(distancia){
  	let tiempo = distancia/this.velocidad;
    return console.log("El " + this.raza +" tarda " + tiempo + " segundos en recorrer 100 metros");
  }
  
}

interface Mamifero {
  velocidad: number;

   caminar(distancia: number): String;
}

enum Profesion {
    Pintor = 'pintor',
    Programador = 'programador',
    Panadero = 'panadero'
}

class Persona implements Mamifero{

    public nombre: string;
    public edad: number;
    public profesion: Profesion;
    public velocidad :number;

    constructor(nombre: string, edad: number,velocidad: number, profesion?: Profesion ) {
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
        this.velocidad = velocidad;
    }

    public saludar() : void {
        console.log("¡Hola! mi nombre es " + this.nombre + " y tengo " + this.edad + " años. Profesion: "  + this.profesion);
    }
    
    public caminar(distancia){
  	let tiempo = distancia/this.velocidad;
    return console.log( this.nombre +" tarda " + tiempo + " segundos en recorrer 100 metros");
  }

}

let p1 = new Persona("Iván", 35,3,Profesion.Panadero);
let p2 = new Persona("Jurgen", 33,4,Profesion.Programador);


let perro1 = new Perro("Mastín","Blanco",6);
let perro2 = new Perro("Labrador","Marrón",5);

perro2.caminar(100);
perro1.caminar(100);
p1.caminar(100);
p2.caminar(100);