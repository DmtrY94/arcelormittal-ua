<template>
  <div v-if="getMainPage">
    <OrganismHeroMain :heading="getMainPage.mainpage" />
    <div  style="height: 1000px">
    {{getMainPage}}
    </div>
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
}
</script>
