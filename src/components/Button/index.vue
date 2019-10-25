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

<style lang="scss" scoped>
button {
  background-color: transparent;
  border: solid 1px #cd7e7e;
  color: #cd7e7e;
  border-radius: 5px;
  height: 34px;
  padding: 0 10px;
  box-sizing: border-box;
  outline: none;
  cursor: pointer;

  &:hover {
    border-color: darken(#cd7e7e, 10%);
    color: darken(#cd7e7e, 10%)
  }

  &.primary {
    background-color: $accentColor;
    color: lighten(#cd7e7e, 100%);
    &:hover{
      background-color: darken(#cd7e7e, 10%);
    }
  }

}

  input + button{
   border-top-left-radius: 0;
   border-bottom-left-radius:0;
 }
</style>
