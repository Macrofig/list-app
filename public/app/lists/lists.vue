// Lists.vue
<template>
  <ul>
    <li v-for="list in lists">{{list}}</li>
  </ul>
</template>

<script>
export default {
  name: 'app-lists',
  props: ['lists']
}
</script>

<style lang="less">

</style>
