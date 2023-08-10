

var loginForm = document.forms['loginForm'];
console.log(loginForm)

const emailAddresInput = loginForm['username'];
const passwordInput = loginForm['password'];


console.log(loginForm['username']);

const jsonData ={
    "emailAddress": "",
    "password": ""
}



const userRole = (jwtToken)=>{

        const [, payloadBase64] = jwtToken.split('.');
        const payloadJSON = atob(payloadBase64);
        const payload = JSON.parse(payloadJSON);
        const userRoles = payload.roles;

        console.log(userRoles[0]);

        if(userRoles[0]=="PARENT"){
            localStorage.setItem('parentEmailAddress', jsonData.emailAddress)
            localStorage.setItem('parentToken', jwtToken);
         window.location.href = "indexBookingOnline.html";
        }
        else{
            alert("Invalid credentials")
            window.location.href = "sign-in.html"
        }
        
        // if(userRole[0]=="MINDER"){
        //     localStorage.setItem('minderEmailAddress', emailAddress)
        //     localStorage.setItem('minderToken', jwtToken);
        //    // window.location.href = "/CareTaker"
        // }

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
    .then(response => {
        if (response.ok) {
            return response.json(); 
        } else {
            throw new Error("Invalid Credentials");
        }
    })

    .then(data => {
        const jwtToken = data.data; 
        alert(jwtToken);
        userRole(jwtToken);
    })
      
    .catch(error =>{
        alert("Error :", error);
        console.log(error);

    })
}

console.log(jsonData);

console.log("i got here");

 loginForm.addEventListener('input', loginDetails)
console.log("still here");

loginbtn = document.getElementById('signInId')

loginbtn.addEventListener('click', sendLoginDataToBackend)
