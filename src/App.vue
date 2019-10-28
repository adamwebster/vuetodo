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
    <Widget type="total" :number="totalItemCount" message="Total todos"></Widget>
    <Widget type="today" :number="dueToday" message="Todos due today"></Widget>
    <Widget type="overdue" :number="overDue" message="Todos overdue"></Widget>
  </div>
  <div class="flex-row vuetodo_addnew">
    <Input placeholder="Tile of item..." :value="newToDoValue" @keyup="changevalue" @keyup.esc="resetInput" />
    <Datepicker :value="selectedDate" placeholder="Choose a date..." @selected="changeDate" format="MMM dsu yyyy" />
    <Button @click="addItem" primary>Add Item</Button>
  </div>
  <List :removeClick="removeClick" :completeClick="markCompleted" :data="listItems" />
</div>
</template>

<script>
import List from './components/List';
import Button from './components/Button';
import PageHeading from './components/PageHeading';
import Input from './components/Input';
import Alert from './components/Alert';
import Widget from './components/Widget';

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
    Datepicker,
    Widget
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
      if (!localStorageList) {
        localStorage.setItem('toDos', JSON.stringify([]));
      }
      this.listItems.push({
        id: Math.floor(Math.random() * 90000) + 10000,
        label: this.newToDoValue,
        date: this.selectedDate,
        completed: false,
      })
      localStorage.setItem('toDos', JSON.stringify(this.listItems))
      this.newToDoValue = '';
      this.selectedDate = '';
    },
    changevalue: function (e) {
      this.newToDoValue = e.target.value;
      this.showAlert = false;
    },
    testChange: function (e) {
      console.log('testing', e);
    },
    resetInput: function () {
      this.newToDoValue = '';
    },
    changeDate: function (e) {
      this.selectedDate = e;
      this.formattedDate = moment(e).format('MMM Do YYYY');
      this.showAlert = false;
    },
    removeClick: function (index) {
      const newItems = this.listItems.slice();
      const toRemove = this.listItems.filter(item => item.id === index);
      const toRemoveIndex = this.listItems.indexOf(toRemove[0]);
      newItems.splice(toRemoveIndex, 1);
      this.listItems = newItems;
      localStorage.setItem('toDos', JSON.stringify(this.listItems))
    },
    markCompleted: function (index) {
      const newItems = this.listItems.slice();
      const toCheck = this.listItems.filter(item => item.id === index);
      toCheck[0].completed = !toCheck[0].completed;
      this.listItems = newItems;
      localStorage.setItem('toDos', JSON.stringify(this.listItems))
    }

  },
  computed: {
    totalItemCount: function () {
      return this.listItems.filter(item => item.completed === false).length;
    },
    dueToday: function () {
      return this.listItems.filter(item => item.completed === false).filter(item => moment(item.date).format('MMM D YYYY') === moment().format('MMM D YYYY')).length;
    },
    overDue: function () {
      const formatDate = (dateToFormat) => moment.utc(dateToFormat).format('MMM D YYYY')
      return this.listItems.filter(item => item.completed === false).filter(item => moment(formatDate(item.date)).isBefore(moment().format('MMM D YYYY'))).length;
    }
  }
}
</script>

<style>
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
  border-radius: $borderRadius;
}

.flex-row {
  display: flex;
  flex: 1 1;
  flex-flow: row;

  &.vuetodo_addnew {
    margin-bottom: 25px;
  }
}

.vdp-datepicker {
  margin: 0 5px;
}

.vdp-datepicker__calendar .cell:not(.blank):not(.day-header).selected {
  background: hsl(189, 84%, 37%);
  color: hsl(189, 84%, 80%);
}

.vdp-datepicker__calendar .cell:not(.blank):not(.day-header):hover {
  border-color: hsl(189, 84%, 37%);
}
</style>
