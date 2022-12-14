<template>
  <div class="container-error">
    <div class="container-error__cover">
      <figure>
        <nuxt-picture
          src="/images/images_404.png"
          class="container-error__picture"
          alt="test"
          :imgAttrs="{
            class: 'cover-image__img',
            style: 'display:block',
            'data-my-data': 'my-value',
          }"
        />
      </figure>
    </div>
    <div class="container-error__content">
      <div class="page-not-found">
        <div class="heading-error">
          <span class="heading-error__number">404</span>
          <span class="heading-error__text">{{ $t('notFound') }}</span>
          <AtomButton
            type="white"
            buttonName="
      Повернутись на головну
    "
            buttonWith="360px"
          />
        </div>
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
.page-not-found {
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
  color: #fff;
}
.heading-error__text {
  color: #fff;
  font-size: 24px;
  margin-bottom: 48px;
}
.container-error__cover {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  z-index: 0;
}
.container-error__content {
  position: absolute;
  top: 50%;
  left: 0;
  z-index: 1;
  width: 100%;
  transform: translateY(-50%);
}
.container-error__picture {
  &::after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 3;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    background: rgba(21, 21, 21, 0.66);
  }
}
</style>