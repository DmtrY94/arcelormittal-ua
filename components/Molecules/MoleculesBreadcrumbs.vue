<template>
  <div class="breadcrumbs-container">
    <NuxtLink :to="localePath('/')" class="breadcrumbs-link">{{$t('breadCrumbMain')}}</NuxtLink>
    <span class="breadcrumbs-link">/</span>
    <NuxtLink v-if="parent" :to="localePath({ path: `/${parent.slug}` })" class="breadcrumbs-link">{{parent.title}} /</NuxtLink>
    <span class="breadcrumbs-link breadcrumbs-link--noactive">{{ slug1 }}</span>
  </div>
</template>
<script>
export default {
  props: {
    slug1: {},
    parent: {},
  },
}
</script>
<style lang="scss">
.breadcrumbs-container {
  position: relative;
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 24px;
}
.breadcrumbs-link {
  font-size: 18px;
  color: #ffffff;
  margin-right: 8px;
  &--noactive {
    color: rgba(255, 255, 255, 0.6);
  }
}
</style>