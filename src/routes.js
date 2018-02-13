import Home from './pages/Home.vue'
import Work from './pages/Work.vue'
import WorkDetail from './pages/WorkDetail.vue'

let routes = [{
		name: '新工程',
		path: '/home',
		component: Home
	},
	{
		name: '执行中',
		path: '/work',
		component: Work
	},
	{
		name: '详情',
		path: '/workdetail',
		component: WorkDetail
	},
	{
		path: '*',
		redirect: {
			path: '/home'
		}
	}
];

export default routes;