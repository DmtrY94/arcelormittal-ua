<template>
  <div class="container">
    <div v-for="item in attributes.innerBlocks" :key="item.attributes.text">
      <AtomButton
        :button-name="item.attributes.text"
        button-with="300px"
        :button-link="item.attributes.url"
      />
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