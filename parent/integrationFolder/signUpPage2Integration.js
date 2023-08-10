//document.addEventListener('DOMContentLoaded', function(event) {
 // event.preventDefault()
 

  let jsonData = {
    "userName": localStorage.getItem('username'),
    "emailAddress": localStorage.getItem('parentEmailAddress'),
    "password": localStorage.getItem('password'),
    "firstName": "",
    "lastName": "",
    "postCode": "",
    "city": "",
    "address": "",
    "phoneNumber": "",
    "userCategory": localStorage.getItem('parentUserCategory')
  };  


    const formPage2 = document.forms['formPage2'];
    const firstNameInput = formPage2['first-name'];
    const lastNameInput = formPage2['last-name'];
    const postCodeInput = formPage2['zip'];
    const cityInput = formPage2['city'];
    const addressInput = formPage2['address'];
    const phoneInput = formPage2['phone'];

    const register = ()=>{
      console.log("I'm the object", jsonData);
    
    
    jsonData.firstName = firstNameInput.value;
    jsonData.lastName = lastNameInput.value;
    jsonData.postCode = postCodeInput.value;
    jsonData.city = cityInput.value;
    jsonData.address = addressInput.value;
    jsonData.phoneNumber = phoneInput.value;
  };
  

  console.log("I got here first");

  const sendToBackend = ()=>{
    console.log("I'm inside");

    fetch('http://localhost:8080/api/v1/auth/register', {
    
  method: 'POST',
      headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(jsonData)
})
  .then(response => {
    if (response.ok) {
      alert("Registration Successful");
      console.log("successful ");
      window.location.href="sign-up-page-3.html"
    } else {
      alert("Registration failed");
    }
  })
  .catch(error => {
    console.log("error");
    alert("Error: " + error);

  });
  console.log("I got here too");

  }

formPage2.addEventListener('input', register)
  
const button = document.getElementById('continueId');

button.addEventListener('click', sendToBackend)

  //document.getElementById('continueId').addEventListener('submit', sendToBackend())




//   document.forms['formPage2']['continue'].addEventListener('submit',function(event){
//     event.preventDefault();
   
  //   });

//})


