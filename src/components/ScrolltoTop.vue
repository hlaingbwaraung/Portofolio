<template>
  <div>
    <button @click="ToTop" v-show="scY">⊼</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scTimer: 0,
      scY: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 300);
    },
    ToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
button {
  position: fixed;
  right: 14px;
  bottom: 14px;
  width: 50px;
  height: 50px;
  line-height: 32px;
  text-align: center;
  border-radius: 10px;
  background: #c8d8e4;
}
</style>
