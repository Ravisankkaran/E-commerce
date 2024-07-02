<template>
    <div>
      <ProductList
        title="NEW ARRIVALS"
        :products="products"
        viewAllLink="/NewArr"
        :showDivider="true"
      />
      <ProductList
        title="TOP SELLING"
        :products="products"
        viewAllLink="/TopSelling"
      />
    </div>
  </template>
  
  <script>
  import productData from '../assets/product.json';
  import ProductList from './ProductList.vue';
  
  export default {
    components: {
      ProductList,
    },
    data() {
      return {
        products: productData,
      };
    },
    computed: {
      limitedProducts() {
        return this.products.slice(0, 4);
      }
    }
  };
  </script>
  
  <style scoped>
  .rating-img {
    width: 50px;
  }
  
  .product-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0;
    list-style: none;
  }
  
  .product-items {
    cursor: pointer;
    padding: 20px;
    text-align: center;
    flex: 0 0 30%;
    margin-bottom: 20px;
  }
  
  .view {
    padding: 16px 54px;
    border-radius: 50px;
    cursor: pointer;
    border: 1px solid black;
  }
  
  .view-but {
    display: flex;
    justify-content: center;
  }
  
  @media (max-width: 768px) {
    .product-list {
      flex-direction: column;
      align-items: center;
    }
  
    .product-items {
      max-width: 100%;
    }
  }
  </style>
  