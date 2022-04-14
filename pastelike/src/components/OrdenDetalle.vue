<template>
    <section class="listaPedido" v-if="orden">
        <div class="listItem" v-for=" pastel in orden ">
            <div class="foto"></div>
            <div class="titulo">{{pastel.nombre}}</div>
            <div class="cantidad"></div>
            <div class="subtotal"></div>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'OrdenDetalle',
    computed: mapState(['orden'])
}
</script>