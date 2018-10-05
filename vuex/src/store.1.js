import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//  modules 模組劃分：
//  mutations、actions 中的名字是共用的，如果怕撞名，除了取不同名字，也可以使用 namespaced

  const todos = {
    // 防撞名
    namespaced: true,
    state: {
      list: []
    },
    mutations: {
      // 吃兩個參數
      setList(state, payload) {
        // ...
      }
    },
    getters: {
      // 吃四個參數
      getLength(state, getters, rootState, rootGetters) {
        // 後兩個參數能取到其它模組的 state 與 getters
        return rootState.member.username.length;
      }
    },
    actions: {
      fetchList({ commit, dispatch, state, getters, rootState, rootGetters }) {
        // 沒有 rootCommit、rootDispatch，如果要 commit (or dispatch) 到另一個模組，可用
        commit("member/setList", null, { root: true });
      }
    }
  }

  const member = {
    // 防撞名
    namespaced: true,
    state: {
      username: "",
      rank: 0
    },
    mutations: {
      // 與 todos 中的 setList 函式狀名，可用 namespaced 解決
      setList(state, payload) {
        // ...
      }
    }
  }

  const store = new Vuex.Store({
    modules: {
      todos,
      member
    }
  })


export default store;
