<template>
  <span
    class="tab-bar-item"
    :style="changeStyle"
    @click="itemClick"
    @mouseover="itemHover"
    @mouseout="removeHover"
  >
    <slot name="item-text"></slot>
  </span>
</template>

<script>
export default {
  name: 'HeadBarItem',
  props: {
    path: String,
    changeColor: {
      type: Object,
      default() {
        return { color: '#dc5d48', bgColor: '#373833' }
      },
    },
  },
  data() {
    return {
      isHover: false,
    }
  },
  computed: {
    isActive() {
      return this.$route.params.id.includes(this.path)
    },
    changeStyle() {
      return {
        color: this.isActive
          ? this.changeColor.color
          : this.isHover
          ? this.changeColor.color
          : '#f8f8f2',
        backgroundColor: this.isActive
          ? this.changeColor.bgColor
          : this.isHover
          ? this.changeColor.bgColor
          : '#545453',
      }
    },
  },
  methods: {
    itemClick() {
      this.$router.push('/example/' + this.path)
    },
    itemHover() {
      this.isHover = true
    },
    removeHover() {
      this.isHover = false
    },
  },
}
</script>

<style scoped>
.tab-bar-item {
  display: block;
  min-width: 100px;
  height: 34px;
  margin: 0 10px;
  border-radius: 8px;
  line-height: 34px;
  text-align: center;
  background-color: #545453;
  color: #f8f8f2;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}
</style>