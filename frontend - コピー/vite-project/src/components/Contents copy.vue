
<script setup lang="ts">
import Text_1 from './_Text_1.vue';
import Text_2 from './_Text_2.vue';
import List_1 from './_List_1.vue';

import { defineProps } from 'vue';
const props = defineProps({
  contents: {
    type: Array,
    required: true
  }
});

import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { computed } from 'vue';
import { ref, onMounted } from 'vue';


const showBookList = true;

const page_max = props.contents.page_max
const contents_ = props.contents.contents
const info = props.contents.book_info[0]
const contents_synopsis = props.contents.book_info[0].contents_synopsis

const router = useRoute();
const store = useStore();
const contents_now = router.params.params;

let page_now = ref(parseInt(router.params.params2, 10));
let page_prev = ref(parseInt(router.params.params2, 10)-1);
let page_next = ref(parseInt(router.params.params2, 10)+1);

const host = router.params.options;



const handlePageChange = (page) => {
  // page = page
  console.log(parseInt(page, 10))
  console.log("page")
  page_now.value = page
  page_prev.value = page-1
  page_next.value = page+1
};


// const Page_next = () => {
//   // ボタンがクリックされたときにpage_nowの値を更新する処理
//   page_now.value += 1// 新しい値を設定するロジック
//   page_prev.value += 1
//   page_next.value += 1
// };



</script>










<template>

  <div>
    page_max: {{ page_max }}
    contents_: {{ contents_ }}
    <!-- {{ info }} -->
    &emsp;{{ contents_synopsis }}
    host: {{ host }}
  </div>


  <v-container fluid>
    <v-row justify="space-around" no-gutters>
      <v-col class="py-13" cols="11">
        <v-card
          class="mx-auto"
          cols="8"
        >

          <v-col cols="5" sm="5" class="d-flex mx-auto my-8">

            <v-img
              class="align-end text-white"
              src="http://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=4167911302&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=bookic-22&language=ja_JP"
              cover
            >
              <!-- <v-card-title class="text-h3 font-weight-medium" tag="h3">Top 10 Australian beaches</v-card-title> -->
            </v-img>
          </v-col>

          <v-col cols="12" sm="12" class="mx-auto">

            <v-card-subtitle style="line-height: normal;" class="ps-5 pt-2 my-text-size-25 text-subtitle-2">
              2023/06/11
            </v-card-subtitle>

            <v-card-title class="py-5 text-h3 font-weight-bold my-text-color-black my-letter-spacing-initial" tag="h3">
              コンビニ人間            
            </v-card-title>


            <v-row v-if="showBookList" no-gutters>
              <v-col cols="8" class="mx-auto mt-15 mb-10">
                <List_1 />
              </v-col>
            </v-row>





            <Text_2 text_2="あらすじ" />
            

            <v-card-text class="psy-3 my-text-color">
              <a class="text-h5 font-weight-medium my-text-contents">
                {{contents_synopsis}}
              </a>
            </v-card-text>

            <Text_2 text_2="はじめに" />
            <v-card-text class="psy-3 my-text-color">
              <a class="text-h5 font-weight-medium my-text-contents">
                &emsp;社会から逸脱した思考・価値観を持つ主人公、古倉恵子(ふるくらけいこ)。その特徴から、古倉恵子は子供の頃から"普通"を周りから強いられるようになる。そして"普通"を学習し育った古倉恵子だったが、結婚、就職等の"普通"を捨て、コンビニのアルバイトを永遠に続けるようになる。彼女がコンビニで働き続ける理由とは、そして彼女が覚えた価値観とは...。多様性（ダイバーシティ）という単語が目立つ近年、あなたは古倉恵子のような究極の価値観を認めることができるだろうか。
              </a>
            </v-card-text>




            <v-card-actions class="pt-15">
                
                <v-pagination
                  :length="page_max"
                  :items-per-page="4"
                  class="mx-auto"
                  active-color="var(--my-color-gray)"
                  color="var(--my-color-black)"
                  v-model="page_now"
                  variant="tonal"

                  prev-icon="mdi-menu-left"
                  next-icon="mdi-menu-right"
              >


              <template v-slot:prev="{ page_now, active, disabled }">
                <v-btn
                  color="var(--my-color-black)"
                  active-color="var(--my-color-gray)"
                  class="px-4"
                  variant="tonal"
                  size="large"
                  :disabled="disabled"
                  :to="{ name: 'Books_Contents_Pages', params: { params: contents_now, params2: page_now-1 }, hash: '#mokuji' }"
                  @click="() => handlePageChange(page_now-1)"
                  icon="mdi-menu-left"
                >
                  
                </v-btn>
              </template>

              
              <template v-slot:next="{ page_now, active, disabled }">
                <v-btn
                  color="var(--my-color-black)"
                  active-color="var(--my-color-gray)"
                  class="px-4"
                  variant="tonal"
                  size="large"
                  :disabled="disabled"
                  :to="{ name: 'Books_Contents_Pages', params: { params: contents_now, params2: page_now+1 }, hash: '#mokuji' }"
                  @click="() => handlePageChange(page_now+1)"
                  icon="mdi-menu-right"
                  >

                </v-btn>
              </template>





              <template v-slot:item="{ page }" >
                <v-btn
                  color="var(--my-color-black)"
                  active-color="var(--my-color-gray)"

                  class="px-0 my-auto"
                  variant="tonal"
                  size="large"

                  :to="{ name: 'Books_Contents_Pages', params: { params: contents_now, params2: page }, hash: '#mokuji' }"
                  @click="() => handlePageChange(page)"
                >
                  {{ page }}
                </v-btn>
              </template>

          </v-pagination>
        </v-card-actions>

          </v-col>

        </v-card>
      </v-col>



    </v-row>
  </v-container>
</template>




<style>


.v-pagination__item {
  margin-right: 0.3rem!important;
  margin-left: 0.3rem!important;

  margin-top: auto!important;
  margin-bottom: auto!important;

}






</style>