
<script setup lang="ts">
import Header from './components/Header.vue';
import ToolBar from './components/ToolBar.vue';
import Topimage from './components/Topimage.vue';
import Footer from './components/Footer.vue';
import Breadcrumbs from './components/Breadcrumbs.vue';
// import Judgeurl from './components/Judgeurl.vue';
import Btn_1 from './components/_Btn_1_mottomiru.vue';
import { useRoute } from 'vue-router';
// import { useStore } from 'vuex';
// import { watch, computed } from 'vue';
import { ref, onMounted, watch, computed } from 'vue';
import { Icon } from '@iconify/vue';
import { useStore } from 'vuex';




import Text_1 from './components/_Text_1.vue';
// import { VideoPlayer } from '@videojs-player/vue'
// import 'video.js/dist/video-js.css'





const store = useStore();



// １■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
// URLパラメータから、各種データを取得
// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
const currentPath = window.location.pathname;
const routes = [
  { path: '/', name: 'App' },
  { path: '/video', name: 'Videos' },
  { path: '/video/:param', name: 'Video' },
  { path: '/kyounuki',  name: 'Kyounuki' },
  { path: '/performer', name: 'Performers' },
  { path: '/performer/:param', name: 'Performer' },
  { path: '/tag', name: 'Tags' },
  { path: '/tag/:param', name: 'Tag' },
  { path: '/maker', name: 'Makers' },
  { path: '/maker/:param', name: 'Maker' },
  { path: '/maker/label', name: 'Labels' },
  { path: '/maker/label/:param', name: 'Label' },
  { path: '/maker/label/series', name: 'Seriess' },
  { path: '/maker/label/series/:param', name: 'Series' },
  { path: '/search', name: 'Search' },
  { path: '/about', name: 'About' },
];
// urlListのデータ
const URL_LIST = computed(() => {
  return store.getters.GET_URL_LIST;
});
// const serializerData = {
//   performer: [{ name: "actor1" }, { name: "actor2" }],
//   tag: [{ name: "tag1" }, { name: "tag2" }],
//   maker: [{ name: "maker1" }, { name: "maker2" }],
//   label: [{ name: "label1" }, { name: "label2" }],
//   series: [{ name: "series1" }, { name: "series2" }],
//   kyounuki: [{ post_day: "2023-07-14" }, { post_day: "2022-10-10" }],
// };
// http://172.20.10.5:5173/performer/actor1 → { /performer, true, actor1     console.log("url_judge_param_brfore", url_judge_param)

function matchURL(url) {
  for (const route of routes) {
    const pattern = new RegExp(`^${route.path.replace(/:\w+/g, '([^/]+)')}$`);
    const matches = url.match(pattern);
    if (matches) {
      const url_param = ref(matches[1] || null);

      return { matches: matches, matched: true, url_param };
    }
  }
  return { matches: null, matched: false, url_param: false };
}
// { matches, matched, url_param }を取得
const { matches, matched, url_param } = matchURL(currentPath);
// url_judge_param を取得
// もし actor1 が存在した場合、そのactor1の記事が存在するかジャッジ
let url_judge_param = ref(false);

let extractedNames = []; // 変数を定義して初期化
let url_param_before = []; // 変数を定義して初期化
let subcontents = ref();
let subcontents_all = ref();
console.log("URL_LIST.value", URL_LIST.value)
console.log("matches", matches)
const pathSegments = matches[0].split("/");
subcontents.value = pathSegments[pathSegments.length - 1];

// もしurl_paramが存在する場合、その時のsubcontantsを取得
if (url_param.value) {
  subcontents.value = pathSegments[pathSegments.length - 2];


  // subcontentsの値を使用して、subcontentsの全てのデータを取得→subcontents_all
  // watch(URL_LIST.value, (newValue) => {
  const intervalId = setInterval(() => {
  // if (newValue) {
  if (URL_LIST.value) {
    clearInterval(intervalId); // 監視を停止する

    // if (subcontents in newValue) {
    //     console.log(extractedNames)
    //   if (subcontents == "video") {
    //     extractedNames = newValue[subcontents].map((item) => item.productnumber);
    //     console.log(extractedNames)
    //   } else {
    //     extractedNames = newValue[subcontents].map((item) => item.name);
    //   }
    //   url_param_before = newValue[subcontents];

    //   if (extractedNames.includes(url_param)) {
    //     url_judge_param = true;
    //   }
    // }
    if (subcontents.value in URL_LIST.value) {
      console.log("subcontents", subcontents.value);
      if (subcontents.value === "video") {
        extractedNames = URL_LIST.value[subcontents.value].map((item) => item.productnumber);
        console.log("extractedNames_video", extractedNames);
      } else {
        extractedNames = URL_LIST.value[subcontents.value].map((item) => item.name);
        console.log("extractedNames_else", extractedNames);

      }
      url_param_before = URL_LIST.value[subcontents.value];

      if (extractedNames.includes(url_param.value)) {
        url_judge_param.value = true;
      }
    }
    console.log("url_param", url_param.value)
    console.log("url_judge_param", url_judge_param.value)
    console.log("subcontents", subcontents.value)
    console.log("subcontents_all", subcontents_all.value)

    if (url_judge_param.value) {
      console.log("url_judge_param", url_judge_param)
      console.log("subcontents_all.value", subcontents_all.value)
      const contents_info = subcontents_all.value.filter((item) => item.productnumber === url_judge_param);
      console.log("contents_info", contents_info.value)

    }


  }
}, 1000); // 1秒ごとに監視
}


