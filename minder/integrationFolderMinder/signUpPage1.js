


const formPage1 = document.forms['formPage1'];
console.log(formPage1);
const usernameInput = formPage1['username'];
const emailAddressInput = formPage1['emailAddress'];
const passwordInput = formPage1['password'];


function registrationData() {
    const userName = usernameInput.value;
    const emailAddress = emailAddressInput.value;
    const password = passwordInput.value;
    
    localStorage.setItem("minderUserName", userName)
    localStorage.setItem("minderEmailAddress", emailAddress)
    localStorage.setItem("minderPassword", password)

    console.log("I am the username:", userName);
    console.log("I am the emailAddress:", emailAddress);
    console.log("I am the password:", password);

}

formPage1.addEventListener('input', registration2Data);