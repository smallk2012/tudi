<template>
	<div class="mint-container">
		<div class="mint-main">
			<ul class="m-group">
        <li class="m-item" v-for="(item,index) in works" :key="index">
          <p class="ellipsis"><span>发布单位：</span><span>{{item.unit}}</span></p>
          <p class="ellipsis"><span>施工地址：</span><span>{{item.addr}}</span></p>
          <p><span>施工面积：</span><span>{{item.area}}</span></p>
          <p><span>施工日期：</span><span>{{item.date}}</span></p>
          <p><span>距离：</span><span>{{item.distance}}</span></p>
          <div class="btn" @click="doThis(index)">立即施工</div>
        </li>
      </ul>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      works: []
    };
  },
  methods: {
    doThis(index) {
      this.$router.push({ name: 'workdetail', params: { index }})
    }
  },
  mounted() {
    let self = this;
    for (var m = 0; m < 6; m++) {
      let work = {
        unit: "上海艾艺信息技术有限公司" + m,
        addr: "碧波路690弄7号楼",
        area: "9000平方",
        date: "2018.02.13-2018.02.23",
        distance: "10公里",
        position: [121.5273285 + m * 0.02, 31.21515044]
      };
      self.works.push(work);
    }
  }
};
</script>

<style scoped lang="scss">
.mint-main {
  overflow: auto;
}
.m-group {
  display: block;
  padding-bottom: 10px;
  .m-item {
    position: relative;
    padding: 10px 100px 10px 10px;
    border-bottom: 1px solid #fff;
    background-color: #ccc;
    p {
      font-size: 12px;
    }
    .btn {
      position: absolute;
      top: 0;
      right: 0px;
      line-height: 100px;
      width: 100px;
      height: 100%;
      text-align: center;
      background-color: #999;
      color: #fff;
    }
  }
}
</style>