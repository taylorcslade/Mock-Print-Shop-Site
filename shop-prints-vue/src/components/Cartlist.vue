<template>
<div>
  <div class="wrapper">
    <div class="prints">
      <div class="print" v-for="print in prints" :key="print.id">
        <div class="info">
          <img :src="'/images/'+print.image">
          <h1>{{print.name}}</h1>
        </div>
        <div class = "none"> </div>
        <div class="side">
          <div class="price">
            <h2> {{print.price}} </h2>
            <button class="auto" v-on:click="deleteItem(print)">Delete item</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="extra-space"></div>
</div>
</template>

<script>
export default {
  name: 'CartList',
  props: {
    prints: Array
  },
  methods: {
    deleteItem(print) {
      this.$root.$data.cart.splice(print, 1);
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.prints {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.print {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-areas: "info none side";
  flex-basis: 900px;
  margin-bottom:10px;
  border: 1px solid #ccc;
  background: white;
  height: 250px;
}

img{
  width: 50%;
  height: 99%
}

.info {
  grid-area: info;
  color: #000;
  display: flex;
  justify-content: left;
  height: 250px;
}

.info h1 {
  align-self: center;
  font-size: 16px;
  padding: 0px 0 0 20px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}

.none {
  grin-area: none;
  background: white;
  height: 248px;
}

.side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
  background: white;
  height: 248px;
}

.price {
  display: flex;
  flex-direction: row;
  padding: 0 20px 0 0;
  justify-content: center;
}

.price h2 {
  font-size: 20px;
  align-self: center;
  margin: 0 20px 0 0;
}

button {
  height: 50px;
  background: #e0e0e0;
  color: black;
  border: none;
  padding: 0 15px 0 15px;
}

.auto {
  align-self:center;
  margin-left: auto;
}

#extra-space{
  height: 70px;
}

</style>
