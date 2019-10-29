<template>
<ul v-if="data.length > 0" class="vuetodo-list">
  <li @click="completeClick(item.id)"  v-for="(item) in sortedItems" :key="item.id">
    <font-awesome-icon class="vuetodo-list_status" :icon="item.completed ? ['far' ,'check-circle'] : ['far' ,'circle']" />
    <span class="label">
      {{item.label}}
    </span>
    <button @click="removeClick(item.id)">
      <font-awesome-icon icon="times-circle" /></button>
    <span class="date"> {{ item.date | moment}}</span>

  </li>
</ul>
<div class="vuetodo-emptystate" v-else>
  <font-awesome-icon :icon="['far', 'calendar-check']" />
  {{message}}
</div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'List',
  props: {
    data: Array,
    removeClick: {
      type: Function,
      default: () => {}
    },
    completeClick: {
      type: Function,
      default: () => {}
    }, 
    message: {
      type: String,
      default: ''
    }
  },
  computed: {
    sortedItems: function () {
      return this.data.slice().sort((a, b) => new Date(a.date) - new Date(b.date))
    }
  },
  filters: {
    moment: function (date) {
      return moment(date).format('MMMM Do YYYY');
    }
  },

  methods: {}
}
</script>

<style scoped>
.vuetodo-list {
  border-radius: 5px;
  width: 100%;
  border: solid 1px #ccc;
  list-style: none;
  background-color: #f2f2f2;
  margin: 10px auto;
  padding: 0;
}
  .vuetodo-list li {
    border-bottom: solid 1px #ccc;
    padding: 10px 10px 10px 10px;
    margin: 0;
    cursor:pointer;
    box-sizing: border-box;
  }
    .vuetodo-list li:last-child {
      border-bottom: none;
    }

   .vuetodo-list label {
      display: inline-block;
      width: calc(100% - 40px);
    }

    .vuetodo-list .date {
      width: 100%;
      font-size: 12px;
      display: inline-block;
      color: #999;
    }


   .vuetodo-list_status {
      margin-right: 5px;
      cursor: pointer;
   }
   
   .vuetodo-list_status hover{
        color: #5e5e5e;
      }



  button {
    float: right;
    border: none;
    background-color: transparent;
    color: #777;
    font-size: 18px;
    margin: 1px 0 0 0;
    padding: 0;
    cursor: pointer;
  }

  button:hover{
    color: #5e5e5e;
  }


.vuetodo-emptystate {
  width: 100%;
  padding: 20px;
  background-color: #eee;
  box-sizing: border-box;
  border: solid 1px #ccc;
  text-align: center;
  color: #999;
  margin-top: 10px;
}
</style>
