


// function registrationData(){
//     const usernameInput = document.forms['formPage1']['username'];
//     const emailAddressInput = document.form['formPage1']['email'];
//     const passwordInput  = document.form['formPage1']['password'];

//     const username = usernameInput.value;
//     const emailAddress = emailAddressInput.value;
//     const password = passwordInput.value;

//     console.log("I am the username:", username);
//     console.log("I am the emailAddres:", emailAddress);
//     console.log("I am the password:", password)
// }

// const formPage1 = document.forms['formPage1'];

// formPage1.addEventListener('input', registrationData);

// document.addEventListener('DOMContentLoaded', function() {
    const formPage1 = document.forms['formPage1'];
    console.log(formPage1);
    const usernameInput = formPage1['username'];
    const emailAddressInput = formPage1['email'];
    const passwordInput = formPage1['password'];

    function registrationData() {
        const username = usernameInput.value;
        const emailAddress = emailAddressInput.value;
        const password = passwordInput.value;
        
        localStorage.setItem("username", username)
        localStorage.setItem("emailAddress", emailAddress)
        localStorage.setItem("password", password)

        console.log("I am the username:", username);
        console.log("I am the emailAddress:", emailAddress);
        console.log("I am the password:", password);
        console.log("I'm the password lenght", password.length);

        
    }

    formPage1.addEventListener('input', registrationData);

// document.getElementById('continueId').addEventListener('click', sendToBackend())
    
    
;



