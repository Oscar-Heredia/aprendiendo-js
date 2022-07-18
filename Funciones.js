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
})(1,2);

const SumarFuncionesTipoFlechas = (a,b) => a+b;
resultado = SumarFuncionesTipoFlechas(1,2);
console.log(resultado);

