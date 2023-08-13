<script setup lang="ts">

import { computed } from 'vue';
import { useStore } from 'vuex';
import { ref } from 'vue';




const drawer = ref(false);
const props = ref(true);
const isActive = ref(true);


const store = useStore();





const myData = computed(() => {
  return store.getters.getMyData;
});
const bookmyData = computed(() => {
  return store.getters.bookMyData;
});


const dataLoaded = computed(() => {
  return store.getters.isDataLoaded;
});





// const title = computed(() => myData.value.book_list[0]?.title || '')


const count = ref(0);

// const titl = dataLoaded.value

</script>


<template>
  <div>


  <div>
    Loading...
    {{ count }}
    <!-- {{ titl }} -->

  </div>
  <div>
    <ul>
      <!-- <li v-for="item in myData.book_list" :key="item.id">
        <v-btn>
          {{ item.title }}
        </v-btn>
      </li> -->
      <!-- {{ myData }} -->

    </ul>
  </div>

  <div>
    <ul>
      {{ bookmyData }}
      dataLoaded:{{ dataLoaded }}

      <!-- <li v-for="item in myData.contents_" :key="item.id">
        <v-btn>
          {{ item.title }}
        </v-btn>
      </li> -->
    </ul>
  </div>
</div>



</template>

