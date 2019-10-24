<template>
<div id="app">
  <page-heading>
    Todo App
    <template v-slot:sub-heading>
      {{greeting}}
    </template>
  </page-heading>
  <Button @click="log" primary>Test</Button>
  <List :data="listItems" />

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
    log: function () {
      this.greeting = 'I am now this'
      this.listItems.push({
        id: this.listItems.length + 1,
        label: 'item' + (this.listItems.length + 1)
      })
    }

  }

}
</script>

<style>
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
