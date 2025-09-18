function debounce(fn, delay) {
  let timer
  return function(...args) {
    clearTimeout(timer)
    timer = setTimeout(() => fn.apply(this, args), delay)
  }
}

// Simulate search
function performSearch(query) {
  document.getElementById('result').textContent = `Searching for: ${query}`
}

// Get debounced version
const debouncedSearch = debounce(performSearch, 500)

// Event listener
document.getElementById('search').addEventListener('input', (e) => {
  debouncedSearch(e.target.value)
})
