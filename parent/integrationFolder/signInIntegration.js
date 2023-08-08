

var loginForm = document.forms['loginForm'];
console.log(loginForm)

const emailAddresInput = loginForm['username'];
const passwordInput = loginForm['password'];


console.log(loginForm['username']);

const jsonData ={
    "emailAddress": "",
    "password": ""
}

const loginDetails = ()=>{
    jsonData.emailAddress = emailAddresInput.value;
    jsonData.password = passwordInput.value
    
console.log(jsonData.emailAddress)
console.log(jsonData.password);

}

const sendLoginDataToBackend = ()=>{
    fetch('http://localhost:8080/api/v1/auth/login', {
        method: 'POST',
        headers: {'content-Type' : 'application/json'},
        body: JSON.stringify(jsonData)
    })
    .then(response=>{
        if (response.ok){
            alert("logged in successfully");
            window.location.href = "indexBookingOnline.html";

        }
        else{
            alert("Invalid Credentials")
        }
    })
    .catch(error =>{
        alert("Error :", error);

    })
}

console.log(jsonData);

console.log("i got here");

 loginForm.addEventListener('input', loginDetails)
console.log("still here");

loginbtn = document.getElementById('signInId')

loginbtn.addEventListener('click', sendLoginDataToBackend)
