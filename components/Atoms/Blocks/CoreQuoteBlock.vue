<template>
  <div class="quote-block__container">
    <div
      v-for="text in attributes.innerBlocks"
      :key="text"
      class="quote-block__text"
    >
      <div v-html="text.saveContent"></div>
      <span v-if="attributes.attributes.citation" class="quote-block__citation">
        {{ attributes.attributes.citation }}</span
      >
    </div>
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
.quote-block__citation {
  display: block;
  font-size: 18px;
  margin-top: 16px;
  font-weight: 800;
}
@media (min-width: $mobile) and (max-width: 1280px) {
  .quote-block__container {
    max-width: 724px;
  }
}
@media (max-width: $mobile) {
  .quote-block__container {
    max-width: 100%;
    padding: 0 15px;
  }
  .quote-block__text p {
    font-size: 18px;
  }
}
</style>