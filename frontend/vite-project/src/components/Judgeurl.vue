


<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { computed } from 'vue';


const route = useRoute();
const store = useStore();

// const url_params = ref('');
const VIDEOS = computed(() => {
  return store.getters.GET_VIDEOS;
});

const VIDEOS_LOADED = computed(() => {
  return store.getters.GET_VIDEOS_LOADED;
});



// ■■■urlパラメータから各種情報を取得
// subcontents //parfomer
const route_mached = route.matched[0]
let subcontents = route_mached.meta.subcontents;
// let subcontents = "performer"

console.log("subcontents", subcontents)
// subcontents_all //performer: [{name: actor1}, {name: actor2}]
let subcontents_all = null;
if (subcontents === "performer") {
  subcontents_all = computed(() => store.getters.GET_PERFORMER_LIST);
} else if (subcontents === "tag") {
  subcontents_all = computed(() => store.getters.GET_TAG_LIST);
} else if (subcontents === "maker") {
  subcontents_all = computed(() => store.getters.GET_MAKER_LIST);
} else if (subcontents === "label") {
  subcontents_all = computed(() => store.getters.GET_LABEL_LIST);
} else if (subcontents === "series") {
  subcontents_all = computed(() => store.getters.GET_SERIES_LIST);
} else if (subcontents === "kyounuki") {
  subcontents_all = computed(() => store.getters.GET_KYOUNUKI_LIST);
} else {
  // それ以外の場合の初期値を設定
  subcontents_all = computed(() => []);
}
console.log("subcontents_all", subcontents_all.value)
// param // actor1
const param = route.params.param;
console.log("param", param)
// param_all //{name: "actor1", barth: "2023-07-16", contents: "aa"}
// const param_all = subcontents_all.param;
// console.log("param_all", param_all)





console.log("param", route.params.param)
console.log("param2", route.params)
console.log("subcontents", subcontents)

// let contents = null;
// if (param) {
//   contents =  VIDEOS.value.subcontents.;
// }

const PERFORMER_LIST = computed(() => {
  return store.getters.GET_PERFORMER_LIST;
});
const TAG_LIST = computed(() => {
  return store.getters.GET_TAG_LIST;
});

const URL_LIST = computed(() => {
  return store.getters.GET_URL_LIST;
});



</script>




<template>

</template>
