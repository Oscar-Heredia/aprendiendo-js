class DispositivosdeEntrada
{

    constructor(tipodeEntrada, marca)
    {
        this._tiposEntrada = tipodeEntrada;
        this._marca = marca;
    }

    get tipodeEntrada()
    {
        return this._tiposEntrada;
    }

    set tipodeEntrada(tipodeEntrada)
    {
        this._tiposEntrada = tipodeEntrada;
    }

    set marca(marca)
    {
        this._marca = marca;
    }
    
}

class Raton extends DispositivosdeEntrada
{
  
    static contadorRaton = 0;

    constructor(tipodeEntrada, marca)
    {
        super(tipodeEntrada, marca);
        this._idRaton = ++Raton.contadorRaton;
    }

    get idRaton()
    {
        return this._idRaton;
    }

    toString()
    {
        return `Raton: [idRaton: ${this._idRaton}, Tipo de Entrada: ${this._tiposEntrada}, Marca: ${this._marca}]`;
    }
}


class Teclado extends DispositivosdeEntrada{
    static contadorTeclado = 0;

    constructor(tipodeEntrada, marca)
    {
        super(tipodeEntrada, marca);
        this._idteclado = ++Teclado.contadorTeclado;
    }

    get idTeclado()
    {
        return this._idteclado;
    }

    toString()
    {
        return `Teclado: [idteclado: ${this._idteclado}, tipoEntrada: ${this._tiposEntrada}, marca: ${this._marca}`;
    }

}

class Monitor{
    static contadorMonitor = 0;

    constructor(marca, tamaño)
    {
        this._idMonitor = ++Monitor.contadorMonitor;
        this._marca = marca;
        this._tamaño = tamaño;
    }

    get idMonitor()
    {
        return this._idMonitor;
    }

    toString()
    {
        return `Monitor: [idMonitor: ${this._idMonitor}, Marca: ${this._marca}, tamaño:${this._tamaño}]`;
    }

}

class Computadora{
    static contadorComputadoras = 0;

    constructor(nombre,monitor,raton,teclado)
    {
        this._idComputadoras = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado;
    }
    
    toString()
    {
        return `Computadora: ${this._idComputadoras}, ${this._nombre} \n ${this._monitor} \n ${this._raton} \n ${this._teclado}`
    }


}

class Orden{
    static contadorOrdenes = 0;

    constructor()
    {
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    get idOrden()
    {
        return this._idOrden;
    }

    agregarCompuatadoras(computadoras)
    {
        this._computadoras.push(computadoras);
    }

    mostrarOrden()
    {
        let computadorasOrden = "";

        for(let computadora of this._computadoras)
        {
            computadorasOrden += `\n ${computadora}`;
        }

        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);

    }
}

let raton1 = new Raton("USB","HP");
console.log(raton1.toString());

let teclado1 = new Teclado("Bluetooh","MSI");
console.log(teclado1.toString());

let monitor1 = new Monitor("HP",12);
console.log(monitor1.toString());

let computadora1 = new Computadora("HP",monitor1, raton1,teclado1);
console.log(computadora1.toString());

let orden1 = new Orden();
orden1.agregarCompuatadoras(computadora1);
console.log(orden1);

