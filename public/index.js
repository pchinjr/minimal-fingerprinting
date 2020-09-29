console.log('Howdy Beginner from client-side JS!')
fetch('/api')
  .then(response => response.json())
  .then(data => console.log(data));