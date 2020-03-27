<template lang="pug">
  main.slug
    article.article
      .inner-margin
        .title {{article.fields.title}}
        .youtube(v-if="article.fields.videoLink.match('youtube.com')")
          youtube(:video-id="extractYoutubeId(article.fields.videoLink)")
          .height-keeper
        .youtube(v-else)
          vimeo-player(ref="player" :video-id="article.fields.videoLink" player-height="340")

        .text-info
          //- .date {{ article.fields.date }}
          .content(v-html="sanitizedDesc(article.fields.description)")
          .credits(v-if="article.fields.collaborators")
            .col-1-2
              .owner-wrapper(v-if="article.fields.linkUrl")
                a(:href="article.fields.linkUrl")
                  .owner {{ article.fields.client }}
              .owner-wrapper(v-else)
                .owner {{ article.fields.client }}
            .col-1-2
              ul.collaborators
                li(v-for='(collaborator, i) in article.fields.collaborators' :keys='i')
                  span {{ collaborator }}
          .credits(v-else)
            .col-1-1
              .owner-wrapper(v-if="article.fields.linkUrl")
                a(:href="article.fields.linkUrl")
                  .owner {{ article.fields.client }}
              .owner-wrapper(v-else)
                .owner {{ article.fields.client }}

      .links
        .col-1-2
          nuxt-link.btn-list(to="/works")
            span 他の作品をみる

        .col-1-2
          a.btn-prev(@click="pageBack")
            span もどる

</template>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { getIdFromURL } from 'vue-youtube-embed'
import { createClient } from '~/plugins/contentful.js'

const client = createClient()
export default {
  layout: 'works',
  props: {
    articleId: {
      type: String,
      default: ''
    }
  },
  asyncData({ env, params }) {
    return client
      .getEntries({
        content_type: process.env.CTF_BLOG_POST_TYPE_ID,
        'fields.slug[match]': params.slug
      })
      .then((entrie) => {
        console.log(entrie)
        return {
          article: entrie.items[0]
        }
      })
      .catch(console.error)
  },
  methods: {
    sanitizedDesc(desc) {
      return documentToHtmlString(desc)
    },
    extractYoutubeId(url) {
      return getIdFromURL(url)
    },
    pageBack() {
      window.history.back()
    }
  }
}
</script>

<style lang="scss">
.slug {
  max-width: 960px;
  margin: 0 auto;

  .article {
    position: relative;
    background-color: #ffffff;
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 120px;
    // filter: drop-shadow(2px 2px 10px #b8b8b8);

    @media screen and (max-width: 640px) {
      margin-bottom: 0;
      border-radius: 0;
      filter: none;
    }

    .inner-margin {
      padding: 60px 80px;

      @media screen and (max-width: 640px) {
        padding: 80px 20px;
      }

      &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        border-style: solid;
        border-width: 60px 60px 0 0;
        border-color: #ffc20e transparent transparent transparent;
      }

      .title {
        text-align: center;
        font-size: 19px;
        letter-spacing: 2px;
        font-weight: 600;
        margin-bottom: 40px;
      }

      .youtube {
        margin-bottom: 40px;

        div > iframe {
          max-width: 100%;
        }

        iframe {
          position: relative;
          width: 100% !important;
          border-radius: 5px;
          opacity: 0;
          animation: appear 1.5s 0.5s forwards;
        }

        .height-keeper {
          display: none;
          background-color: #555;
          height: 360px;
          margin-bottom: 44px;
          border-radius: 5px;
        }
      }

      .text-info {
        padding: 20px;

        h1,
        h2,
        h3,
        h4 {
          font-size: 18px;
          letter-spacing: 2px;
          font-weight: 600;
          margin: 0 0 30px 0;
        }

        p {
          font-weight: 400;
          font-size: 14px;
          letter-spacing: 2px;
          margin: 0 0 15px 0;
          color: #555;
        }

        .date {
          font-size: 12px;
          font-weight: 200;
          margin-bottom: 20px;
          letter-spacing: 2px;
          color: #555;
        }

        .credits {
          display: flex;
          flex-direction: row;
          justify-content: space-between;

          @media screen and (max-width: 640px) {
            display: block;
            flex-direction: unset;
            justify-content: unset;
          }

          .col-1-2 {
            position: relative;
            display: inline-block;
            width: 50%;
            vertical-align: top;
            padding: 40px 0 20px 0;

            @media screen and (max-width: 640px) {
              display: block;
              width: 100%;
            }

            .owner-wrapper {
              position: absolute;
              top: 0;
              left: 0;
              height: 100%;
              width: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              text-align: center;

              a {
                text-decoration: none;
              }

              @media screen and (max-width: 640px) {
                position: relative;
                height: auto;
                width: auto;
                display: block;
                width: 100%;
              }

              .owner {
                @extend .date;
                padding: 10px 30px;
                background-color: #ffc20e;
                border-radius: 5px;
                color: #ffffff;
              }
            }

            .collaborators {
              @extend .date;
              letter-spacing: 1px;
              padding: 0;
              line-height: 30px;
              text-align: right;

              li {
                list-style: none;
                color: #000000;
              }
            }
          }

          .col-1-1 {
            @extend .col-1-2;
            margin-top: 70px;
            width: 100%;
            display: block;
          }
        }
      }
    }

    .links {
      padding: 20px;
      background-color: #fafafa;

      .col-1-2 {
        position: relative;
        display: inline-block;
        width: 50%;
        vertical-align: top;
        padding: 80px 0;
        text-align: center;

        @media screen and (max-width: 640px) {
          display: block;
          width: 100%;

          &:first-of-type {
            padding-bottom: 0;
          }
        }

        [class*='btn-'] {
          padding: 20px;
          border-radius: 5px;
          font-size: 13px;
          font-weight: 200;
          letter-spacing: 3px;
          cursor: pointer;
          filter: drop-shadow(3px 3px 0px #ffc20e);
          background-color: #ffffff;
          text-decoration: none;
        }
      }
    }
  }
}

.page-enter,
.page-leave-active {
  .height-keeper {
    display: block !important;
    animation: appear 1.5s ease reverse forwards;
  }
}

@keyframes appear {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
