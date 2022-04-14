<template>
  <div class="home">
    <section class="pasteles">
      <div class="container">
        <Pastel v-for=" pastel in pasteles " v-bind:pastel="pastel" />
      </div>
    </section>
  </div>
  <Footer />
</template>

<script>
import Footer from '@/components/Footer.vue';
import Pastel from '@/components/Pastel.vue';

export default {
  name: 'HomeView',
  components: {
    Pastel,
    Footer
  },
  created : async function(){
    console.log('cargado');
    const data = await fetch('/pasteles.json');
    this.pasteles = await data.json();
    for(let i=0; i<this.pasteles.length; i++){
      if(!this.pasteles[i].hasOwnProperty('descripcionCorta')){
        this.pasteles[i].descripcionCorta = "Para esa persona especial"
      }
    }
  },
  data(){
    return {
      pasteles : []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
    .pastel{
        padding: 20px;
        background-color: rgba(255, 255, 255, 0.4);
        border: 4px solid white;
        border-radius: 10px;
        margin: 5px;
        width: 300px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }

    .container{
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-around;
      align-content: center;
    }
    
    @media (max-width: 800px){
      .container{
        flex-direction: column;
        justify-content: center;
      }
      .pastel{
        width: 80%;
      }
    }
</style>



<!-- <template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Tienda msg="Welcome to Your Vue.js App"/>
  </div>
  <Footer />
</template>

<script>
// @ is an alias to /src
import Tienda from '@/components/Tienda.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    Tienda,
    Footer
  }
}
</script>

-->
