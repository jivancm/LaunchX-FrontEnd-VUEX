
/** Objeto orden */

const Orden = class {
    // Datos de la persona que ordena
    nombre;
    correo;
    telefono;

    // Configuración del pastel
    sku;
    precio;
    tamaño;
    sabor;
    decoracion;

    // Procesamiento
    fecha;
    entrega; // domicilio | recoge

    constructor(orden){
       (
           { nombre: this.nombre, correo: this.correo, telefono: this.telefono,
             sku: this.sku, tamaño: this.tamaño, sabor:this.sabor, precio: this.precio,
             imagen: this.imagen, decoracion:this.decoracion, entrega: this.entrega 
           } = orden
        )
       this.fecha = {
                        recibido: new Date().toLocaleString(), 
                        iniciado: false, 
                        terminado: false, 
                        entregado: false, 
                        cancelado: false
                    };
    };

    iniciar(){
        this.fecha.iniciado = new Date().toLocaleString();
    }

    terminar(){
        this.fecha.terminado = new Date().toLocaleString();
    }

    entregar(){
        this.fecha.entregado = new Date().toLocaleString();
    }

    cancelar(){
        if(this.fecha.iniciado) return false;
        this.fecha.cancelado = new Date().toLocaleString();
    }
}

export default Orden;