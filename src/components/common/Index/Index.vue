<template>
  <div>
    <Header :nav-data="indexData.headerData"/>
    <Main :main-props-data="indexData.contentData"/>
  </div>
</template>

<script>
import Header from "../header/Header";
import Main from "../../content/Main/Main";
export default {
  name: "Index",
  props: {
      indexData: Object
  },
  components: {
    Header,
    Main,
  },
};
</script>