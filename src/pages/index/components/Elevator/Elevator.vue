<template>
<div class="elevator" :style="style">
  <div class="elevator__mask" v-if="editing" @click="editing = false"></div>
  <div class="elevator__2233" v-if="editing"></div>
  <div class="elevator__hat"><i class="ear bilifont bili-icon_youdaohang_xiaodianshitianxian"></i></div>
  <draggable
    class="elevator__floors"
    v-model="categories"
    tag="ul"
    v-bind="dragOptions"
    @start="sorting = true"
    @end="sorting = false">
    <transition-group type="transition" :name="sorting ? null : 'flip-list'">
      <li
        v-for="item in categories"
        :key="item.name"
        :class="['item', 'hover-highlight-blue', { on: inRange(anchors.find(i => i.floor === item.name)) }]"
        @click="goToSection(item.name)">
        {{item.title}}
      </li>
    </transition-group>
  </draggable>
  <div :class="['elevator__sort', 'hover-highlight-blue',{ on: editing }]" @click="editing = !editing"><i class="bilifont bili-icon_youdaohang_paixu"></i></div>
  <div class="elevator__back-top hover-highlight-blue" @click="scrollToTop"><i class="bilifont bili-general_pullup_s"></i></div>
</div>
</template>
<script>
import Draggable from 'vuedraggable'
import { UPDATE_CATEGORIES } from 'Index/store/mutation-types'

export default {
  name: 'Elevator',
  components: {
    Draggable
  },
  data () {
    return {
      sorting: false,
      editing: false,
      pageOffset: 0,
      height: 0,
      sectionRefs: [],
      anchors: []
    }
  },
  computed: {
    categories: {
      get () {
        return this.$store.getters['sections/categories']
      },
      set (val) {
        this.$store.commit(`sections/${UPDATE_CATEGORIES}`, val)
      }
    },
    dragOptions () {
      return {
        animation: 200,
        group: 'description',
        disabled: !this.editing,
        ghostClass: 'ghost'
      }
    },
    style () {
      return {
        'margin-bottom': -this.height + 'px'
      }
    }
  },
  methods: {
    scrollToTop () {
      document.body.scrollTop = document.documentElement.scrollTop = 0
    },
    goToSection (name) {
      if (this.sorting) return
      this.sectionRefs.find(item => item.floor === name).el.scrollIntoView()
      // 不能用 scrollTop ，也不能用 scrollTo()
      // document.querySelector(generateSectionId(name)).scrollIntoView()
    },
    handleScroll () {
      this.pageOffset = Math.floor(document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset) + 100
    },
    inRange (archer) {
      if (!archer) return
      const { offsetY, height } = archer
      return this.pageOffset >= offsetY && this.pageOffset <= (offsetY + height + 40)
      // const anchor = this.anchors.find(item => item.floor === name)
      // if (anchor) {
      //   const { offsetY, height } = anchor
      //   return this.pageOffset >= offsetY && this.pageOffset <= (offsetY + height + 40)
      // } else {
      //   return false
      // }
    },
    // 更新锚点信息
    updateAnchors: function () {
      this.anchors = this.sectionRefs.map(({ el, floor }) => {
        const { height, y } = el.getBoundingClientRect()
        return {
          height: Math.floor(height + 40),
          offsetY: Math.floor(y + window.pageYOffset),
          floor
        }
      })
    }
  },
  watch: {
    editing (val) {
      if (!val) this.updateAnchors()
    }
  },
  mounted () {
    this.height = this.$el.scrollHeight
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang="less" scoped>
.on {
  background-color: @bilibili-blue;
  color: white;
}
.hover-highlight-blue:hover {
  .on();
}
.elevator {
  width: 56px;
  margin-left: 70%;
  position: sticky;
  top: 100px;
  background-color: transparent;
  font-size: @font-size-small;
  z-index: 100;
  // TODO: elevator的定位问题
  @media screen and (max-width: 1930px) {
    margin-left: 90%;
  }
  &__mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #000000;
    opacity: .5;
    z-index: -1;
  }
  &__hat {
    position: absolute;
    top: -10px;
    width: 100%;
    text-align: center;
    z-index: 2;
    .bilifont{
      font-size: @font-size-small;
    }
  }
  &__floors{
    width: 100%;
    padding: 6px 0;
    border-radius: 10px 10px 0 0;
    border: 1px solid @color-gray;
    background-color: #ffffff;
    z-index: 2;
    transition-property: background-color, color;
    transition-duration: .2s;
    .item {
      .blocking(100%, 24px);
      line-height: 24px;
      text-align: center;
    }
  }
  &__back-top,
  &__sort {
    .blocking(100%, 32px);
    background-color: @color-white;
    line-height: 32px;
    text-align: center;
    border: 1px solid @color-gray;
    border-top: none;
    color: @color-deep-gray;
    z-index: 2;
    transition: all .2s;
  }
  &__back-top {
    border-radius: 0 0 10px 10px;
    .bilifont {
      font-size: 26px;
    }
  }
  &__2233 {
    .blocking(210px, 630px);
    position: absolute;
    top: -20px;
    right: -15px;
    padding: 40px;
    background: url("~Assets/images/tab2233.png") rgba(255, 255, 255, .7) no-repeat 16px 20px;
    border-radius: 2px;
    z-index: -1;
  }
}

.flip-list-move {
  transition: transform 0.5s;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>
