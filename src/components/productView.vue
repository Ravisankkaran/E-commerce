<template>
    <div class="product-items">
      <router-link :to="'/product/' + productId">
        <img :src="require(`@/assets/Images/${image}`)" alt="Product image" /><br>
        <span style="font-size: 20px; font-weight: bold;">{{ name }}</span><br>
        <img :src="require(`@/assets/Images/${rating}`)" alt="Product rating" class="rating-img"/><br>
        <span style="font-size: 24px;font-weight: bold;">{{ price }}</span>
      </router-link>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      productId: {
        type: Number,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: true
      },
      rating: {
        type: String,
        required: true
      },
      price: {
        type: String,
        required: true
      }
    },
    components: {
      // Any additional components used within Product.vue
    }
  };
  </script>
  
  <style scoped>
  .rating-img {
    width: 50px;
  }
  
  .product-items {
    cursor: pointer;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: left;
  }
  </style>
  