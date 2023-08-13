


<script setup lang="ts">

// 事前に定義したパスと表示する文字列の対
const pathMapping = {
  video: "コンテンツ",
  performer: "パフォーマー",
  maker: "メーカー",
  // ...
};

// URLのパスを取得
const urlPath = window.location.pathname;

// パスを"/"で区切ってリストに変換
const pathList = urlPath.split("/").filter((path) => path !== "");

// パンくずリストの初期化
const breadcrumbsList = [
  {
    text: 'ホーム',
    disabled: false,
    href: '/',

  },
];

// パスごとにパンくずリストを作成
let currentPath = "";
for (let i = 0; i < pathList.length; i++) {
  const path = pathList[i];
  currentPath += `/${path}`;
  const name = pathMapping[path] || path;
  const disabled = i === pathList.length - 1; // 最後の要素の場合のみ disabled: true
  breadcrumbsList.push({ text: name, disabled, href: currentPath });
}


console.log("breadcrumbsList", breadcrumbsList);




</script>




<template>
 <div>
    <v-breadcrumbs
      :items="breadcrumbsList"
      color="var(--my-color-white)"
      bg-color="var(--my-color)"
      class=""
      

    >
      <template v-slot:divider>
        <v-icon
          color="var(--my-color-white)"
          icon="mdi-chevron-right"
          size="40"
        ></v-icon>
      </template>
      <template v-slot:prepend>
        <v-icon
          color="var(--my-color-white)"
          size="40"
          icon="mdi-home"
        ></v-icon>
      </template>
    </v-breadcrumbs>
  </div>
</template>



<style>
.v-breadcrumbs a{
  font-size: 35px;

}
</style>

