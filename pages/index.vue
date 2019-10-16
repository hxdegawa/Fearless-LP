<template lang="pug">
main
  Header
  section.about-section
    .inner-margin
      Heading About

      .col-2-1
        h1.about-title Fearless Inc.
        span 国内・海外において企画から納品までのブランディングを自社で手がける新時代広告制作会社
      .col-2-1
        img(src="~assets/Fearless_Logo.png").about-icon

</template>

<script>
import Header from '../components/header'
import Heading from '../components/heading'

export default {
  layout: 'base',
  components: {
    Header,
    Heading
  }
}
</script>

<style lang="scss">
section {
  box-sizing: border-box;
  padding: 60px 20px;

  .inner-margin {
    max-width: 1280px;
    margin: 0 auto;
  }

  &.about-section {
    background-color: #ffffff;

    .about-title {
      font-size: 18px;
      letter-spacing: 1px;
    }

    .about-icon {
      display: block;
      margin: 0 auto;
      max-width: 280px;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    span {
      color: #555;
      font-size: 14px;
      letter-spacing: 2px;
      font-weight: 500;
      font-family: 'Noto Sans JP', sans-serif;
    }
  }
}
</style>
