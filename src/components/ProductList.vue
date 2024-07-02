<template>
    <div>
      <h1 style="text-align: center; padding: 20px; margin-top: 20px;">{{ title }}</h1>
      <ul class="product-list">
        <li v-for="product in limitedProducts" :key="product.id">
          <div class="product-items">
            <router-link :to="'/product/' + product.id">
              <div>
                <img :src="getImageSrc(product.image, product.products)" alt="Product image" class="product-image" />
              </div>
            </router-link>
            <div>
              <h3 style="font-size: 20px; font-weight: bold; margin: 0">{{ product.title || product.name }}</h3>
            </div>
            <div>
              <img :src="getRatingSrc(product.rating.rate, product.rating)" alt="Product rating" class="rating-img" /><br>
            </div>
            <div>
              <h3 style="font-size: 24px; font-weight: bold; margin: 0;">{{ product.price }}</h3>
            </div>
          </div>
        </li>
      </ul>
      <div class="view-but">
        <router-link :to="viewAllLink">
          <button class="view">View All</button>
        </router-link>
      </div>
      <hr style="width: 100%; margin-top: 20px" v-if="showDivider" />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
      products: {
        type: Array,
        required: true,
      },
      viewAllLink: {
        type: String,
        required: true,
      },
      showDivider: {
        type: Boolean,
        default: false,
      }
    },
    computed: {
      limitedProducts() {
        return this.products.slice(0, 4);
      }
    },
    methods: {
      getImageSrc(image, productImage) {
        return image ? image : require(`@/assets/Images/${productImage}`);
      },
      getRatingSrc(rating, productRating) {
        return rating ? this.getRatingImage(rating) : require(`@/assets/Images/${productRating}`);
      },
      getRatingImage(rating) {
        const ratingRounded = Math.round(rating);
        return require(`@/assets/Images/rating-${ratingRounded}.png`);
      }
    }
  };
  </script>
  
  <style scoped>
  .product-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0;
    list-style: none;
  }
  .product-image {
    height: 250px;
    width: 250px;
  }
  .product-items {
    cursor: pointer;
    text-align: center;
    flex: 0 0 30%;
  }
  .view {
    padding: 16px 54px;
    border-radius: 50px;
    cursor: pointer;
    border: 1px solid black;
  }
  .rating-img {
    width: 50px;
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
  