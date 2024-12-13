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
