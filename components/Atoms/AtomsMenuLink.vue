<template>
  <NuxtLink :to="localePath(item.path)">
    {{ item.label }}
  </NuxtLink>
</template>
<script>
export default {
  props: {
    item: {},
  },
}
</script>