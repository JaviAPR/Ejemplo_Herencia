//Clase persona

class Persona{

    static contadorPersonas = 0;

    constructor(nombre,apellido,edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = ++Persona.contadorPersonas;
    }

    //metodos 

    get idPersona(){
        return this._idPersona;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }

    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad = edad;
    }

    datosCompletos(){
        return this._nombre +' '+ this._apellido +' '+ this._edad;
    }

    toString(){
        return this._idPersona +': '+ this.datosCompletos();
    }


}

class Empleado extends Persona{
    constructor(nombre,apellido,edad,sueldo){
        super(nombre,apellido,edad)

        this._sueldo = sueldo;
        this._idEmpleado = Persona.contadorPersonas;
    }

    //Metodos
    get idEmpleado(){
        return this._idEmpleado;
    }

    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    datosCompletos(){
        return super.datosCompletos()+' '+this._sueldo;
    }

    toString(){
        return this._idEmpleado+': '+this.datosCompletos();
    }
}
const fecha = new Date();

class Cliente extends Persona{

    constructor(nombre,apellido,edad){
        super(nombre,apellido,edad)
        this._idCliente = Persona.contadorPersonas;
        this._fechaRegistro = (fecha.getDate()+'/'+(fecha.getMonth()+1)+'/'+fecha.getFullYear());
        
    }

    get idCliente(){
        return this._idCliente;
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(date){
        this._fechaRegistro = date;
    }
    toString(){
        return this._idCliente+': '+super.datosCompletos() +' Fecha de registro '+this._fechaRegistro
    }
    
}

let persona1 = new Persona('Javier','Pancha','22');
let empleado1 = new Empleado('Carlos','Ramirez','21','1800');
let persona2 = new Persona('Pedro','Rubiano','23');
let persona3 = new Persona('Daniela','Velandia','22');
let empleado2 = new Empleado('Paco','Pascal','26','2000');
let cliente1 = new Cliente('helena','Ramirez','25')
cliente1.fechaRegistro = '12/7/2023'
console.log(persona1.toString())
console.log(empleado1.toString())
console.log(persona2.toString())
console.log(empleado2.toString())
console.log(persona3.toString())
console.log(cliente1.toString())
