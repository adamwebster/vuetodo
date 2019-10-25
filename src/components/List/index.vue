<template>
<ul v-if="data.length > 0" class="vuetodo-list">
  <li v-for="(item, index) in sortedItems" :key="item.id">
    <font-awesome-icon @click="completeClick(index)" class="vuetodo-list_status" :icon="item.completed ? ['far' ,'check-circle'] : ['far' ,'circle']" />
    <span class="label">
      {{item.label}}
    </span>
    <button @click="removeClick(index)">
      <font-awesome-icon icon="times-circle" /></button>
    <span class="date"> {{ item.date | moment}}</span>

  </li>
</ul>
<div class="vuetodo-emptystate" v-else>
  <font-awesome-icon :icon="['far', 'calendar-check']" />
  Add an item to the list
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
    }
  },
  computed: {
    sortedItems: function () {
      console.log(new Date(this.data[0].sortDate));
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

    .label {
      display: inline-block;
      width: calc(100% - 40px);
    }

    .date {
      width: 100%;
      font-size: 12px;
      display: inline-block;
      color: #999;
    }

    .vuetodo-list_status {
      margin-right: 5px;
      cursor: pointer;
      &:hover{
        color: $accentColor;
      }
    }

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

    &:hover {
      color: darken(#777, 10%)
    }
  }

}

.vuetodo-emptystate {
  width: 100%;
  padding: 20px;
  background-color: darken(#fff, 5%);
  box-sizing: border-box;
  border: solid 1px #ccc;
  text-align: center;
  color: #999;
  margin-top: 10px;
}
</style>
