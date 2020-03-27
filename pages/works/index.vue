<template lang="pug">
.works
  .inner-margin
    .work-cards
      Card(v-for="(work, i) in works" :key="i" :title="work.fields.title" :slug="work.fields.slug" :date="work.fields.date" :thumbnail="work.fields.thumbnail" :id="work.sys.id" :dark="true")
</template>

<script>
import Card from '../../components/card'
import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export default {
  layout: 'works',
  components: {
    Card
  },
  asyncData({ env, params }) {
    return client
      .getEntries(env.CTF_BLOG_POST_TYPE_ID)
      .then((entries) => {
        return {
          works: entries.items
        }
      })
      .catch(console.error)
  }
}
</script>

<style lang="scss">
body {
  background-color: #000000;
}

.works {
  .inner-margin {
    max-width: 1280px;
    margin: 0 auto;

    .work-cards {
      display: grid;
      grid-template-columns: repeat(4, 1fr);

      @media screen and (max-width: 960px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media screen and (max-width: 480px) {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
}
</style>
