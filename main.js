function fetchData() {
    fetch('/users/main')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  
  const params = {
    param1: value1, 
    param2: value2
  }; 
  const options = {
    method: 'Post', 
    body: JSON.stringify(params)
  };
  fetch('/users/main', options)
    .then(response => response.json)
    .then(data => console.log(data))
    .catch(error => console.error('Error',error));
const nav = document.querySelector('nav');
if(getCurrentUser()){
  nav.innerHTML = `
  <ul>
    <li><a href="post.html">Post</a></li>
    <li><a href="profile.html">Profile</a></li> 
    <li><a href="logout.html">Logout</a></li> 
  </ul>
`  } else {
   nav.innerHTML = `
  <ul>
    <li><a href="post.html">Post</a></li>
    <li><a href="login.html">Login</a></li> 
    <li><a href="register.html">Signup</a></li> 
  </ul>
`
}
}
