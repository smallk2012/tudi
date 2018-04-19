let routes = [{
	name: 'home',
	path: '/home',
	component: resolve => require(['@/pages/Home.vue'], resolve)
},
/*{
	name: 'work',
	path: '/work',
	component: resolve => require(['@/pages/Work.vue'], resolve)
},
{
	name: 'workdetail',
	path: '/workdetail',
	component: resolve => require(['@/pages/WorkDetail.vue'], resolve)
},
{
	name: 'workend',
	path: '/workend',
	component: resolve => require(['@/pages/WorkEnd.vue'], resolve)
},
{
	name: 'setting',
	path: '/setting',
	component: resolve => require(['@/pages/Setting.vue'], resolve)
},*/
{
	path: '*',
	redirect: {
		path: '/home'
	}
}
];

export default routes;