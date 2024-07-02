<template>
  <div>
    <div class="hero-section">
      <div class="img">
        <div class="content">
          <h1 class="title"><span>FIND CLOTHES <br></span><span> THAT MATCHES<br> </span>YOUR STYLE</h1>
          <p class="title-p">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
          <button class="but-hero" @click="scrollToShowBar">Shop Now</button>
          <div class="stats">
            <ul>
              <li class="big">200+</li>
              <li class="small">International Brand</li>
            </ul>
            <ul>
              <li class="big">2,000+</li>
              <li class="small">High-quality Products</li>
            </ul>
            <ul>
              <li class="big">30,000+</li>
              <li class="small">Happy Customers</li>
            </ul>
          </div>
        </div>
        <div><img src="../assets/Images/hero.png" alt="" class="hero-img"></div>
      </div>
      <div class="banner">
        <ul class="banner1">
          <li><img src="../assets/Images/brand1.png" alt="" class="banner-items"></li>
          <li><img src="../assets/Images/brand2.png" alt="" class="banner-items"></li>
          <li><img src="../assets/Images/brand3.png" alt="" class="banner-items"></li>
          <li><img src="../assets/Images/brand4.png" alt="" class="banner-items"></li>
          <li><img src="../assets/Images/brand5.png" alt="" class="banner-items"></li>
        </ul>
      </div>
    </div>
    <ShowBar ref="showBar"></ShowBar>
    <BrowserBar></BrowserBar>
    <testimonialBar></testimonialBar>
    <footerBar></footerBar>
    <cart></cart>
  </div>
</template>

<script>
import ShowBar from './ShowView.vue'
import BrowserBar from './browserView.vue'
import testimonialBar from './testimonialView.vue'
import footerBar from './footerView.vue'
// import cart from '../components/cartBar.vue'

export default {
  components: {
    ShowBar,
    BrowserBar,
    testimonialBar,
    footerBar,
    // cart,
  },
  methods: {
    scrollToShowBar() {
      // Using vanilla JavaScript to scroll to ShowBar component
      const showBarElement = this.$refs.showBar.$el;
      if (showBarElement) {
        showBarElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
</script>

<style scoped>
/* Your existing styles */
</style>

  <style scoped>
  .hero-section {
    background-color: #F2F0F1;
  }
  
  .img {
    display: flex;
    /* gap: 100px; */
  }
  
  .hero-img {
    width: 600px;
    /* margin-left: 50px; */
  }
  
  ul {
    display: inline-block;
  }
  
  li {
    display: flex;
  }
  
  .big {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 40px;
  }
  
  .small {
    font-size: 22px;
  }
  
  .content {
    padding: 50px;
  }
  
  .title {
    font-size: 64px;
    /* margin-left: 20px; */
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  }
  
  .title-p {
    width: 50%;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
  }
  
  .but-hero {
    margin-left: 20px;
    border-radius: 50px;
    background-color: black;
    color: white;     
    border: 1px solid black;
    padding: 16px 50px;
    cursor: pointer;
  }
  
  .banner1 {
    background-color: black;
    padding: 20px;
    display: flex;
    justify-content: space-around;
  }
  
  @media (max-width: 768px) {
    .img {
      flex-direction: column;
      align-items: center;
    }
  
    .hero-img {
      width: 100%;
      margin-left: 0;
    }
  
    .content {
      padding: 20px;
    }
  
    .title {
      font-size: 36px;
      text-align: center;
    }
  
    .title-p {
      width: 100%;
      text-align: center;
    }
  
    .but-hero {
      padding: 10px 30px;
      font-size: 14px;
    }
  
    .banner1 {
      flex-direction: column;
      align-items: center;
    }
  
    .banner-items {
      margin: 10px 0;
    }
  }
  </style>
  