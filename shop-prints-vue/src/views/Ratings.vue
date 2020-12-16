<template>
<div>
  <div class="text-container">
    <h1 class="popularity-text"><strong><em> Find prints based off of their popularity: </em></strong></h1>
  </div>
  <div class="pure-menu-horizontal">
    <div class="pure-menu-list">
      <p><a @click="select('1')" href="#">1</a></p>
      <p><a @click="select('2')" href="#">2</a></p>
      <p><a @click="select('3')" href="#">3</a></p>
      <p><a @click="select('4')" href="#">4</a></p>
      <p><a @click="select('5')" href="#">5</a></p>
    </div>
  </div>
  <PrintList :prints="prints" />
</div>
</template>

<script>
import PrintList from "../components/PrintList.vue"
export default {
  name: 'Ratings',
  components: {
    PrintList
  },
  data() {
    return {
      rating: '',
    }
  },
  computed: {
    prints() {
      return this.$root.$data.prints.filter(print => print.rating ==this.rating)
    }
  },
  methods: {
    select(rating) {
      this.rating = rating;
    }
  }
}
</script>

<style scoped>

.text-container{
  display:flex;
  justify-content:center;
}

.popularity-text {
  font-size: 16px;
  padding: 20px 0 20px 0;
  Font-Family: 'Playfair Display', Serif;
  Font-Size: 25px;
  color: #92aca6;
}

.pure-menu-list{
  display:flex;
  justify-content:center;
}

.pure-menu-list p{
  margin: 10px 20px 0 20px;
}

a{
  color: black;
  padding: 20px 25px 20px 25px;
}

a:hover {
  background:#e0e0e0;
  text-decoration: none;
}

</style>
