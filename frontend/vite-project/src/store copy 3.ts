import { createStore } from 'vuex';
import axios from 'axios';




const store = createStore({
  state: {
    myData: null,
    bookmyData: null,
    urlMyData: null, 
    dataLoaded: false // データの取得完了フラグ
  },
  mutations: {
    SET_DATA_1(state, data) {
      state.myData = data;
    },
    SET_DATA_2(state, data) {
      state.bookmyData = data;
    },
    SET_DATA_3(state, data) {
      state.urlMyData = data;
    },
    SET_DATA_LOADED(state, value) {
      state.dataLoaded = value;
    },
    SET_DATA_URL_LIST_LOADED(state, value) {
      state.urllistLoaded = value;
    }
  },
  actions: {
    async fetchData({ commit }) {
      commit('SET_DATA_LOADED', false); // データの取得状態を初期化


      try {
        // request3のデータを非同期で取得
  
        // request1とrequest2を非同期で取得
        // const [response1, response2, response3] = await Promise.all([
        //   axios.get('http://127.0.0.1:8000/params/'),
        //   axios.get('http://127.0.0.1:8000/books/2023-02-25/serializer'),
        //   axios.get('http://127.0.0.1:8000/books/url')
        // ]);
  
        const response2Promise = axios.get('http://127.0.0.1:8000/books/2023-02-25/serializer');
        const response3Promise = axios.get('http://127.0.0.1:8000/params/');


        const response2 = await response2Promise;
        commit('SET_DATA_2', response2.data);

        const response3 = await response3Promise;
        commit('SET_DATA_1', response3.data);

        commit('SET_DATA_LOADED', true); // データの取得完了フラグを設定
      } catch (error) {
        console.log(error);
        commit('SET_DATA_LOADED', true); // データの取得完了フラグを設定
      }
    },
    async fetchUrlListData({ commit }) {
      commit('SET_DATA_URL_LIST_LOADED', false); // データの取得状態を初期化

      try {
        const response1_url_list = axios.get('http://127.0.0.1:8000/books/url');
        const response1 = await response1_url_list;
        commit('SET_DATA_3', response1.data);
        commit('SET_DATA_URL_LIST_LOADED', true); // データの取得完了フラグを設定
      } catch (error) {
        console.log(error);
        commit('SET_DATA_URL_LIST_LOADED', true); // データの取得完了フラグを設定
      }
  },
},

  getters: {
    getMyData: (state) => state.myData,
    bookMyData: (state) => state.bookmyData,
    isDataLoaded: (state) => state.dataLoaded,
    isUrlListDataLoaded: (state) => state.urllistLoaded

  }
  
  
});


(async () => {
  try {
    await store.dispatch('fetchUrlListData');
    await store.dispatch('fetchData');

    console.log('Data fetched successfully');
  } catch (error) {
    console.log('Error fetching data:', error);
  }
})();

export default store;
