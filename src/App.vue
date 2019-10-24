<template>
<div id="app">
  <PageHeading>
    Todo App
    <template v-slot:subHeading>
      A vue application to test what vue can do.
    </template>
  </PageHeading>
  <Button>Test
    <template v-slot:text>
      testing
    </template>
  </Button>
  <List />
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
  }
}
</script>

<style>
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
