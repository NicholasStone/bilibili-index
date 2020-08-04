import IntersectionObserverPolyfill from 'intersection-observer'

const IntersectionObserver = ('IntersectionObserver' in window &&
  'IntersectionObserverEntry' in window &&
  'intersectionRatio' in window.IntersectionObserverEntry.prototype)
  ? window.IntersectionObserver : IntersectionObserverPolyfill

const handleIntersect = (entries) => {
  entries.forEach(entry => {
    const handlers = entry.target.__IntersectionListener__
    for (const handler of handlers) {
      handler(entry)
    }
  })
}

const Instance = new IntersectionObserver(handleIntersect, { threshold: 0.1, rootMargin: '10% 0%' })

Instance.POLL_INTERVAL = 200
Instance.USE_MUTATION_OBSERVER = false

export function addIntersectionListener (el, handler) {
  if (!el.__IntersectionListener__) {
    el.__IntersectionListener__ = []
  }
  if (el.__IntersectionListener__.indexOf(handler) === -1) {
    el.__IntersectionListener__.push(handler)
  }
  Instance.observe(el)
}

export function removeIntersectionListener (el, handler) {
  if (!el.__IntersectionListener__) return
  if (el.__IntersectionListener__.indexOf(handler) !== -1) {
    el.__IntersectionListener__.splice(el.__IntersectionListener__.indexOf(handler), 1)
  }
}

export function unObserve (el) {
  Instance.unobserve(el)
  if (el.__IntersectionListener__) {
    delete el.__IntersectionListener__
  }
}
