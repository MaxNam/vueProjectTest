import Vue from 'vue';
import VueLazyload from 'vue-lazyload';
import axios from 'axios';


// Vue.use(VueLazyload);

// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkoj0LYukNbYG0L4iYIruvIeHdBbFDG62i2lz_lwx9_TT8xXtnxg',
  loading: 'http://dribbble.s3.amazonaws.com/users/4613/screenshots/911982/jar-loading.gif',
  attempt: 3
})

Vue.prototype.$http = axios; // ajax promise

// polyfill
// ie promise
require('es6-promise').polyfill()
window.URLSearchParams = require('url-search-params')