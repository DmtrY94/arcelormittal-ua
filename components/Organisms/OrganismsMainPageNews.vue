<template>
  <div class="news-block-main">
    <div class="container">
      <AtomsTitle title="Останні новини" />
      <div class="news-block">
        <MoleculesNewsCard
          v-for="post in news.edges"
          :key="post.id"
          :post="post.node"
        />
      </div>
      <AtomButton
        button-name="Дивитись усі"
        button-with="300px"
        button-link="/media/news"
        type="color"
        class="button-container"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    news: {},
  },
}
</script>
<style lang="scss">
.news-block-main {
  display: block;
  margin-bottom: 96px;
}
.news-block {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 32px 30px;
  row-gap: 32px;
  column-gap: 30px;
  flex-wrap: wrap;
}
.button-container {
    margin-top: 32px;
}
</style>