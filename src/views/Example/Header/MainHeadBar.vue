<template>
  <head-bar>
    <template v-slot:tab-left>
      <p>左边</p>
    </template>
    <template v-slot:tab-center>
      <head-bar-item
        v-for="nav in mainNavList"
        :path="nav.id"
        :change-color="{ color: '#dc5d48', bgColor: '#373833' }"
        :key="nav.id"
      >
        <template v-slot:item-text>{{nav.text}}</template>
      </head-bar-item>
    </template>
    <template v-slot:tab-right>
      <p>右边</p>
    </template>
  </head-bar>
</template>

<script>
import HeadBar from '_vie/Example/Header/HeadBar'
import HeadBarItem from '_vie/Example/Header/HeadBarItem'
export default {
  name: 'MainTabBar',
  props: {
    mainNavList: Array,
  },
  created() {
    this.$router.push('/example/' + this.mainNavList[0].id)
  },
  components: {
    HeadBar,
    HeadBarItem,
  },
}
</script>

<style scoped>
</style>