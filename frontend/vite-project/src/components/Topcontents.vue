
<script setup lang="ts">


import Text_1 from './_Text_1.vue';

</script>









<template>
  <v-container fluid>
    <v-row justify="space-around" no-gutters>
      <Text_1 text_1="感想記事（新着）" />


      <v-col class="py-13" cols="11" v-for="index in 3" :key="index">
        <v-card
          class="mx-auto"
          cols="8"
        >
          <v-col cols="5" sm="5" class="d-flex mx-auto my-8">

            <v-img
              class="align-end text-white"
              src="http://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=4167911302&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=bookic-22&language=ja_JP"
              cover
            >
              <!-- <v-card-title class="text-h3 font-weight-medium" tag="h3">Top 10 Australian beaches</v-card-title> -->
            </v-img>
          </v-col>

          <v-col cols="12" sm="12" class="mx-auto">

            <v-card-subtitle style="line-height: normal;" class="ps-5 pt-2 my-text-size-25 text-subtitle-2">
              2023/06/11
            </v-card-subtitle>

            <v-card-title class="py-5 text-h3 font-weight-bold my-text-color-black my-letter-spacing-initial" tag="h3">
              コンビニ人間            
            </v-card-title>



            <v-card-text class="psy-3 my-text-color">
              <a class="text-h5 font-weight-medium my-text-contents">
                &emsp;社会から逸脱した思考・価値観を持つ主人公、古倉恵子(ふるくらけいこ)。その特徴から、古倉恵子は子供の頃から"普通"を周りから強いられるようになる。そして"普通"を学習し育った古倉恵子だったが、結婚、就職等の"普通"を捨て、コンビニのアルバイトを永遠に続けるようになる。彼女がコンビニで働き続ける理由とは、そして彼女が覚えた価値観とは...。多様性（ダイバーシティ）という単語が目立つ近年、あなたは古倉恵子のような究極の価値観を認めることができるだろうか。
              </a>
            </v-card-text>

            <v-card-actions>
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
            </v-card-actions>
          </v-col>

        </v-card>
      </v-col>


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
    </v-row>
  </v-container>
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