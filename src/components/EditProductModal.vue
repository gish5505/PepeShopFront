<template>
    <div id="EditProductModal" class="modal">
        <div v-if="editProductModal" class="modal-dialog modal-dialog-centered">
            <div class="modal-content">

                <div class="modal-header">
                    <h4 class="modal-title">Редактирование</h4>
                </div>

                <div class="modal-body">
                    <div class="form-group">
                        <label for="id">Уникальный номер</label>
                        <input type="text" v-model.number="productDetails.id" class="form-control" id="id" disabled>
                    </div>

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
                        <input type="text" v-model="productDetails.price" class="form-control" id="price">
                    </div>
                    
                    <div class="form-group">
                        <label for="category">Тип товара</label>
                        <input type="text" v-model="productDetails.category" class="form-control" id="category">
                    </div>
                </div>

                <div class="modal-footer">
                    <div class="bnt-group">
                        <button type="button" class="btn btn-dark" @click="editProductPush()" data-dismiss="modal">Сохранить</button>
                        &nbsp;
                        <button type="button" class="btn btn-dark" data-dismiss="modal">Закрыть</button>
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
    editProductModal:false,
    productDetails:{
        id: undefined,
        code: undefined,
        name: undefined,
        price: undefined,
        category: undefined
    }
    }},
    methods:{
    editProductPush(){
        this.$http
            .put('api/products',this.productDetails)
            .then(() => this.$emit('refresh'),() => alert('failure'))
            .catch(error => alert(error));
    },

    show(id){
        this.editProductModal = true;
        //alert(id);
        //this.productDetails.id = id;
            this.$http
                .get('api/products/' + id)
                .then(response => this.productDetails = response.data)
                .catch(error => alert(error));
        
    },

    hide(){
        this.editProductModal = false
    }
    }
}
</script>