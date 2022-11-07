<template>
  <main class="page-content">
    <AtomsCoverImage v-if="getNews" :title="getNews.title" :image="getNews.featuredImage" :date="getNews.date" />
    <OrganismsBlocks  v-if="getNews" :blocks="getNews.blocks"  />
    <div class="banner-block__news">
      test
    </div>
  </main>
</template>
<script>
import getNews from '@/queries/getNews'

export default {
  apollo: {
    getNews: {
      query: getNews,
      prefetch: true,
      variables() {
        return {
          slug: this.$route.params.id,
          locale: this.$i18n.locale.toUpperCase(),
        }
      },
      error() {
        this.$root.error({ statusCode: 404, message: 'Error 400. Bad request' })
      },
      update(data) {
        return data.getNews.translation
      },
    },
  },
}
</script>