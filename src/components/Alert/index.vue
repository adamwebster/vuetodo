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

<style scoped>
  .vuetodo-alert{
    width:100%;
    background-color: #f1dada;
    color: #bf5959;
    border: solid 1px #bf5959;
    padding:10px;
    box-sizing:border-box;
    margin-bottom:20px;
  }
</style>