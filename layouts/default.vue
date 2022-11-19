<template>
  <div class="layout">
    <transition
      v-if="hide"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
    >
      <div class="splashScreen">
        <div class="splashScreen__container">
          <TheLogoWithName />
        </div>
      </div>
    </transition>
    <OrganismHeader />
    <OrganismsMenu />

    <Nuxt />

    <OrganismsFooter />
  </div>
</template>
<script>
export default {
  data() {
    return {
      test: this.$route.name,
      hide: true,
    }
  },
  mounted() {
    this.show()
  },
  methods: {
    show() {
      setTimeout(() => {
        this.hide = false
      }, 500)
    },
    beforeEnter(el) {
      this.$gsap.set(el, {
        y: -150,
        opacity: 1,
      })
    },
    enter(el, done) {
      this.$gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.15,
      })
    },
    leave(el, done) {
      this.$gsap.to(el, {
        y: -50,
        opacity: 0,
        duration: 0.85,
        onComplete: done,
      })
    },
  },
}
</script>
<style lang="scss">
.splashScreen {
  background: #ffffff;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  animation: 3s linear 0s infinite alternate none running granimate;
  &__container {
    overflow: hidden;
    position: relative;
    svg {
      position: relative;
      display: block;
    }
  }
}
@media (max-width: $mobile) {
  .splashScreen__container {
    display: flex;
    justify-content: center;
    svg {
      width: 70%;
    }
  }
}
</style>