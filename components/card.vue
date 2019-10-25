<template lang="pug">
nuxt-link(:to="{ name: 'work-slug', params: { sys: articleId }}").link
  .card
    .card-contents
      img(:src='`http:${thumbnail.fields.file.url}`').thumbnail
      .text-info
        span.title {{ title }}
        span.date {{ date }}

</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    articleId: { type: String, required: true },
    date: { type: String, required: true },
    owner: { type: String, required: true },
    ownerUrl: { type: String, default: null },
    thumbnail: { type: Object, required: true },
    videoLink: { type: String, required: true },
    description: { type: Object, required: true },
    collaborators: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.link {
  text-decoration: none;

  .card {
    display: inline-block;
    width: calc(100% / 4);
    padding: 30px;

    @media screen and (max-width: 960px) {
      width: calc(100% / 2);
    }

    @media screen and (max-width: 480px) {
      display: block;
      width: 100%;
    }

    &:hover {
      .card-contents {
        transform: translate(0px, -10px);
        filter: drop-shadow(2px 12px 10px #b8b8b8);
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
          margin-bottom: 10px;
          font-weight: 600;
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
