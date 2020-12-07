<template>
<div @refresh="getProducts()">
    <div class="row" >
        <add-product-modal ref="AddProductModal" @refresh ="getProducts()" />
        <edit-product-modal ref="EditProductModal" @refresh ="getProducts()"/>
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
import EditProductModal from './EditProductModal.vue'


export default {
  name: 'Products',
    data() {
    return {
      products: [],
      }
    },
  components:{AddProductModal, EditProductModal},
  methods: {

      getProducts(){
              this.$http
              .get('api/products')
              .then(response => this.products = response.data)
              //.catch(error => alert(error))
          
          
      },
      openModal() {
        this.$refs.AddProductModal.show();
        },
      editProductModal(id){

        //this.$refs.EditProductModal.productDetails = this.products[0];
        this.$refs.EditProductModal.show(id);
      }  
    },
      mounted() {
      this.getProducts();
  },
}

</script>