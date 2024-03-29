class Persona{

    static contadorPersonas = 0;

    constructor(nombre,apellido,edad)
    {
        this._idPersoana = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get idPersona() {
        return this._idPersoana;
    }

    get nombre()
    {
        return this._nombre;
    }

    set nombre(nombre)
    {
        this._nombre = nombre;
    }

    get apellido()
    {
        return this._apellido;
    }

    set apellido(apellido)
    {
        this._apellido = apellido;
    }

    get edad()
    {
        return this._edad;
    }

    set edad(edad)
    {
        this._edad = edad;
    }

    toString()
    {
        return `${this._idPersoana} 
                ${this._nombre} 
                ${this._apellido} 
                ${this._edad}`;
    }
}


class Empleado extends Persona
{
    static contadorEmpleado = 0;

    constructor(nombre,apellido,edad,sueldo)
    {   
        super(nombre,apellido,edad)
        this._idEmpleado = ++Empleado.contadorEmpleado;
        this._sueldo = sueldo;
    }

    get idEmpleado()
    {
        return this._idEmpleado;
    }

    get sueldo()
    {
        return this._sueldo = this.sueldo;
    }

    set sueldo(sueldo)
    {
        this._sueldo = sueldo;
    }

    toString()
    {
        return `${super.toString()} 
                ${this._idEmpleado} 
                ${this._sueldo}`; 
    }
}

class cliente extends Persona
{
    static contadorClientes = 0;

    constructor(nombre,apellido,edad,fechaRegistro)
    {
        super(nombre,apellido,edad)
        this._idCliente = ++cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }

    get idCliente()
    {
        return this._idCliente;
    }

    get fechaRegistro()
    {
        return this._fechaRegistro;
    }

    set fechaRegistro(fechaRegistro)
    {
        this._fechaRegistro = fechaRegistro;
    }

    toString()
    {
        return `${super.toString()} 
                ${this._idCliente} 
                ${this._fechaRegistro}`;
    }
}

//Prueba clase  persona 

let persona1 = new Persona("Juan","Perez",12);
console.log(persona1.toString());

let empleado1 = new Empleado("Karla","Gomez",13,5000);
console.log(empleado1.toString());

let cliente1 = new cliente("Miguel","Cervantez",30,new Date());
console.log(cliente1.toString());

//Se aumenta uno cada vez, dado que son hijas y en padre se aumenta uno por cada uno que se cree.