const intervalId2 = setInterval(() => {

if (subcontents_all.value) {
  clearInterval(intervalId2); // 監視を停止する



// if (subcontents.value === "performer") {
//   watch(() => store.getters.GET_PERFORMER_LIST,(newList) => {if (newList) {subcontents_all.value = computed(() => newList);}})
// } else if (subcontents.value === "tag") {
//   watch(() => store.getters.GET_TAG_LIST,(newList) => {if (newList) {subcontents_all.value = computed(() => newList);}})
//   console.log("tag!!")
// } else if (subcontents.value === "maker") {
//   watch(() => store.getters.GET_MAKER_LIST,(newList) => {if (newList) {subcontents_all.value = computed(() => newList);}})
//   console.log("maker!!")
// } else if (subcontents.value === "label") {
//   watch(() => store.getters.GET_LABEL_LIST,(newList) => {if (newList) {subcontents_all.value = computed(() => newList);}})
// } else if (subcontents.value === "series") {
//   watch(() => store.getters.GET_SERIES_LIST,(newList) => {if (newList) {subcontents_all.value = computed(() => newList);}})
// } else if (subcontents.value === "kyounuki") {
//   watch(() => store.getters.GET_KYOUNUKI_LIST,(newList) => {if (newList) {subcontents_all.value = computed(() => newList);}})
// } else if (subcontents.value === "video") {
//   console.log("video!!")
//   watch(() => store.getters.GET_VIDEOS,(newList) => {if (newList) {subcontents_all.value = computed(() => newList);
//     console.log("video!!!!!!!")
// }})
// } else {
//   // それ以外の場合の初期値を設定
//   subcontents_all.value = computed(() => []);
// }
if (subcontents.value === "performer") {
  subcontents_all.value = computed(() => { return store.getters.GET_PERFORMER_LIST; });
} else if (subcontents.value === "tag") {
  subcontents_all.value = computed(() => { return store.getters.GET_TAG_LIST; });
} else if (subcontents.value === "maker") {
  subcontents_all.value = computed(() => { return store.getters.GET_MAKER_LIST; });
} else if (subcontents.value === "label") {
  subcontents_all.value = computed(() => { return store.getters.GET_LABEL_LIST; });
} else if (subcontents.value === "series") {
  subcontents_all.value = computed(() => { return store.getters.GET_SERIES_LIST; });
} else if (subcontents.value === "kyounuki") {
  subcontents_all.value = computed(() => { return store.getters.GET_KYOUNUKI_LIST; });
} else if (subcontents.value === "video") {
  subcontents_all.value = computed(() => { return store.getters.GET_VIDEOS; });
}
} else {
  // それ以外の場合の初期値を設定
  subcontents_all.value = computed(() => []);
}
}, 1000); // 1秒ごとに監視



// console.log("url_param", url_param)
// console.log("url_judge_param", url_judge_param)
// console.log("subcontents", subcontents)
// console.log("subcontents_all", subcontents_all.value)

// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
// 完了
// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

console.log("url_param", url_param.value)
console.log("url_judge_param", url_judge_param.value)
console.log("subcontents", subcontents.value)
console.log("subcontents_all", subcontents_all.value)

watch(() => url_param,(newList) => {if (newList) {store.commit('SET_URL_PARAM', newList);}})
watch(() => url_judge_param,(newList) => {if (newList) {store.commit('SET_URL_JUDGE_PARAM', newList);}})
watch(() => subcontents.value,(newList) => {if (newList) {store.commit('SET_SUBCONTENTS', newList);}})
watch(() => subcontents_all.value,(newList) => {if (newList) {store.commit('SET_SUBCONTENTS_ALL', newList);}})
store.commit('SET_URL_PARAM', url_param.value)
store.commit('SET_JUDGE_PARAM', url_judge_param.value)
store.commit('SET_SUBCONTENTS', subcontents.value)









const PERFORMER_LIST = computed(() => {
  return store.getters.GET_PERFORMER_LIST;
});
const TAG_LIST = computed(() => {
  return store.getters.GET_TAG_LIST;
});
const VIDEOS_LOADED = computed(() => {
  return store.getters.GET_VIDEOS_LOADED;
});





</script>

<script lang="ts">

import { defineComponent } from 'vue'
import GlobalStyles from './components/_GlobalStyles.vue';


export default defineComponent({
  name: 'App',
  components: {
    GlobalStyles,
  },
  data () {
    return {

    }
  },
  props: {
  param: {
    type: String,
    required: true
  }
},
  methods: {
}

});



</script>









<template>


  <v-app id="#my-scroll-target">

    <Header />
    <ToolBar />
    <Topimage />


    <!-- <Judgeurl /> -->
    <v-row no-gutters>
      <v-col cols="12">
        <Breadcrumbs />
      </v-col>
    </v-row>



    <v-main v-if="VIDEOS_LOADED" class="my-bg-color-white">
    <!-- <v-main v-if="GET_VIDEOS_LOADED" class="my-bg-color-white"> -->
    
<div>
</div>
      <router-view />
    </v-main>


    <div v-else>
        データを読み込んでいます...
        url_judge_param: {{ url_judge_param }}
    </div>




    <Footer />



  </v-app>
</template>



<style>


</style>