<template>
<div @refresh="getProducts()">
    <div class="row" >
        <add-product-modal ref="AddProductModal" @refresh ="getProducts()" />
        <edit-product-modal ref="EditProductModal" @refresh ="getProducts()"/>
        <button id="buttonAddProduct" class="btn btn-dark" @click="openModal" data-toggle="modal" data-target="#AddProductModal">Add product</button>
    </div>
    <div id="tableHead" class="row">
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
    <div id="tableContent" class="row" v-for="product in products" :key="product.id">
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

    #buttonAddProduct{
      margin-top: 20px;
      margin-left: 20px;
      margin-bottom: 10px;
      padding: 3px;
    }
</style>