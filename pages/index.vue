<template>
  <div v-if="getMainPage">
    <OrganismHeroMain :heading="getMainPage.mainpage" />
    <OrganismsBlocks :blocks="getMainPage.blocks" />
  </div>
</template>

<script>
import getMainPage from '@/queries/getMainPage'

export default {
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
