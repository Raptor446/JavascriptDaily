function throttle(fn, delay) {
  let lastCall = 0
  return function(...args) {
    const now = Date.now()
    if (now - lastCall >= delay) {
      lastCall = now
      fn.apply(this, args)
    }
  }
}

function onScroll() {
  console.log('Scroll event at', new Date().toLocaleTimeString())
  // Place any expensive logic or loading code here
}
window.addEventListener('scroll', throttle(onScroll, 5000))