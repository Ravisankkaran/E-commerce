// src/store.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    deliveryFee: 5 // Default delivery fee
  },
  mutations: {
    ADD_TO_CART(state, product) {
      const item = state.cart.find(item => item.id === product.id);
      const parsedPrice = Number(product.price.replace('$', ''));
      if (item) {
        item.quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1, price: parsedPrice });
      }
    },
    REMOVE_FROM_CART(state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId);
    },
    INCREMENT_QUANTITY(state, productId) {
      const item = state.cart.find(item => item.id === productId);
      if (item) {
        item.quantity++;
      }
    },
    DECREMENT_QUANTITY(state, productId) {
      const item = state.cart.find(item => item.id === productId);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
    SET_DELIVERY_FEE(state, fee) {
      state.deliveryFee = fee;
    }
  },
  actions: {
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product);
    },
    removeFromCart({ commit }, productId) {
      commit('REMOVE_FROM_CART', productId);
    },
    incrementQuantity({ commit }, productId) {
      commit('INCREMENT_QUANTITY', productId);
    },
    decrementQuantity({ commit }, productId) {
      commit('DECREMENT_QUANTITY', productId);
    },
    setDeliveryFee({ commit }, fee) {
      commit('SET_DELIVERY_FEE', fee);
    }
  },
  getters: {
    cartCount(state) {
      return state.cart.length;
    },
    cartProducts(state) {
      return state.cart;
    },
    cartSubtotal(state) {
      return state.cart.reduce((total, product) => total + product.price * product.quantity, 0);
    },
    cartDiscount(state, getters) {
      return getters.cartSubtotal * 0.2; // 20% discount
    },
    cartTotal(state, getters) {
      return getters.cartSubtotal - getters.cartDiscount + state.deliveryFee;
    },
    deliveryFee(state) {
      return state.deliveryFee;
    }
  }
});
