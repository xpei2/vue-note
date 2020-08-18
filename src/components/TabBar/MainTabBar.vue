<template>
  <tab-bar>
    <tab-bar-item path="/main">
      <template v-slot:tab-icon>
        <img src="~_ats/img/tabbar/home.svg" alt />
      </template>
      <template v-slot:tab-icon-active>
        <img src="~_ats/img/tabbar/home_active.svg" alt />
      </template>
      <template v-slot:tab-text>首页</template>
    </tab-bar-item>
    <tab-bar-item :path="mainPath">
      <template v-slot:tab-icon>
        <img src="~_ats/img/tabbar/note.svg" alt />
      </template>
      <template v-slot:tab-icon-active>
        <img src="~_ats/img/tabbar/note_active.svg" alt />
      </template>
      <template v-slot:tab-text>实例笔记</template>
    </tab-bar-item>
    <tab-bar-item path="/txtnote">
      <template v-slot:tab-icon>
        <img src="~_ats/img/tabbar/note.svg" alt />
      </template>
      <template v-slot:tab-icon-active>
        <img src="~_ats/img/tabbar/note_active.svg" alt />
      </template>
      <template v-slot:tab-text>txt笔记</template>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <template v-slot:tab-icon>
        <img src="~_ats/img/tabbar/profile.svg" alt />
      </template>
      <template v-slot:tab-icon-active>
        <img src="~_ats/img/tabbar/profile_active.svg" alt />
      </template>
      <template v-slot:tab-text>简历</template>
    </tab-bar-item>
        <tab-bar-item path="/profile">
      <template v-slot:tab-icon>
        <img src="~_ats/img/tabbar/profile.svg" alt />
      </template>
      <template v-slot:tab-icon-active>
        <img src="~_ats/img/tabbar/profile_active.svg" alt />
      </template>
      <template v-slot:tab-text>简历</template>
    </tab-bar-item>
        <tab-bar-item path="/profile">
      <template v-slot:tab-icon>
        <img src="~_ats/img/tabbar/profile.svg" alt />
      </template>
      <template v-slot:tab-icon-active>
        <img src="~_ats/img/tabbar/profile_active.svg" alt />
      </template>
      <template v-slot:tab-text>简历</template>
    </tab-bar-item>
        <tab-bar-item path="/profile">
      <template v-slot:tab-icon>
        <img src="~_ats/img/tabbar/profile.svg" alt />
      </template>
      <template v-slot:tab-icon-active>
        <img src="~_ats/img/tabbar/profile_active.svg" alt />
      </template>
      <template v-slot:tab-text>简历</template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "_com/TabBar/TabBar";
import TabBarItem from "_com/TabBar/TabBarItem";
export default {
  name: "MainTabBar",
  props: {
    navList: Array,
  },
  computed: {
    mainPath() {
      return `/example/${this.$route.params.id}`;
    },
  },
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style scoped>
</style>