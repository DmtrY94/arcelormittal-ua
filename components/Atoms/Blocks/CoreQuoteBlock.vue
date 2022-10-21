<template>
  <div class="quote-block__container">
    <div v-html="attributes.value" class="quote-block__text"></div>
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
.quote-block__container {
  max-width: 1028px;
  margin: 0 auto;
}
.quote-block__text {
  border-left: 4px solid var(--color-primary);
  margin: 0 auto;
  padding-left: 25px;
  p {
    font-size: 28px;
    line-height: 150%;
  }
}
</style>