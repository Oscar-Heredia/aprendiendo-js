class Producto{
    static contadorProducto = 0;
    
    constructor(nombre,precio)
    {
        this._idProducto = ++Producto.contadorProducto;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto()
    {
        return this._idProducto;
    }

    get nombre()
    {
        return this._nombre;
    }
    
    set nombre(nombre)
    {
        this._nombre=nombre;
    }

    get precio()
    {
        return this._precio;
    }

    set precio(precio)
    {
        this._precio=precio;
    }
q
    toString()
    {
        return `idProducto: ${this._idProducto}, Nombre: ${this._nombre}, Precio: $${this._precio}`;
    }
}

class Orden{
    static contadorOrdenes = 0;

     static get MAX_PRODUCTS()
     {
        return 5;
     }

     constructor()
     {
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        //this._contadorProductosAgregados = 0;
     }

     get idOrden()
     {
        return this._idOrden;
     }

     agregarProducto(producto)
     {
        if(this._productos.length < Orden.MAX_PRODUCTS)
        {
            this._productos.push(producto);
            //this._productos[this._contadorProductosAgregados++] = producto;
        }
        else{
            console.log("No se puede agregar más produtos");
        }
     }

     calcularTotal()
     {
        let totalVenta = 0;

        for(let producto of this._productos)
        {
           totalVenta += producto.precio;
        }
        return totalVenta;
     }

     mostrarOrden()
     {
        let productoOrden = "";

        for(let producto of this._productos)
        {
            productoOrden += '\n {'+ producto.toString() +'}';
        }
        console.log(`Orden: ${this._idOrden}, Total:${this.calcularTotal()},Productos:${productoOrden}`);
     }
}

let producto1 = new Producto("camisa",123);
console.log(producto1.toString());

let orden1 = new Orden;
orden1.agregarProducto(producto1);

orden1.mostrarOrden();
