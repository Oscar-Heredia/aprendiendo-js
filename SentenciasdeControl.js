//Sentencias if-else
let condicion = true;

if(condicion)
{
    console.log("condición verdadera");
}else{
    console.log("condición falsa");
}

//Ejemplo

let numero = 1;

if(numero==1)
{
    console.log("1");
}else if(numero==2)
{
    console.log("2");
}else if(numero==3)
{
    console.log("3");
}else if(numero==4)
{
    console.log("4");
}else
{
    console.log("número desconocido");
}

//Estación del año

let mes = 4;
let estacion;


if(mes==1 || mes==2 || mes==12)
{
    estacion = "Invierno"
}else
{
    estacion="otra estacion xddxd";
}

//Estructura de control switch

let opcion = 3, mensaje="";
let mes2 = 3;

switch(opcion)
{
    case 1:
        mensaje = "1";
        break;
    case 2:
        mensaje = "2";
        break;
    
    default:
        mensaje="no encontrado";
}

console.log(mensaje);



switch(mes)
{
    case 1: case 2: case 12:
        mensaje = invierno;
        break;
    default:
        mensaje="no se xdxd";
}