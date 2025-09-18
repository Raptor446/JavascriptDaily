function throttle(func, delay) {
    let inThrottle = false
    return function(...args) {
        if (inThrottle) return
        inThrottle = true
        setTimeout(() => {
            func.apply(this.args)
            inThrottle = false
        }, delay)
    }
}

const handleResize = throttle(() => {
  console.log("Resized after pause ✅")
}, 500)

window.addEventListener("resize", handleResize)
