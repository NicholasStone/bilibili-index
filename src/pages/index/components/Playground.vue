<template>
  <div class="playground">
    <div class="content wrap">
       <elevator/>
<!--      <draggable v-model="categories" tag="ul" animation="200">-->
<!--        <transition-group type="transition" name="flip-list">-->
<!--          <li v-for="item in categories" :key="item.name">{{item.title}}</li>-->
<!--        </transition-group>-->
<!--      </draggable>-->
      <!-- <pre>{{categories}}</pre> -->
    </div>
  </div>
</template>
<script>
import Elevator from 'Index/components/Elevator'
import Draggable from 'vuedraggable'
import { UPDATE_CATEGORIES } from 'Index/store/mutation-types'
import { mapMutations } from 'vuex'
export default {
  name: 'Playground',
  // eslint-disable-next-line
  components: { Elevator, Draggable },
  data () {
    return {
      drag: false
    }
  },
  computed: {
    categories: {
      get () {
        return this.$store.getters['sections/categories']
      },
      set (val) {
        this.updateCategories(val)
      }
    },
    dragOptions () {
      return {
        animation: 200
        // group: 'description',
        // disabled: false,
        // ghostClass: 'ghost'
      }
    }
  },
  methods: {
    ...mapMutations({
      updateCategories: `sections/${UPDATE_CATEGORIES}`
    })
  }
}
</script>
<style lang="less" scoped>
.playground {
  position: relative;
  width: auto;
  height: 1000%;
  background: @color-deep-gray;
  // margin-top: 300px;
  .content {
    // background-color: @color-light-gray;
    height: 100%;
    position: relative;
    li {
      width:50px;
      height:30px;
      line-height: 30px;
      text-align: center;
      border: 1px solid gray;
      background-color: #fff;
    }
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
