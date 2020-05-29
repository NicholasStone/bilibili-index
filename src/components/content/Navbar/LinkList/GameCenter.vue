<template>
  <div class="game-center clear-fix">
    <div class="game-panel">
      <div class="banner">
        <a class="block" :href="games.banner.link">
          <img class="banner-image" :src="banner.image" :alt="banner.name">
        </a>
      </div>
      <div class="recommend">
        <div
        class="recommend-game"
        v-for="game in games.recommend"
        :key="game.name"
        >
          <a class="block" :href="game.link">
            <img :src="game.image" :alt="game.name">
            <span class="game-name">{{ game.name }}</span>
          </a>
        </div>
      </div>
    </div>
    <div class="game-list">
      <ul class="new-games">
        <li
        class="new-game-item"
        v-for="(game, index) in games.newGames"
        :key="game.name"
        @mouseenter="handleGameItemHover(index)"
        @mouseleave="handleGameItemHover(-1)"
        >
          <a :href="game.link">{{game.name}}</a>
        </li>
      </ul>
    </div>
    <div class="game-post">
      <img :src="postSrc">
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameCenter',
  data () {
    return {
      banner: {
        image: '/cdn/bfs/game/c8c0bf20b13db63d2dd186bd7c3f5813b775c816.jpg',
        name: '公主连结Re:Dive',
        link: 'https://game.bilibili.com/pcr/chun/'
      },
      recommendGames: [
        { name: '命运-冠位指定（Fate/GO）', image: '/cdn/bfs/game/f7d4ee0877089e4079b8f0b4f5c95dd4ceba512a.png', link: 'https://game.bilibili.com/fgo/re_gudateito/' },
        { name: '碧蓝航线', image: '/cdn/bfs/game/abfe03ca09e2051e5edc2693499f5db4d72e0e79.png', link: 'https://game.bilibili.com/blhx/chdhx/' },
        { name: '双生视界', image: '/cdn/bfs/game/6afdae46521460c5faa39042932270c14befaf63.jpg', link: 'https://game.bilibili.com/sssj/' }
      ],
      newGames: [
        { name: '天地劫', image: '/cdn/bfs/game/7c1721d09185c060fda9219ae3cc4ccc561f7141.png', link: 'https://www.biligame.com/detail/?id=105019' },
        { name: '炸裂魔女', image: '/cdn/bfs/game/db7eee63a2e41790fdb98bc8047a45be54692e1b.png', link: 'https://www.biligame.com/detail/?id=103276' },
        { name: '风起长安', image: '/cdn/bfs/game/f6e94e5f30b81bf2a9f5eb102339cc02b95a0cea.png', link: 'https://www.biligame.com/detail/?id=105140' },
        { name: '群星守卫', image: '/cdn/bfs/game/9e9bfbc05e1862efa49ea8b35651b755181b3aa7.png', link: 'https://www.biligame.com/detail/?id=104882' },
        { name: '未定事件簿', image: '/cdn/bfs/game/558ecbc508c02f6607e224d3995b701082f9a565.png', link: 'https://www.biligame.com/detail/?id=103811' },
        { name: '四叶草剧场', image: '/cdn/bfs/game/6de80e09cbc3f321196098bb9ae52b65c78f2e33.png', link: 'https://www.biligame.com/detail/?id=103396' },
        { name: '魔法记录 魔法少女小圆外传', image: '/cdn/bfs/game/9943ddcc7be10195255dfc8df6194351b423e32b.png', link: 'https://game.bilibili.com/magireco/' }
      ],
      hoverdIndex: -1
    }
  },
  methods: {
    handleGameItemHover (index) {
      this.hoverdIndex = index
    }
  },
  computed: {
    postSrc () {
      if (this.hoverdIndex >= 0) {
        return this.newGames[this.hoverdIndex].image
      }
      return null
    },
    games () {
      return this.$store.getters['navbar/game']
    }
  }
}
</script>

<style lang="less" scoped>
.game-center{
  position: relative;
  width: 466px;
  height: 256px;

  padding-top: 12px;

  .game-panel {
    width: 265px;
    height: 100%;
    float: left;

    .banner{
      width: 240px;
      height: 128px;
      margin: 0 auto;
      .banner-image {
        border-radius: 4px;
      }
    }

    .recommend {
      display: flex;
      width: 100%;
      height: 110px;
      margin-top: 6px;

      justify-content: space-around;
      align-items: center;

      .recommend-game {
        width: 88px;
        height: 100%;
        background-color: #ffffff;
        padding: 12px;

        &:hover {
          background-color: @color-gray;
        }

        img {
          width: 64px;
          height: 64px;
          border-radius: 12px;
        }
        .game-name {
          display: block;
          width: 4em;
          height: @font-size-normal;
          margin:8px auto;
          line-height: 1;
          overflow: hidden;
          color: @color-text;
          .line-breaking()
        }
      }
    }
  }

  .game-list {
    width: 201px;
    height: 100%;
    float: left;
    background: url('~Assets/images/line.png') no-repeat;

    .new-games {
      padding-left: 6px;

      &::before {
        content: '';
        display: block;
        height: 35px;
        margin-left: -7px;
        background: url('~Assets/images/new-game-title.png') no-repeat;
      }

      .new-game-item a{
        display: block;
        padding-left: 16px;
        font-size: @font-size-small;
        line-height: @font-size-normal * 2;
        color: #222;

        &:hover {
          background-color: @color-gray;
          color: @bilibili-blue;
        }
      }
    }
  }

  .game-post {
    position: absolute;
    width: 220px;
    height: 220px;
    bottom: 0;
    left: 442px;
  }
}
</style>
