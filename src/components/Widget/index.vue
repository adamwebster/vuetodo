<template>
<div :class="['vuetodo-widget', type]">
  <h3>{{number}}</h3>
  <p>{{message}}</p>
</div>
</template>

<script>
export default {
  name: 'Widget',
  props: {
    number: {
      type: Number,
      default: null
    },
    message: String,
    type: String,
  }
}
</script>

<style scoped>
.vuetodo-widget {
  padding: 15px;
  border-radius: 5px;
  boxsizing: border-box;
  flex: 1 1;
  margin: 10px 5px 25px 5px;
}

h3 {
  padding: 0;
  margin: 0;
  font-size: 24px;
}

p {
  font-size: 12px;
  margin: 0;
}

p:first-child {
  margin-left: 0;
}

p:last-child {
  margin-right: 0;
}

.vuetodo-widget.total {
  background: linear-gradient(20deg, hsl(189, 84%, 37%), hsl(189, 73%, 71%));
  color: #fff;
}

.vuetodo-widget.today {
  background: linear-gradient(20deg, hsl(30, 100%, 50%), hsl(44, 100%, 50%));
  color: #fff;

}

.vuetodo-widget.overdue {
  background: linear-gradient(20deg, hsl(334, 83%, 48%), hsl(336, 100%, 79%));
  color: #fff;
}
</style>
