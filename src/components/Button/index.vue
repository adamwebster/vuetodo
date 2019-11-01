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
  border: solid 1px hsl(189, 84%, 37%);
  color: hsl(189, 84%, 37%);
  height: 34px;
  padding: 0 10px;
  box-sizing: border-box;
  outline: none;
  cursor: pointer;
  margin: 0;
  border-radius: 5px;
}

button[disabled]{
  background-color: #e7e7e7;
  color: #9f9f9f;
  border-color: #9f9f9f;
  cursor: default;
}

button:not([disabled]):hover {
  border-color: hsl(189, 84%, 37%);
  background-color: hsl(189, 84%, 80%);
  color: hsl(189, 84%, 37%);
}

button.primary {
  background-color: hsl(189, 84%, 37%);
  color: hsl(189, 84%, 80%);
}

button.primary:hover {
  background-color: hsl(189, 84%, 10%);
}

button.primary:focus {
  border-color: hsl(189, 84%, 80%);
}

input+button {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

button.active {
  background-color: hsl(189, 84%, 80%);
}
</style>
