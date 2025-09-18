function throttle(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer); // reset timer on each call
    timer = setTimeout(() => {
      func.apply(this, args); // run after delay
    }, delay);
  };
}

const handleResize = throttle(() => {
  console.log("Resized after pause ✅");
}, 500);

window.addEventListener("resize", handleResize);
