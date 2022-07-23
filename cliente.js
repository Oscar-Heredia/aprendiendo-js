class cliente{
    static contadorClientes = 0;

    constructor(fechaRegistro)
    {
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