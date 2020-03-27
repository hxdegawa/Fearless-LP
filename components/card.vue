<template lang="pug">
nuxt-link(v-if="isFake" to="/works").link
  .card
    .card-contents
      img(:src='`${thumbnail.url}`').thumbnail
      .text-info
        span.title.fake {{ title }}
nuxt-link(v-else :to="{ name: 'works-slug', params: { slug: slug }}").link
  .card(:class="`${dark ? 'dark' : ''}`")
    .card-contents
      img(v-if="isFake" :src='`http:${thumbnail.fields.file.url}`').thumbnail
      img(v-else :src='`http:${thumbnail.fields.file.url}?h=300`').thumbnail
      .text-info
        span.title {{ title }}
        //- span.date {{ date }}

</template>

<script>
export default {
  props: {
    isFake: { type: Boolean, default: false },
    title: { type: String, required: true },
    slug: { type: String, default: '' },
    date: { type: String, default: '' },
    thumbnail: { type: Object, required: true },
    dark: { type: Boolean, default: false }
  }
}
</script>

<style lang="scss" scoped>
.link {
  text-decoration: none;

  .card {
    display: inline-block;
    width: 100%;
    padding: 30px;

    &:hover {
      .card-contents {
        transform: translate(0px, -10px);
        filter: drop-shadow(2px 12px 10px #b8b8b8);
      }
    }

    &.dark {
      .card-contents {
        filter: unset;
      }
    }

    .card-contents {
      background-color: #ffffff;
      border-radius: 5px;
      overflow: hidden;
      filter: drop-shadow(2px 2px 10px #b8b8b8);
      transition: all 0.2s ease;
      cursor: pointer;

      .thumbnail {
        display: block;
        object-fit: cover;
        width: 100%;
        height: 150px;
      }

      .text-info {
        padding: 20px;

        & > span {
          display: block;
          letter-spacing: 1px;
        }

        .title {
          font-size: 10px;
          // margin-bottom: 10px;
          font-weight: 600;

          &.fake {
            font-size: 10px;
            line-height: 20px;
          }
        }

        .date {
          font-size: 9px;
          font-weight: 300;
          color: #555;
          margin-bottom: 0px;
        }
      }
    }
  }
}
</style>
