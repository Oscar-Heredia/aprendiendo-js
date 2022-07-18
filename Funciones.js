//Declaración de funciones 

function miFunction(a,b){
    console.log(a+b);
    return a + b;
}

//Llamada a la función
miFunction(2,3);

let resultado = miFunction(2,3);

//Declaración función de tipo expresión 

let x = function (a,b){
    return a+b
};

resultado = x(1,2);

//Declaración de una función de selft invoking

(function (){
    console.log("Ejecurando la función");
})();

(function(a,b){
    console.log(a+b)
    console.log(arguments.length)//Nos indica los argumentos que tiene la función
    console.log(arguments[0]);
    console.log(arguments[1]);
})(1,2);

const SumarFuncionesTipoFlechas = (a,b) => a+b;
resultado = SumarFuncionesTipoFlechas(1,2);
console.log(resultado);

//Ejemplo de comer se suman los arguementos

let resultado2 = sumarTodo(1,2,3,3,4);

function sumarTodo()
{
    let suma = 0;
    for(let i=0; i<arguments.length; i++)
    {
        suma += arguments[i];
    }
    return suma;
}

console.log(resultado2);

//Paso por referencia en funciones
const persona = {
    nombre : "",
    apellidos : ""
}

function ponerNombres (p1){
    p1.nombre = "Carlos";
    p1.apellidos = "KK";
}

ponerNombres(persona);
console.log(persona);

