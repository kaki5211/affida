
<script setup lang="ts">


import Text_1 from './_Text_1.vue';

</script>



<template>
  <Text_1 text_1="SNS" />

  <v-container>
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
        <a class="display-2 text-h3 font-weight-bold mb-3">
          Twitter
        </a>

      </v-col>
      <v-col cols="5" class="mb-4 mx-auto">
        <h1 class="display-2 text-h3 font-weight-bold mb-3">
          Instagram
        </h1>

      </v-col>

    </v-row>
  </v-container>





</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Icon } from '@iconify/vue';


// Logo


export default defineComponent({
  name: 'Media',
  components: {
		Icon,
	},

  },
)
</script>
