<template>
  <div>
    <h3>最新開團</h3>
    <div class="wrapper" :style="{ height: height + 'px' }">
      <div v-for="item in items" class="item">
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
    <div class="moreInfo" @click="plusHeight()">看更多 <i class="fas fa-angle-down"></i></div>
  </div>
</template>

<script>
export default {
  name: "Content",
  data() {
    return{
      items: [],
      height: 605,
    }
  },
  methods: {
    plusHeight(){
      this.height += 605;
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
      height: 545px;
      margin-top: 60px;
      border-bottom: 2px solid #efefef;
      .cover{
        display: block;
        img{
          width: 100%;
          height: 232px;
          border-radius: 10px;
          object-position: center center;
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
          margin-left: 16px;
          font-size: 14px;
          p{
            width: 178px;
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
</style>

