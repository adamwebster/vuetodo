<template>
<ul v-if="data.length > 0" class="vuetodo-list">
  <li v-for="(item, index) in data" :key="item.id">
    {{item.label}}
    <button @click="removeClick(index)"><font-awesome-icon icon="times-circle" /></button>
  </li>
</ul>
<div class="vuetodo-emptystate" v-else>
  Add an item to the list
</div>
</template>

<script>
export default {
  name: 'List',
  props: {
    data: Array,
    removeClick: {
      type: Function,
      default: () => {}
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.vuetodo-list {
  width: 100%;
  border: solid 1px #ccc;
  list-style: none;
  background-color: darken(#fff, 5%);
  margin: 10px auto;
  padding: 0;

  & li {
    border-bottom: solid 1px #ccc;
    padding: 10px 10px 10px 10px;
    margin: 0;
    box-sizing: border-box;

    &:last-child {
      border-bottom: none;
    }
  }
  button{
    float:right;
    border:none;
    background-color:transparent;
    color: #cd7e7e;
  }

 
}
 .vuetodo-emptystate{
    width:100%;
    padding:20px;
      background-color: darken(#fff, 5%);
    box-sizing:border-box;
    border: solid 1px #ccc;
    text-align:center;
    color: #999;
  }
</style>
