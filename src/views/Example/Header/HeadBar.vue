<template>
  <div class="vue-header">
    <div class="header-container" :style="headBgImg">
      <div class="head-left">
        <slot name="tab-left"></slot>
      </div>
      <nav class="head-nav">
        <slot name="tab-center"></slot>
      </nav>
      <div class="head-right">
        <slot name="tab-right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  props: {
    headImg: {
      type: String,
      default: require("_ats/img/tabbar/tab-bgimg.jpg"),
    },
  },
  computed: {
    headBgImg() {
      return { "background-image": `url(${this.headImg})` };
    },
  },
};
</script>

<style scoped>
.vue-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  width: 1240px;
  margin: 0 auto;
}
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 100% auto;
  background-color: #000;
}
.head-nav {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>