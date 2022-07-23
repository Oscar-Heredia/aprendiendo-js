class Persona{

    static contadorPersona = 0;//Atributo de nuestra clase
    email = "Valor default email";//Atributo de nuestros objetos 

    static get MAX_OBJ()
    {
        return 5;
    }

    constructor(nombre,apellido)
    {
        this._nombre = nombre;
        this._apellido = apellido;
        
        if(Persona.contadorPersona < Persona.MAX_OBJ)
        {
            this.idPersona =  ++Persona.contadorPersona;
        }else{
            console.log("se han superado el máximo de objetos permitidos");
        }

        console.log("Se incrementa contador: "+Persona.contadorObetosPersona);
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

    nombreCompleto()
    {
        return this.idPersona+" "+this._nombre+" "+this._apellido;
    }

    //Sobreescribiendo el metodo de la clase Padre (Object)
    toString()
    {
        //Se aplica a polimorfismo
        return this.nombreCompleto;
    }

    static saludar()
    {
        console.log("Saudos desde el metodo static");
    }

    static saludar2(persona)
    {
        console.log(persona._nombre+" "+persona._apellido);
    }
}

class Empleado extends Persona{
    constructor(nombre,apellido,departamento)
    {
        super(nombre,apellido);//LLamar al construtor de la clase padre
        this._departamento = departamento;
    }

    get departamento() {
        return this._departamento;
    }

    set departamento(departamento)
    {
        this._departamento = departamento;
    }

    //Sobreescritura 

    nombreCompleto()
    {
        return super.nombreCompleto()+","+this._departamento;
        //return this._nombre+" "+this._apellido+","+this._departamento;
    }
}

let persona1 = new Persona("Juan","Perez");
console.log(persona1.toString());

persona1.nombre = "Pedro";

console.log(persona1.nombre);

let empleado1 = new Empleado("Maria","Jimnenez","Sistemas");

let persoan2 = new Persona("Karla","Ramirez");


/*
console.log(empleado1);
console.log(empleado1.nombre);
console.log(empleado1.nombreCompleto());


//Metodo static
//persona1.saludar(); No es posible llamar un metodo static desde un objeto
//Por eso usamos una clase
Persona.saludar();
Persona.saludar2(persona1);
Empleado.saludar();
Empleado.saludar2(empleado1);

console.log(Persona.contadorObetosPersona);
console.log(Empleado.contadorObetosPersona);

console.log(persona1.email);
console.log(empleado1.email);
*/
