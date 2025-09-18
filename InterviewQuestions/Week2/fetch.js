// This fetches a list of posts from a free fake API
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())  // parse JSON from the response
  .then(data => {
    console.log('Post data:', data)  // Use the fetched data
  })
  .catch(error => {
    console.error('Error:', error)   // Handle errors
  })
