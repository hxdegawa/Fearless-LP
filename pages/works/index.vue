<template lang="pug">
.works
  .inner-margin
    Card(v-for="(work, i) in works" :key="i" :title="work.fields.title" :articleId="work.sys.id" :date="work.fields.date" :owner="work.fields.owner" :ownerUrl="work.fields.ownerUrl" :thumbnail="work.fields.thumbnail" :videoLink="work.fields.videoLink" :description="work.fields.description" :collaborators="work.fields.collaborators" :id="work.sys.id")
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

<style lang="scss" scoped>
.works {
  .inner-margin {
    max-width: 1280px;
    margin: 0 auto;
  }
}
</style>
