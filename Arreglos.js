//arreglo simple
let autos = ["BMW","MERCEDDEZ","BENZ","VOLVO"];

//Recorrer el arreglo
for(let i = 0; i<autos.length; i++)
{
    console.log(i+" "+autos[i]);
}

//Modificar el arreglo

autos[1]="tacos";
autos.push("audi");
autos[autos.length]="cadilac";

