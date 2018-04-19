import * as types from '../types'

const state = {
	curPage:"home",
	loading:false
}
const getters = {
	loading: state => state.loading,
	curPage: state => state.curPage
}
const actions = {
	setLoading({dispatch,commit}) {
		//commit(types.NAVINDEX, navindex);
		//dispatch("fetchAjax");
	}
}
const mutations = {
    [types.LOADING](state, status) {
		state.loading = status;
	},
	[types.CUR_PAGE](state, status) {
		state.curPage = status;
	}
}

export default {
	state,
	actions,
	getters,
	mutations
}