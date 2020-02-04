<template lang="pug">
  .container(:class="{'is-loading': loadFullyFinished}")
    nuxt
    .loading(:class="{'is-loading': loadFinished}" v-if="isInitRender")
      .loading-wrapper
        img(src="~assets/Fearless_Logo.png").loading-logo
        span.loading-text Loading
        .loading-bar-wrapper
          .loading-bar(:class="progressBar")

      .transition-pane-1
      .transition-pane-2
      .transition-pane-3
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      loadFinished: false,
      loadFullyFinished: false,
      loadProcess: 0
    }
  },
  computed: {
    ...mapState('main', ['isInitRender']),
    progressBar() {
      return `progress-${this.loadProcess}`
    }
  },
  mounted() {
    const initRenderStatus = () => this.initialize()

    if (this.isInitRender) {
      window.addEventListener('load', (data) => {
        const video = document.querySelector('.hero-movie')
        let loadChecker

        const checkVideoLoadProgress = () => {
          switch (video.readyState) {
            case 0:
              this.loadProcess = 0
              loadChecker = requestAnimationFrame(checkVideoLoadProgress)
              break

            case 1:
              this.loadProcess = 25
              loadChecker = requestAnimationFrame(checkVideoLoadProgress)
              break

            case 2:
              this.loadProcess = 50
              loadChecker = requestAnimationFrame(checkVideoLoadProgress)
              break

            case 3:
              this.loadProcess = 75
              loadChecker = requestAnimationFrame(checkVideoLoadProgress)
              break

            case 4:
              this.loadProcess = 100
              cancelAnimationFrame(loadChecker)
              break

            default:
              this.loadProcess = 0
              loadChecker = requestAnimationFrame(checkVideoLoadProgress)
              break
          }
        }

        video.addEventListener('canplaythrough', (e) => {
          setTimeout(() => {
            this.loadFinished = true

            setTimeout(() => {
              this.loadFullyFinished = true
              initRenderStatus()
            }, 2400)
          }, 1000)
        })

        checkVideoLoadProgress()
      })
    } else {
      this.loadFinished = true
      this.loadFullyFinished = true
    }
  },
  methods: {
    ...mapActions('main', ['initialize'])
  }
}
</script>

<style lang="scss">
@import url('https://rsms.me/inter/inter.css');
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP:500,700&display=swap');

body {
  margin: 0;
  background-color: #fafafa;

  * {
    box-sizing: border-box;
    font-family: 'norms', 'Inter', 'Noto Sans JP', sans-serif;
  }
}

a {
  color: #000000;
}

ul,
li {
  margin: 0;
}

h1,
h2,
h3 {
  margin: 0 0 20px auto;
}

.container {
  max-height: 100vh;
  overflow: hidden;

  &.is-loading {
    max-height: unset;
  }
}

.loading {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  opacity: 1;
  background-color: #ffffff;
  pointer-events: all;
  z-index: 3;
  overflow: hidden;

  .loading-wrapper {
    position: absolute;
    display: block;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    .loading-logo {
      position: relative;
      object-fit: contain;
      max-width: 380px;
      margin-bottom: 40px;

      @media screen and (max-width: 640px) {
        max-width: 300px;
      }
    }

    .loading-text {
      display: block;
      font-size: 16px;
      letter-spacing: 2px;
      font-weight: 600;
      margin-bottom: 20px;
    }

    .loading-bar-wrapper {
      display: block;
      margin: 0 auto;
      position: relative;
      height: 8px;
      width: 240px;
      border-radius: 4px;
      background-color: #c9c9c9;

      .loading-bar {
        background-color: #000000;
        position: absolute;
        left: 0;
        top: 0;
        height: 8px;
        width: 0%;
        border-radius: inherit;
        transition: 0.2s ease;

        &.progress-0 {
          width: 0%;
        }

        &.progress-25 {
          width: 25%;
        }

        &.progress-50 {
          width: 50%;
        }

        &.progress-75 {
          width: 75%;
        }

        &.progress-100 {
          width: 100%;
        }
      }
    }
  }

  &.is-loading {
    animation: disappear 0.01s 1s forwards;

    .loading-wrapper {
      animation: removal 0.01s 1s forwards;
    }

    .transition-pane-1,
    .transition-pane-2,
    .transition-pane-3 {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      width: 0%;
    }

    .transition-pane-1 {
      z-index: 5;
      background-color: #ffc20e;
      animation: panelTransition ease-in-out 2s 0s forwards;
    }

    .transition-pane-2 {
      z-index: 6;
      background-color: #ffce3e;
      animation: panelTransition ease-in-out 2s 0.2s forwards;
    }

    .transition-pane-3 {
      z-index: 7;
      background-color: #ffda6e;
      animation: panelTransition ease-in-out 2s 0.4s forwards;
    }

    @keyframes panelTransition {
      0% {
        right: 0;
        width: 0%;
        left: auto;
      }
      25% {
        right: 0;
        width: 100%;
        left: auto;
      }
      75% {
        right: auto;
        width: 100%;
        left: 0;
      }
      100% {
        right: auto;
        width: 0%;
        left: 0;
      }
    }

    @keyframes disappear {
      0% {
        background-color: #ffffff;
      }
      100% {
        background-color: transparent;
        pointer-events: none;
      }
    }

    @keyframes removal {
      0% {
        opacity: 1;
        pointer-events: all;
      }
      100% {
        opacity: 0;
        pointer-events: none;
      }
    }
  }
}

.col-2-1 {
  position: relative;
  display: inline-block;
  padding: 60px 20px;
  width: 50%;
  vertical-align: top;

  @media screen and (max-width: 640px) {
    width: 100%;
  }
}

@font-face {
  font-family: 'norms';
  src: url('~assets/fonts/TTNorms-Medium.ttf');
}

::-webkit-scrollbar {
  width: 3px;
}

/* Track */
::-webkit-scrollbar-track {
  background-color: #cecece;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #212121;
  border-radius: 3px;
}
</style>
