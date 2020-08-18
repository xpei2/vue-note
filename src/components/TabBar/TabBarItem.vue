<template>
  <div
    class="tab-bar-item"
    @click="tabClick"
    :style="changeStyle"
    @mouseover="itemHover"
    @mouseout="removeHover"
  >
    <p class="tab-text">
      <slot name="tab-text"></slot>
    </p>
    <div v-if="isActive || isHover" class="tab-icon">
      <slot name="tab-icon-active"></slot>
    </div>
    <div v-else class="tab-icon">
      <slot name="tab-icon"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    changeColor: {
      type: Object,
      default() {
        // 默认hover和active的颜色
        return { color: "#dc5d48" };
      },
    },
  },
  data() {
    return {
      isHover: false,
    };
  },
  computed: {
    isActive() {
      return this.$route.path.includes(this.path);
    },
    changeStyle() {
      // 最后一个为文字默认颜色和border默认颜色
      return {
        color: this.isActive
          ? this.changeColor.color
          : this.isHover
          ? this.changeColor.color
          : "#c7c7c5",

        borderBottomColor: this.isActive
          ? this.changeColor.color
          : this.isHover
          ? this.changeColor.color
          : "rgba(0,0,0,0)",
      };
    },
  },
  methods: {
    tabClick() {
      this.$router.push(this.path);
    },
    itemHover() {
      this.isHover = true;
    },
    removeHover() {
      this.isHover = false;
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  display: inline-block;
  margin: 10px 0;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  cursor: pointer;
}
.tab-bar-item img {
  width: 20px;
  margin-left: 3px;
  margin-top: 4px;
}
.tab-icon,
.tab-text {
  display: inline-block;
  vertical-align: middle;
}
</style>