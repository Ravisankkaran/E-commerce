<template>
    <div>
      <div class="child-0">
        <div class="child">
          <div class="child-1">
            <div class="title">
              <h1> STAY UPTO DATE ABOUT<br> OUR LATEST OFFERS</h1>
            </div>
            <div class="right">
              <div class="input-mail">
                <span class="fa fa-envelope"></span>
                <input placeholder="Enter Your email address">
              </div>
              <div>
                <button class="subscribe">Subscribe to Newsletter</button>
              </div>
            </div>
          </div>
        </div>
        <div class="child-2">
          <div class="section">
            <h3 style="font-weight: bolder;">SHOP.CO</h3>
            <p style="max-width: 250px;">We have clothes that suit your style and which you’re proud to wear. From women to men.</p>
          </div>
          <div class="section">
            <h3>COMPANY</h3>
            <ul>
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </div>
          <div class="section">
            <h3>HELP</h3>
            <ul>
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms and Condition</li>
              <li>Privacy policy</li>
            </ul>
          </div>
          <div class="section">
            <h3>FAQ</h3>
            <ul>
              <li>Account</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>Payments</li>
            </ul>
          </div>
          <div class="section">
            <h3>RESOURCES</h3>
            <ul>
              <li>Free Books</li>
              <li>Development Tutorials</li>
              <li>How to-Blog</li>
              <li>You-tube Playlist</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  @import url("//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css");
  
  .input-mail {
    position: relative;
    color: #181717;
    font-size: 16px;
  }
  .input-mail input {
    padding: 16px 100px;
    background: #fcfcfc;
    border: 1px solid #aaa;
    border-radius: 50px;
    box-shadow: 0 0 3px #ccc;
  }
  ul {
    padding: 1px;
    list-style-type: none;
  }
  li {
    padding: 10px;
  }
  .input-mail .fa-envelope {
    position: absolute;
    top: 15px;
    left: 20px;
    color: #aaa;
  }
  .section{
    min-width: none;
  }
  .title {
    color: white;
    font-weight: bold;
    font-size: 20px;
    padding: 40px;
  }
  .child {
    margin-left: 100px;
    margin-right: 100px;
  }
  .child-1 {
    background-color: black;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-radius: 30px;
  }
  .right {
    padding: 60px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-right: 50px;
  }
  .subscribe {
    padding: 16px 115px;
    border-radius: 50px;
    border: 1px solid black;
  }
  .child-2 {
    display: flex;
    justify-content: space-evenly;
    padding: 20px;
    flex-wrap: wrap;
  }
  .child-0 {
    background-color: #F0F0F0;
    margin-top: 20px;
  }
 
  
  @media (max-width: 768px) {
    .child {
      margin-left: 20px;
      margin-right: 20px;
    }
    .child-1 {
      flex-direction: column;
      align-items: center;
    }
    .right {
      padding: 20px;
      margin-right: 0;
      width: 100%;
    }
    .subscribe {
      padding: 10px 50px;
    }
    .input-mail input {
      padding: 10px 50px;
    }
    .child-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      justify-items: center;
    }
    .child-2 > .section {
      flex: 1 1 45%;
      text-align: center;
    }
    .title h1 {
      font-size: 18px;
      text-align: center;
    }
    .child-2 > .section:nth-child(1) {
      grid-column: span 2;
    }
  }
  </style>
  