
<script setup lang="ts">
import Btn_1 from '../components/_Btn_1_mottomiru.vue';


import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { computed } from 'vue';
import { ref, onMounted } from 'vue';
import { Icon } from '@iconify/vue';


import Text_1 from '../components/_Text_1.vue';






const router = useRoute();
const store = useStore();

const url_params = ref('');





const GET_VIDEOS_LOADED = computed(() => {
  return store.getters.GET_VIDEOS_LOADED;
});

const VIDEOS = computed(() => {
  return store.getters.GET_VIDEOS;
});

const PERFORMER_LIST = computed(() => {
  return store.getters.GET_PERFORMER_LIST;
});
const TAG_LIST = computed(() => {
  return store.getters.GET_TAG_LIST;
});

const URL_LIST = computed(() => {
  return store.getters.GET_URL_LIST;
});


// const currentURL = window.location.href;
const currentPath = window.location.pathname;
const pathList = currentPath.split("/").slice(1);
// const currentHost = window.location.host;






</script>

<script lang="ts">
import { defineComponent } from 'vue'
import GlobalStyles from '../components/_GlobalStyles.vue';


export default defineComponent({
  name: 'App',
  components: {
    GlobalStyles,
		Icon,
    Text_1,
    // VideoPlayer,
  },
  data () {
    return {
      model: [0,0,0,0,0,0,0,0,0,0],
      currentImageIndex: 0,
      startX: 0,
      startIndex: 0,
      currentX: 0,
      playerOptions: {
        autoplay: false, // 自動再生
        controls: true, // コントロール表示
        sources: [
          {
            src: 'http://www.youtube.com/embed/cvj3-MZO9T', // 動画のURL
            // type: 'video/mp4', // 動画の形式
          },
        ],
      },
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
      cards: [
      { title: '【まとめ】〇〇賞についてまとめました！', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
      { title: '【個人ブログ】好きな小説家について', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 12 },
      { title: '【考察】今後の本の在り方について', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 12 },
      { title: '【まとめ】〇〇賞についてまとめました！', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
    ],
    tab: null,

    }    
  },
  methods: {
  parseJson(value) {
    return JSON.parse(value.replace(/'/g, '"'));
  },
  playVideo() {
      const videoPlayer = this.$refs.videoPlayer;
      videoPlayer.play();
  },

  handleTouchStart(event, i, Index) {
    this.startX = event.touches[0].clientX;
    this.startIndex = this.model[i];
  },
  handleTouchMove(event, i, images) {
    const touch = event.touches[0];
    const distance = touch.clientX - this.startX;
    let changeindex = 0;
    changeindex = parseInt(distance / 100, 10);

    this.model[i] = (this.startIndex + changeindex + (images * 50)) % images
    console.log(this.model[i])
  },

  handleTouchMove2(event) {
      const touch = event.touches[0];
      const distance = touch.clientX - this.startX;

      // スワイプ距離とナビゲーションの座標を比較し、一致する座標を見つける
      const matchIndex = Math.round(distance / NAVIGATION_WIDTH); // ナビゲーションの幅に合わせて調整

      // 一致した座標に対応するインデックスを計算し、表示画像を更新する
      this.model = matchIndex;
    },  
}

});



</script>









<template>
  <v-app id="#my-scroll-target">


    <!-- <v-main v-if="isUrlListDataLoaded" class="my-bg-color-white"> -->
    <v-main v-if="GET_VIDEOS_LOADED" class="my-bg-color-white">
      <!-- <dev>{{ VIDEOS }}</dev> -->
      <dev>{{ URL_LIST }}</dev>
      <dev>{{ currentPath }}</dev>
      <dev>{{ pathList }}</dev>

      





      <v-row no-gutters>
        <Text_1 text_1="記事１" />

        <v-col cols="12" class="mx-auto px-10">

          <v-card class="my-15">
            <v-card-text tag="h3" class="mt-6 my-underline text-center px-5 my-text-size-40 font-weight-medium">2022-04-05</v-card-text>

            
              <v-row no-gutters>

                <v-col cols="6" class="mx-auto px-6 py-15 pb-5"
                  v-for="(VIDEO,i) in VIDEOS"
                  :key="i"
                  :src="VIDEO"
                >


                  <v-carousel
                  class="my-carousel"
                   :show-arrows="false"
                   :cycle="false"
                   v-model="model[i]"
                    @touchstart="handleTouchStart($event, i, model[i])"



                  >
                  <!-- @touchmove="handleTouchMove($event, i, parseJson(VIDEO.images).length)" -->

                    <v-carousel-item
                      v-for="(item,ii) in parseJson(VIDEO.images)"
                      :key="ii"
                      cover
                      aspect-ratio="0.73" :src="item" alt="Image" @click="model[i] = (model[i] + 1 ) % parseJson(VIDEO.images).length"
                      
                      
                      
                    >
                    <!-- <v-row v-if="ii==0" no-gutters>
                      <v-col cols="12" class="d-flex"
                      v-for="(item,i) in VIDEO.performers"
                          :key="i"
                      >
                        <v-btn 
                          rounded="0"
                          class="my-fit-contents my-text-size-30  ms-auto me-0"
                          :prepend-icon="i === 0 ? 'mdi-account-circle' : ''"
                          >
                          {{item.name}}
                        </v-btn>
                      </v-col>
                    </v-row> -->
                    <!-- <v-img aspect-ratio="0.73" :src="item" alt="Image" @click="model[i] = (model[i] + 1 ) % parseJson(VIDEO.images).length"></v-img> -->

                  </v-carousel-item>
                  </v-carousel>

                  <!-- <v-row no-gutters>
                    <v-col class="d-flex pb-0 w-100">
                      <v-btn class="me-0 ms-auto my-font-size-20 my-fit-contents my-text-size-40 w-100" append-icon="mdi-play-circle-outline">
                        サンプル
                      </v-btn> 
                    </v-col>
                  </v-row> -->

                    <!-- <v-row no-gutters>
                    <v-col class="d-flex mt-1 w-100">
                      <v-btn class="me-0 ms-auto my-font-size-20 my-fit-contents my-text-size-40 w-100" append-icon="mdi-open-in-new">
                        続きを見る
                      </v-btn> 
                    </v-col>
                  </v-row> -->

                  <p class="my-text-size-50 font-weight-midium pt-2">{{VIDEO.title}}</p>

                  <v-row no-gutters>
<!-- 
                    <v-col class="d-flex">
                      <v-btn 
                        v-for="(item,i) in VIDEO.tags"
                        :key="i"
                        class="my-fit-contents my-text-size-30 py-1 my-1"
                        :prepend-icon="i === 0 ? 'mdi-tag-text-outline' : ''"
                        >
                        {{item.name}}
                      </v-btn>
                    </v-col>
                     -->


                  </v-row>

                </v-col>
              </v-row>
            </v-card>












        <Btn_1 text="もっとみる" href="" />


      </v-col>
    </v-row>

    



<v-row no-gutters>
  <Text_1 text_1="ランキング" />
  <v-col cols="12" class="mx-auto px-5 pb-10 mb-10">
    <v-card class="pb-15 pt-5">
        <v-tabs
          v-model="tab"
          color="var(--my-color)"
          align-tabs="center"
          class="my-10"
        >
          <v-tab :value="1" class="text-h3 font-weight-bold">Landscape</v-tab>
          <v-tab value="98" disabled class="text-h3 font-weight-bold">/</v-tab>

          <v-tab :value="2" class="text-h3 font-weight-bold">City</v-tab>
          <v-tab value="99" disabled class="text-h3 font-weight-bold">/</v-tab>

          <v-tab :value="3" class="text-h3 font-weight-bold">Abstract</v-tab>
        </v-tabs>
        <v-window v-model="tab">
          <v-window-item
            v-for="n in 3"
            :key="n"
            :value="n"
          >
            <v-container fluid>
              <v-row>
                <v-col
                  v-for="i in 6"
                  :key="i"
                  cols="12"
                  md="4"
                >
                <div class="d-flex">
                <p class="mx-auto my-text-size-50 pa-5 pb-2">{{ i }}</p>
                </div>
                  <v-img
                    class="pa-8"
                    src="https://picsum.photos/200/300"
                    :lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`"
                    aspect-ratio="0.73"
                  ></v-img>
                  <p class="mx-auto my-text-size-50 pa-7">TITLE</p>
                </v-col>
              </v-row>
            </v-container>
          </v-window-item>
        </v-window>
      </v-card>
    </v-col>
  </v-row>
  <Btn_1 text="もっとみる" href="" />


  <!-- :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`" -->






  <v-row no-gutters class="my-fit-contents">
  <Text_1 text_1="検索" />
    <v-col cols="11" class="mx-auto px-5">


      <v-card height="" class="my-bg-color-white" elevation=0>
        <v-row no-gutters>
          <v-col cols="12" class="border">
            <v-btn large outlined tile block class="my-text-color my-text-size-40 font-weight-medium rounded-tl-lg" height="50px" href=""><v-icon>mdi-account-circle</v-icon>アカウント</v-btn>
              <v-row no-gutters class="my-auto">
                <v-col cols="12" class="border px-2 py-5 pb-10">
                  <v-btn
                    v-for="(item,i) in PERFORMER_LIST"
                    :key="i"
                    class="my-fit-contents my-text-size-30  ms-auto me-0"
                    >
                    {{item.name}}
                  </v-btn>
                </v-col>
              </v-row>
          </v-col>
        </v-row>
      </v-card>
          
      <v-card height="" class="my-bg-color-white mt-15" elevation=0>
        <v-row no-gutters>
          <v-col cols="12" class="border">
            <v-btn large outlined tile block class="my-text-color my-text-size-40 font-weight-medium rounded-tl-lg" height="50px" href=""><v-icon>mdi-tag-text-outline</v-icon>タグ</v-btn>
              <v-row no-gutters class="my-auto">
                <v-col cols="12" class="border px-2 py-5 pb-10">
                  <v-btn
                  v-for="(item,i) in TAG_LIST"
                  :key="i"
                  class="my-fit-contents my-text-size-30  ms-auto me-0"
                  >
                  {{item.name}}
                </v-btn>
                </v-col>
              </v-row>
          </v-col>
        </v-row>
      </v-card>
      

      <v-card height="" class="my-bg-color-white mt-15" elevation=0>
        <v-row no-gutters>
          <v-col cols="12" class="border">
              <v-btn large outlined tile block disabled class="my-text-color my-text-size-40 font-weight-medium rounded-tl-lg" height="200px" href=""><v-icon>mdi-magnify</v-icon>詳細検索（準備中・・・）</v-btn>
          </v-col>
        </v-row>
      </v-card>


    </v-col>
  </v-row>











  


<v-row justify="space-around" no-gutters>
  <Text_1 text_1="記事２" />

  <v-col cols="12" class="mx-auto px-5">

  <v-card
    class="mx-auto"
    
  >
    <!-- <v-system-bar
      color="indigo darken-2"
      dark
    >
      <v-spacer></v-spacer>

      <v-icon icon="mdi-window-minimize"></v-icon>

      <v-icon icon="mdi-window-maximize"></v-icon>

      <v-icon icon="mdi-close"></v-icon>
    </v-system-bar>

    <v-toolbar
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Discover</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon="mdi-magnify"></v-btn>
    </v-toolbar> -->

    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
              cover
            >
              <v-card-title class="text-white text-h3" v-text="card.title"></v-card-title>
            </v-img>

              <!-- <v-card-actions>
                <v-spacer></v-spacer>

              <v-btn
                color="var(--my-color-green)"
                class="ms-auto px-6"
                size="x-large"
                variant="outlined"
                prepend-icon=""
                append-icon="mdi-account-circle"

                >
                この記事を読む...
                <template v-slot:prepend>
                  <v-icon color="orange"></v-icon>
                </template>
              </v-btn>
            </v-card-actions> -->
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
  
  <Btn_1 text="もっとみる" href="http://172.20.10.5:5173/"/>




</v-col>

</v-row>















































  <!-- <v-container>
    <Text_1 text_1="SNS" />
    <v-row class="text-center mt-10 mx-auto"> 
        <v-col cols="5" class="mx-auto">
          <a href="">
            <v-icon class="my-3" contain size="200px" color="#1DA1F2">mdi-twitter</v-icon>
          </a>
        </v-col>
        <v-col cols="5" class="mx-auto">
          <a href="">
            <v-icon class="my-3" contain size="200px"><Icon icon="skill-icons:instagram" /></v-icon>
          </a>
        </v-col>

      </v-row>
      <v-row class="text-center">


      <v-col cols="5" class="mb-4 mx-auto">
        <a class="text-h3 font-weight-bold mb-3">
          Twitter
        </a>

      </v-col>
      <v-col cols="5" class="mb-4 mx-auto">
        <h1 class="text-h3 font-weight-bold mb-3">
          Instagram
        </h1>

      </v-col>

    </v-row>
  </v-container> -->











    </v-main>








    <div v-else>
        データを読み込んでいます...
    </div>




    <Footer />



  </v-app>
</template>



<style>


</style>
