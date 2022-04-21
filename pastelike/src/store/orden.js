/** Objeto pastel */
const Pastel = class {
    sku;
    nombre;
    descripcion;
    imagen;
    decoracion;
    sabor;
    tamaño;
    precio;

    constructor(pastel){
        if(typeof pastel === 'string' || typeof pastel === 'number'){
            /** getPastelBySKU */
        }
        ( {sku: this.sku, nombre: this.nombre, descripcion: this.descripcion,
           imagen: this.imagen, precio: this.precio} = pastel );
    }
}

/** Objeto orden */
const Orden = class {
    // Datos de la persona que ordena
    nombre;
    correo;
    telefono;

    // Configuración del pastel
    pasteles;

    // Procesamiento
    fecha;
    entrega; // domicilio | recoge

    constructor(){
       this.fecha = {
                        recibido: new Date().toLocaleString(), 
                        iniciado: false, 
                        terminado: false, 
                        entregado: false, 
                        cancelado: false
                    };
        this.pasteles = [];
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

    setDatos(datos){
        (
            { nombre: this.nombre, correo: this.correo, telefono: this.telefono,
              entrega: this.entrega
            } = datos
         )
    }

    addPastel(pastel){
        this.pasteles.push(new Pastel(pastel));
    }
}

export default Orden;