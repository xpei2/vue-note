<template>
  <div id="tab-bar">
    <div class="tab-bar">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style scoped>
#tab-bar {
  position: fixed;
  z-index: 99;
  top: 100px;
  left: 0;
  right: 0;
  width: 1240px;
  height: 0;
  margin: 0 auto;
}
.tab-bar {
  position: absolute;
  left: -110px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 5px 10px;
  border-right: 1px solid #696868b5;
}
</style>