// Lines.vue
<template>
  <input type="text" >
  <button type="button">Save</button>
  <ul>
    <li v-for="line in lines">{{line}}</li>
  </ul>
</template>

<script>
export default {
  name: 'app-lists',
  props: ['lines']
}
</script>

<style lang="less">

</style>
