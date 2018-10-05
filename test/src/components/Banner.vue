<template>
  <div>
    <div class="banner">
      <swiper :options="swiperOption">
        <swiper-slide><img src="../../static/w_920banner.png" alt=""></swiper-slide>
        <swiper-slide><img src="../../static/toolate_b.png" alt=""></swiper-slide>
        <swiper-slide><img src="../../static/w_920banner.png" alt=""></swiper-slide>
        <swiper-slide><img src="../../static/toolate_b.png" alt=""></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>

import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    name: 'Banner',
    data() {
      return {
        swiperOption: {
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .banner{
    width: 1140px;
    margin: 0 auto;
    margin-top: 78px;
    overflow: hidden;
    img{
      width: 100%;
    }
  }

  @media (max-width: 576px) {
    .banner {
      max-width: 345px;
      height: 150px;
    }
  }
  @media (min-width: 576px) {
    .banner {
      max-width: 540px;
      height: 200px;
    }
  }
  @media (min-width: 768px) {
    .banner {
      max-width: 720px;
      height: 200px;
    }
  }
  @media (min-width: 992px) {
    .banner {
      max-width: 960px;
      height: 319px;
    }
  }
  @media (min-width: 1200px) {
    .banner {
      max-width: 1140px;
      height: 400px;
    }
  }
</style>

