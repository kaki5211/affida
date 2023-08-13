// router/index.js
import App from '../views/App.vue'
import Profile from '../views/Profile.vue'
// import BookContents from '../views/BookContents.vue'
import ContantsList from '../views/ContantsList.vue'
// import ContentsDetal from '../views/ContentsDetal.vue'
import ContantsListVideo from '../views/ContantsListVideo.vue'
import ContantsListKyounuki from '../views/ContantsListKyounuki.vue'
import ContantsDetealVideo from '../views/ContantsDetealVideo.vue'







import NotFoundComponent from '../views/NotFoundComponent.vue'

import { computed } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
// import { useStore } from 'vuex';
import store from '../store';




const routes: Array<RouteRecordRaw>= []










routes.push(
  { path: '/', name: 'App', component: App },
  { path: '/video',  name: 'Videos',  meta: { subcontents: 'video'}, component: ContantsListVideo},
  { path: '/video/:param',  name: 'Video',  meta: { subcontents: 'video'}, component: ContantsDetealVideo, props: true},
  { path: '/kyounuki',  name: 'Kyounuki',  meta: { subcontents: 'kyounuki'}, component: ContantsListKyounuki},
  { path: '/performer',  name: 'Performers',  meta: { subcontents: 'performer'}, component: ContantsList, props: true},
  { path: '/performer/:param',  name: 'Performer',  meta: { subcontents: 'performer'}, component: ContantsList, props: true},
  { path: '/tag',  name: 'Tags',  meta: { subcontents: 'tag'}, component: ContantsList,  props: true},
  // { path: '/tag/:param',  name: 'Tag',  meta: { subcontents: 'tag'}, component: Tag, props: true},
  { path: '/maker',  name: 'Makers',  meta: { subcontents: 'maker'}, component: ContantsList},
  // { path: '/maker/:param',  name: 'Maker',  meta: { subcontents: 'maker'}, component: Maker, props: true},
  // { path: '/maker/label',  name: 'Labels',  meta: { subcontents: 'label'}, component: ContantsList},
  // { path: '/maker/label/:param',  name: 'Label',  meta: { subcontents: 'label'}, component: Label, props: true},
  // { path: '/maker/label/series',  name: 'Seriess',  meta: { subcontents: 'series'}, component: ContantsList},
  // { path: '/maker/label/series/:param',  name: 'Series',  meta: { subcontents: 'series'}, component: Series, props: true},


  // { path: '/search',  name: 'Search',  component: Search},



  // { path: '/about',  name: 'About',  component: () => import('../views/About.vue')},
  // { path: '/users/:id', name: 'user',//   component: () => import('../views/UserView.vue')},


  { path: '/:pathMatch(.*)*', name: 'App_none', component: NotFoundComponent },
);


// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function doSomething() {
//   console.log('処理を開始します');
//   await sleep(10000); // 3秒待機
//   console.log('処理を終了しました');
// }


import smoothscroll from 'smoothscroll-polyfill';



const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: async (to, from, savedPosition) => {
    if (savedPosition) {
        return savedPosition - 200;
    }

    const findEl = async (hash, x) => {
        return document.querySelector(hash) ||
            new Promise((resolve, reject) => {
                if (x > 50) {
                    return resolve();
                }
                setTimeout(() => {
                    resolve(findEl(hash, ++x || 1));
                }, 100);
            });
    }

    if (to.hash) {
        const el = await findEl(to.hash);

        if ('scrollBehavior' in document.documentElement.style) {
            return window.scrollTo({top: el.offsetTop - 200, behavior: 'smooth'});
        } else {
            return window.scrollTo(0, el.offsetTop - 200);
        }
    }

    return {x: 0, y: 0};
},
// ルートのトレーリングスラッシュを削除
strict: true,
// 末尾のスラッシュを削除するためのリダイレクトを有効化
trailingSlash: true
});

// router.beforeEach((to, from, next) => {
//   if (to.name === 'Books_Contents') {
//     // /books/:params にアクセスした場合、リダイレクトして /books/:params/:params2 に遷移する
//     const params = to.params.params;
//     const params2 = '1'; // params2 の値を指定
//     next({ name: 'Books_Contents_Pages', params: { params, params2 } });
//   } else {
//     next();
//   }
// });











export default router;

