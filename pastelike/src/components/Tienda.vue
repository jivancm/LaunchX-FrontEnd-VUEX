<template>
  <section class="pasteles" v-if="pasteles">
    <div class="container" v-for=" pastel in pasteles ">
      <div class="pastel">Pastel {{pastel.sku}}</div>
      <Pastel v-bind:pastel="pastel" />
    </div>
  </section>
</template>

<script>
import { Pastel } from './Pastel.vue';

export default {
  name: 'Tienda',/*
  componets: {
    Pastel
  },
  computed:{
    ...Vuex.mapState(['pasteles']);
  },
  methods : {
    ...Vuex.mapActions(['cargarPasteles'])
  },*/
  created : async function(){
    console.log('cargado');
    const data = await fetch('/pasteles.json');
    this.pasteles = await data.json();
    console.log(this.pasteles);
  },
  data(){
    return {
      pasteles : []
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

</style>
