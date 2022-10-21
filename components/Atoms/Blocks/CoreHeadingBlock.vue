<template>
  <div class="text-block-width">
    <h1 v-if="attributes.level == 1" class="block-title h1">{{ attributes.content }}</h1>
    <h2 v-else-if="attributes.level == 2" class="block-title h2">{{ attributes.content }}</h2>
    <h3 v-else-if="attributes.level == 3" class="block-title h3">{{ attributes.content }}</h3>
    <h4 v-else-if="attributes.level == 4" class="block-title h4">{{ attributes.content }}</h4>
    <h5 v-else-if="attributes.level == 5" class="block-title h5">{{ attributes.content }}</h5>
    <h6 v-else class="block-title h6">{{ attributes.content }}</h6>
  </div>
</template>
<script>
export default {
  props: {
    attributes: {},
  },
}
</script>
<style lang="scss">
.block-title {
    margin-top: 64px;
    margin-bottom: 32px;
}
</style>