<template>
  <div class="wrap">
    <AppHeader></AppHeader>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue'

export default {
  components: {
    AppHeader
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  position: relative;
  main {
    padding: 40px 0;
  }
}
</style>
