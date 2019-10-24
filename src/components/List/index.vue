<template>
<ul v-if="data.length > 0" class="vuetodo-list">
<li v-for="(item, index) in data" :key="item.id" >
{{item.label}}
<button @click="removeClick(index)">Remove {{index}}</button>
</li>
</ul>
</template>

<script>
export default {
  name: 'List',
  props: {
    data: Array,
    removeClick: {type: Function,  default: () => {}}
  },
  methods: {
  }
}
</script>

<style scoped>
.vuetodo-list{
  width: 90%;
  border: solid 1px #ccc;
  list-style:none;
  background-color:#fff;
  margin:10px auto;
  padding:0;
}
.vuetodo-list li{
  border-bottom: solid 1px #ccc;
  padding:10px 10px 10px 10px;
  margin:0;
  box-sizing:border-box;
}
.vuetodo-list li:last-child{
  border-bottom: none;
}
</style>