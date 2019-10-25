<template>
<div class="vuetodo-alert" :class="alertType">
<slot name="message" />
</div>
</template>


<script>
export default {
  name: 'Alert',
  props:{
    alertType:{type: String, default: "danger"}
  }
}
</script>

<style lang="scss" scoped>
  .vuetodo-alert{
    width:100%;
    background-color: lighten($alertDanger, 25%);
    color: darken($alertDanger, 10%);
    border: solid 1px $alertDanger;
    padding:10px;
    box-sizing:border-box;
    margin-bottom:20px;
  }
</style>