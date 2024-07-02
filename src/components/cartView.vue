<template>
  <div id="root">
    <div>
      <h2 style="font-weight: bolder; text-align: center; font-size: 52px;">Your Cart</h2>
    </div>
    <div class="main">
      <div class="left">
        <div class="child" v-for="product in cartProducts" :key="product.id">
          <div class="main-image">
            <img :src="require(`@/assets/Images/${product.products}`)" alt="Main image" class="im1">
          </div>
          <div class="main-content">
            <div class="product-info">
              <h2>{{ product.name }}</h2>
              <h3>${{ product.price }}</h3>
            </div>
            <div class="button-container">
              <button class="garbage-but" @click="removeProduct(product.id)">🗑️</button>
              <div class="add-button">
                <button @click="decrement(product.id)">-</button>
                <span class="display" style="font-size: 22px;">{{ product.quantity }}</span>
                <button @click="increment(product.id)">+</button>
              </div>
            </div>
          </div>
        </div>
        <div v-if="cartProducts.length === 0">
          <h4>Your cart is empty</h4>
        </div>
      </div>
      <div class="right">
        <h2>Order Summary</h2>
        <div style="display: flex; justify-content: space-between;">
          <div>
            <p>Subtotal </p>
          </div>
          <div>
            <p>${{ cartSubtotal.toFixed(2) }}</p>
          </div>
        </div>
        <div style="display: flex; justify-content: space-between;">
          <div>
            <p>Discount (-20%) </p>
          </div>
          <div>
            <p>${{ cartDiscount.toFixed(2) }}</p>
          </div>
        </div>
        <div style="display: flex; justify-content: space-between;">
          <div>
            <p>Delivery Fee </p>
          </div>
          <div>
            <p>${{ deliveryFee.toFixed(2) }}</p>
          </div>
        </div>
        <hr>
        <div style="display: flex; justify-content: space-between;">
          <div>
            <p>Total </p>
          </div>
          <div>
            <p>${{ cartTotal.toFixed(2) }}</p>
          </div>
        </div>
        <div class="cupon">
          <input class="inp" placeholder="Apply Coupon" type="text" v-model="couponCode" />
          <button class="inp1" @click="applyCoupon">Apply</button>
        </div>
        <button class="check">Go To Checkout &rarr;</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      couponCode: ''
    };
  },
  computed: {
    ...mapGetters(['cartProducts', 'cartSubtotal', 'cartDiscount', 'cartTotal', 'deliveryFee'])
  },
  methods: {
    ...mapActions(['removeFromCart', 'incrementQuantity', 'decrementQuantity', 'setDeliveryFee']),
    removeProduct(productId) {
      this.removeFromCart(productId);
    },
    increment(productId) {
      this.incrementQuantity(productId);
    },
    decrement(productId) {
      this.decrementQuantity(productId);
    },
    applyCoupon() {
      if (this.couponCode.toUpperCase() === 'FREE') {
        this.setDeliveryFee(0);
      } else {
        this.setDeliveryFee(5);
      }
    }
  }
};
</script>

<style scoped>
#root {
  margin: 20px;
}
.im1 {
  width: 124px;
}
.main {
  display: flex;
  gap: 20px;
  margin: 20px;
  justify-content: space-evenly;
}
.cupon {
  display: flex;
  gap: 20px;
}
.check {
  padding: 15px 100px;
  background-color: black;
  color: aliceblue;
  display: flex;
  justify-content: center;
  border-radius: 50px;
  margin: 20px;
}
.child {
  display: flex;
  gap: 20px;
  align-items: center;
}
.inp {
  padding: 15px 55px;
  border: none;
  border-radius: 50px;
  background-color: #F0EEED;
}
.inp1 {
  padding: 15px 30px;
  border: none;
  background-color: black;
  color: aliceblue;
  border-radius: 50px;
}
.main-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.product-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.left, .right {
  border-radius: 20px;
  margin: 10px;
  max-width: 50%;
  font-size: 16px;
  padding: 50px;
}
.display {
  margin-left: 10px;
  margin-right: 10px;
}
.button-container {
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: space-between;
}
.garbage-but {
  padding: 10px 20px;
  font-size: 22px;
  background: transparent;
  border: none;
  cursor: pointer;
}
.add-button {
  background-color: #F0EEED;
  padding: 10px 30px;
  font-size: 22px;
  border: none;
  border-radius: 50px;
  display: flex;
  justify-content: space-evenly;
}
button {
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 22px;
}
.right {
  max-width: 50%;
  font-size: 16px;
  padding: 50px;
}
@media (max-width: 500px) {
  .main {
    flex-direction: column;
    justify-content: space-evenly;
  }
  .child {
    flex-direction: row;
  }
  .left,
  .right {
    max-width: 50%;
  }
  .check {
    padding: 15px 50px;
  }
}
</style>
