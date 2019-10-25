<template>
<div id="app" class="vuetodo-wrapper">
  <page-heading>
    Todo App
    <template #sub-heading>
      {{greeting}}
    </template>
  </page-heading>
  <Alert v-if="showAlert">
    <template #message>
      {{alertMessage}}
    </template>
  </Alert>
  <div class="flex-row">
    <Input placeholder="Add an item to the list..." :value="newToDoValue" @keyup="changevalue" @keyup.esc="resetInput" />
    <Button @click="addItem" primary>Add Item</Button>
  </div>
  <List :removeClick="removeClick" :data="listItems" />
</div>
</template>

<script>
import List from './components/List';
import Button from './components/Button';
import PageHeading from './components/PageHeading';
import Input from './components/Input';
import Alert from './components/Alert';

export default {
  name: 'app',
  components: {
    List,
    Button,
    PageHeading,
    Input,
    Alert
  },
  data: () => {
    return {
      showAlert: false,
      greeting: 'Testing what vue js can do',
      alertMessage: '',
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
      if (this.newToDoValue.length === 0) {
        this.showAlert = true;
        this.alertMessage = 'Can\'t add the item because no text is entered.';
        return;
      }
      this.listItems.push({
        id: this.listItems.length + 1,
        label: this.newToDoValue
      })
      this.newToDoValue = '';
    },
    changevalue: function (e) {
      console.log('change value', e.target.value);
      this.newToDoValue = e.target.value;
      this.showAlert = false;
    },
    testChange: function (e) {
      console.log('testing', e);
    },
    resetInput: function (){
      this.newToDoValue = '';
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

<style lang="scss">
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  background-color: #f7f7f7;
  color: #656565;
}

.vuetodo-wrapper {
  width: 500px;
  margin: 0 auto;
  border: solid 1px #ccc;
  padding: 10px;
  box-sizing: border-box;
  background-color: #fff;
}

.flex-row {
  display: flex;
  flex: 1 1;
  flex-flow: row;
}
</style>
