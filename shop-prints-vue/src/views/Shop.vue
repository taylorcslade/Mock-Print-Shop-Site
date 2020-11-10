<template>
  <div>
    <PrintList :prints="prints" />
  </div>
</template>

<script>
import PrintList from "../components/PrintList.vue"
export default {
  name: 'Shop',
  components: {
    PrintList
  },
  data() {
    return {
    }
  },
  computed: {
    prints() {
      return this.$root.$data.prints;
    }
  },
}
</script>
