<template>
  <div class="list">
    <LessonItem
      v-for="lesson in lessons"
      :lesson="lesson"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import LessonItem from "./LessonItem.vue";

export default {
  components: {
    LessonItem
  },
  mounted() {
    // this.$store.dispatch("fetchLessons");
    this.fetchLessons();
  },
  computed: {
    // lessons() {
    //   return this.$store.state.lessons;
    // }
    ...mapState(["lessons"])
  },
  methods: {
    ...mapActions(["fetchLessons"])
  }
};
</script>

<style scoped>
.list {
  padding-top: 30px;
  text-align: center;
}
</style>
