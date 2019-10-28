<template>
<input v-on="$listeners" :value="value" v-bind="$props">
</template>

<script>
export default {
  name: 'Input',
  props: {
    change: {
      type: Function
    },
    value: String,
  },
}
</script>

<style>
input {
  border: solid 1px #ccc;
  height: 34px;
  padding: 5px;
  box-sizing: border-box;
  margin-bottom: 10px;
  display: flex;
  flex: 1 1;
  margin: 0;
  border-radius: 5px;
  -webkit-appearance:none;
}
  input:focus {
    outline: none;
    border-color: red;
  }


</style>
