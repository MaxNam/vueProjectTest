import Vue from 'vue';
import Vuex from 'vuex';
import VuexPromiseMiddleware from 'vuex-promise-middleware';
import state from '@/store/state';
import mutations from '@/store/mutations';
import actions from '@/store/actions';

Vue.use(Vuex);

const plugins = [VuexPromiseMiddleware];

export default new Vuex.Store({
  plugins,
  state,
  mutations,
  actions
});