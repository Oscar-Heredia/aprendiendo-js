//Operadores aritmeticos 

let a = 3, b = 2, z = a+b;

//+,-,*,**;%,/
//++,--,+1,-1

//Incremento
//Preincremento (el operador ++ antes de la variable)
z = ++a; //4 se incrementa uno antes de ser asignando
//Postincremento (el operador -- despues de la variable)
z = a++; //3 primero se asigna y luego se incrementa para la siguiente vez que se use, tiene un incremento pendiente
// a = 3;
// z = 2;

//Decremento 
//Predecremento
z = --a;
//Postdecremento
z = a--;

//Operadores de asignacion 
let c = 1;

c += 2; //c se incremento en 2 c = c+2

/*
*=
/=
%=
*/

//Operadores de asignacion 

// == revisa el valor sin importar el tipo +
// === revida los valores y tambien los tipos 

//Operador distinto a

// c != 1 por que lo que es falso, dado que uno no es diferente de la varible 1
// si el valor fuese diferente al que estamos comparando con la variable, seria true
// c !== 1, se revia si el valor es diferente, pero tambien se revida el tipo 

//Operadores relacionales

//let a = 3, b = 2, c = "3"
//let z = a < b; -> Falso a no es menor que b
//let z = a <= b; -> z es solo si, a es menor o igual b

//---EJERCICIO DE NUMERO PAR---
/*

    let a = 10;

    if(a % 2 == 0)
    {
        console.log("Es un número par");
        let  pares = 0;
        pare++;
    }else
    {
        console.log("número impar");
    }


*/

//---EJERCICIO ES MAYOR DE EDAD--
/* 
    let edad = 18;

    if(edad >= 18)
    {
        console.log("Eres mayor de edad")
    }else 
    {
        console.log("no eres mayor de edad")
    }
*/

//Operadores lógicos
/* 
    let a = 2, valorMIn=0, valorMax= 10;

    if(a >= valorMin && a<=valMax)
    {
        console.log("Dentro del rango")
    }else
    {
        console.log("fuera del rango")
    }

*/

/*
    if(vacaciones || diaDescanso)
    //alfuno de los dos tienen que ser verdadero para que el operdor or sea cierto

*/

//--Operador ternario
 //let verdadero = (3<2) ? "verdadero" : "falso"
 //esto es que se verifica el resultado y se compara, despues se elige el primer o el segundo valor según corresponda
 // let numero = 9;
 /*

    resultado = (numero % 2 == 0) ? "Numero par" : "Numero impar"

 */

//String a Number
let miNumero = "10";
let edad = Number (miNumero);

//isNaN is not a number
/*

    if ( isNaN(edad))
    {
        console.log("No es un número");
    }else // si es un número
    {
        if(edad >= 18)
        {
            //pasa algo
        }else {
            //pasa otra cosa si no pasa la anterior 
        }

        let resultado = (edad >= 18 ) ? "" : ""
    }
*/

