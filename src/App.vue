<template>
	<div id="app">
		<mt-header fixed title="固定在顶部"></mt-header>
		<mt-tabbar fixed v-model="tIndex">
			<mt-tab-item id="新工程">
				<img slot="icon" src="./assets/logo4.png">新工程
			</mt-tab-item>
			<mt-tab-item id="执行中">
				<img slot="icon" src="./assets/logo4.png">执行中
			</mt-tab-item>
			<mt-tab-item id="已完成">
				<img slot="icon" src="./assets/logo4.png">已完成
			</mt-tab-item>
			<mt-tab-item id="设置">
				<img slot="icon" src="./assets/logo4.png">设置
			</mt-tab-item>
		</mt-tabbar>
		<transition name="fade" mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
	export default {
		name: 'App',
		components: {},
		data() {
			return {
				tIndex: "新工程",
				msg: 'Welcome to Your Vue.js App'
			}
		},
		watch: {
			tIndex(curVal, oldVal) {　　　
				console.log(curVal, oldVal)　　　
			}
		},
	}
</script>

<style scoped lang="scss">
	.fade-enter-active,
	.fade-leave-active {
		transition: all .2s ease;
	}
	
	.fade-enter,
	.fade-leave-active {
		opacity: 0;
	}
</style>