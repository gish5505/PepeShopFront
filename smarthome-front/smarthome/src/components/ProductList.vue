<template>
<div @refresh="getProducts()">    
    <div class="row" >
        <test-modal ref="TestModal" />
        <add-product-modal ref="AddProductModal" @refresh ="getProducts()" />
        <!--<edit-product-modal ref="EditProductModal" @refresh ="getProducts()"/> -->
        <button class="btn btn-primary" @click="openModal" data-toggle="modal" data-target="#AddProductModal">Add product</button>                
    </div>
    <div class="row bg-primary">
				<div class="col-md-2">
                    Имя товара
				</div>
				<div class="col-md-2">
                    Цена
				</div>
                <div class="col-md-2">
                    Артикул
				</div>
                <div class="col-md-2">
                    Категория
				</div>
                <div class="col-md-2">
                  &nbsp;
        </div>
	</div>    
    <div class="row" v-for="product in products" :key="product.id">
				<div class="col-md-2">
                    {{product.name}}
				</div>
				<div class="col-md-2">
                    {{product.price}}
				</div>
                <div class="col-md-2">
                    {{product.code}}
				</div>
                <div class="col-md-2">
                    {{product.category}}
				</div>
                <div class="col-md-2">                  
                    <button class="btn btn-outline-primary btn-sm" @click="editProductModal(product.id)" data-toggle="modal" data-target="#EditProductModal">Edit</button>
				</div>
	</div>      
</div>
</template>

<script>

import AddProductModal from './AddProductModal.vue'
import TestModal from './TestModal.vue'

export default {
        name: 'ProductList',
        data() {
            return {
                products: []
            }
        },
        components:{ AddProductModal, TestModal },
        mounted() {
            this.getProducts();
        },
        methods: {
            getProducts() {            
                this.$http
                    .get("products")
                    .then((response) => { this.products = response.data; })
                    .catch(err => { alert(err); })
                    ;
            },
            openModal() {
                this.$refs.AddProductModal.show();
            },
        }
}
</script>