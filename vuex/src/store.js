import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
/* Vuex 四元素：
** 1. State 存放狀態

** 2. Mutations 變更狀態
** 唯一能改變 state 的方法
** 只能做同步操作，要非同步操作需用 actions
** 與 commit 對應

** 3. Getters 取得狀態
** store 裡的 computed

** 4. Actions 發出指令
** 非同步操作，不能直接修改 state，只能發出 mutations
** 與 dispatch 對應
** 可做多次 commit
** 可以在 actions 內呼叫另一個 actions
** 可回傳一個 Promise
*/

const url = "";

const store = new Vuex.Store({
  state: {
    count: 0,
    username: "",
    list: [],
    todo: [],
    loading: false
  },

  mutations: {
    //是唯一可以改變state東西的方法且只能做同步的操作
    addCount(state, payload) {
      state.count += payload;
      /* state 裡要先有這個　key，才能變更
      ** 如果 state 中沒有 loading，不會運行
      ** state.loading = true;
      ** 需改成這樣才能運行
      ** Vue.set(state, 'loading', true);
      */
    },

    setTodos(state, todo) {
      state.todos = todo;
    },

    setLoading(state, loading) {
      state.loading = loading;
    }
  },

  getters: {
    itemsNotDone(state) {
      return state.todos.filter(item => !item.done).length;
    },
    itemsDone(state, getters) {
      return state.todos.length - getters.itemsNotDone;
    },
    itemsWithId(state) {
      return id => {
        return state.todos.filter(item);
      };
    }
  },

  actions: {
    // 不能直接修改state且可以做非同步的操作
    fetchTodos({ commit, dispatch }, payload) {

      commit("setLoading", true);

      return fetch(`${url}/todos`)
        // 可回傳一個 Promise
        // fetch 本身就是 Promise
        // return fetch(`${url}/todos`)

        // 一般來說要加，但因為現在 res 沒資料，所以會報錯
        // .then(res => res.json())
        .then(todos => {
          // 非同步載入的資料 todo 作為 palyload 傳入 mutations 的 setTodos 函式
          context.commit("setTodos", todos);
          // 可解構參數
          // commit("setTodos", todos);

          context.commit("setLoading", false);

          // 呼叫另一個 actions
          context.dispatch("fetchUserInfo");
          // 可解構參數
          // dispatch("setTodos", todos);

          // resolve(); // 回傳 Promise 時使用
      });
    },

    fetchUserInfo() {

    }
  }
});

export default store;
