let persona = {
    nombre : "Oscar",
    apellido : "Heredia",
    edad : "",
    idioma : "ES",
    get lang()
    {
        return this.idioma.toUpperCase();
    },
    set lang(lang)
    {
        this.idioma = lang.toUpperCase();
    },
    NombreCompleto : function()
    {
        return this.nombre + " " + this.apellido;
    },
    get Nombrecompleto2() //Accedeer a las propiedad y valores de una funciona de manera más rapida 
    {
        return this.nombre + " " + this.apellido;
    }
};

console.log(persona.Nombrecompleto2);
console.log(persona.NombreCompleto());
//Mnadamos a llamar el metodo set
persona.lang = "en";

for(propiedad in persona)
{
    console.log(propiedad);
    console.log(persona[propiedad]);
}

//agregar propiedades 

persona.tel = "3121311";

//Imprimir el contenido de un objecto 

let personaArray = Object.values(persona);
console.log(personaArray);

let personaString = JSON.stringify(persona);
console.log(personaString);

///////

//Funcion constructor de onjetos de tipo persona 
function persona(nombre,apellido,emial)
{
    this.nombre = nombre;
    this.apellido = apellido;
    this.emial = emial;
    this.nombreCompleto = function()
    {
        return this.nombre+ " " + this.apellido;
    }
}

let padre = new persona("juan","perez","@jj");
console.log(padre);
console.log(padre.nombreCompleto());

padre.nombre = "cesar";

//objecto 
let miobjecto = {};
//cadena
let micadena = "";
//arreglo
let miArreglo = [];


//Metodo call

let persona1 = {
    nombre : "Juan",
    apellidos: "Perez",
    nombreCompleto: function(titulo,tel)
    {
        return titulo+" "+this.nombre+ " "+this.apellidos+","+tel;
    }
}

let persona2 = {
    nombre: "Carlos",
    apellidos: "lara"
}

console.log(persona1.nombreCompleto.call(persona2,"Ing",32323));