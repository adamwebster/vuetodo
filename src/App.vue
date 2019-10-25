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
    <Input placeholder="Tile of item..." :value="newToDoValue" @keyup="changevalue" @keyup.esc="resetInput" />
    <Datepicker :value="selectedDate" placeholder="Choose a date..." @selected="changeDate" format="MMM dsu yyyy" />
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
import Datepicker from 'vuejs-datepicker';
import moment from 'moment';
export default {
  name: 'app',
  components: {
    List,
    Button,
    PageHeading,
    Input,
    Alert,
    Datepicker
  },
  data: () => {
    return {
      showAlert: false,
      greeting: 'Testing what vue js can do',
      alertMessage: '',
      newToDoValue: '',
      selectedDate: '',
      formattedDate: '',
      listItems: JSON.parse(localStorage.getItem('toDos')) || [],
    }
  },
  methods: {
    addItem: function () {
      if (this.newToDoValue.length === 0) {
        this.showAlert = true;
        this.alertMessage = 'Can\'t add the item because no text is entered.';
        return;
      }

      if (this.selectedDate.length === 0) {
        this.showAlert = true;
        this.alertMessage = 'Choose a date for your todo.';
        return;
      }
      let localStorageList = JSON.parse(localStorage.getItem('toDos'));
      if(!localStorageList) {
        localStorage.setItem('toDos', JSON.stringify([]));
      }
    
  console.log(JSON.parse(localStorage.getItem('toDos')));
      this.listItems.push({
        id: this.listItems.length + 1,
        label: this.newToDoValue,
        date: this.selectedDate,
      })


      localStorage.setItem('toDos',  JSON.stringify(this.listItems))
      this.newToDoValue = '';
      this.selectedDate = '';
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
    changeDate: function (e) {
      this.selectedDate = e;
      this.formattedDate = moment(e).format('MMM Do YYYY');
      this.showAlert = false;
    },
    removeClick: function (index) {
      console.log("here", index);
      const newItems = this.listItems.slice();
      newItems.splice(index, 1);
      
      this.listItems = newItems;
            localStorage.setItem('toDos',  JSON.stringify(this.listItems))
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

.vdp-datepicker{
 margin: 0 5px;
}

.vdp-datepicker__calendar{
  .cell:not(.blank):not(.day-header){
    &.selected{
      background: $accentColor!important;
      color: lighten($accentColor, 25%);
    }
    &:hover{
      border-color: $accentColor!important;
    }
  }
}
</style>
