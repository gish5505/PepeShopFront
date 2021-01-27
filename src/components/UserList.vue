<template>
<div class="container-fluid">
    <div class="row" >
        <!-- <add-product-modal ref="AddProductModal" @refresh ="getProducts()" />
        <edit-product-modal ref="EditProductModal" @refresh ="getProducts()"/> 
        <button class="btn btn-primary" @click="openModal" data-toggle="modal" data-target="#AddProductModal">Add product</button>
        -->
    </div>
    <div id="tableHead" class="row">
				<div class="col-md-2">
                    Имя
				</div>
				<div class="col-md-2">
                    Роль
				</div>
                <div class="col-md-2">
                    Код
				</div>                  
	</div>    
    <div id="tableContent" class="row" v-for="user in users" :key="user.id">
				<div class="col-md-2">
                    {{user.name}}
				</div>
				<div class="col-md-2">
                    {{user.role}}
				</div>
                <div class="col-md-2">
                    {{user.code}}
				</div>
	</div>      
</div>
</template>

<script>
export default {
        name: 'ProductList',
        data() {
            return {
                users: []
            }
        },
        mounted() {
            this.getUsers();
        },
        methods: {
            getUsers() {            
                this.$http
                    .get("api/users")
                    .then((response) => { this.users = response.data; })
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
        padding: 1px;        
    }

    #tableContent {
        background-color: #ddd;
        margin: auto;
        padding: 1px;
    }
</style>