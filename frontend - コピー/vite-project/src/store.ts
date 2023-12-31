import { createStore } from 'vuex';
import axios from 'axios';
import createPersistedState from 'vuex-persistedstate'



// 遅延関数　不要
// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }
// async function doSomething() {
//   console.log('処理を開始します');
//   await sleep(6000); // 3秒待機
//   console.log('処理を終了しました');
// }




// fetchDataAndCommit
async function fetchDataAndCommit({ commit, endpoint, mutationType }) {
  const response = await axios.get(`${host_api}/${endpoint}/`);
  commit(mutationType, response.data);
}


// URL選択
// const host = "http://127.0.0.1:8000"
const host_api = "http://127.0.0.1:8000/api"
// const host = "http://172.20.10.5:8000"
// const host_api = "http://172.20.10.5:8000/api"



const store = createStore({
  plugins: [createPersistedState()],
  state: {
    videos: null,
    performer_list: null,
    tag_list: null,
    maker_list: null,
    label_list: null,
    series_list: null,
    kyounuki_list: null,


    set_videos_loaded: null,


    url_list: null,
    url_param: null,
    url_judge_param: null,
    subcontents: null,
    subcontents_all: null,

    

    // Contents_list: [], 
    // Url_list_loaded: null, // urllist取得完了フラグ
    // Contents_loaded: null, // コンテンツデータ取得完了フラグ
  },
  mutations: {
    SET_VIDEOS(state, data) { state.videos = data; },
    SET_PERFORMER_LIST(state, data) { state.performer_list = data; },
    SET_TAG_LIST(state, data) { state.tag_list = data; },

    SET_MAKER_LIST(state, data) { state.maker_list = data; },
    SET_LABEL_LIST(state, data) { state.label_list = data; },
    SET_SERIES_LIST(state, data) { state.series_list = data; },
    SET_KYOUNUKI_LIST(state, data) { state.kyounuki_list = data; },

    SET_VODEOS_LOADED(state, data) { state.set_videos_loaded = data; },

    SET_URL_LIST(state, data) { state.url_list = data; },

    SET_URL_PARAM(state, data) { state.url_param = data; },
    SET_URL_JUDGE_PARAM(state, data) { state.url_judge_param = data; },
    SET_SUBCONTENTS(state, data) { state.subcontents = data; },
    SET_SUBCONTENTS_ALL(state, data) { state.subcontents_all = data; },


    
    // SET_CONTENTS(state, data) { state.Contents_list = [data]; },
    // ADD_CONTENTS(state, data) { state.Contents_list.push(data); },
    // ADD_CONTENTS(state, data) { Vue.set(state.Contents_list, state.Contents_list.length, data); },

  
    
    // SET_URL_LOADED(state, data) { state.Url_list_loaded = data; },
    // SET_CONTENTS_LOADED(state, data) { state.Contents_loaded = data; },
  },

  actions: {
    async FETCH_GET_VIDEOS({ commit }) {
      commit('SET_VODEOS_LOADED', false); // データの取得状態を初期化
      fetchDataAndCommit({ commit, endpoint: 'videos_view', mutationType: 'SET_VIDEOS' });
      commit('SET_VODEOS_LOADED', true); // データの取得状態を更新
      console.log('SET_URL_LOADED: Completed')
      
    },
    async FETCH_GET_PERFORMER_LIST({ commit }) {
      await fetchDataAndCommit({ commit, endpoint: 'performer_list_view', mutationType: 'SET_PERFORMER_LIST' });
    },
    async FETCH_GET_TAG_LIST({ commit }) {
      await fetchDataAndCommit({ commit, endpoint: 'tag_list_view', mutationType: 'SET_TAG_LIST' });
    },
    async FETCH_GET_KYOUNUKI_LIST({ commit }) {
      await fetchDataAndCommit({ commit, endpoint: 'kyounuki_list_view', mutationType: 'SET_KYOUNUKI_LIST' });
    },
    async FETCH_GET_URL_LIST({ commit }) {
      await fetchDataAndCommit({ commit, endpoint: 'url_list_view', mutationType: 'SET_URL_LIST' });
    },
    async FETCH_GET_MAKER_LIST({ commit }) {
      await fetchDataAndCommit({ commit, endpoint: 'maker_list_view', mutationType: 'SET_MAKER_LIST' });
    },
    async FETCH_GET_LABEL_LIST({ commit }) {
      await fetchDataAndCommit({ commit, endpoint: 'label_list_view', mutationType: 'SET_LABEL_LIST' });
    },
    async FETCH_GET_SERIES_LIST({ commit }) {
      await fetchDataAndCommit({ commit, endpoint: 'series_list_view', mutationType: 'SET_SERIES_LIST' });
    },


    // async FETCH_GET_URL_LIST({ commit }) {
    //   await fetchDataAndCommit({ commit, endpoint: 'url_list_view', mutationType: 'SET_URL_LIST' });
    // },


    // async FETCH_GET_maker_LIST({ commit }) {
    //   await fetchDataAndCommit({ commit, endpoint: 'maker_list_view', mutationType: 'SET_MAKER_LIST' });
    // },



    // async FETCH_GET_PERFORMER_LIST({ commit }) {
    //   const get_performer_list = axios.get(`${host_api}/performer_list_view/`);
    //   const performer_list = await get_performer_list;
    //   await commit('SET_PERFORMER_LIST', performer_list.data);
    // },

    // async FETCH_GET_TAG_LIST({ commit }) {
    //   const get_tags_list = axios.get(`${host_api}/tag_list_view/`);
    //   const tags_list = await get_tags_list;
    //   await commit('SET_TAG_LIST', tags_list.data);
    // },

    // async FETCH_GET_maker_LIST({ commit }) {
    //   const get_makers_list = axios.get(`${host_api}/maker_list_view/`);
    //   const makers_list = await get_makers_list;
    //   await commit('SET_MAKER_LIST', makers_list.data);
    // },


    
},  


  getters: {
    GET_VIDEOS: (state) => state.videos,
    GET_PERFORMER_LIST: (state) => state.performer_list,
    GET_TAG_LIST: (state) => state.tag_list,

    GET_MAKER_LIST: (state) => state.maker_list,
    GET_LABEL_LIST: (state) => state.label_list,
    GET_SERIES_LIST: (state) => state.series_list,
    GET_KYOUNUKI_LIST: (state) => state.kyounuki_list,
    
    GET_VIDEOS_LOADED: (state) => state.set_videos_loaded,


    GET_URL_LIST: (state) => state.url_list,
    GET_URL_PARAM: (state) => state.url_param,
    GET_URL_JUDGE_PARAM: (state) => state.url_judge_param,
    GET_SUBCONTENTS: (state) => state.subcontents,
    GET_SUBCONTENTS_ALL: (state) => state.subcontents_all,



  } 
});



(async () => {
  try {
    // await store.dispatch('fetchUrlListData');
    // await store.dispatch('fetchData');
    await store.dispatch('FETCH_GET_VIDEOS');
    await store.dispatch('FETCH_GET_PERFORMER_LIST');
    await store.dispatch('FETCH_GET_TAG_LIST');
    await store.dispatch('FETCH_GET_KYOUNUKI_LIST');
    await store.dispatch('FETCH_GET_URL_LIST');
    await store.dispatch('FETCH_GET_MAKER_LIST');
    await store.dispatch('FETCH_GET_LABEL_LIST');
    await store.dispatch('FETCH_GET_SERIES_LIST');

    

    // await store.dispatch('FETCH_GET_URL_LIST');

    console.log('Data fetched successfully');
    
  } catch (error) {
    console.log('Error fetching data:', error);
  }
})();

export default store;
