<template>
  <div
    class="banner"
    :style="backgroundImage"
  >
    <div class="cover"></div>
    <div class="wrap bilibili-banner-blackboard">
      <a href="#" class="bilibili-logo">
        <img src="~Assets/images/logo.png">
      </a>
      <a href="#" class="blackboard-title">
        {{ blackboardTitle }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Title',
  data () {
    return {
      background: 'https://i0.hdslb.com/bfs/archive/ed92db305ae43c7fc8a59b1789934caa2636b876.png',
      logoUrl: 'https://dev.nichospace.com/apis/bfs/archive/4de86ebf90b044bf9ba2becf042a8977062b3f99.png',
      blackboardTitle: '辣妹儿~，法克儿~'
    }
  },
  computed: {
    backgroundImage () {
      return {
        backgroundImage: `url(${this.background})`
      }
    }
  }
}
</script>

<style lang="less" scoped>
.banner {
  width:100%;
  position: relative;
  min-height: 155px;
  min-width: 999px;
  height: 9.375vh;
  background: center/cover #f9f9f9  no-repeat;

  .cover{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: linear-gradient(0deg, rgba(0,0,0,0), #000000);
    opacity: .4;
    height: 100px;
  }

  .bilibili-banner-blackboard {
    position: relative;
    background-color: transparent;
    height: 100%;
    z-index: 2;

    .bilibili-logo{
      position: absolute;
      bottom: 10px;
      width: 220px;
      height: 50%;
      min-height: 60px;
      img {
        height: 100%;
      }
    }

    .blackboard-title{
      position: absolute;
      left: 280px;
      bottom: 25px;

      padding: 6px 10px;
      background-color: rgba(0,0,0,0.68);
      border-radius: 4px;
      max-width: 350px;
      opacity: 0;
      transition: opacity .2s;

      color: @color-white;
      line-height: 20px;

    }

    &:hover>.blackboard-title{
      opacity:1;
    }
  }
}
</style>
