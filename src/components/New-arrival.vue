<template>
  <div>
    <h1 style="text-align: center; padding:20px; margin-top: 20px;">New Arrivals</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        <Product
          :productId="product.id"
          :name="product.name"
          :image="product.products"
          :rating="product.rating"
          :price="product.price"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import Product from '@/components/productView.vue'; // Adjust path as necessary

import productData from '../assets/product.json';

export default {
  data() {
    return {
      products: productData,
    };
  },
  components: {
    Product,
  },
};
</script>

<style scoped>
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

@media screen and (max-width: 768px) {
  li {
    flex: 0 1 100%; /* Full width on smaller screens */
  }
}
</style>
