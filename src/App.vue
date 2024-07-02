<template>
  <header>
    <nav class="navbar">
      <div class="navbar-desktop">
        <div class="title">
          <h1>shop.co</h1>
        </div>
        <div id="app">
          <ul class="nav-links">
            <li>
              <router-link to="/"><h3>Home</h3></router-link>
            </li>
            <li>
              <router-link to="/shop"><h3>Shop</h3></router-link>
            </li>
            <li>
              <router-link to="/TopSelling"><h3>Onsale</h3></router-link>
            </li>
            <li>
              <router-link to="/NewArr"><h3>New Arrivals</h3></router-link>
            </li>
            <li>
              <router-link to="/"><h3>Brands</h3></router-link>
            </li>
          </ul>
        </div>
        <div class="search-container">
          <input placeholder="Search for products" />
          <span class="fa fa-search search-icon"></span>
        </div>
        <div class="icon-buttons">
          <router-link to="/cart">
            <button class="cart-button"><img src="../src/assets/Images/Frame.png" alt="" class="cart-img" />{{ cartCount }}</button>
          </router-link>
          <!-- <img src="../src/assets/Images/acc.png" alt="" class="acc-img" /> -->
        </div>
      </div>
      <div class="navbar-mobile">
        <button @click="toggleMenu" class="toggle-button">&#9776;</button>
        <div class="title">
          <h1>shop.co</h1>
        </div>
        <span class="fa fa-search search-icon"></span>
        <div class="icon-buttons">
          <router-link to="/cart">
            <button class="cart-button"><img src="../src/assets/Images/Frame.png" alt="" class="cart-img" />{{ cartCount }}</button>
          </router-link>
          <!-- <img src="../src/assets/Images/acc.png" alt="" class="acc-img" /> -->
        </div>
      </div>
      <div v-if="isMenuOpen" class="mobile-menu">
        <ul>
          <li>
            <router-link to="/"><h3>Home</h3></router-link>
          </li>
          <li>
            <router-link to="/shop"><h3>Shop</h3></router-link>
          </li>
          <li>
            <router-link to="/TopSelling"><h3>Onsale</h3></router-link>
          </li>
          <li>
            <router-link to="/NewArr"><h3>New Arrivals</h3></router-link>
          </li>
          <li>
            <router-link to="/"><h3>Brands</h3></router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
  </header>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  computed: {
    ...mapGetters(['cartCount'])
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
@import url("//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css");

* {
  text-decoration: none;
}

.root {
  display: block;
}


.navbar {
  /* display: flex; */
  /* justify-content: space-between; */
  /* justify-content: center; */
  /* align-items: center; */
  padding: 1rem;

}

.navbar-desktop {
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar-desktop .title {
  margin-right: 2rem;
  font-size: 1.5rem;
}

.navbar-desktop .nav-links {
  display: flex;
  list-style-type: none;
  margin-right: 2rem;
}

.navbar-desktop .nav-links li {
  margin: 0 1rem;
  cursor: pointer;
}

.search-container {
  position: relative;
  padding-left:10px ;
  /* padding-right: 10px; */
}

.search-container input {
  padding: 10px 50px ;
  border-radius: 50px;
  background: #fcfcfc;
  border: 1px solid #aaa;
}

.search-container .search-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  /* color: #aaa; */
}

.icon-buttons {
  display: flex;
  align-items: center;
}

.cart-button,
.acc-img {
  margin-left: 1rem;
  background: none;
  border: none;
  /* color: white; */
  cursor: pointer;
}

.cart-img,
.acc-img {
  width: 24px;
  height: 24px;
}

.navbar-mobile {
  display: none;
  align-items: center;
}

.navbar-mobile .toggle-button {
  background: none;
  border: none;
  /* color: wh?ite; */
  font-size: 1.5rem;
  cursor: pointer;
}

.mobile-menu {
  position: absolute;
  top: 4rem;
  left: 0;
  width: 100%;

  padding: 1rem;
}

.mobile-menu ul {
  list-style-type: none;
  padding: 0;
}

.mobile-menu li {
  padding: 1rem 0;
  cursor: pointer;
}

/* Responsive behavior */
@media (max-width: 768px) {
  .navbar-desktop {
    display: none;
    
  }
  .navbar-mobile {
    display: flex;
    justify-content: space-between;
    
  }
}
</style>
