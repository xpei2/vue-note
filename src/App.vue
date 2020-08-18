<template>
  <div id="app">
    <main-tab-bar :navList="navList"/>
    <div class="wrapper">
      <router-view />
    </div>
  </div>
</template>
<script>
import MainTabBar from "_com/TabBar/MainTabBar";
import navList from "_ats/data/navList/navJson";

export default {
  name: "App",
  data() {
    return {
      navList,
    };
  },
  components: {
    MainTabBar,
  },
};
</script>
<style>
@import "./assets/css/base.css";
.wrapper {
  position: relative;
  width: 1240px;
  margin: 0 auto;
  background-color: rgba(20, 21, 20, 0.69);
}
</style>
