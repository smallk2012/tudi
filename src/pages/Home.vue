<template>
<div class="mint-container">
  <mt-tabbar fixed v-model="tIndex">
    <mt-tab-item id="home">
      <img slot="icon" src="../assets/logo4.png">新工程
    </mt-tab-item>
    <mt-tab-item id="work">
      <img slot="icon" src="../assets/logo4.png">执行中
    </mt-tab-item>
    <mt-tab-item id="workend">
      <img slot="icon" src="../assets/logo4.png">已完成
    </mt-tab-item>
    <mt-tab-item id="setting">
      <img slot="icon" src="../assets/logo4.png">设置
    </mt-tab-item>
  </mt-tabbar>
</div>
</template>

<script>
import { Tabbar, TabItem } from 'mint-ui';


import { mapGetters } from "vuex";

export default {
  components: {
"mt-tabbar":Tabbar,
"mt-tab-item":TabItem
  },
  data() {
    var self = this;
    return {
      tIndex: ""
    };
  },
  computed: {
    ...mapGetters({
      curPage: "curPage"
    })
  },
  watch: {
    tIndex(curVal, oldVal) {
      var self = this;
      console.log(curVal, oldVal);
      if (curVal != oldVal && oldVal != "") {
        self.$router.push(curVal);
      }
    },
    curPage(curVal, oldVal) {
      var self = this;
      self.tIndex = self.curPage;
    }
  },
  mounted() {
    var self = this;
    self.tIndex = self.curPage;
  }
};
</script>

<style scoped lang="scss">

</style>