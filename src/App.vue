<template>
<div id="app" class="vuetodo-wrapper">
  <page-heading>
    Todo App
    <template v-slot:sub-heading>
      {{greeting}}
    </template>
  </page-heading>
    <input :value="newToDoValue" @change="changevalue" />

  <Button @click="addItem" primary>Add Item</Button>
  <List :removeClick="removeClick" :data="listItems" />

</div>
</template>

<script>
import List from './components/List';
import Button from './components/Button';
import PageHeading from './components/PageHeading';

export default {
  name: 'app',
  components: {
    List,
    Button,
    PageHeading,
  },
  data: () => {
    return {
      greeting: 'Testing what vue js can do',
      newToDoValue: '',
      listItems: [{
        id: '1',
        label: 'item1'
      }, {
        id: '2',
        label: 'item2'
      }, {
        id: '3',
        label: 'item3'
      }, ]
    }
  },
  methods: {
    addItem: function () {
      this.greeting = 'I am now this'
      if(this.newToDoValue.length === 0){
        console.log('Can\'t add the item because no text is entered.')
        return;
      }
      this.listItems.push({
        id: this.listItems.length + 1,
        label: this.newToDoValue
      })
      this.newToDoValue = '';
    },
    changevalue: function (e){
      console.log('change value', e.target.value);
      this.newToDoValue = e.target.value;
    },
    removeClick: function (index) {     
       console.log("here", index);
       const newItems = this.listItems.slice();

      newItems.splice(index, 1);

      this.listItems = newItems;
    }
  }

}
</script>

<style>
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  background-color:#f7f7f7;
}

.vuetodo-wrapper{
  width:500px;
  margin:0 auto;
  border: solid 1px #ccc;
  padding:10px;
  box-sizing:border-box;
}
</style>
