<template>
    <div id="AddProductModal" class="modal" >
        <div ref="addProductModal" class="modal-dialog modal-dialog-centered" >
            <div class="modal-content">

                <div class="modal-header">
                    <h4 class="modal-title">Новый товар</h4>
                </div>

                <div class="modal-body">

                    <div class="form-group">
                        <label for="code">Артикул</label>
                        <input type="text" v-model="productDetails.code" class="form-control" id="code">
                    </div>
                

                    <div class="form-group">
                        <label for="name">Название товара</label>
                        <input type="text" v-model="productDetails.name" class="form-control" id="name">
                    </div>

                    <div class="form-group">
                        <label for="price">Цена</label>
                        <input type="text" v-model.number="productDetails.price" class="form-control" id="price">
                    </div>
                    
                    <div class="form-group">
                        <label for="category">Тип товара</label>
                        <input type="text" v-model.number="productDetails.category" class="form-control" id="category">
                    </div>
                </div>

                <div class="modal-footer">
                    <div class="bnt-group">
                        <button type="button" class="btn btn-success" @click="saveProductPush()" data-dismiss="modal">Сохранить</button>
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Закрыть</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
    addProductModal:false,
    productDetails:{
        id: undefined,
        code: undefined,
        name: undefined,
        price: undefined,
        category: undefined
    }
    }},
    methods:{
    saveProductPush(){
        this.$http
            .post('api/products',this.productDetails)
            .then(() => this.$emit('refresh'),() => alert('failure'))
            .catch(error => alert(error));
    },
    show(){
        this.addProductModal = true
    },
    hide(){
        this.addProductModal = false
    }
    }
}
</script>