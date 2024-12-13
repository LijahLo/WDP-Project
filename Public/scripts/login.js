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
