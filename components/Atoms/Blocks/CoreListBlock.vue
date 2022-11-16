<template>
  <div class="list-block text-block-width"  v-html="attributes.saveContent">
    
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
.list-block {
  ul {
    margin: 24px 0;
  }
  li {
    font-size: 21px;
    line-height: 150%;
    margin-bottom: 16px;
    &::before {
      background: #ff3700;
      content: '';
      display: inline-block;
      height: 8px;
      margin-right: 16px;
      width: 8px;
    }
  }
}
</style>