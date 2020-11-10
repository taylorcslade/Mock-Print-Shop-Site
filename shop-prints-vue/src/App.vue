<template>
<div id="app">
  <div id="menu">
    <div id="left">
      <div id="home">
        <router-link to="/">
          <p>Home</p>
        </router-link>
      </div>
      <div id="shop">
        <router-link to="/shop">
          <p>Shop</p>
        </router-link>
      </div>
      <div id="about">
        <router-link to="/about">
          <p>About</p>
        </router-link>
      </div>
      <div id="reviews">
        <router-link to="/reviews">
          <p>Reviews</p>
        </router-link>
      </div>
    </div>
    <div id="right">
      <router-link to="/ratings">
        <div class="menu-item-ratings">
          <p>Ratings</p>
        </div>
      </router-link>
      <router-link to="/cart">
        <div class="menu-item">
          <img src="/images/shopping-cart.png">
          <p>{{ numOfItems }} items</p>
        </div>
      </router-link>
    </div>
  </div>
  <router-view />
</div>
</template>

<script>
export default {
  computed: {
    numOfItems() {
      return this.$root.$data.cart.length;
    }
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}


#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "left none right";
  padding: 35px 50px 15px 50px;
  background-color: #F5F5F5F5;
}

#menu a {
  color: #545454;
}

#left {
  grid-area: left;
  display: flex;
  justify-content: flex-start;
}

#home, #shop, #about, #reviews{
  margin-right: 35px;
}

p {
  font-size: 17px;
}

#right {
  grid-area: right;
  display: flex;
  justify-content: flex-end;
}

#right img {
  width: 30px;
  margin-right:10px;
}

.menu-item {
  display: flex;
  flex-direction: row;
}

.menu-item p {
  margin: 0px;
}

.menu-item-ratings {
  margin-right: 50px;
}
</style>
