


<script setup lang="ts">

import { useStore } from 'vuex';
const store = useStore();
import { computed } from 'vue';



// const URL_LIST = computed(() => {
//   return store.getters.GET_URL_LIST;
// });

// const URL_LIST = computed(() => {
//   return store.getters.GET_URL_LIST;
// });

// const URL_LIST = computed(() => {
//   return store.getters.GET_URL_LIST;
// });

const URL_LIST = computed(() => {
  return store.getters.GET_URL_LIST;
});






const currentPath = window.location.pathname;
const pathList = currentPath.split("/").slice(1);

const Judgeurl = false;

const urlPath = window.location.pathname;


const routes = [
  { path: '/', name: 'App' },
  { path: '/video', name: 'Videos' },
  { path: '/video/:param', name: 'Video' },
  { path: '/performer', name: 'Performers' },
  { path: '/performer/:param', name: 'Performer' },
  { path: '/tag/', name: 'Tags' },
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

const serializerData = {
  performer: [{ name: "actor1" }, { name: "actor2" }],
  tag: [{ name: "tag1" }, { name: "tag2" }],
  maker: [{ name: "maker1" }, { name: "maker2" }],
  label: [{ name: "label1" }, { name: "label2" }],
  series: [{ name: "series1" }, { name: "series2" }],
  kyounuki: [{ post_day: "2023-07-14" }, { post_day: "2022-10-10" }],
};



function matchURL(url) {
  for (const route of routes) {
    const pattern = new RegExp(`^${route.path.replace(/:\w+/g, '([^/]+)')}$`);
    const matches = url.match(pattern);
    if (matches) {
      const url_param = matches[1] || null;

      return { matches: matches, matched: true, url_param };
    }
  }
  return { matches: null, matched: false, url_param: null };
}



const { matches, matched, url_param } = matchURL(currentPath);
// console.log("matched", matched);  // true
// console.log("param", param);  // '123'


let url_judge_param = false;
let extractedNames = []; // 変数を定義して初期化
let url_param_before = []; // 変数を定義して初期化


if (url_param) {
  const pathSegments = matches[0].split("/");
  const lastPath = pathSegments[pathSegments.length - 2];
  if (lastPath in serializerData) {
    extractedNames = serializerData[lastPath].map((item) => item.name);
    url_param_before = serializerData[lastPath];


    if (extractedNames.includes(url_param)) {
      url_judge_param = true;
    }

  }
}



// url_root_listを取得
// console.log("url_root_list", matches[0].split("/").slice(1));  // ["maker", "label"]
store.commit('SET_URL_ROOT_LIST', matches[0].split("/").slice(1));


// paramを取得
// console.log("url_param", url_param);  // 'ABC1234'
store.commit('SET_URL_ROOT_LIST', url_param);

// url_root_listを取得
console.log("URL_PARAM_BEFORE", url_param_before);  // [{name: 'actor1'}, {name: 'actor2'}]
// store.commit('SET_url_root_list', url_param_before);

// paramとcontents(url_list)を比較する
console.log("URL_JUDGE_PARAM", url_judge_param) // true
// store.commit('SET_url_root_list', url_judge_param);







</script>




<template>

</template>



<style>

</style>

