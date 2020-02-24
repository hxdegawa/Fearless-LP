<template lang="pug">
main
  Header
  section.about-section
    .inner-margin
      Heading About

      .cols
        .col
          div
            h1.about-title Fearless Inc.
            span 国内・海外において企画から納品までのブランディングを自社で手がける
            span 新時代広告制作会社。
        .col
          img(src="~assets/Fearless_Logo.png").about-icon

  section.works-section
    .inner-margin
      Heading Works
      .work-cards
        Card(v-for="(post, i) in posts.slice(0, 7)" :key="i" :title="post.fields.title" :slug="post.fields.slug" :date="post.fields.date" :thumbnail="post.fields.thumbnail" :id="post.sys.id")
        Card(:isFake="true" :title="'他の作品をみる'" :thumbnail="{url: '/more.jpg'}")

  section.access-section
    .inner-margin
      Heading Access
      .map-cols
        .col.flex
          img(src="~assets/images/car.svg")
        .col.text
          div
            span.highlight Visit us!
            span 〒150-0001
            span 東京都渋谷区神宮前5-29-9-801
            a(href="https://goo.gl/maps/6kM7zYNN2mpQB8Li8").map-btn マップで見る

  section.profile-section
    Heading Founders
    .inner-margin
      .personal-cards
        .personal-card
          img(src="~assets/images/tobi.png").thumbnail
          .personal-text
            h4 CEO
            h3 Tobi Watanabe
            p 米大学卒業後、Apple Inc.にて多様な経験を得る。
            p その後FEARLESS設立。

        .personal-card
          img(src="~assets/images/matt.png").thumbnail
          .personal-text
            h4 COO
            h3 Matt Ikehara
            p 米大学留学後、ハワイ州でDOPとして活動。
            p Apple Inc.を経て、FEARLESS設立。

  section.contact-section
    Heading Contact
    .inner-margin
      form(@submit="")
        span name
        input.name#name(name="name" type="text" placeholder="Jhon Doe" required)
        
        span email
        input.email#email(name="email" type="email" placeholder="jhon@doe.com" required)
        
        span message
        textarea.message#message(name="message" type="message" placeholder="Offers, Ideas, all welcome!" required)

        input.submit(type="submit" value="Submit")
</template>

<script>
import Header from '../components/header'
import Heading from '../components/heading'
import Card from '../components/card'
import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export default {
  layout: 'base',
  components: {
    Header,
    Heading,
    Card
  },
  asyncData({ env, params }) {
    return client
      .getEntries(env.CTF_BLOG_POST_TYPE_ID)
      .then((entries) => {
        return {
          posts: entries.items
        }
      })
      .catch(console.error)
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

    .work-cards {
      display: grid;
      grid-template-columns: repeat(4, 1fr);

      .card {
        height: 100%;
      }

      @media screen and (max-width: 960px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media screen and (max-width: 480px) {
        grid-template-columns: repeat(1, 1fr);

        &:nth-child(3),
        &:nth-child(4),
        &:nth-child(5),
        &:nth-child(6),
        &:nth-child(7) {
          display: none;
        }
      }
    }
  }

  &.about-section {
    background-color: #ffffff;
    min-height: 50vh;

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

    .cols {
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      @media screen and (max-width: 960px) {
        grid-template-columns: repeat(1, 1fr);

        .col {
          display: block;
          margin: 30px 0;
          padding: 0 30px;
        }
      }

      .col {
        display: flex;
        justify-content: center;
        align-items: center;

        span {
          display: block;
        }
      }
    }

    span {
      color: #555;
      font-size: 14px;
      letter-spacing: 2px;
      font-weight: 500;
      font-family: 'Noto Sans JP', sans-serif;
    }
  }

  &.works-section {
    background-color: #fafafa;
  }

  &.access-section {
    background-color: #ffffff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    min-height: 50vh;

    @media screen and (max-width: 960px) {
      display: block;
      justify-content: auto;
      align-items: auto;
    }

    .map-cols {
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      @media screen and (max-width: 960px) {
        display: block;

        .col {
          display: block;
          margin: 0 auto 80px auto;
        }

        .text {
          max-width: 480px;

          & > div {
            display: block;
            margin: 0 auto 0 30px;
          }
        }
      }

      .col {
        &.flex {
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            object-fit: contain;
            width: 100%;
            max-height: 200px;
          }
        }

        &.text {
          display: flex;
          justify-content: flex-start;
          align-items: center;

          span {
            font-size: 14px;
            margin-bottom: 10px;
            letter-spacing: 1px;
            display: block;
            text-align: justify;

            &.highlight {
              display: inline-block;
              font-size: 30px;
              letter-spacing: 2px;
              font-weight: 600;
              margin-bottom: 20px;
              border-bottom: solid 2px #000000;
              font-style: italic;
            }
          }
        }

        .map-btn {
          position: relative;
          display: inline-block;
          margin-top: 30px;
          background-color: #ffc20e;
          padding: 10px 30px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 2px;
          text-decoration: none;
          border-radius: 5px;

          @media screen and (max-width: 768px) {
            display: block;
            text-align: center;
          }
        }
      }
    }
  }

  &.profile-section {
    padding: 40px 0;

    .personal-cards {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      padding: 100px 0 0 0;

      @media screen and (max-width: 480px) {
        grid-template-columns: repeat(1, 1fr);
        padding: 140px 0 0 0;
      }

      .personal-card {
        position: relative;
        display: block;
        margin: 0 auto;
        padding: 0 30px;
        width: 430px;
        filter: drop-shadow(3px 3px 10px #cecece);

        @media screen and (max-width: 480px) {
          margin: 0 auto 160px auto;
          width: 100%;

          &:last-of-type {
            margin: 0 auto 80px auto;
          }
        }

        .thumbnail {
          position: absolute;
          border-radius: 60px;
          border: solid 4px #ffffff;
          z-index: 2;
          bottom: 100%;
          left: calc(50% - 60px);
          display: block;
          width: 120px;
          height: 120px;
          margin: 0 auto;
        }

        .personal-text {
          display: block;
          margin-top: -60px;
          padding: 80px 20px 20px 20px;
          border-radius: 10px;
          background-color: #ffffff;

          @media screen and (max-width: 480px) {
            min-width: unset;
          }

          h3 {
            text-align: center;
            font-size: 16px;
          }

          h4 {
            text-align: center;
            font-size: 15px;
            margin-bottom: 10px;
          }

          p {
            font-size: 13px;
            letter-spacing: 1px;
            word-break: break-all;
          }
        }
      }
    }
  }

  &.contact-section {
    background-color: #ffffff;

    form {
      background-color: #ffffff;
      max-width: 550px;
      margin: 0 auto;
      padding: 40px 30px;
      filter: drop-shadow(3px 3px 10px #cecece);
      border-radius: 10px;

      span {
        display: block;
        margin-bottom: 10px;
        font-size: 13px;
        color: #555;
        text-transform: capitalize;
      }

      input,
      textarea {
        display: block;
        outline: none;
        width: 100%;
        margin-bottom: 30px;
        border: none;
        background-color: #fafafa;
        padding: 10px;
        font-size: 14px;
        resize: vertical;
      }

      .submit {
        display: block;
        max-width: 140px;
        margin: 0 auto;
        padding: 10px 20px;
        cursor: pointer;
        letter-spacing: 1px;
        font-size: 14px;
      }
    }
  }
}
</style>
