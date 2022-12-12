<template>
  <div v-if="$apollo.error" class="container-error">error</div>
  <AtomsLoading v-else-if="$apollo.loading" type="page" />
  <main v-else-if="getNews" class="page-content">
    <AtomsCoverImage
      v-if="getNews"
      :title="getNews.title"
      :image="getNews.featuredImage"
      :date="getNews.date"
    />
    <OrganismsBlocks v-if="getNews" :blocks="getNews.blocks" />
    <div v-if="this.$i18n.locale == 'uk'" class="banner-block__news">
      <div class="container">
        <div class="banner-block-news__wrapper">
          <h2 class="banner-block-news__title">Читай новини Газети Металург</h2>
          <AtomButton
            button-name="Перейти"
            button-with="300px"
            button-a="https://metalurg.online/"
            type="white"
            class="button-container"
          />
        </div>
      </div>
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
      result(result) {
        if (result.data.getNews.translation === null) {
          this.$root.error({ statusCode: 404, message: 'Article Not Found' })
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
<style lang="scss">
.banner-block__news {
  position: relative;
  padding: 96px 0;
  background: radial-gradient(
    122.56% 389.1% at -22.56% 175.97%,
    #460a78 11.35%,
    #be2878 43.57%,
    #fc3e44 77.36%,
    #f58746 99.72%
  );
}
.banner-block-news__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.banner-block-news__title {
  color: #ffffff;
  width: 80%;
}
@media (max-width: $mobile) {
  .banner-block-news__wrapper {
    flex-direction: column;
  }
}
</style>