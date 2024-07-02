<template>
    <div class="nav-items">
       

            <div class="title ">
                <h1>shop.co</h1>
            </div>
                <!-- <img src="../assets/logo.png" class="img"> -->
            <div>  
                <ul>
                    <li >
                        <router-link to="/shop"><h3>Shop</h3></router-link>
                    </li>
                    <li >
                        <router-link to="/Onsale"> <h3>Onsale</h3></router-link>
                    </li>
                    <li >
                        <router-link to="/Arrivals"><h3>New Arrivals</h3></router-link>
                    </li>
                    <li >
                        <router-link to="/Brand"> <h3>Brands</h3></router-link>
                    </li>

                </ul>
            </div>
            <div class="search">
                <span class="fa fa-search"></span>
                <input placeholder="Search for products ">
            </div>
            
            <div style="margin-left: 10px;"> 
               <button class="cart-but"> <img src="../assets/Images/Frame.png" alt="" class="cart-img"></button>
                <img src="../assets//Images/acc.png" alt="" class="acc-img">
            </div>
            <router-view />       
    </div>  
</template>

<script>
export default {
        
}
</script>
<style scoped>
@import url("//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css");
.search .fa-search { 
  position: absolute;
  top: 10px;
  left: 10px;
}
.cart-but{
    border: none;
    border-radius: 50px;
    padding: 10px;
}
.nav{
    font-size: 16px;
    
}
.title{
    padding: 10px;
    margin-top: -3px ;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    margin-left: 20px;
    margin-right: 20px;
}
.nav-items{
   
    display: flex;
    justify-content:center;
    align-items: center;
    /* text-align: center; */
    /* align-items: center; */
    /* justify-items: center; */
     
    
}
.img{
    width: 25%;
    height: auto;
}
.cart-img{
    width: 24px;
    height: 24px;
    padding: 5px;
    margin-top: 10px;
}
.acc-img{
    width: 24px;
    height: 24px;
    padding: 5px;
    margin-top: 10px;
    margin-left: 20px;
}
ul{
    display: flex;
}
li{
    display: flex;
    /* background-color: black; */
    color: black;
    padding: 10px;
    margin: 5px;

}

.search {
  position: relative;
  color: #181717;
  font-size: 16px;
}
.search input {
  width: 550px;
  height: 32px;
  padding: 10px 50px;
  background: #fcfcfc;
  border: 1px solid #aaa;
  border-radius: 50px;
  box-shadow: 0 0 3px #ccc;
}

/* .search input { text-indent: 32px;} */
.search .fa-search { 
  position: absolute;
  top: 20px;
  left:20px;
  color: #aaa;
}
/* li:hover{
    background-color: aliceblue;
    color: black;
    cursor: pointer;
    border: 1px solid black ;
} */

</style>