import Vue from 'vue';
import axios from 'axios';

// axios.defaults.baseURL = 'https://curso-vue-6af8c-default-rtdb.firebaseio.com/';
// axios.defaults.headers.common['Authorization'] = 'abc123';
// axios.defaults.headers.get['Accepts'] = 'application/json';

Vue.use({
  install(Vue) {
    // Vue.prototype.$http = axios;
    Vue.prototype.$http = axios.create({
      baseURL: 'https://curso-vue-6af8c-default-rtdb.firebaseio.com/',
      headers: {
        'Authorization': 'abc123',
        get: {
          'Accepts': 'application/json'
        }
      }
    });
    Vue.prototype.$apiCorreios = axios.create({
      baseURL: 'https://curso-vue-6af8c-default-rtdb.firebaseio.com/'
    });
    Vue.prototype.$apiGoogle = axios.create({
      baseURL: 'https://curso-vue-6af8c-default-rtdb.firebaseio.com/'
    });


    Vue.prototype.$http.interceptors.request.use(config => {
      console.log(config.method);

      // if(config.method == 'post') {
      //   config.method = 'put';
      // }

      return config;
    }, error => Promise.reject(error));

    Vue.prototype.$http.interceptors.response.use(res => {
      // const array = [];
      
      // for(let id in res.data) {
      //   array.push({id, ...res.data[id]}) ;
      // }

      // res.data = array;
      return res;
    }, error => Promise.reject(error));
  }
});