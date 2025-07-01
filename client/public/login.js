async function login(username,password) {
    const user = await getUser(username);
    if(user) throw Error('Username already in use');

const isMatch= await bcrypt.compare(password, user.password);
if(!isMatch) throw Error('Wrong password'); 
 return user._doc;
}

import{fetchData} from "./main.js";
function login(e){
    e.preventDefault()

// Add event listener to the form
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Capture input values
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Create Login object
    const loginDetails = {
        username,
        password
    };

    console.log('Login Details:', loginDetails);
});
    fetchData('users/login',user,"post")
    .then(data =>{
        if(!data.message){
            window.location.href = "index.html"
        }
    })
    .catch(err => {
        let errorSection = document.querySelector("#login-form .error")
        errorSection.innerText=err.message
    } )
// setting current user 
function setCurrentUser(user){
    localStorage.setItem('user', JSON.stringify(user));
}
// getting current user 
function getCurrentUser(user){
    localStorage.getItem('user',JSON.stringify(user))
}
// removing current user
function removeCurrentUser(user){
    localStorage.removeItem('user',JSON.stringify(user))
}
}