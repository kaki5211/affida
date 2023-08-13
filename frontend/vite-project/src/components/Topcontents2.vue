<script setup lang="ts">


import Text_1 from './_Text_1.vue';

</script>



<script lang="ts">
export default {
  data: () => ({
    cards: [
      { title: '【まとめ】〇〇賞についてまとめました！', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
      { title: '【個人ブログ】好きな小説家について', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
      { title: '【考察】今後の本の在り方について', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
    ],
  }),
}
</script>



<template>
<v-row justify="space-around" no-gutters>
  <Text_1 text_1="その他記事（新着）" />

  <v-col cols="11">

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
              <v-card-title class="text-white" v-text="card.title"></v-card-title>
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
  <v-col cols="12" class="d-flex">
        <v-btn
          color="var(--my-color-green)"
          class="mx-auto px-6 text-center"
          variant="outlined"
          prepend-icon=""
          rounded=""
          append-icon=""
          size="x-large"
          >
          もっと見る＞

        </v-btn>
      </v-col>
</v-col>
</v-row>
</template>



<style scoped>
.my-text-size-20 { font-size: 20px!important; }
.my-text-size-25 { font-size: 25px!important; }
.my-text-size-30 { font-size: 30px!important; }
.my-text-contents {
  letter-spacing: 0.03em;
  line-height: 2.5rem;
}

</style>