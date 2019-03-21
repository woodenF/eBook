<template>
  <div class="store-home">
    <search-bar></search-bar>
  </div>
</template>
<script>
import SearchBar from '@/components/home/SearchBar'
export default {
  data () {
    return {
    }
  },
  components: {
    SearchBar
  },
  computed: {},
  mounted() {},
  methods: {}
}
</script>
<style lang='scss' scoped>
@import '../../assets/styles/global';
.store-home{
  width: 100%;
  height: 100%;
}
</style>
