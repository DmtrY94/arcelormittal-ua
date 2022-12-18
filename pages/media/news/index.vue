<template>
  <div v-if="$apollo.error" class="container-error">error</div>
  <AtomsLoading v-else-if="getAllNews === null" type="cards-page-news" />
  <main v-else-if="getAllNews">
    <AtomsCoverImage :title="`${$t('pageAllNews')}`" />
    <div class="container">
      <div class="allnews-page">
        <MoleculesNewsCard
          v-for="post in getAllNews.edges"
          :key="post.id"
          :post="post.node"
        />
        <div
          v-if="showMoreEnabled && getAllNews.pageInfo.hasNextPage"
          class="list-container__button-block"
          @click="showMores"
        >
          <div v-if="$apollo.queries.getAllNews.loading">Loading...</div>
          <AtomButton
            v-else
            :button-name="`${$t('loadMore')}`"
            button-with="254px"
            button-link="none"
            type="color"
            class="button-container"
          />
        </div>
        <div v-else></div>
      </div>
    </div>
  </main>
  <main v-else>
    <AtomsLoading type="cards-page-news" />
  </main>
</template>
<script>
import getAllNews from '@/queries/getPageAllNews'

const pageSize = 6

export default {
  data() {
    return {
      page: 0,
      getAllNews: '',
      showMoreEnabled: true,
      params: this.$route.params.slug,
    }
  },
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
      result(result) {
        if (result.data.getAllNews.edges.length === 0) {
          this.$root.error({ statusCode: 404, message: 'Article Not Found' })
        }
      },
      error() {
        this.$root.error({ statusCode: 404, message: 'Error 400. Bad request' })
      },
      update(data) {
        return data.getAllNews
      },
    },
  },
  methods: {
    showMores() {
      this.$apollo.queries.getAllNews.fetchMore({
        variables: {
          first: 3,
          after: this.getAllNews.pageInfo.endCursor,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          const newEdges = fetchMoreResult.getAllNews.edges
          const pageInfo = fetchMoreResult.getAllNews.pageInfo

          this.showMoreEnabled = pageInfo.hasNextPage
          return {
            getAllNews: {
              __typename: previousResult.getAllNews.__typename,
              // Merging the tag list
              edges: [...previousResult.getAllNews.edges, ...newEdges],
              pageInfo,
            },
          }
        },
      })
    },
  },
  head() {
    return {
      title: "Новини | АрселорМіттал Кривий Ріг",
      link: [
        {
          rel: 'canonical',
          href: 'https://metalurg.online/',
        },
      ],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.getMainPage?.seo?.metaDesc,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.getMainPage?.seo?.title,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.getMainPage?.seo?.metaDesc,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.getMainPage?.seo?.opengraphImage?.sourceUrl,
        },
      ],
    }
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