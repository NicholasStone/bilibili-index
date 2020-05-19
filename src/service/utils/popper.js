import { popperGenerator } from '@popperjs/core'

const popperOffsets = {
  name: 'popperOffsets',
  data: {
    x: 0, y: 0
  }
}

const offset = {
  name: 'offset',
  options: {
    offset: [0, 20]
  }
}

export default popperGenerator({
  defaultOptions: { placement: 'bottom' },
  defaultModifiers: [popperOffsets, offset]
})
