function register(e){ 
    e.preventDefault()
// Add event listener to the form
document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Capture input values
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    // Create User object
    const newUser = {
        username,
        email,
        password
    };

    console.log('Registered User:', newUser);
});
fetchData('/users/register',user,"post") 
.then(data =>{
    if(!data.message){
        setCurrentUser(data)
        window.location.href = "index.html"
    }
})
.catch(err => {
    let errorSection = document.querySelector("#login-form .error")
    errorSection.innerText=err.message
} )
const form = document.getElementById("register-form");
if(form) form.addEventListener('submit', displayregister);
document.getElementById("delete").addEventListener('click', deleteAccount)
function deleteAccount(){
    if(confirm("Do you want to delete your account?")){
        fetchData("/users/delete",{userId: user.userId}, "Delete")
        .then((data) =>{
            if(!data.message){
                console.log(data.success);
                logout();
                window.location.href = "register.html"
            }
        })
        .catch((error) => {
            const errText = error.message; 
            document.querySelector("#profile div p.error").innerHTML = errText; 
            console.log(`Error! ${errText}`)
        })    
    }
}
function editProfile(){
    profile.classList.toggle("hide"); 
    let editForm = document.getElementById("editForm");
    editForm.innerHTML = `
    <form id = "form" class = "basic-form"> 
    <p class = "error"></p>
    <h2> Edit Profile,</h2>
    <label for = "username">Change Username</label> 
    <input type = "text" name = "username" id = "username" placeholder="${user.userName}"> 
    <br> 
    <input type = "submit" value = "Submit"> 
    </form>
    `
}
}
