<template>
  <div class="vue-main clearfix">
    <div class="vue-slider">
      <div class="slider-cont">
        <p class="slider-msg">♥ 代表重要</p>
        <div class="slider-scroll">
          <ul class="slider-list">
            <li v-for="parItem in titleData.titleList" :key="parItem.parTitleId">
              <h2>{{parItem.parTitle}}</h2>
              <ul class="slider-sublist">
                <li
                  v-for="(item, index) in parItem.subTitleList"
                  :class="{'list-active': clickData.clickId === item.titleId}"
                  @click="titleClick(item.titleId, item.titleText, item.titleImport)"
                  :key="item.titleId"
                >{{index+1}}.{{item.titleText}}</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="vue-note">
      <example-cpn :example-props-data="mainPropsData" :content-data="clickData" />
      <html-cpn :txt-data="clickData.htmlTxt" :msg-data="clickData"></html-cpn>
    </div>
  </div>
</template>

<script>
import exampleCpn from "../noteExample/noteExample";
import htmlCpn from "../HtmlText/htmlText";
export default {
  name: "Main",
  props: {
    mainPropsData: Array,
  },
  data() {
    return {
      getNavIndex: 0,
      clickData: {
        clickId: this.mainPropsData[0].titleList[0].subTitleList[0].titleId,
        clickTitle: this.mainPropsData[0].titleList[0].subTitleList[0]
          .titleText,
        clickImport: this.mainPropsData[0].titleList[0].subTitleList[0]
          .titleImport,
        htmlTxt: '加载中...',
        htmlMsgShow: false,
      },
    };
  },
  //created其中一个生命周期钩子
  created() {
    // 初始化实例内容和代码展示
    this.loadEditor();
    // 监听导航被点击传过来的index
    let this_ = this;
    this.$root.bus.$on("nav-click", (index) => {
      this_.getNavIndex = index;
      // 导航index值改变时，笔记列表初始化为首行
      this_.clickData.clickId = this_.titleDefault.titleId;
      this_.clickData.clickTitle = this_.titleDefault.titleText;
      this_.clickData.clickImport = this_.titleDefault.titleImport;
      this_.loadEditor();
    });
  },
  methods: {
    titleClick(id, txt, impt) {
      this.clickData.clickId = id;
      this.clickData.clickTitle = txt;
      this.clickData.clickImport = impt;
      document.documentElement.scrollTop = `0px`;
      this.loadEditor();
    },
    loadEditor() {
      let this_ = this;
      $.ajax({
        url: `./data/page/${this.mainPropsData[this.getNavIndex].titleClassify}/${this_.clickData.clickId}.html`,
        success: function (data) {
          this_.clickData.htmlMsgShow = false;
          this_.clickData.htmlTxt = data;
        },
        error: function (xhr) {
          this_.clickData.htmlTxt = `获取失败，错误信息：${xhr.status}，${xhr.statusText}`;
          this_.clickData.htmlMsgShow = true;
        },
      });
    },
  },
  computed: {
    // title分类后的数据
    titleData() {
      return this.mainPropsData[this.getNavIndex];
    },
    titleDefault() {
      return this.mainPropsData[this.getNavIndex].titleList[0].subTitleList[0];
    },
  },
  components: {
    "example-cpn": exampleCpn,
    "html-cpn": htmlCpn,
  },
};
</script>

<style scoped>
</style>