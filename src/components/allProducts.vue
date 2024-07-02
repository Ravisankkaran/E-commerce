<template>
    <div>
      <h1 style="text-align: center; padding:20px; margin-top: 20px;">All Products</h1>
      <ul>
        <li v-for="product in products" :key="product.id">
          <div class="product-items">
            <router-link :to="'/product/' + product.id">
              <img :src="require(`@/assets/Images/${product.products}`)" alt="Product image" /><br>
              <span style="font-size: 20px; font-weight: bold;">{{ product.name }}</span><br>
              <img :src="require(`@/assets/Images/${product.rating}`)" alt="Product rating" class="rating-img"/><br>
              <span style="font-size: 24px;font-weight: bold;">{{ product.price }}</span>
            </router-link>
          </div>  
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import productData from '../assets/product.json'
  export default {
    data() {
      return {
        products: productData,
      };
    },
  };
  </script>
  
  <style scoped>
  .rating-img {
    width: 50px;
  }
  
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0;
    list-style-type: none;
  }
  
  li {
    flex: 0 1 22%; /* 22% width for each item, including some margin */
    margin-bottom: 20px; /* Adds some space between the list items */
    box-sizing: border-box;
  }
  
  .product-items {
    cursor: pointer;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: left;
  }
  
  @media screen and (max-width: 768px) {
    li {
      flex: 0 1 100%; /* Full width on smaller screens */
    }
  }
  </style>
  