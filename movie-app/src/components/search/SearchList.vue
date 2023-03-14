<template>
  <section>
    <ul>
      <SearchItem
        v-for="(item, index) in list"
        :key="index"
        :item="item"
      ></SearchItem>
    </ul>
  </section>
</template>

<script>
import SearchItem from './SearchItem.vue'

export default {
  props: {
    list: Array
  },
  components: { SearchItem }
}
</script>

<style lang="scss" scoped>
ul {
  padding: 40px;
}
</style>
