<template>
    <div class="pastel caja" :id="'pastel-'+pastel.sku" >
        <!-- <img :src="pastel.img" /> -->
        <h4>{{pastel.nombre}}<span class="precio">$ {{precio}}</span></h4>
        <div class="img" :style="{'background-image' : 'url(' + imagen + ')'}"></div>
        <div class="descripcion">{{pastel.descripcion}}</div>
        <div class="botones" v-on:click="comprar" ><button>Comprar</button><span class="ok">&#128077;&#127996;</span></div>
    </div>
</template>

<style scoped>
    .img{
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    .descripcion{
        font-size: 0.85rem;
    }
    .pastel{
        position: relative;
    }
    button{
        margin-top: 10px;
    }
    .precio{
        position: absolute;
        top: 10px;
        right: 10px;
    }
</style>

<script>

import Cart from './Cart.vue';

const getImg = () => {
    return '/cakes/' + Math.round(Math.random() * 38 + 1) + '.jpg';
}

export default {
    name: 'Pastel',
    props: ['pastel'],
    crated: function(){
        console.log(this.pastel);
    },
    data(){
        return {
            imagen: getImg(), 
            precio: 50+Math.trunc(Math.random()*100)*10
        }
    },
    methods: {
        comprar : function(event){
            let idPastel = event.target.parentElement.parentElement.id.replace('pastel-', '');
            let img = event.target.parentElement.parentElement.querySelector('.img').style.backgroundImage.replace("url(", '').replace(")", '').replace('"', '');
            let precio = event.target.parentElement.parentElement.querySelector('.precio').innerHTML.replace("$", '').replace(" ", '');
            let ok = event.target.parentElement.querySelector('.ok');
            let orden = {
                sku: idPastel, 
                imagen: img,
                precio: precio
            };
            console.log(orden);
            this.$store.commit('addOrden', orden);
            Cart.methods.onComprar();
            event.target.style.display = 'none';
            ok.style.display = 'block';
            ok.style.transform = 'translate(-10px, 0)';
        }
    }
}
</script>
