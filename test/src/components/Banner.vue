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
  }
</style>

