import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'
import Products from '../components/Products'
import About from '../components/About'
import AboutHome from '../components/AboutHome'
import AboutYou from '../components/AboutYou'
import AboutUs from '../components/AboutUs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component: App,
      children:[
        {
          path: 'about',
          alias: 'story',  // 別名
          component: About,
          children: [
            {
              path: '',
              component: AboutHome
            },
            {
              path: 'us',
              name: 'us',  // 具名路由
              component: AboutUs
            },
            {
              path: 'you',
              component: AboutYou
            },
            {
              path: 'both',
              alias: ['/2','2','3'],
              components: {
                default: AboutUs,
                another: AboutYou,
              },
            },
          ],
        },
        {
          path: 'products/:id?',
          name: 'prod',
          component: Products,
          props: true,
          props: {id: 3},
          props: route => ({
            id: route.psrsms.id,
          }),
        },
        {
          path: '*',  // 轉址
          redirect: './about/us',  // 字串
          redirect: {
            name: 'prod' // 物件
          },
          redirect: ()=>{
            return { name: 'prod'}; // 函式
          },
        },
      ],
    },
  ],
})
