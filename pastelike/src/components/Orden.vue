<template>
    <div class="container">
        <form>
            <div class="contacto row">
                <div class="input-group input-group-icon">
                    <input name="nombre" type="text" id="nombre" placeholder="Nombre Completo">
                    <div class="input-icon"><span class="icon">😄</span></div>
                </div>
                <div class="input-group input-group-icon">
                    <input name="telefono" type="tel" id="telefono" placeholder="7477474747">
                    <div class="input-icon"><span class="icon">☎</span></div>
                </div>
                <div class="input-group input-group-icon">
                    <input name="correo" type="email" id="correo" placeholder="mail@mail.com">
                    <div class="input-icon"><span class="icon">&#9993;</span></div>
                </div>
            </div>
            <div class="row">
                <div><input name="fecha" type="datetime-local" id="fecha" placeholder="Fecha y hora de entrega"></div>
                <div class="row">
                <div class="input-group">
                    <input name="modo" type="radio" value="domicilio" id="domicilio" @change="onChangeEntrega($event)">
                    <label for="domicilio">Enviar a domicilio</label>
                    <input name="modo" type="radio"  value="recoger" id="recoger" @change="onChangeEntrega($event)" checked="true">
                    <label for="recoger">Recoger en tienda</label>
                </div></div>
            </div>
            <div class="row domicilio">
                <div class="input-group input-group-icon">
                    <input name="domicilio" type="text" placeholder="Domicilio Completo" >
                    <div class="input-icon"><span class="icon">🧭</span></div>
                </div>
                <div class="input-group input-group-icon">
                    <input name="referencias" type="text" placeholder="Referencias">
                    <div class="input-icon"><span class="icon">🏠</span></div>
                </div>
            </div>
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
        },
        methods:{
            onChangeEntrega(event) {
                let data = event.target.value;
                document.getElementsByClassName('domicilio')[0].style.display = data == "domicilio" ? 'block' : 'none';
            }
        }
    }
</script>

<style scoped>

input,
input[type="radio"] + label,
input[type="checkbox"] + label:before,
select option,
select {
  width: 100%;
  padding: 1em;
  line-height: 1.4;
  background-color: #f9f9f9;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  -webkit-transition: 0.35s ease-in-out;
  -moz-transition: 0.35s ease-in-out;
  -o-transition: 0.35s ease-in-out;
  transition: 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;
}
input:focus {
  outline: 0;
  border-color: #bd8200;
}
input:focus + .input-icon span.icon {
  color: #f0a500;
}
input:focus + .input-icon:after {
  border-right-color: #f0a500;
}
input[type="radio"] {
  display: none;
}
input[type="radio"] + label,
select {
  display: inline-block;
  width: 50%;
  text-align: center;
  float: left;
  border-radius: 0;
}
input[type="radio"] + label:first-of-type {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
input[type="radio"] + label:last-of-type {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
input[type="radio"] + label span.icon {
  padding-right: 0.4em;
}
input[type="radio"]:checked + label,
input:checked + label:before,
select:focus,
select:active {
  background-color: #f0a500;
  color: #fff;
  border-color: #bd8200;
}
input[type="checkbox"] {
  display: none;
}
input[type="checkbox"] + label {
  position: relative;
  display: block;
  padding-left: 1.6em;
}
input[type="checkbox"] + label:before {
  position: absolute;
  top: 0.2em;
  left: 0;
  display: block;
  width: 1em;
  height: 1em;
  padding: 0;
  content: "";
}
input[type="checkbox"] + label:after {
  position: absolute;
  top: 0.45em;
  left: 0.2em;
  font-size: 0.8em;
  color: #fff;
  opacity: 0;
  font-family: FontAwesome;
  content: "\f00c";
}
input:checked + label:after {
  opacity: 1;
}
select {
  height: 3.4em;
  line-height: 2;
}
select:first-of-type {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
select:last-of-type {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
select:focus,
select:active {
  outline: 0;
}
select option {
  background-color: #f0a500;
  color: #fff;
}
.input-group {
  margin-bottom: 1em;
  zoom: 1;
}
.input-group:before,
.input-group:after {
  content: "";
  display: table;
}
.input-group:after {
  clear: both;
}
.input-group-icon {
  position: relative;
}
.input-group-icon input {
  padding-left: 4.4em;
}
.input-group-icon .input-icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 3.4em;
  height: 3.4em;
  line-height: 3.4em;
  text-align: center;
  pointer-events: none;
}
.input-group-icon .input-icon:after {
  position: absolute;
  top: 0.6em;
  bottom: 0.6em;
  left: 3.4em;
  display: block;
  border-right: 1px solid #e5e5e5;
  content: "";
  -webkit-transition: 0.35s ease-in-out;
  -moz-transition: 0.35s ease-in-out;
  -o-transition: 0.35s ease-in-out;
  transition: 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;
}
.input-group-icon .input-icon span.icon {
  -webkit-transition: 0.35s ease-in-out;
  -moz-transition: 0.35s ease-in-out;
  -o-transition: 0.35s ease-in-out;
  transition: 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;
}
.container {
  max-width: 38em;
  padding: 1em 3em 2em 3em;
  margin: 0em auto;
  background-color: #fff;
  border-radius: 4.2px;
  box-shadow: 0px 3px 10px -2px rgba(0, 0, 0, 0.2);
}
.row {
  zoom: 1;
}
.row:before,
.row:after {
  content: "";
  display: table;
}
.row:after {
  clear: both;
}
.col-half {
  padding-right: 10px;
  float: left;
  width: 50%;
}
.col-half:last-of-type {
  padding-right: 0;
}
.col-third {
  padding-right: 10px;
  float: left;
  width: 33.33333333%;
}
.col-third:last-of-type {
  padding-right: 0;
}
.domicilio {
    display: none;
}
@media only screen and (max-width: 540px) {
  .col-half {
    width: 100%;
    padding-right: 0;
  }
}
</style>