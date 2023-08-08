



// const cardHolderNameInput = document.getElementById('cardHolderNameId');
// const cardNumberIdInput = document.getElementById('cardNumberId');
// const cardExpirationMonthInput = document.getElementById('cardExpirationMonthId');
// const cardExpirationYearInput = document.getElementById('cardExpirationYearId');
// const cvvInput = document.getElementById('cvvId');


// alert(cardExpirationMonthInput.value)


// var parentEmail = localStorage.getItem('emailAddress');
// alert(parentEmail);



// alert("I entered here");


// const sendCardToBackend =()=>{
//     alert(cardExpirationMonthInput.value)

//     alert("i just entered")
    
//     var cardHolderName = cardHolderNameInput.value;
//     var cardNumber = cardNumberIdInput.value;
//     var cvv  = cvvInput.value; 
//     var expiryMonth =   cardExpirationMonthInput.value
//     var expiryYear = cardExpirationYearInput.value

//     alert("i am here now")
//     let jsonData = {
//         "cardHolderName" : cardHolderName,
//         "cardNumber" : cardNumber,
//         "cvv" : cvv,
//         "expiryMonth" : expiryMonth,
//         "expiryYear" : expiryYear
      
//     }

  
//     alert("I'm here now ")
    

    
//     fetch(`http://localhost:8080/api/v1/addNewCard?parentEmailAddress=${encodeURIComponent(parentEmail)}`, {       

//     method : 'POST',
//     headers : { 'Content-Type': 'application/json'},
//     body : JSON.stringify(jsonData)
//     })
//     .then(response =>{
//         if (response.ok){
//            // alert("You have successfully added a new card")
//             alert(" i'm the alert", response.data.data);
//             window.location.href="add-new-card.html"
        
//          //credit-cards.html
//         }
//         else{
//             alert("Card ALready Exists")
//         }

//         alert("I got here 1 ")
//     })

//     .catch(error =>{
        
//         alert("Error: " , error.request);
//     })

//     alert("I got here")
//     alert(jsonData.cardHolderName);
    
// }

//  const saveBtn = document.getElementById('saveCardId')

//  saveBtn.addEventListener('click', sendCardToBackend)



const cardHolderNameInput = document.getElementById('cardHolderNameId');
const cardNumberIdInput = document.getElementById('cardNumberId');
const cardExpirationMonthInput = document.getElementById('cardExpirationMonthId');
const cardExpirationYearInput = document.getElementById('cardExpirationYearId');
const cvvInput = document.getElementById('cvvId');

var parentEmail = localStorage.getItem('emailAddress');

document.getElementById('profileNameId').innerHTML = parentEmail;
document.getElementById('homeId').href = 'indexBookingOnline.html'

const sendCardToBackend = () => {
    var cardHolderName = cardHolderNameInput.value;
    var cardNumber = cardNumberIdInput.value;
    var cvv = cvvInput.value;
    var expiryMonth = cardExpirationMonthInput.value;
    var expiryYear = cardExpirationYearInput.value;

    let jsonData = {
        "cardHolderName": cardHolderName,
        "cardNumber": cardNumber,
        "cvv": cvv,
        "expiryMonth": expiryMonth,
        "expiryYear": expiryYear
    };

    fetch(`http://localhost:8080/api/v1/addNewCard?parentEmailAddress=${encodeURIComponent(parentEmail)}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
    })
    .then(response => {
        if (response.ok) {
            console.log(response);
          
            return response.json();
          
        } else {
            throw new Error("Card Already Exists");
        }
    })
    .then(data => {
        alert("You have successfully added a new card");
        window.location.href = "credit-cards.html" 
      //  window.location.href = "add-new-card.html";
    })
    .catch(error => {
        alert("Error: " + error); 
    });
};



function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  }
  
  const debouncedSendCardToBackend = debounce(sendCardToBackend, 1000); 
 
  
const saveBtn = document.getElementById('saveCardId')
saveBtn.addEventListener('click', debouncedSendCardToBackend);
