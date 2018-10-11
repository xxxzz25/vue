import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const LESSONS_URL =
  "https://hiskio.com/api/v1/courses/professions?type=all&level=all&sort=latest&profession_id=1";

const store = new Vuex.Store({
  state: {
    lessons: [],
    cart: []
  },
  getters: {
    lessonsInCart: state => state.cart.length,
    priceInCart: state =>
      state.cart.reduce((acc, lesson) => acc + lesson.price, 0),
    isLessonInCart: state => lesson =>
      state.cart.findIndex(({ id }) => id === lesson.id) !== -1
  },
  mutations: {
    setLessons(state, lessons) {
      state.lessons = lessons;
    },
    addToCart(state, lesson) {
      // state.cart = state.cart.concat(lesson);
      // state.cart = [...state.cart, lesson];
      state.cart.push(lesson);
    }
  },
  actions: {
    fetchLessons({ commit }) {
      fetch(LESSONS_URL)
        .then(res => res.json())
        .then(res => {
          commit("setLessons", res.courses);
        });
    }
  }
});

export default store;
