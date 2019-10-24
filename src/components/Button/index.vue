<template>
<button @click="$emit('click')"  :class="{'primary': primary}">
<slot>Button</slot>
</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    primary: {type: Boolean, default:false },
    click: {type: Function },
  },

}
</script>

<style scoped>

button{
  background-color: transparent;
  border: solid 1px blue;
  color: blue;
  border-radius: 5px;
}

button.primary{
  background-color: blue;
  color: #fff;
}

</style>