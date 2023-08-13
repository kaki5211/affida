<script setup lang="ts">

import Mokuji from '../components/Mokuji.vue';
import Contents from '../components/Contents.vue';

// import Breadcrumbs from '../components/Breadcrumbs.vue';



import { useRoute } from 'vue-router';

import { useStore } from 'vuex';
import { computed } from 'vue';
import { ref, onMounted } from 'vue';

const router = useRoute();
const store = useStore();




// const contents = computed(() => {
//   return store.getters.getContents;
// });

// store.dispatch('fetchAndAddContentsData', {
//   books_or_others: 'books', // "books"または"others"を指定
//   date: '2022-09-04' // 任意の日付を指定
// });
// store.dispatch('fetchAndAddContentsData', {'books', 'others'});


const path = router.path;

const sections = path.split('/'); // パスを '/' で区切って配列に分割
const lastSection = sections[sections.length - 2]; // 配列の最後の要素を取得



// store.dispatch('fetchAndAddContentsData', {
//   books_or_others: 'books', // "books"または"others"を指定
//   date: lastSection // 任意の日付を指定
// });

// const contents_list = computed(() => { return store.getters.getContents_list; });

console.log("lastSection", lastSection)
// const contents = contents_list.value.find( content => content.book_info[0].post_day === lastSection);





// Breadcrumbs
const Breadcrumbs_ =  [
  {
    title: 'Dashboard',
    disabled: false,
    href: 'breadcrumbs_dashboard',
  },
  {
    title: 'Link 1',
    disabled: false,
    href: 'breadcrumbs_link_1',
  },
  {
    title: 'Link 2',
    disabled: true,
    href: 'breadcrumbs_link_2',
  },
]






</script>


<script lang="ts">

</script>



<template>

    <!-- <div>
        {{ contents }}
    </div> -->
    <div>
      </div>


    <Breadcrumbs :items="Breadcrumbs_"/>

    <Mokuji />
    



    <Contents :contents="contents" />




  

</template>

<style scoped>
</style>
