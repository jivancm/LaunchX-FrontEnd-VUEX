import { createStore } from 'vuex'
import Orden from './orden.js';

export default createStore({
  state: {
    orden : [], 
  },
  getters: {
    orden(){
      
    }
  },
  mutations: {
    addOrden(state, orden){
      state.orden.push( new Orden(orden) );
    },
    iniciaOrden(state, pos){
      state.orden[pos].iniciar();
      // Notificar al cliente
    },
    terminaOrden(state, pos){
      state.orden[pos].terminar();
      // Notificar al cliente
    },
    entregaOrden(state, pos){
      state.orden[pos].entregar();
      // Notificar al cliente
    },
    cancelarOrden(state, pos){
      state.orden[pos].cancelar();
    }
  },
  actions: {
    cargarPasteles: async function ({ commit }){
      const data = await fetch('/pasteles.json');
      const pasteles = await data.json();
      commit('addPasteles', pasteles);
    }
  },
  modules: {
  }
})
