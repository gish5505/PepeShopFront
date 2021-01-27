<template>
<div>
    <div id="tableHead" class="row">
				<div class="col-md-2">
                    Дата заказа
				</div>
				<div class="col-md-2">
                    Номер заказа
				</div>
                <div class="col-md-2">
                    Статус
				</div>
                <div class="col-md-2">
                    Дата доставки
				</div>
                <div class="col-md-2">
                  &nbsp;
                </div>
    </div>  
      
    <div id="tableContent" class="row" v-for="order in orders" :key="order.orderId">
				<div class="col-md-2">
                    {{order.orderDate}}
				</div>
				<div class="col-md-2">
                    {{order.orderNumber}}
				</div>
                <div class="col-md-2">
                    {{order.orderStatus}}
				</div>
                <div class="col-md-2">
                    {{order.shipmentDate}}
				</div>
                <div class="col-md-2">                  
                    <button class="btn btn-outline-primary btn-sm" @click="editProductModal(order.id)" data-toggle="modal" data-target="#EditProductModal">Edit</button>
				</div>
    </div> 
 </div>

</template>

<script>
export default {
    name: 'Orders',
        data() {
        return {
        orders: [],
        }
        },    
        mounted() {
            this.getOrders();
        },
        methods: {
            getOrders() {            
                this.$http
                    .get("api/orders", {params: {userid: this.$parent.user_id}})
                    .then((response) => { this.orders = response.data; })
                    .catch(err => { alert(err); })
                    ;
            }
        }
}
</script>

<style scoped>
    #tableHead{
        /* width: 500px; */
        /* border: 1px solid red; */
        background-color: #f2f2f2;
        margin: auto;
        /* margin-top: 200px; */
        padding: 10px;        
    }

    #tableContent {
        background-color: #ddd;
        margin: auto;
        padding: 3px;
    }
</style>
