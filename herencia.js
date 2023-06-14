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