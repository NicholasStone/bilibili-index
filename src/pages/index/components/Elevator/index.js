import Vue from 'vue'
import Elevator from './Elevator'

// 将锚点名称（floor）和 对应元素的offsetY 注入 elevator 中, 如果存在对应，则修改对应 archers
const directive = {
  inserted: function (el, binding, vnode) {
    const { value: floor, arg: _ref } = binding
    const elevator = vnode.context.$refs[_ref]
    const bias = elevator.$el.getBoundingClientRect().height
    elevator.sectionRefs.push({ el, floor })
    elevator.anchors.push({
      height: Math.floor(el.getBoundingClientRect().height),
      offsetY: Math.floor(el.getBoundingClientRect().y + window.pageYOffset - bias),
      floor
    })
  }
  // update: insertReference
}

// v-elevator:[ref]="floor name"

Vue.directive('elevator', directive)
Elevator.directive = directive

export default Elevator
