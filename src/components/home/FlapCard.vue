<template>
  <div class="flap-card-wrapper" v-show="flapCardVisible">
    <div class="flap-card-bg">
      <div class="flap-card" v-for="(item, index) in flapCardList" :key="index" :style="{zIndex: item.zIndex}">
        <div class="flap-card-circle">
          <div class="flap-card-semi-circle flap-card-semi-circle-left" :style="semiCircleStyle(item, 'left')"></div>
          <div class="flap-card-semi-circle flap-card-semi-circle-right" :style="semiCircleStyle(item, 'right')"></div>
        </div>
      </div>
    </div>
    <div class="close-btn-wrapper" @click="close">
      <div class="icon-close"></div>
    </div>
  </div>
</template>
<script>
import { storeHomeMixin } from '../../utils/mixin'
import { flapCardList } from '@/utils/store'
export default {
  mixins: [storeHomeMixin],
  data () {
    return {
      flapCardList
    }
  },
  components: {},
  computed: {},
  mounted() {},
  methods: {
    close() {
      this.setFlapCardVisible(false)
    },
    semiCircleStyle(item, dir) {
      return {
        backgroundColor: `rgb(${item.r}, ${item.g}, ${item.b})`,
        backgroundSize: item.backgroundSize,
        backgroundImage: dir === 'left' ? item.imgLeft : item.imgRight
      }
    }
  }
}
</script>
<style lang='scss' scoped>
@import '../../assets/styles/global';
.flap-card-wrapper{
  z-index: 1000;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .6);
  @include center;
  @include absCenter;
  .flap-card-bg{
    position: relative;
    width: px2rem(64);
    height: px2rem(64);
    border-radius: px2rem(5);
    background: white;
    .flap-card{
      width: px2rem(48);
      height: px2rem(48);
      @include absCenter;
      .flap-card-circle{
        display: flex;
        width: 100%;
        height: 100%;
        .flap-card-semi-circle{
          flex: 0 0 50%;
          width: 50%;
          height: 100%;
          background-repeat: no-repeat;
        }
        .flap-card-semi-circle-left{
          border-radius: px2rem(24) 0 0 px2rem(24);
          background-position: center right;
        }
        .flap-card-semi-circle-right{
          border-radius: 0 px2rem(24) px2rem(24) 0;
          background-position: center left;
        }
      }
    }
  }
  .close-btn-wrapper{
    position: absolute;
    left: 0;
    bottom: px2rem(30);
    z-index: 1100;
    width: 100%;
    @include center;
    .icon-close{
      width: px2rem(45);
      height: px2rem(45);
      font-size: px2rem(25);
      border-radius: 50%;
      background: #333;
      color: white;
      @include center;
    }
  }
}
</style>
