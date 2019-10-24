<template>
<input @change="$emit('change')">
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

</style>