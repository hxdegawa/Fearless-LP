<template lang="pug">
  .logo
    section.logo-container
      .carousel-wrapper
        span.logo-quote-top illustrated by
        span.logo-quote-bottom Seiji Matsumoto
        Carousel.carousel-box(:per-page="1" :loop="true" :autoplay="true" :centerMode="true" :autoplayTimeout="500" :paginationSize="5" paginationColor="#cecece")
          Slide.slide-card
            img(src="~/assets/images/logos/white.png")
          Slide.slide-card
            img(src="~/assets/images/logos/red.png")
          Slide.slide-card
            img(src="~/assets/images/logos/orange.png")
          Slide.slide-card
            img(src="~/assets/images/logos/yellow.png")
          Slide.slide-card
            img(src="~/assets/images/logos/green.png")
          Slide.slide-card
            img(src="~/assets/images/logos/lightblue.png")
          Slide.slide-card
            img(src="~/assets/images/logos/blue.png")
          Slide.slide-card
            img(src="~/assets/images/logos/purple.png")

    section.description-container.inner-margin
      .columns.right-base
        .column
          .column__img
            img(src="~/assets/images/seiji-logo.png")
        .column
          ul.column__text
            li Seiji Matsumoto / 松本セイジ
            p In a town surrounded by beautiful nature in Osaka, he grew up with many kinds of animal. His painting style, which gives him ample warmth and peace, tends to influence and soften people’s minds…especially in this fast-paced world.
            p Presently, he is involved in various works, as he has collaborated with UNIQLO, The New York Times, McDonald’s, and so on….
            p たくさんの動物たちと過ごした経験から、 主に人と動物をモチーフとした優しさとゆるさが溢れる作品を描く。 2016年にニューヨークへ移住し、個展やアートイベントに参加するなど精力的に活動。 ニューヨークタイムズやマクドナルドなど国内外の様々な分野のアートを手がける。 現在は東京をメインに活動中。
      
      //- .columns.left-base
      //-   .column
      //-     ul.column__text
      //-       li Exhibition / エキシビジョン
      //-       p 2019 Hive gallery (LA)
      //-       p 2018 Robert miller gallery (NY)
      //-       p 2018 Solo Exhibition / Café Grumpy  Chelsea (NY)
      //-       p 2017 Solo Exhibition / ambassador (NY)
      //-       p 2017 Solo Exhibition / Café Grumpy Fashion District  (Manhattan)
      //-       p 2017 Group Art Show/ Beyond Studios (NY)
      //-       p 2017 Solo Exhibition / SBC GALLERY  (Brooklyn)
      //-       p 2017 Solo Exhibition / Café Grumpy Grand Central Terminal (NY)
      //-       p 2017 JCAT SHOW CASE / GALLERY MAX NEW YORK (NY)
      //-       p 2017 Arts in Bushwick Community Day / House of yes (NY)
      //-   .column
      //-     .column__img
      //-       img(src="~/assets/images/seiji-art.png")
            
</template>

<script>
import Carousel from 'vue-carousel/src/Carousel.vue'
import Slide from 'vue-carousel/src/Slide.vue'

export default {
  components: {
    Carousel,
    Slide
  }
}
</script>

<style lang="scss">
* {
  letter-spacing: 1px;
}

.inner-margin {
  display: block;
  max-width: 1080px;
  margin: 0 auto;
}

.right-base {
  grid-template-columns: 3fr 7fr;
}

.left-base {
  grid-template-columns: 7fr 3fr;
}

.logo-container {
  min-height: 100vh;
  display: flex;
  align-items: center;

  .logo-quote-top {
    display: block;
    font-size: 18px;
    margin-bottom: 20px;
    text-align: center;
    text-transform: capitalize;
  }

  .logo-quote-bottom {
    display: block;
    font-size: 26px;
    margin-bottom: 20px;
    font-style: italic;
    text-align: center;
  }

  .carousel-wrapper {
    position: relative;
    display: block;
    max-width: 100%;
  }

  .carousel-box {
    width: calc(100vw - 3px);

    .slide-card {
      width: 100%;

      img {
        display: block;
        margin: 0 auto;
      }
    }
  }
}

.description-container {
  .columns {
    display: grid;

    .column {
      height: 50vh;
      display: flex;
      justify-content: center;
      align-items: center;

      &__img {
        img {
          width: 240px;
          object-fit: contain;
        }
      }

      &__text {
        list-style: none;
        padding-left: 0;

        li {
          position: relative;
          display: block;
          font-size: 14px;
          line-height: 30px;
          font-weight: 600;
          letter-spacing: 2px;

          &::before {
            content: '-';
            position: absolute;
            right: calc(100% + 10px);
            line-height: 30px;
          }
        }

        p {
          font-weight: 400;
          line-height: 30px;

          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding: 40px 40px;

    .columns {
      grid-template-columns: 1fr;

      .column {
        height: auto;
        grid-gap: 20px;
        margin-bottom: 40px;

        &__text {
          width: 100%;
        }
      }
    }
  }
}
</style>
