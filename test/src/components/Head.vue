<template>
  <div>
    <header>
      <div class="wrapper">
        <div class="hb" @click="checked=!checked"><i class="fas fa-bars"></i></div>
        <a href="#" class="logo">
          <img src="../../static/logo.png" alt="">
        </a>
        <div class="shop">
          <div class="circle">0</div>
          <i class="fas fa-shopping-bag"></i>
        </div>
      </div>
    </header>
    <div class="side" v-if="checked == true">
      <div class="close" @click="checked=!checked"><i class="fas fa-chevron-left"></i></div>
      <ul>
        <li><img src="../../static/logo.png" alt=""></li>
        <li><a href="#">首頁</a></li>
        <li><a href="#">會員登入/注冊<i class="fas fa-chevron-right"></i></a></li>
        <li><a href="#">關於美賣<i class="fas fa-chevron-right"></i></a></li>
        <li><a href="#">常見問題<i class="fas fa-chevron-right"></i></a></li>
        <li><a href="#">920網紅節<i class="fas fa-chevron-right"></i></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Head",
  data() {
    return {
      checked: false
    };
  }
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 99;

  .wrapper {
    height: 78px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;

    .logo {
      display: block;
      width: 154px;
      height: 24px;

      img {
        width: 100%;
      }
    }

    .hb {
      &:hover {
        cursor: pointer;
      }
    }

    .shop {
      display: flex;

      &:hover {
        cursor: pointer;
      }

      .circle {
        width: 18px;
        height: 18px;
        line-height: 18px;
        border-radius: 50%;
        text-align: center;
        color: #fff;
        background-color: #ff700c;
      }
    }
  }
}

.side {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 999;

  .close {
    position: absolute;
    top: 15px;
    left: 265px;
    width: 35px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    color: #fff;

    &:hover {
      cursor: pointer;
      background: #808285;
    }
  }

  ul {
    width: 250px;
    height: 100vh;
    background: #fff;

    li {
      &:nth-child(1) {
        border-bottom: 1px solid #efefef;
      }

      &:nth-child(2) {
        border-bottom: 1px solid #efefef;
      }

      &:nth-child(3) {
        border-bottom: 1px solid #efefef;
      }

      img {
        width: 180px;
        padding: 20px;
      }

      a {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        color: #333132;
        font-size: 18px;
      }
    }
  }
}

@media (max-width: 576px) {
  .wrapper {
    max-width: 345px;
    .fa-bars,
    .fa-shopping-bag {
      font-size: 16px;
    }
    .circle {
        margin-right: 1px;
      }
  }
}
@media (min-width: 576px) {
  .wrapper {
    max-width: 540px;
    .fa-bars,
    .fa-shopping-bag {
      font-size: 18px;
    }
    .circle {
        margin-right: 13px;
      }
  }
}
@media (min-width: 768px) {
  .wrapper {
    max-width: 720px;
    .fa-bars,
    .fa-shopping-bag {
      font-size: 18px;
    }
    .circle {
        margin-right: 13px;
      }
  }
}
@media (min-width: 992px) {
  .wrapper {
    max-width: 960px;
    .fa-bars,
    .fa-shopping-bag {
      font-size: 20px;
    }
    .circle {
        margin-right: 15px;
      }
  }
}
@media (min-width: 1200px) {
  .wrapper {
    max-width: 1140px;
    .fa-bars,
    .fa-shopping-bag {
      font-size: 20px;
    }
    .circle {
        margin-right: 15px;
      }
  }
}
</style>