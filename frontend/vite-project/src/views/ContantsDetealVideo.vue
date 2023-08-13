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

const VIDEOS = computed(() => { return store.getters.GET_VIDEOS; });
const KYOUNUKI_LIST = computed(() => { return store.getters.GET_KYOUNUKI_LIST; });
let VIDEOS_LOADED = computed(() => { return store.getters.GET_VIDEOS_LOADED; });
let SUBCONTENTS_ALL = computed(() => { return store.getters.GET_SUBCONTENTS_ALL; });


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
      media: [false,false,false,false,false,false,false,false,false,false],
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
  
  mounted() {
    // ビデオ要素の高さを設定
    this.setVideoHeight();
    // ウィンドウのリサイズ時にビデオの高さを再計算
    window.addEventListener("resize", this.setVideoHeight);
  },


  beforeUnmount() {
    window.removeEventListener("resize", this.setVideoHeight);
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
  toggleMedia(index) {
    this.media.splice(index, 1, !this.media[index]); // spliceメソッドを使って要素を置換する
  },
  setVideoHeight() {
      const video = this.$refs.videoRef;
      const toolbar = this.$el.querySelector(".control-bar");
      if (video && toolbar) {
        const videoHeight = video.getBoundingClientRect().height;
        toolbar.style.height = `${videoHeight}px`;
      }
    }
}

});





</script>



<template>
  <v-app id="#my-scroll-target" v-if="VIDEOS_LOADED" class="my-bg-color">



    <v-row no-gutters class="my-bg-color-white">
      <Text_1 text_1="記事１" />

      <v-col cols="12" class="mx-auto px-10">
        <v-card class="my-15">
          <v-card-text tag="h3" class="mt-6 my-underline text-center px-5 my-text-size-40 font-weight-medium">aiueo</v-card-text>
            <v-row no-gutters>
              <v-col cols="6" class="mx-auto px-6 py-15 pb-5">




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

.video-container {
  position: relative;
  width: 100%;
}
.video-player {
  width: 100%;
}
.control-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
}
</style>
