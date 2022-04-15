<template>
    <h4>Detalle del pedido</h4>
    <section class="listaPedido" v-if="orden">
        <div class="listItem" v-for=" (pastel, index) in orden ">
            <div class="foto">{{pastel}}-{{index}}</div>
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
    computed: mapState(['orden']),
    methods:{
        console(con){
            console.log(con);
        }
    }
}
</script>