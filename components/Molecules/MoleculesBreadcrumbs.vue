<template>
  <nav class="breadcrumbs-container">
    <ul class="breadcrumbs-list">
      <li class="breadcrumbs-item">
        <NuxtLink :to="localePath('/')" class="breadcrumbs-link">
          {{ $t('breadCrumbMain') }}
        </NuxtLink>
      </li>
      <li v-if="managementPage || allmanagementPage" class="breadcrumbs-item">
        <NuxtLink :to="localePath('/about')" class="breadcrumbs-link">
          {{ $t('aboutPageBreadcrumbs') }}
        </NuxtLink>
      </li>
      <li v-if="managementPage" class="breadcrumbs-item">
        <NuxtLink
          :to="localePath('/about/our-management')"
          class="breadcrumbs-link"
        >
          {{ $t('pageAllManagement') }}
        </NuxtLink>
      </li>
      <li v-if="allnewsPage" class="breadcrumbs-item">
        <NuxtLink :to="localePath('/media/news')" class="breadcrumbs-link">
          {{ $t('pageAllNews') }}
        </NuxtLink>
      </li>
      <li v-if="parent" class="breadcrumbs-item">
        <NuxtLink
          :to="localePath({ path: `/${parent.slug}` })"
          class="breadcrumbs-link"
          >{{ parent.title }}
        </NuxtLink>
      </li>
      <li class="breadcrumbs-item">
        <span class="breadcrumbs-link breadcrumbs-link--noactive">
          {{ slug1 }}
        </span>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: {
    slug1: {},
    parent: {},
  },
  data() {
    return {
      managementPage:
        this.$route.name === 'about-our-management-id___uk' ||
        this.$route.name === 'about-our-management-id___en',
      allmanagementPage:
        this.$route.name === 'about-our-management___uk' ||
        this.$route.name === 'about-our-management___en',
      allnewsPage:
        this.$route.name === 'media-news-id___uk' ||
        this.$route.name === 'media-news-id___en',
    }
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
.breadcrumbs-list {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.breadcrumbs-item {
  position: relative;
  margin-left: 16px;
  &:first-child {
    margin-left: 0;
  }
  &::after {
    position: absolute;
    height: 18px;
    top: 2px;
    right: -6px;
    content: '';
    width: 1px;
    background: #ffffff;
    -webkit-transform: rotate(26deg);
    transform: rotate(26deg);
  }
  &:last-child::after {
    content: none;
    display: none;
  }
}
.breadcrumbs-link {
  white-space: nowrap;
  font-size: 18px;
  color: #ffffff;
  margin-right: 8px;
  &--noactive {
    color: rgba(255, 255, 255, 0.6);
  }
}
@media (max-width: $mobile) {
  .breadcrumbs-container {
    position: relative;
    overflow: hidden;
  }
  .breadcrumbs-list {
    padding-top: 15px;
    padding-bottom: 15px;
    overflow-x: auto;
  }
  .breadcrumbs-item {
    &::after {
      top: 2px;
      height: 16px;
    }
  }
  .breadcrumbs-link {
    font-size: 14px;
  }
}
</style>