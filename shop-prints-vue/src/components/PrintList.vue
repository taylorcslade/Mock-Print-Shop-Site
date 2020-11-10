<template>
<div class="wrapper">
  <div class="prints">
    <div class="print" v-for="print in prints" :key="print.id">
      <div class="info">
        <h1>{{print.name}}</h1>
      </div>
      <div class="image">
        <img :src="'/images/'+print.image">
      </div>
      <div class="price">
        <h2>{{print.price}}</h2>
        <button class="auto" v-on:click="addItemToCart(print)">Add to Cart</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'PrintList',
  props: {
    prints: Array
  },
  methods: {
    addItemToCart(print) {
      this.$root.$data.cart.push(print)
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.prints {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.print {
  margin: 10px;
  margin-top: 20px;
  width: 300px;
  border: 1px solid #ccc;
}

.print img {
  height: auto;
  width: 298px;
  object-fit: cover;
}

.print .image {
  display: flex;
  justify-content: center;
}

.print:hover{
  border: 1px solid #777;
}

.info {
  color: #000;
  padding: 10px 10px;
  height: 60px;
}

.info h1 {
  Font-Family: 'Ruda', Sans-Serif;
  Font-Size: 20px;
  text-align: center;
  padding: 8px 0 0 0;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}

.price {
  display: flex;
  background: #DAE8DF;
}

button {
  height: 50px;
  color: black;
  padding: 0 20px  0 20px;
}

button:hover{
  font-weight: bold;
}


.price h2{
  Font-Family: 'Ruda', Sans-Serif;
  Font-Size: 20px;
  padding: 13px 0 0 20px;
}

.auto {
  margin-left: auto;
  background: none;
  border: none;
}

</style>
