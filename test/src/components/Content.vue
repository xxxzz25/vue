<template>
  <div>
    <h3>最新開團</h3>
    <div class="wrapper">
      <div v-for="item in items.slice(0, number)" class="item">
        <a href="#" class="cover">
          <img :src="item.cover" alt="">
        </a>
        <div class="center">
          <div class="p_text">
            <h4>{{item.title}}</h4>
            <p>{{item.text}}</p>
            <div class="progress"></div>
          </div>
          <div class="more">
            <div class="link">準備中   <i class="fas fa-angle-right"></i></div>
            <div class="count"><i class="fas fa-clock"></i>   倒數 <span>{{item.count}}</span> 天</div>
          </div>
        </div>
        <div class="product">
          <a href="#" class="product_img">
            <img :src="item.productImage" alt="">
          </a>
          <div class="product_text">
            <p>{{item.productName}}</p>
            <p>{{item.productText}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="moreInfo" @click="plus()" v-show="number < 15">看更多 <i class="fas fa-angle-down"></i></div>
  </div>
</template>

<script>
export default {
  name: "Content",
  data() {
    return{
      items: [],
      height: 605,
      number: 6
    }
  },
  methods: {
    plus(){
      if(this.number<15){
        this.number += 3;
      }
    }
  },
  mounted() {
    this.$http
      .get("../../static/products.json")
      .then(res => {
        this.items = res.data.products;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style lang="scss" scoped>
  h3{
    width: 1110px;
    margin: 0 auto;
    margin-top: 30px;
    font-weight: normal;
    font-size: 18px;
  }
  .wrapper{
    width: 1110px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    overflow: hidden;
    .item{
      width: 350px;
      margin-top: 60px;
      border-bottom: 2px solid #efefef;
      .cover{
        display: block;
        height: 232px;
        position: relative;
        img{
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
          object-fit: cover;
          object-position: center center;
          border-radius: 10px;
        }
      }
      .center{
        padding: 16px 4px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .p_text{
          width: 234px;
          &:hover{
            cursor: pointer;
          }
          h4{
            font-weight: normal;
            font-size: 18px;
            margin-bottom: 5px;
          }
          p{
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .progress{
            margin-top: 15px;
            height: 4px;
            background-color: #e9ecef;
          }
        }
        .more{
          .link{
            display: block;
            padding: 8px 8px 8px 12px;
            font-size: 18px;
            font-weight: 400;
            background-color: #808285;
            color: #fff;
            text-align: center;
            line-height: 24px;
            border-radius: 10px;
            border-bottom-left-radius: 0;
            &:hover{
              background: #67696b;
              cursor: pointer;
            }
          }
          .count{
            margin-top: 15px;
            color: #ff700c;
            text-align: right;
            font-size: 16px;
            span{
              color: #00c2a9;
            }
          }
        }
      }
      .product{
        display: flex;
        align-items: flex-start;
        .product_img{
          width: 140px;
          img{
            width: 100%;
          }
        }
        .product_text{
          margin-left: 20px;
          font-size: 14px;
          width: 178px;
          p{
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: wrap;
            &:last-child{
              margin-top: 10px;
              height: 60px; 
            }
          }
        }
      }
    }
  }
  .moreInfo{
    width: 350px;
    margin: 30px auto;
    background: #efefef;
    color: #808285;
    font-weight: 400;
    border-radius: 10px;
    text-align: center;
    padding: 8px 12px;
    font-size: 14px;
    &:hover{
      background: #808285;
      color: #fff;
      cursor: pointer;
    }
  }

  @media (max-width: 576px) {
    h3{
      margin-top: 0;
      max-width: 345px;
    }
    .wrapper {
      max-width: 345px;
      .item{
        width: 100%;
        margin-top: 50px;
        .cover{
          height: 226px;
        }
        .center{
          .p_text{
            max-width: 230px;
          }
        }
        .product{
          margin-bottom: 30px;
          .product_img{
            max-width: 137px;
          }
          .product_text{
            max-width: 190px;
            p{
              font-size: 14px;
            }
          }
        }
      }
    }
  }

  @media (min-width: 576px) {
    h3{
      max-width: 510px;
    }
    .wrapper {
      max-width: 510px;
      .item{
        width: 100%;
        margin-top: 30px;
        .cover{
          height: 335px;
        }
        .center{
          .p_text{
            width: 305px;
          }
        }
        .product{
          margin-bottom: 30px;
          .product_img{
            width: 205px;
          }
          .product_text{
            width: 272px;
            p{
              font-size: 16px;
            }
          }
        }
      }
    }
  }
  @media (min-width: 768px) {
    h3{
      max-width: 720px;
    }
    .wrapper {
      max-width: 720px;
      .item{
        width: 47%;
        margin-top: 30px;
        .cover{
          height: 216px;
        }
        .center{
          .p_text{
            width: 228px;
          }
        }
        .product{
          margin-bottom: 30px;
          .product_img{
            width: 130px;
          }
        }
      }
    }
  }
  @media (min-width: 992px) {
    h3{
      max-width: 960px;
    }
    .wrapper {
      max-width: 960px;
      .item{
        width: 47%;
        margin-top: 30px;
        .cover{
          height: 296px;
        }
        .center{
          .p_text{
            width: 305px;
          }
        }
        .product{
          margin-bottom: 30px;
          .product_img{
            width: 180px;
          }
        }
      }
    }
  }
  @media (min-width: 1200px) {
    h3{
      max-width: 1110px;
      margin-top: 30px;
    }
    .wrapper {
      max-width: 1140px;
      .item{
        width: 350px;
        .cover{
          height: 232px;
        }
        .center{
          .p_text{
            width: 234px;
          }
        }
        .product{
          margin-bottom: 60px;
          .product_img{
            width: 140px;
          }
        }
      }
    }
  }
</style>

