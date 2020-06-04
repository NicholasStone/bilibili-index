import ResizeObserver from 'resize-observer-polyfill'

const handleResize = (entries) => {
  entries.forEach((entry) => {
    const handlers = entry.target.__resizeHandlers__ || []
    if (handlers.length) {
      handlers.forEach((fn) => {
        fn(entry.contentRect)
      })
    }
  })
}

// 将 resize handler 实例挂到监听的节点上，把要处理的函数也挂载到节点上
// 每次 resize 时，遍历回调函数数组
export function addResizeListener (_el, handler) {
  const el = _el
  if (!el.__resizeObserver__) {
    el.__resizeObserver__ = new ResizeObserver(handleResize)
  }
  if (!el.__resizeHandlers__) {
    el.__resizeHandlers__ = []
    el.__resizeObserver__.observe(el)
  }
  el.__resizeHandlers__.push(handler)
}

export function removeResizeListener (_el, handler) {
  const el = _el
  if (!el || !el.__resizeHandlers__) return
  el.__resizeHandlers__.splice(el.__resizeHandlers__.indexOf(handler), 1)
  if (!el.__resizeHandlers__.length) {
    el.__resizeObserver__.disconnect()
  }
}
