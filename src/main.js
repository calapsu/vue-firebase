import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB7YDhv7CT90KPWMJ9TB46W7DvkOHCWnts',
  authDomain: 'platzi-rooms-29f6f.firebaseapp.com',
  databaseURL: 'https://platzi-rooms-29f6f-default-rtdb.firebaseio.com',
  projectId: 'platzi-rooms-29f6f',
  storageBucket: 'platzi-rooms-29f6f.appspot.com',
  messagingSenderId: '575039706935',
  appId: '1:575039706935:web:6c44fb6d7b16880b0f2cb2',
  measurementId: 'G-RPMBDNXVRV',
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch('FETCH_AUTH_USER');
  }
});

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    if (store.state.authId) {
      this.$store.dispatch('FETCH_USER', { id: store.state.authId });
    }
  },
}).$mount('#app');
