<template>
  <NuxtLink :to="urlRemove" class="breadcrumbs-link">
    <span v-if="text === 'Home'">
      {{ $t('breadCrumbMain') }}
    </span>
    <span v-else>{{ text }}</span>
  </NuxtLink>
</template>
<script>
export default {
  props: {
    url: {},
    text: {},
  },
  computed: {
    urlRemove() {
      return this.url.replace(/^.*?:\/\/.*?(?=\/|$)/, '')
    },
  },
}
</script>
<style lang="scss">
.breadcrumbs-link {
  white-space: nowrap;
  font-size: 18px;
  color: #ffffff;
  margin-right: 8px;
  &--noactive {
    color: rgba(255, 255, 255, 0.6);
  }
}
</style>