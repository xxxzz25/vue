<template>
  <h2 :class="{running: visibleNumber !== number}">
    {{visibleNumber}}
  </h2>
</template>

<script>
export default {
  props: ["number"],
  data() {
    return {
      visibleNumber: this.number
    };
  },
  methods: {
    run() {
      const diff = Math.floor((this.number - this.visibleNumber) * 0.1);
      if (diff === 0) {
        this.visibleNumber = this.number;
      } else {
        this.visibleNumber += diff;
        window.requestAnimationFrame(this.run);
        // setTimeout(this.run, 1);
      }
    }
  },
  watch: {
    number() {
      this.run();
    }
  }
};
</script>

<style lang="scss" scoped>
h2 {
  display: inline-block;
  transition: transform 0.2s;
}
.running {
  transform: scale(1.2);
}
</style>
