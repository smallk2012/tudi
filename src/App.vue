<template>
	<div id="app">
		<mt-header fixed :title="curPage"></mt-header>
		<transition name="fade" mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    
  }
};
</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>