<template>
  <div v-if="$apollo.error" class="container-error">error</div>
  <main v-else-if="getAllNews">
    <AtomsCoverImage :title="`${$t('pageAllNews')}`" />
    <div v-if="getAllNews" class="allnews-page container">
      <MoleculesNewsCard
        v-for="post in getAllNews.edges"
        :key="post.id"
        :post="post.node"
      />
    </div>
  </main>
</template>
<script>
import getAllNews from '@/queries/getPageAllNews'

const pageSize = 10

export default {
  apollo: {
    getAllNews: {
      prefetch: true,
      query: getAllNews,
      variables() {
        return {
          first: pageSize,
          locale: this.$i18n.locale.toUpperCase(),
          after: null,
        }
      },
      update(data) {
        return data.getAllNews
      },
    },
  },
}
</script>
<style lang="scss">
.allnews-page {
  margin-top: 72px;
  margin-bottom: 96px;
  min-height: 100vh;
}
</style>