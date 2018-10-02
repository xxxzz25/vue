<template>
  <div>
    <footer>
      <div class="wrapper">
        <div class="banner"></div>
        <div class="top">
          <div class="top_left">
            <a href="#">關於美賣</a>
            <a href="#">常見問題</a>
          </div>
          <div class="top_right">
            <div class="time">
              <h4>遇到問題了嗎?</h4>
              <p>週一至週五 10:00-18:00</p>
            </div>
            <a href="#" class="service">
              <i class="fas fa-comment"></i> 洽詢美賣LINE@客服
            </a>
          </div>
        </div>
        <div class="bottom">
          <div class="reserved">
            <div class="logo">
              <img src="../../static/logo.png" alt="">
            </div>
            <p>2018 Meimaii. All rights reserved.</p>
            <div class="link">
              <a href="#">服務條款</a>
              <a href="#">隱私權政策</a>
              <a href="#">防詐騙提醒</a>
            </div>
          </div>
          <a href="#" class="social"><i class="fab fa-line"></i> @meimaii</a>
          <a href="#" class="social"><i class="fab fa-facebook-square"></i> 粉絲團</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Foot',
}
</script>

<style lang="scss" scoped>
  footer{
    border-top: 1px solid #efefef;
    .wrapper{
      width: 1140px;
      margin: 20px auto;
      .banner{
        width: 1110px;
        margin: 0 auto;
        height: 136px;
        background: url(../../static/footerbanner.png);
        background-size: cover;
      }
      .top{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;
        .top_left{
          display: flex;
          justify-content: space-between;
          a{
            display: block;
            color: #333132;
            &:last-child{
              margin-left: 36px;
            }
            &:hover{
              color: #ff700c;
            }
          }
        }
        .top_right{
          display: flex;
          .time{
            text-align: center;
            margin-right: 55px;
            h4{
              font-size: 16px;
              font-weight: normal;
            }
          }
          .service{
            display: block;
            background-color: #00c300;
            color: #fff;
            padding: 8px 12px 4px 12px;
            border-radius: 5px;
            &:hover{
              background-color: #008900;
            }
          }
        }
      }
      .bottom{
        margin-top: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .reserved{
          display: flex;
          align-items: center;
          .logo{
            width: 128px;
            margin-right: 24px;
            img{
              width: 100%;
            }
          }
          p{
            font-size: 12px;
          }
          .link{
            display: flex;
            a{
              display: block;
              padding: 0 12px;
              border-right: 1px solid #000;
              color: #333132;
              font-size: 12px;
              &:last-child{
                border: none;
              }
            }
          }
        }
        .social{
          color: #333132;
          &:hover{
            color: #ff700c;
          }
        }
        .fa-line{
          color: #00C300;
          font-size: 20px;
          vertical-align: middle;
        }
        .fa-facebook-square{
          color: #3A63A3;
          font-size: 20px;
          vertical-align: middle;
        }
      }
    }
  }
</style>

