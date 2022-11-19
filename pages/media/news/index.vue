<template>
  <div v-if="$apollo.error" class="container-error">error</div>
  <AtomsLoading v-else-if="!$apollo.loading" type="cards-page-news" />
  <main v-else-if="getAllNews">
    <AtomsCoverImage :title="`${$t('pageAllNews')}`" />
    <div v-if="getAllNews" class="container">
      <div class="allnews-page">
        <MoleculesNewsCard
          v-for="post in getAllNews.edges"
          :key="post.id"
          :post="post.node"
        />
      </div>
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
  margin-top: 64px;
  margin-bottom: 96px;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 32px 30px;
  row-gap: 32px;
  column-gap: 30px;
  flex-wrap: wrap;
}
@media (max-width: $mobile) {
  .allnews-page {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin-top: 32px;
    margin-bottom: 64px;
  }
}
</style>