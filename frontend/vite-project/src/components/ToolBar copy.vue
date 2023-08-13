

<style scoped>
div {
  font-family: 'Sawarabi Gothic', sans-serif;
}
</style>



<script setup lang="ts">
// import { computed } from 'vue';
// import { useStore } from 'vuex';
// import { ref, onMounted } from 'vue';
import { ref } from 'vue';
// import { useMeta } from 'vue-meta';


const drawer = ref(false);
// const store = useStore();
// const myData = computed(() => {
//   return store.getters.getMyData;
// });

// myData.book_list[0].id



// const title = computed(() => myData.value.book_list[0]?.title || '')
// const icon = "/src/assets/book-ic_icon.svg";
// const count = ref(0);
// const increaseCount = () => {
//   count.value++;
// };
</script>




<template>
  <div>
    <v-toolbar
      rounded
      color="#455045"
      floating
      border
      prominenttitle
    >
    <v-toolbar-title onclick="location.href='/'" class="my-color-white font-weight-black my-letter-spacing" >BOOK I.C.</v-toolbar-title>



      <v-spacer></v-spacer>



      <v-btn icon class=my-color-white>
        <v-icon>mdi-export</v-icon>
      </v-btn>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="my-color-white"></v-app-bar-nav-icon>
      

    </v-toolbar>
    
  </div>

  <v-card v-if="drawer">
    <v-layout>

      <v-navigation-drawer
      v-model="drawer"

        image="/src/assets/book-ic_icon.svg"
        permanent
        floating
      >

      </v-navigation-drawer>
      

      <v-navigation-drawer
      floating
        permanent
        location="right"

      >
        <v-list
          density="compact"
          nav
        >
          <v-list-item active-color="#1aa179" color="color" prepend-icon="mdi-view-dashboard" subtitle="aaaa" base-color="#455045" border="#455045" title="Home" value="home"></v-list-item>
          <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
        </v-list>
      </v-navigation-drawer>


      <v-main style="height: 50vh"></v-main>
    </v-layout>
  </v-card>


</template>




<style scoped>
/* #f5f8f5!important */
.my-color {
  color: #455045!important;
}
.my-color-white {
  color: #f5f8f5!important;
}

.my-color-gray {
  color: #9A9!important;
}

.my-color-green {
  color: #1aa179!important;
}

.my-width-50 {
  width: 50%!important;
}


.my-letter-spacing {
  letter-spacing: 3px;

}

</style>





