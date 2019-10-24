<template>
<div class="adam">
<h1>{{ custom }}</h1>

</div>
</template>

<script>
 export default {
   name: 'AdamsWorld',
   props: {
     custom: String
   }
 }
</script>

<style lang="scss" scoped>
.adam{
  font-size:100px;
}

</style>