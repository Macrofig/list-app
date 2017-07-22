// line-form.vue
<template>
  <div class="app">
    <input type="text" >
    <app-lists :list="list" />
  </div>
</template>

<script>
export default {
  name: 'list-app',
  data() {
    return {list: ['test', 'test1', 'test2']}
  }
}
</script>

<style lang="less">

</style>
