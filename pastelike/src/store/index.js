import { createStore } from 'vuex'
import Orden from './orden.js';

export default createStore({
  state: {
    orden : null,
    pasteles: []
  },
  getters: {
    orden: (state) =>{
      return state.orden;
    },
    pasteles : (state) => {
      return state.pasteles;
    },
    pastelBySKU : (state) => (sku) => {
      console.log("Buscando Sku: ", sku);
      return state.pasteles.find( pastel => pastel.sku == sku );
    }
  },
  mutations: {
    createOrden(state){
      state.orden = new Orden();
    },
    startOrden(state){
      state.orden.iniciar();
      // Notificar al cliente
    },
    finishOrden(state){
      state.orden.terminar();
      // Notificar al cliente
    },
    deliverOrden(state){
      state.orden.entregar();
      // Notificar al cliente
    },
    cancelOrden(state){
      state.orden.cancelar();
    },
    setOrdenDatos(state, datos){
      state.orden.setDatos(datos);
    },

    addPastel(state, pastel){
      if(!state.orden){
        this.commit('createOrden');
      }
      state.orden.pasteles.push(pastel);
    },

    setPasteles : (state, pasteles) =>{
      state.pasteles = [...pasteles];
    }
  },
  actions: {
    cargarPasteles: async function ({ commit }){
      const data = await fetch('/pasteles.json');
      const pasteles = await data.json();
      commit('setPasteles', pasteles);
    }, 

    addPastel : ({commit, getters}, pastel) => {
      console.log(getters, pastel);
      let pastelObj = getters.pastelBySKU(pastel.sku);
      console.log({...pastelObj, ...pastel});
      commit('addPastel', {...pastelObj, ...pastel});
    }
  },
  modules: {
  }
})
