<template lang="pug">
  .hero
    span.logo-text Fearless Inc.
    video(src='~assets/videos/test-movie.mp4' :style="{ 'mask-position': maskOffset}" autoplay muted loop).hero-movie
</template>

<script>
export default {
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

      console.log(this.cursorOffset)
    })
  }
}
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  width: 100vw;
  height: 100vh;

  @media screen and (max-width: 640px) {
    pointer-events: none;
  }

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

  .hero-movie {
    position: absolute;
    z-index: 1;
    height: 480px;
    width: 640px;
    top: calc(50% - 240px);
    left: calc(50% - 320px);
    object-fit: cover;
    filter: grayscale(1);
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
  }
}
</style>
