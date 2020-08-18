<template>
  <div class="vue-container note-example">
    <div class="vue-head example-head">
      <h3 class="example-title">
        <strong important v-if="contentData.clickImport">♥</strong>
        {{contentData.clickTitle}}
      </h3>
      <p class="head-msg">
        <span>实例展示</span>
        <span>（可操作）</span>
      </p>
    </div>
    <div
      id="example_cont"
      class="example-content"
      :class="{'content-msg': contentData.htmlMsgShow}"
      v-html="txt"
    ></div>
  </div>
</template>

<script>
export default {
  name: "exampleCpn",
  props: {
    contentData: Object,
  },
  computed: {
    txt() {
      return this.contentData.htmlTxt;
    },
  },
};
</script>

<style scoped>
</style>