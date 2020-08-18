<template>
  <header class="vue-header">
    <div class="header-container">
      <slot name="headLf">左边</slot>
      <nav class="nav-list">
        <span
          v-for="(nav, index) in navData"
          :nav-click="navClick"
          :class="{'nav-active': navIndex === index}"
          @click="navClick(index)"
          :key="nav.text"
        >{{nav.text}}</span>
      </nav>
      <slot name="headerRh">右边</slot>
    </div>
  </header>
</template>
<script>
export default {
  name: "Header",
  props: {
    navData: {
      type: Array,
      default() {
        return "敬请期待";
      },
    },
  },
  data() {
    return {
      navIndex: 0,
    };
  },
  methods: {
    navClick(index) {
      // 点击更改属性为索引实现被点击按钮样式改变
      this.navIndex = index;
      this.$root.bus.$emit("nav-click", index);
    },
  },
};
</script>

<style scoped>
</style>