let persona = {
    nombre : "Oscar",
    apellido : "Heredia",
    edad : "",
    NombreCompleto : function()
    {
        return this.nombre + " " + this.apellido;
    }
};

console.log(persona.NombreCompleto());

for(propiedad in persona)
{
    console.log(propiedad);
    console.log(persona[propiedad]);
}


