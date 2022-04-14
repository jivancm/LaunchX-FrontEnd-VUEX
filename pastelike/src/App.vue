<template>
  <nav>
    <router-link to="/" class="titulo">PasteLike</router-link>
    <Cart ref="Cart"  v-on:onComprar="onComprar" />
  </nav>
  <router-view/>
</template>

<script>
import Cart from './components/Cart.vue'

export default {
  components: {
    Cart
  },
  methods:{
    onComprar(){
      console.log('OnComprar APP')
    }
  }
}
</script>


<style scoped>
   a{
     font-family: 'Lobster', cursive;
     font-size: 50px;
      margin: auto;
      width: 250px;
      padding: 10px;
      color: #EFC6FD;
   }
   nav{
     margin: 50px 0;
   }
</style>

<style>

@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Open+Sans:wght@300&display=swap');

body{
    margin: 0px;
    background-color: #FDFFE7;
    font-family: 'Open Sans', sans-serif;
    color: black;
}

h1, h2, h3, h4{
    font-family: 'Lobster', cursive;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  font-weight: bold;
  text-decoration: none;

}

.caja{
    box-shadow: 0 7px 30px -10px rgba(150,170,180,0.5);
}

button{
  color: white;
  font-weight: bold;
  background-color: palevioletred;
  border: 2px solid white;
  border-radius: 4px;
  padding: 6px;
  transition: 0.3s;
}

button:hover{
  background-color: purple;
}

button:active{
  background-color: #EFC6FD;
}

    .img{
        width: 100%;
        height: 250px;
    }
  .ok{
      display: none;
      transition: 1s;
  }

</style>
