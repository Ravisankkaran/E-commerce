<template>
    <div>
      <div>
        <h1 style="text-align: center;">OUR HAPPY CUSTOMERS</h1>
        <div class="product-list">
          <div v-for="product in data" :key="product.id" class="product-card">
            <img :src="require(`@/assets/Images/${product.rating}`)" alt="Product rating" class="rating-img" />
            <div class="product-details">
              <h3>{{ product.name }}</h3>
              <p>{{ product.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import test from '../assets/test.json';
  
  export default {
    data() {
      return {
        data: test,
      };
    },
  };
  </script>
  
  <style scoped>
  .product-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
  
  .product-card {
    background-color: white;
    padding: 20px;
    width: 25%;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
   
  }
  
  .product-card:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  
  .rating-img {
    width: 50px;
  }
  
  .product-details {
    margin-top: 10px;
  }
  
  /* Add more styles as needed */
  </style>
  