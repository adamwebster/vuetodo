<template>
<div class="vuetodo-page-heading">
  <h1>
    <slot />
  </h1>
  <h4>
    <slot name="sub-heading" />
  </h4>
</div>
</template>

<script>
export default {
  name: 'PageHeading',
  props: {

  }
}
</script>

<style scoped>
.vuetodo-page-heading{
  margin-bottom: 30px;
}
  h1{
    margin:0;
  }
  h4{
    font-weight:normal;
    margin:0;
  }
</style>
