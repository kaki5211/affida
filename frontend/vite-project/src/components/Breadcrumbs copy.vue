


<script setup lang="ts">

import { useStore } from 'vuex';

const store = useStore();


const URL_LIST = computed(() => {
  return store.getters.GET_URL_LIST;
});


// const currentPath = window.location.pathname;
// const pathList = currentPath.split("/").slice(1);
// const breadcrumbsList = []

// if "" == item:
 
// {
//   path: 'path',
//   name: 'name'
// };

// for item in pathList:





// 事前に定義したパスと表示する文字列の対
const pathMapping = {
  videos: "コンテンツ",
  performer: "パフォーマー",
  // ...
};

// URLのパスを取得
const urlPath = window.location.pathname;

// パスを"/"で区切ってリストに変換
const pathList = urlPath.split("/").filter((path) => path !== "");

// パンくずリストの初期化
const breadcrumbsList = [
  {
    text: 'Dashboard',
    disabled: false,
    href: 'breadcrumbs_dashboard',
  },
];

// パスごとにパンくずリストを作成
let currentPath = "";
for (const path of pathList) {
  currentPath += `/${path}`;
  const name = pathMapping[path] || path;
  breadcrumbsList.push({ text: name, disabled: false, href: currentPath });
}

console.log("breadcrumbsList", breadcrumbsList);




</script>




<template>
 <div>
    <v-breadcrumbs
      :items="breadcrumbsList"
      color="var(--my-color-white)"
      bg-color="var(--my-color)"
    >
      <template v-slot:divider>
        <v-icon
          color="var(--my-color-white)"
          icon="mdi-chevron-right"
        ></v-icon>
      </template>
      <template v-slot:prepend>
        <v-icon
          color="var(--my-color-white)"
          size="small"
          icon="mdi-home"
        ></v-icon>
      </template>
    </v-breadcrumbs>
  </div>
</template>



<style>

</style>

