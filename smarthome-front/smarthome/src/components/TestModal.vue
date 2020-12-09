<template>
<div class="modal" id="testmodal" style="display: block;" v-if="showTestModal">
<div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
    <!-- Modal Header -->
    <div class="modal-header">
        <h4 class="modal-title">Modal Heading</h4>
        <button type="button" class="close" @click="showTestModal=false" data-dismiss="modal">×</button>
    </div>
    <!-- Modal body -->
    <div class="modal-body">
        <slot></slot>
    </div>
    <!-- Modal footer -->
    <div class="modal-footer">
        <button type="button" @click="showTestModal=false" class="btn btn-danger" data-dismiss="modal">Close</button>
    </div>
    </div>
</div>
</div>
</template>

<script>

export default {
    data() {
        return {
        showTestModal: false
        }
    },
    methods: {
        show() {
            alert("show!!");
            this.showTestModal = true;                
        }
        ,
        hide() {
            this.showTestModal = false
        }
    }
}
</script>