// src/router/index.js
import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/HeroView.vue';
import ProductBar from './components/products/productBar.vue';
import Shop from './components/allProducts.vue';
import NewArr from './components/New-arrival.vue';
import TopSelling from './components/TopSelling.vue'

// import ShopMain from './components/shopMain.vue';
import Cart from './components/cartView.vue';

Vue.use(Router);

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/shop', name: 'Shop', component: Shop },
  { path: '/product/:id', name: 'Product', component: ProductBar },
  {
    path:'/NewArr',
    name: 'NewArr',
    component: NewArr
  },
  {
    path:'/TopSelling',
    name: 'TopSelling',
    component: TopSelling
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }
];

const router = new Router({
 
  routes
});

export default router;
