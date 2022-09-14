<template>
  <nav role="navigation" class="mega-panel mega-panel--active" style="display: none">
    <div class="mega-panel__panel">
      <div class="container mega-panel__container">
        <div class="row">
          <div class="col">
            <div>
              <h1 class="animate-in mega-panel__title">Climate action</h1>
              <p class="animate-in mega-panel__description">
                Our journey to net-zero steelmaking
              </p>
              <a href="#" class="animate-in mega-panel__anchor anchor"
                >Go to Climate action page</a
              >
            </div>
          </div>
          <div class="col">
            <ul class="mega-panel__list">
              <li class="animate-in mega-panel__list-item">
                <a href="#" class="mega-panel__list-item-anchor">
                  Steel's sustainability credentials
                </a>
              </li>
              <li class="animate-in mega-panel__list-item">
                <a href="#" class="mega-panel__list-item-anchor">
                  Leading our industry’s efforts to decarbonise
                </a>
              </li>
              <li class="animate-in mega-panel__list-item">
                <a href="#" class="mega-panel__list-item-anchor">
                  Technology pathways to net-zero steel
                </a>
              </li>
              <li class="animate-in mega-panel__list-item">
                <a href="#" class="mega-panel__list-item-anchor">
                  Decarbonisation technologies
                </a>
              </li>
              <li class="animate-in mega-panel__list-item">
                <a href="#" class="mega-panel__list-item-anchor">
                  Decarbonisation investment plans
                </a>
              </li>
              <li class="animate-in mega-panel__list-item">
                <a href="#" class="mega-panel__list-item-anchor">
                  Partnering to drive systems-wide change
                  <span class="navigation__list-item-count">(1)</span></a
                >
              </li>
              <li class="animate-in mega-panel__list-item">
                <a href="#" class="mega-panel__list-item-anchor">
                  XCarb™ <span class="navigation__list-item-count">(1)</span></a
                >
              </li>
              <li class="animate-in mega-panel__list-item">
                <a href="#" class="mega-panel__list-item-anchor">
                  Progress, latest news and updates
                </a>
              </li>
              <li class="animate-in mega-panel__list-item">
                <a href="#" class="mega-panel__list-item-anchor">
                  Climate Action Reports
                </a>
              </li>
            </ul>
          </div>
          <div class="col"></div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
    data() {
        return {
            isVisible: false,
        }
    },
    methods: {
        shovMenu() {

        }
    }
}
</script>
<style lang="scss">
.mega-panel {
  background: #fff;
  box-shadow: 0 5px 5px 0 rgb(0 0 0 / 15%);
  color: #151515;
  left: 0;
  overflow: hidden;
  padding-bottom: 36px;
  padding-top: 114px;
  position: absolute;
    z-index: 3;
  top: 0;
  width: 100%;
}
</style>