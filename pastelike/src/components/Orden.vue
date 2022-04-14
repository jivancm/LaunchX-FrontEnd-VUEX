<template>
    <div class="modal">
        <div class="detalles">
            {{ $store.state.ordenes }}
        </div>
        <form>
            <section class="contacto">
                <div><label for="nombre">Nombre</label><input name="nombre" type="text" id="nombre" placeholder="John Doe"></div>
                <div><label for="telefono">Teléfono</label><input name="telefono" type="tel" id="telefono" placeholder="John Doe"></div>
                <div><label for="correo">Correo Electrónico</label><input name="correo" type="email" id="correo" placeholder="John Doe"></div>
            </section>
            <section class="entrega">
                <div><label for="fecha">Fecha</label><input name="fecha" type="date" id="fecha" placeholder="2022-02-02"></div>
                <div><label for="domicilio">Enviar a domicilio</label>
                    <input name="modo" type="radio" id="domicilio">
                    <label for="recoger">Recoger en tienda</label>
                    <input name="modo" type="radio" id="recoger">
                </div>
            </section>
            <OrdenDetalle />
        </form>
    </div>
</template>

<script>
import OrdenDetalle from './OrdenDetalle.vue'
    export default {
        name: 'Orden',
        components: {
            OrdenDetalle
        }
    }
</script>