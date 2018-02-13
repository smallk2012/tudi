<template>
	<div class="mint-container">
		<div class="mint-main">
			<mt-navbar v-model="nIndex">
				<mt-tab-item id="1">地图模式</mt-tab-item>
				<mt-tab-item id="2">文字模式</mt-tab-item>
			</mt-navbar>
			<div class="amap-container">
				<mt-tab-container v-model="nIndex">
					<mt-tab-container-item id="1">
						<el-amap vid="amap" :zoom="zoom" :plugin="plugin" class="amap-demo" :center="center">
							<el-amap-marker v-for="(marker, index) in markers" :key="index" :extData="index" :position="marker.position" :events="marker.events" :vid="index"></el-amap-marker>
						</el-amap>
					</mt-tab-container-item>
					<mt-tab-container-item id="2" class="list">
						<ul class="m-group">
							<li class="m-item" v-for="(item,index) in markers" :key="index">
								<p class="ellipsis"><span>发布单位：</span><span>{{item.unit}}</span></p>
								<p class="ellipsis"><span>施工地址：</span><span>{{item.addr}}</span></p>
								<p><span>施工面积：</span><span>{{item.area}}</span></p>
								<p><span>施工日期：</span><span>{{item.date}}</span></p>
								<p><span>距离：</span><span>{{item.distance}}</span></p>
								<div class="btn" @click="doThis(index)">立即接单</div>
							</li>
						</ul>
					</mt-tab-container-item>
				</mt-tab-container>
			</div>
			<div class="amap-footer">
				<dl>
					<dt>当前地址：</dt>
					<dd class="ellipsis2">{{loaded ?"上海市浦东新区碧波路690号微电子园区7号楼":"正在定位..."}}</dd>
				</dl>
				<dl class="range">
					<dt>当前范围：</dt>
					<dd class="ellipsis2">20公里</dd>
				</dl>
			</div>
		</div>
	</div>
</template>

<script>
import Vue from "vue";

import AMap from "vue-amap";
import { MessageBox } from "mint-ui";

Vue.use(AMap);

AMap.initAMapApiLoader({
  // 申请的高德key
  key: "9f60c5dca8567a000da482d142309b3e",
  plugin: [
    "AMap.Geolocation",
    "AMap.Scale",
    "AMap.OverView",
    "AMap.ToolBar",
    "AMap.MapType"
  ]
});

export default {
  data() {
    let self = this;
    return {
      loaded: false,
      nIndex: "1",
      zoom: 11,
      center: [121.59996, 31.197646],
      lng: 0,
      lat: 0,
      markers: [],
      plugin: [
        {
          pName: "Geolocation",
          events: {
            init(o) {
              o.getCurrentPosition((status, result) => {
                console.log("定位");
                console.log(status);
                console.log(result);
                for (var m = 0; m < 10; m++) {
                  let marker = {
                    unit: "上海艾艺信息技术有限公司" + m,
                    addr: "碧波路690弄7号楼",
                    area: "9000平方",
                    date: "2018.02.13-2018.02.23",
                    distance: "10公里",
                    position: [121.5273285 + m * 0.02, 31.21515044],
                    events: {
                      click: e => {
                        var index = e.target.getExtData();
                        self.doThis(index);
                      }
                    }
                  };
                  self.markers.push(marker);
                }

                if (result && result.position) {
                  self.center = [result.position.lng, result.position.lat];
                  self.loaded = true;
                  self.$nextTick();
                }
              });
            }
          }
        },
        {
          pName: "ToolBar",
          events: {
            init(o) {}
          }
        }
      ]
    };
  },
  methods: {
    doThis(index) {
      let self = this;
      MessageBox.confirm("接取此单?", "提示").then(action => {
        if (action == "confirm") {
          self.$router.push('work')
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
.mint-navbar {
  position: relative;
  z-index: 10;
  background-color: #eee;
}
.mint-navbar .mint-tab-item.is-selected {
  margin-bottom: 0;
}
.mint-tab-container-item.list {
  overflow: auto;
}
.amap-container {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  padding-top: 49px;
  padding-bottom: 80px;
}
.mint-tab-container {
  height: 100%;
}
.amap-footer {
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 10;
  width: 100%;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 0 4px #999;
  dl {
    display: -webkit-box;
    font-size: 14px;
    line-height: 20px;
    min-height: 40px;
    &.range {
      min-height: 20px;
    }
    dt {
      display: block;
    }
    dd {
      -webkit-box-flex: 1;
    }
  }
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