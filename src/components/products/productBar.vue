<template>
  <div class="root">
    <div class="img">
      <div class="side-images">
        <!-- Side image gallery -->
        <ul>
          <li v-for="image in productImages" :key="image">
            <img 
              :src="getImageUrl(image)" 
              alt="Product image"
              @click="updateMainImage(image)"
            />
          </li>
        </ul>
      </div>
      <!-- Main product image -->
      <div class="main-image">
        <img :src="getImageUrl(mainImage)" alt="Main image" class="im1">
      </div>
    </div>
    <!-- Product information and controls -->
    <div class="main-content">
      <div class="product-info">
        <h2>{{ product.name }}</h2>
        <img :src="getImageUrl(product.rating)" alt="Product rating" class="rating"/>
        <h3>{{ product.price }} <span style="text-decoration: line-through; color: darkgrey;">{{ product.pricediscount }}</span></h3>
        <p>{{ product.description }}</p>
        <hr>
        <p style="color: darkgray;">{{ product.select }}</p>
        <img :src="getImageUrl(product.color1)" alt="Product color" class="rating" style="width: 18%;"/>
        <!-- <hr>
        <p>Choose Size</p>
        <div class="size">
          <button class="size-but">Small</button>
          <button class="size-but">Medium</button>
          <button class="size-but">Large</button>
          <button class="size-but">X-Large</button>
        </div> -->
        <hr>
        <div class="b1">
          <div v-if="!isInCart">
            <button @click="addToCart" class="cart">Add To Cart</button>
          </div>
          <div v-else>
            <div class="button-container">
              <div class="add-button">
                <button @click="decrement(product.id)">-</button>
                <span class="display" style="font-size: 22px;">{{ getProductQuantity(product.id) }}</span>
                <button @click="increment(product.id)">+</button>
              </div>
            </div>
            <p>Product added to cart!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sourceData from '../../assets/product.json';
import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  data() {
    return {
      product: null,
      mainImage: '',
      productImages: [],
      count: 0,
      isInCart: false // Track if product is in cart
    };
  },
  computed: {
    ...mapGetters(['cartProducts'])
  },
  methods: {
    ...mapMutations(['ADD_TO_CART']),
    ...mapActions(['incrementQuantity', 'decrementQuantity']),
    loadProductData() {
      const productId = parseInt(this.$route.params.id);
      this.product = sourceData.find(p => p.id === productId);
      this.mainImage = this.product.products; // Set main image initially
      // Set product images for side gallery
      this.productImages = [this.product.pr, this.product.pro, this.product.prod];
      this.checkIfInCart(productId); // Check if the product is in the cart
    },
    checkIfInCart(productId) {
      const productInCart = this.cartProducts.find(p => p.id === productId);
      if (productInCart) {
        this.isInCart = true;
        this.count = productInCart.quantity;
      } else {
        this.isInCart = false;
      }
    },
    increment(productId) {
      this.incrementQuantity(productId);
      this.count++;
    },
    decrement(productId) {
      this.decrementQuantity(productId);
      this.count--;
    },
    addToCart() {
      const productToAdd = { ...this.product, quantity: this.count + 1 };
      this.ADD_TO_CART(productToAdd);
      this.count += 1;
      this.isInCart = true; // Mark product as added to cart
    },
    updateMainImage(imageName) {
      this.mainImage = imageName;
    },
    getImageUrl(imageName) {
      return require(`@/assets/Images/${imageName}`);
    },
    getProductQuantity(productId) {
      const product = this.cartProducts.find(p => p.id === productId);
      return product ? product.quantity : 0;
    }
  },
  created() {
    this.loadProductData();
  }
};
</script>



<style scoped>
.root{
  display: flex;
}
.but{
  display: flex;
  /* justify-content: space-evenly; */
  /* width: 500px; */
}
.b1{
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.button-container{
  background-color: #F0F0F0;
  color: black;
  padding: 10px 30px;
  border-radius: 50px;
  font-size: 16px;
  border: none;
  display: flex;
  justify-content: space-between;
  max-width: 90px;
  align-items: center;
  background-color:#F0EEED;
 
}
button{
  cursor: pointer;
}
.button-container button {

font-size: 22px;
margin: 5px;
border:none;
border-radius: 5px;
background-color: transparent;
cursor: pointer;
transition: background-color 0.3s, transform 0.2s;
}
.cart-but{
  padding: 15px 50px;
  background-color: black;
  color: azure;
  font-size: 16px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
}
li{
  display: inline;
}
.rating{
  /* padding: 20px 30px; */
  width: 10%;
}
.cart{
  padding: 15px 50px;
  background-color: black;
  color: azure;
  font-size: 16px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
}
.side-images {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 100px;
  padding: 50px;
  justify-content: space-evenly;
}
.size{
  display: flex;
  padding: 10px;
  gap:20px;
}
.size-but{
  border: none;
  border-radius: 50px;
  background-color: darkgray;
  color: gray;
  font-size: 16px;
  padding: 20px 40px;
}
.size-but:hover{
  background-color: black;
  color: aliceblue    ;
}
.img {
  display: flex;
  padding: 50px;
}
.main-image {
  padding: 50px;
  gap: 20px;
  display: flex;
  justify-content: space-evenly;

}
.im1 {
  width: 500px;
}
.main-content{
 padding: 50px;
}
.add{
  display: flex;
  justify-content: space-evenly;
  
}
</style>
