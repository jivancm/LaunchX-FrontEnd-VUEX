<template>
    <div class="cart">
        <router-link to="/pedido"><span>&#x1F6D2;</span><span>&#x1F534;</span></router-link>
    </div>
</template>

<script>
    export default {
        name : 'Cart',
        methods : {
            onComprar : function(){
                if(document.querySelector('.cart span:last-of-type').style.display != 'block'){
                    document.querySelector('.cart span:last-of-type').style.display = 'block';
                }
            }
        }
    }
</script>

<style scoped>
    .cart{
        position: fixed;
        right: 10px;
        top: 10px;
        font-size: 30px;
        background-color: navajowhite;
        border-radius: 100%;
        width: 40px;
        height: 40px;
        transition: 0.3s;
        cursor: pointer;
    }

    .cart:hover{
        background-color: khaki;
    }

    .cart span:last-of-type{
        position: absolute;
        bottom: 0px;
        left: 0px;
        font-size: 15px;
        display: none;
    }
</style>
