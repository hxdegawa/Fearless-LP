<template lang="pug">
  .hero
    span.logo-text Fearless Inc.
    video(:style="{ 'mask-position': maskOffset}" autoplay muted loop).hero-movie#video
    .scroll-icon
    span.scroll-text Scroll down!
</template>

<script>
export default {
  head() {
    return {
      link: [
        {
          rel: 'preload',
          as: 'video',
          href:
            'https://drive.google.com/uc?export=view&id=1lv6C5zJgQxFr6Ri3CV-OkHepei_VLBqI'
        }
      ]
    }
  },
  data() {
    return {
      cursorOffset: {
        X: 0,
        Y: 0
      }
    }
  },
  computed: {
    maskOffset() {
      return `calc(50% + ${this.cursorOffset.X}px) calc(50% + ${this.cursorOffset.Y}px)`
    }
  },
  mounted() {
    const hero = document.querySelector('.hero')

    hero.addEventListener('mousemove', (e) => {
      const screenSize = {
        X: window.innerWidth,
        Y: window.innerHeight
      }

      this.cursorOffset.X = (screenSize.X / 2 - e.clientX) / 30
      this.cursorOffset.Y = (screenSize.Y / 2 - e.clientY) / 30
    })

    const video = document.querySelector('#video')
    video.src = '/reel_2019.mp4'
    video.play()
  }
}
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  display: inline-block !important;
  width: 100%;
  height: 100vh;
  background-color: #000000;

  .logo-text {
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    letter-spacing: 1px;
    font-size: 42px;
    transform: translate(-50%, -50%);
    filter: drop-shadow(2px 2px 0px #ffffff);
  }

  .scroll-icon {
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 30px;
    width: 18px;
    background-color: #cecece;
    border-radius: 10px;

    &:before {
      content: '';
      position: absolute;
      height: 26px;
      width: 14px;
      top: calc(90% - 12px);
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 10px;
      background-color: #000000;
    }

    &:after {
      content: '';
      position: absolute;
      height: 6px;
      width: 2px;
      top: calc(90% - 20px);
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 10px;
      background-color: #cecece;
      animation: scrollAnim 0.6s ease-in infinite alternate;
    }
  }

  .scroll-text {
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%, calc(-50% + 50px));
    color: #cecece;
    letter-spacing: 1px;
  }

  @media screen and (max-width: 640px) {
    pointer-events: none;

    .scroll-icon {
      display: none;
    }

    .scroll-text {
      top: 80%;
    }
  }

  .hero-movie {
    position: absolute;
    z-index: 1;
    height: 480px;
    width: 640px;
    top: calc(50% - 240px);
    left: calc(50% - 320px);
    object-fit: cover;
    mask-image: url('~assets/Fearless_Logo.svg');
    mask-mode: alpha;
    mask-position: 50% 50%;
    mask-size: 440px 330px;
    mask-repeat: no-repeat;

    @media screen and (max-width: 640px) {
      width: 100%;
      height: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      mask-size: 280px 210px;
    }

    @keyframes scrollAnim {
      from {
        top: calc(90% - 18px);
      }
      to {
        top: calc(90% - 13px);
      }
    }
  }
}
</style>
