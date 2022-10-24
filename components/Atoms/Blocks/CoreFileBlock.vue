<template>
  <div class="file-block text-block-width">
    <div class="file-block__left">
      <div class="file-block__icon">
        <ThePdf v-if="fileType === 'pdf'" />
        <TheDocs v-else-if="fileType === 'docx'"/>
        <TheXlsx v-else-if="fileType === 'xlsx'"/>
        <TheJpg v-else-if="fileType === 'jpg'"/>
        <TheFile v-else />
      </div>
      <div class="file-block__name">{{ attributes.fileName }}.{{ fileType }}</div>
    </div>
    <div class="file-block__right">
      <a :href="attributes.href" target="_blank" class="file-block__download">{{
        attributes.downloadButtonText
      }}</a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    attributes: {},
  },
  computed: {
    fileType() {
      const fileName = this.attributes.href
      const fileSplit = fileName.split('.'); 
      const fileSplitReverse = fileSplit.reverse();
      const fileType = fileSplitReverse[0];
      return fileType
    },
  },
}
</script>
<style lang="scss">
.file-block {
  border-top: 1px solid;
  padding-top: 32px;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  justify-content: space-between;
  &__left {
    display: flex;
    align-items: center;
  }
  &__icon {
    margin-right: 8px;
    svg {
      display: flex;
    }
  }
  &__name {
    font-size: 21px;
  }
  &__download {
    font-size: 21px;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(currentColor),
      to(currentColor)
    );
    background-image: linear-gradient(currentColor, currentColor);
    background-position: 0 100%;
    background-repeat: no-repeat;
    background-size: 100% 2px;
    font-family: inherit;
    padding-bottom: 2px;
    text-decoration: none;
    &:hover {
      background-image: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(currentColor),
        to(currentColor)
      );
      background-image: linear-gradient(currentColor, currentColor);
      color: #ff3700;
      -webkit-animation: draw-line 0.25s ease-in-out;
      animation: draw-line 0.25s ease-in-out;
    }
  }
}
</style>