<template>
<button :class="{'primary': primary}">
<slot>Button</slot>
</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    primary: {type: Boolean, default:false },
  }
}
</script>

<style scoped>

button{
  background-color: transparent;
  border: solid 1px blue;
  color: blue;
}

button.primary{
    background-color: blue;
    color: #fff;
}

</style>