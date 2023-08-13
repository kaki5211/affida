
<script setup lang="ts">
import { Icon } from '@iconify/vue';

</script>
<script lang="ts">
export default {
	components: {
		Icon,
	},

  data: () => ({
    links1: [
      'ホーム',
      'コンテンツ',
      'ランキング',
      '検索(performer,tag)',
    ],
    links2: [
      'ブログ記事',
    ],
    
  }),
};
</script>





<template>
  <v-row no-gutters class="py-1 my-bg-color-black"></v-row>
  <v-footer class="my-bg-color px-0">
    <v-row justify="center" no-gutters class="mt-10">


      <v-col cols="6">
        <v-row justify="center" no-gutters style="height: 100%">
          <v-col cols="11" align-self="center"
          v-for="link in links1"
              :key="link"
          >
            <v-btn

              :ripple="true"
              color="white my-fit-contents"
              variant="text"
              class="mx-2 text-h3 py-4"
              rounded="xl"
            >
              {{ link }}
            </v-btn>
          </v-col>
        </v-row>
      </v-col>





      <v-col cols="6">
        <v-row justify="center" no-gutters style="height: 100%">
          <v-col cols="11" align-self="center"
          v-for="link in links2"
              :key="link"
              class=" mb-auto mt-0"
          >
            <v-btn

              :ripple="true"
              color="white my-fit-contents"
              variant="text"
              class="mx-2 text-h3 py-4"
              rounded="xl"
            >
              {{ link }}
            </v-btn>
          </v-col>

          <v-col cols="11" class="py-10 d-flex mt-auto mb-0" >
              



                <v-btn :ripple="false" size="100" icon color="var(--my-color)" class="mx-auto">
                  <v-icon size="100" color="#1DA1F2">mdi-twitter</v-icon>
                </v-btn>


                <v-btn :ripple="false" size="100" icon color="var(--my-color)" class="mx-auto">
                  <v-icon size="100"><Icon icon="skill-icons:instagram" /></v-icon>
                </v-btn>






          </v-col> 
        </v-row>
      </v-col>
      


      <v-row no-gutters class="py-3 my-bg-color-black"></v-row>

      <v-col class="text-center text-h3 mt-10 my-text-color-white" cols="12">
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-row>
  </v-footer>
  <v-row no-gutters class="py-2 my-bg-color-black"></v-row>

</template>




<style scoped>


</style>