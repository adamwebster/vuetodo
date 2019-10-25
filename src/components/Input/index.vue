<template>
<input v-on="$listeners">
</template>

<script>
export default {
  name: 'Input',
  props: {
    change:{ type: Function }
  },

}
</script>

<style scoped>
 input{
   border:solid 1px #ccc;
   height:34px;
   padding:5px;
   box-sizing:border-box;
   margin-bottom:10px;
   display:flex;
   flex: 1 1;
 }
 
</style>