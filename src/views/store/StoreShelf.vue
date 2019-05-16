<template>
  <div class="store-shelf">
    <shelf-title></shelf-title>
  </div>
</template>
<script>
import ShelfTitle from 'components/shelf/ShelfTitle.vue'

export default {
  data () {
    return {
    }
  },
  components: {
    ShelfTitle
  },
  computed: {},
  mounted() {},
  methods: {}
}
</script>
<style lang='scss' scoped>
@import '../../assets/styles/global';
.store-shelf{
  width: 100%;
  height: 100%;
  background: white;
}
</style>
