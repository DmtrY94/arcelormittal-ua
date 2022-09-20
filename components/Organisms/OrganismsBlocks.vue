<template>
  <section>
    <div v-for="block in blocks" :key="block.__typename">
      {{ block.dynamicContent }}
    </div>
  </section>
</template>
<script>
export default {
  props: {
    blocks: {},
  },
}
</script>