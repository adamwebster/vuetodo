<template>
<button @click="$emit('click')" :class="{'primary': primary}">
  <slot>Button</slot>
</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    primary: {
      type: Boolean,
      default: false
    },
    click: {
      type: Function
    },
  },

}
</script>

<style scoped>
button {
  background-color: transparent;
  border: solid 1px red;
  color: red;
  height: 34px;
  padding: 0 10px;
  box-sizing: border-box;
  outline: none;
  cursor: pointer;
  margin: 0;
  border-radius: 5px;
}

button:hover {
  border-color: red;
  color: red;
}

button.primary {
  background-color: red;
  color: red;
}

button.primary:hover {
  background-color: red;
}

button.primary:focus {
  border-color: red;
}

input+button {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
</style>
