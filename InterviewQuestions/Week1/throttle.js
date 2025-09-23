function throttle(func, delay) {
    let inThrottle = false
    return function(...args) {
        if (inThrottle) return
        inThrottle = true
        setTimeout(() => {
            func.apply(this, args)
            inThrottle = false
        }, delay)
    }
}

// One more way
function throttle2(fn, delay) {
  let last = 0
  return function (...args) {
    const now = Date.now()
    if (now - last >= delay) {
      fn.apply(this, args)
      last = now
    }
  }
}

const handleResize = throttle(() => {
  console.log("Resized after pause ✅")
}, 500)

window.addEventListener("resize", handleResize)
