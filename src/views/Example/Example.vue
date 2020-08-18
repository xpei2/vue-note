<template>
  <div id="main">
    <main-head-bar :main-nav-list="navList"/>
  </div>
</template>

<script>
import MainHeadBar from "_vie/Example/Header/MainHeadBar";
import navList from "_ats/data/navList/navJson";
export default {
  name: "App",
  data() {
    return {
      navList,
    };
  },
  components: {
    MainHeadBar,
  },
};
</script>

<style scoped>
</style>