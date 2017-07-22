// line-form.vue
<template>
  <div class="app">
    <app-lists :lists="lists" />
    <app-lines :lines="lines" />
  </div>
</template>

<script>
export default {
  name: 'list-app',
  data() {
    return {
      lists: ['list a'],
      lines: ['line 1']
    }
  }
}
</script>

<style lang="less">

</style>
