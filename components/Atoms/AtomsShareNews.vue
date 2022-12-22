<template>
  <div class="share-block-news">
    <div
      v-if="$device.isDesktop"
      @click="OpenShare()"
      class="share-block-news__toggle"
    >
      <svg
        width="13"
        height="13"
        viewBox="0 0 13 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.59615 3.63462C4.02975 3.63462 5.19231 4.79717 5.19231 6.23077C5.19231 7.66437 4.02975 8.82692 2.59615 8.82692C1.16256 8.82692 0 7.66437 0 6.23077C0 4.79717 1.16256 3.63462 2.59615 3.63462ZM8.37104 9.89913C8.33313 10.0554 8.30769 10.2164 8.30769 10.3846C8.30769 11.5316 9.23764 12.4615 10.3846 12.4615C11.5316 12.4615 12.4615 11.5316 12.4615 10.3846C12.4615 9.23763 11.5316 8.30769 10.3846 8.30769C9.77971 8.30769 9.24023 8.57042 8.86067 8.98321L6.01113 7.46342C5.89171 7.79365 5.72608 8.10156 5.5215 8.37935L8.37104 9.89913ZM12.4615 2.07692C12.4615 0.929942 11.5316 0 10.3846 0C9.23764 0 8.30769 0.929942 8.30769 2.07692C8.30769 2.24515 8.33313 2.40612 8.37104 2.5624L5.5215 4.08219C5.7266 4.35998 5.89171 4.66737 6.01113 4.99812L8.86067 3.47833C9.24023 3.89112 9.77971 4.15385 10.3846 4.15385C11.5316 4.15385 12.4615 3.2239 12.4615 2.07692Z"
          fill="white"
        />
      </svg>
    </div>
    <div
      v-if="$device.isMobile"
      @click="webShare"
      class="share-block-news__toggle"
    >
      <svg
        width="13"
        height="13"
        viewBox="0 0 13 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.59615 3.63462C4.02975 3.63462 5.19231 4.79717 5.19231 6.23077C5.19231 7.66437 4.02975 8.82692 2.59615 8.82692C1.16256 8.82692 0 7.66437 0 6.23077C0 4.79717 1.16256 3.63462 2.59615 3.63462ZM8.37104 9.89913C8.33313 10.0554 8.30769 10.2164 8.30769 10.3846C8.30769 11.5316 9.23764 12.4615 10.3846 12.4615C11.5316 12.4615 12.4615 11.5316 12.4615 10.3846C12.4615 9.23763 11.5316 8.30769 10.3846 8.30769C9.77971 8.30769 9.24023 8.57042 8.86067 8.98321L6.01113 7.46342C5.89171 7.79365 5.72608 8.10156 5.5215 8.37935L8.37104 9.89913ZM12.4615 2.07692C12.4615 0.929942 11.5316 0 10.3846 0C9.23764 0 8.30769 0.929942 8.30769 2.07692C8.30769 2.24515 8.33313 2.40612 8.37104 2.5624L5.5215 4.08219C5.7266 4.35998 5.89171 4.66737 6.01113 4.99812L8.86067 3.47833C9.24023 3.89112 9.77971 4.15385 10.3846 4.15385C11.5316 4.15385 12.4615 3.2239 12.4615 2.07692Z"
          fill="white"
        />
      </svg>
    </div>
    <nav v-if="isOpen" class="share-block-news__nav">
      <ul class="share__list">
        <li class="share__item">
          <ShareNetwork
            network="facebook"
            :url="`${baseUrl}${this.$route.fullPath}`"
            :title="title"
            :description="description"
          >
            <div class="share__link">fb</div>
          </ShareNetwork>
          <ShareNetwork
            network="Telegram"
            :url="`${baseUrl}${this.$route.fullPath}`"
            :title="title"
            :description="description"
          >
            <div class="share__link">Tg</div>
          </ShareNetwork>
          <ShareNetwork
            network="LinkedIn"
            :url="`${baseUrl}${this.$route.fullPath}`"
          >
            <div class="share__link">LinkedIn</div>
          </ShareNetwork>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  props: {
    title: {},
    baseUrl: {},
    description: {},
  },
  data() {
    return {
      isOpen: false,
      isSupported: false,
      url: `${this.baseUrl}${this.$route.fullPath}`,
    }
  },
  created() {
    this.isSupport()
  },
  methods: {
    OpenShare() {
      this.isOpen = !this.isOpen
    },
    isSupport() {
      if (process.browser) {
        if (navigator.share) {
          this.isSupported = true
        }
      }
    },
    webShare() {
      navigator.share({
        url: this.url,
        title: this.title,
        description: this.description,
      })
    },
  },
}
</script>
<style lang="scss">
.share-block-news {
  position: absolute;
  right: 0;
  bottom: -76px;
  &__toggle {
    background-color: #ff3700;
    border: 0;
    color: #fff;
    cursor: pointer;
    height: 65px;
    margin: 0;
    width: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 20px;
      height: 20px;
    }
  }
  &__nav {
    color: #001626;
    left: 0;
    margin: 0;
    position: absolute;
    right: 0;
    top: 100%;
  }
}
.share {
  &__list {
  }
  &__item {
    margin: 0;
  }
  &__link {
    background-color: #fff;
    border-color: currentcolor var(--color-primary);
    border-style: none solid;
    border-width: 0 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 65px;
    position: relative;
    -webkit-transition: color 0.25s ease-in, background-color 0.25s ease-in;
    transition: color 0.25s ease-in, background-color 0.25s ease-in;
    width: 65px;
  }
}

.share__item:last-child .share__link {
  border-bottom: 1px solid var(--color-primary);
}
</style>