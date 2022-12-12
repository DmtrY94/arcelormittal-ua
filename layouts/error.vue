<template>
  <div class="container-error">
     <AtomsCoverImage
     
      title="Помилка"
    
    />
    <div class="page-not-found">
      <div class="heading-error">
        <span class="heading-error__number">404</span>
        <span class="heading-error__text">Такої сторінки не існує </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'error',
  head() {
    return {
      bodyAttrs: {
        class: 'error-page',
      },
    }
  },
}
</script>
<style lang="scss">
.error-page .page-content {
  margin-bottom: 0;
}
.container-error {
  height: calc(100vh - 145px);
}
.page-not-found {
  height: calc(100vh - 145px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.heading-error {
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;
}
.heading-error__number {
  font-size: 120px;
  line-height: 100%;
  font-weight: 800;
}
</style>