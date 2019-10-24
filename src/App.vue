<template>
  <div id="app">
  <h1>ToDo App</h1>
 <List />
  </div>
</template>

<script>
import List from './components/List';

export default {
  name: 'app',
  components: {
    List
    }
}
</script>

<style>
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
