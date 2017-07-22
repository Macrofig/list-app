// Lists.vue
<template>
  <ul>
    <li v-for="line in list">{{line}}</li>
  </ul>
</template>

<script>
export default {
  name: 'app-lists',
  props: ['list']
}
</script>

<style lang="less">

</style>
