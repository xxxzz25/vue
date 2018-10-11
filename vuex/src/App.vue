<template>
  <div id="app">
    <h1>{{storeCount}}</h1>
    <button @click="add(2)">Add</button>
  </div>
</template>

<script>
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'; //vuex提供的函式

export default{

  data(){
    return{
      localCount: 0,
    }
  },

  computed: {  //回傳物件
    myCount(){  
      return this.localCount;
    },
    //加...這樣就可以建自己的computed
    ...mapState([ //可以是陣列
      'count',
      'username',
      'list',
    ]),
    ...mapState({ //可以是物件
      storeCount: 'count', //字串
      storeCount: state => state.count,   //箭頭函式
      storeCount(state){  //一般函式
        return this.localCount + state.count;
      },
    }),

    ...mapState(['todos']),
    ...mapGetters(['itemNotDone']),

    /* 表單處理 1
    ** 比較麻煩的寫法
    ** text() {
    **   return this.$store.state.text;
    ** }
    ** 簡潔的寫法
    ** ...mapState(["text"])
    */

    /* 表單處理 2: v-model
    ** text: {
    **   get() {
    **     return this.$store.state.text;
    **   },
    **   set(val) {
    **     this.$store.commit("setText", val);
    **   }
    ** }
    */

  },

  methods: {
    ...mapMutations(['addCount']),  //可以是陣列
  },

  methods: mapMutations({  //可以是物件
    add: 'addCount',
  }),

  mounted () {
    this.$store.dispatch({
      type: 'fetchTodos',
      id: 2,
    });
  },


  mounted () {
    this.fetchTodos({id: 2})
    .then(()=>{
      // 做非同步操作
    })
  },
  methods: mapActions(['fetchTodos']), //可以是陣列
  methods: mapActions({  //可以是物件
    fetch: 'fetchTodos',
  }), 

};

// export default {
//   computed: {
//     count(){
//       return this.$store.state.count;
//     },
//   },
//   methods: {
//     addCount(){
//       this.$store.commit('addCount' , 2); //傳2個參數
//       this.$store.commit({ //傳物件
//         type: 'addCount',
//         step: 2,
//       });
//     },
//   },
// };
</script>