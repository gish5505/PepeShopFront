<template>
<div class="row">
    <h2>Список заказов</h2>
    <vue-thermometer
      :value="5"
      :min="-30"
      :max="40"      
      :options="options"
    />

</div>
</template>

<script>
export default {
        name: 'ProductList',
        data() {
            return {
                options: {
                    text: {
                        color: 'black',
                        fontSize: 8,
                        textAdjustmentY: 2,
                        fontFamily: 'Arial',
                        textEnabled: true
                    },
                    thermo: {
                        color: '#0000FF',
                        backgroundColor: '#fcf9f9',
                        frameColor: 'black',
                        ticks: 15,
                        ticksEnabled: true,
                        tickColor: 'black',
                        tickWidth: '1'
                    },
                    layout: {
                        height: 250,
                        width: 50
                    }
                }
            }
        },
        mounted() {
            this.getProducts();
        },
        methods: {
            getProducts() {            
                this.$http
                    .get("products")
                    .then((response) => { this.products = response; })
                    .catch(err => { alert(err); })
                    ;
            }
        }
}
</script>


