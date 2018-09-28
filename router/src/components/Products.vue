<template>
  <div>
    <h1>products</h1>
    <h2>{{id}}</h2>
  </div>
</template>

<script>
const products = {
  18: "shoes",
  26: "t-shirts",
  37: "pants"
};

export default {
  props: ['id'],
  computed: {
    id() {
      return products[this.$route.params.id];// 路徑/數字
      // return products[this.$route.query.id];// 路徑?id=數字
    }
  }
};
</script>
