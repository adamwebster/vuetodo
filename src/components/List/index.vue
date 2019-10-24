<template>
<ul>
<li v-for="item in data" :key="item.id" >
{{item.label}}
</li>
</ul>
</template>

<script>
export default {
  name: 'List',
  props: {
    data: Array,
  }
}
</script>

<style scoped>

</style>