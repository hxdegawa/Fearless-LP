<template lang="pug">
  .works
    header.header
      .logo
        nuxt-link(to="/?back=true")
          img(src='~assets/Fearless_Logo.png').logo-img

    nuxt
    footer.footer

</template>

<script>
export default {
  transition: {
    name: 'page',
    mode: 'out-in'
  }
}
</script>

<style lang="scss">
.works {
  .header {
    height: 160px;
    padding: 0 20px;

    .logo {
      .logo-img {
        display: inline-block;
        object-fit: contain;
        width: 160px;
        height: 160px;
        padding: 10px;
        vertical-align: top;
      }
    }
  }
}
</style>
