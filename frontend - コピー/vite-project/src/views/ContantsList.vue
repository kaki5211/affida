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
const PERFORMER_LIST = computed(() => { return store.getters.GET_PERFORMER_LIST; });
const TAG_LIST = computed(() => { return store.getters.GET_TAG_LIST; });
const MAKER_LIST = computed(() => { return store.getters.GET_MAKER_LIST; });
const LABEL_LIST = computed(() => { return store.getters.GET_LABEL_LIST; });
const SERIES_LIST = computed(() => { return store.getters.GET_SERIES_LIST; });
const KYOUNUKI_LIST = computed(() => { return store.getters.GET_KYOUNUKI_LIST; });
const VIDEOS_LOADED = computed(() => { return store.getters.GET_VIDEOS_LOADED; });
const URL_LIST = computed(() => { return store.getters.GET_URL_LIST; });
const URL_PARAM = computed(() => { return store.getters.GET_URL_PARAM; });
const URL_JUDGE_PARAM = computed(() => { return store.getters.GET_URL_JUDGE_PARAM; });
const SUBCONTENTS = computed(() => { return store.getters.GET_SUBCONTENTS; });
const SUBCONTENTS_ALL = computed(() => { return store.getters.GET_SUBCONTENTS_ALL; });





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
    tab: null,
    desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          {
            name: 'Cupcake',
            calories: 305,
          },
          {
            name: 'Gingerbread',
            calories: 356,
          },
          {
            name: 'Jelly bean',
            calories: 375,
          },
          {
            name: 'Lollipop',
            calories: 392,
          },
          {
            name: 'Honeycomb',
            calories: 408,
          },
          {
            name: 'Donut',
            calories: 452,
          },
          {
            name: 'KitKat',
            calories: 518,
          },
        ],
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

    <div>
      SUBCONTENTS_ALL: {{ SUBCONTENTS_ALL }}
      SUBCONTENTS: {{ SUBCONTENTS }}
</div>
    <v-row no-gutters class="my-bg-color-white">

        <v-col cols="12" class="mx-auto px-10">
          <v-card class="my-15">
            <v-card-text tag="h3" class="mt-6 my-underline text-center px-5 my-text-size-40 font-weight-medium">一覧</v-card-text>

            




  <v-table density="compact">
    <thead>
      <tr>
        <th class="text-left text-h3">
          Name
        </th>
        <th class="text-left text-h3">
          Calories
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in SUBCONTENTS_ALL"
        :key="item.name"
      >
      <td class="text-h4 my-4 py-2">
        <a :href="'/' + SUBCONTENTS + '/' + item.name_eng" class="custom-link">{{ item.name }}</a>
      </td>

      <td class="text-h4 my-4 py-2">
        <a :href="'/' + SUBCONTENTS + '/' + item.name_eng" class="custom-link">{{ item.name }}</a>
      </td>




      </tr>
    </tbody>
  </v-table>



  <div>
</div>


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
