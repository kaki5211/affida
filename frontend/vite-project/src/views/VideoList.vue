<script setup lang="ts">


import { useRoute } from 'vue-router';

import { useStore } from 'vuex';
import { computed } from 'vue';
import { ref, onMounted } from 'vue';


import Breadcrumbs from '../components/Breadcrumbs.vue';



// import { VideoPlayer } from '@videojs-player/vue'
// import 'video.js/dist/video-js.css'




const route = useRoute();
const store = useStore();



const VIDEOS = computed(() => {
  return store.getters.GET_VIDEOS;
});


let VIDEOS_LOADED = computed(() => {
  return store.getters.GET_VIDEOS_LOADED;
});




</script>


<script lang="ts">
import { defineComponent } from 'vue'
import GlobalStyles from '../components/_GlobalStyles.vue';
import { Icon } from '@iconify/vue';
import Text_1 from '../components/_Text_1.vue';



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
  <v-app id="#my-scroll-target" v-if="VIDEOS_LOADED" class="my-bg-color">
    <Breadcrumbs />


    <v-row no-gutters class="my-bg-color-white">
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
</v-col>
</v-row>














  </v-app>
  <div v-else>
      データを読み込んでいます...
    </div>
</template>




<style scoped>
</style>
