<template>
  <div>
    <h1>Vue on Rails!! Imejin</h1>
  </div>
</template>

<script>
import 'regenerator-runtime/runtime'
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {}
  },
  async created() {
    const res = await axios.get('localhost:3000/api')
    this.code = res.code
    this.message = res.message
  },
  computed: {},
  methods: {}
}
</script>

<style scoped lang="sass">
h1 {
  color: blue;
}
</style>
