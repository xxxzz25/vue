<template>
  <div id="app">
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  computed: {
    todoList(){
      return this.$store.state.todos.list;
    },

    ...mapState('todos', [
      'list',
      'text',
      'input',
    ]),
    ...mapState('member', [
      'username',
      'rank',
    ]),
  },
  mounted () {
    this.$store.dispatch('todos/fetchList');
    this.$store.dispatch('member/fetchList');
  }
};
</script>