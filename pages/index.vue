<template>
  <AtomsLoading v-if="$apollo.loading" type="main-page" />
  <main v-else-if="getMainPage" class="page-content main">
    <OrganismHeroMain v-if="getMainPage" :heading="getMainPage.mainpage" />
    <BlockNews v-if="getMainPageNews.edges" :news="getMainPageNews.edges[0]"/>
    <BlockLinks v-if="getMainPage" :links="getMainPage.mainpage"/>
    <OrganismsBlocks v-if="getMainPage" :blocks="getMainPage.blocks" />
    <OrganismsMainPageNews v-if="getMainPageNews.edges" :news="newsAll" />
  </main>
</template>

<script>

import getMainPageNews from '@/queries/getMainPageNews'
import getMainPage from '@/queries/getMainPage'

export default {
  data() {
    return {
      getMainPageNews: []
    }
  },
  apollo: {
    getMainPage: {
      prefetch: true,
      query: getMainPage,
      variables() {
        return {
          locale: this.$i18n.locale.toUpperCase(),
        }
      },
      update(data) {
        return data.getMainPage.translation
      },
    },
    getMainPageNews: {
      prefetch: true,
      query: getMainPageNews,
      variables() {
        return {
          locale: this.$i18n.locale.toUpperCase(),
        }
      },
      update(data) {
        return data.getMainPageNews
      },
    },
  },
  computed: {
    newsAll() {
      return this.getMainPageNews.edges
        .map((p) => p)
        .slice(1, 7)
    }
  },
  head() {
    return {
      title: this.getMainPage?.seo?.title,
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
.main {
  .site-content {
    margin-top: 0;
  }
}
</style>
