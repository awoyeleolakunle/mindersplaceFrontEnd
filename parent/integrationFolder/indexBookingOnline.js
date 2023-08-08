


    let myDateObject = new Date();
let selectedCheckboxes = [];
let dataList = [];

const datepicker = flatpickr("#datepicker", {
    dateFormat: "Y-m-d",
    onChange: function(selectedDates, dateStr, instance) {
        const selectedDate = selectedDates[0];
        myDateObject = new Date(selectedDate);
        console.log("Selected date as Date object:", myDateObject);
    }
});

document.getElementById('parentProfileEmailId').innerHTML = localStorage.getItem('emailAddress')




document.addEventListener('DOMContentLoaded', function() {
    fetchChildListFromBackend();

    document.addEventListener('change', function(event) {
        if (event.target.classList.contains('child-checkbox')) {
            const checkbox = event.target;
            const selectedChildData = dataList.find(item => {
                const fullName = `${item.firstName}, (${item.lastName})`;
                return fullName !=null
            });
        
                dataList.forEach(item=>{
                
                    selectedCheckboxes.push(item);
                
                
                })
            // else {
              //  selectedCheckboxes = selectedCheckboxes.filter(item => item !== selectedChildData);
           // }

            console.log("Selected checkboxes:", selectedCheckboxes);
        }
    });
});

function fetchChildListFromBackend() {
    console.log("Fetching child list from the backend...");
    const email = localStorage.getItem('emailAddress');

    fetch(`http://localhost:8080/api/v1/findAllChild?parentEmailAddress=${encodeURIComponent(email)}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch child list from the backend.");
            }
            return response.json();
        })
        .then(data => {

            console.log("Data from the backend:", data)
            dataList = data
            display(dataList);
        })
        .catch(error => {
            console.error(error);
        });
}

function display(dataList) {
    const titleElements = document.getElementsByClassName('title');

    let selectChildrenDiv;
    for (let i = 0; i < titleElements.length; i++) {
        if (titleElements[i].textContent === 'Select Child-ren') {
            selectChildrenDiv = titleElements[i].closest('.form-group');
            break;
        }
    }

    if (!selectChildrenDiv) {
        console.error("Unable to find the 'Select Child-ren' section in the HTML.");
        return;
    }

    const childListContainer = selectChildrenDiv.nextElementSibling;

    childListContainer.innerHTML = "";

    const childHeading = document.createElement('h2');
    childHeading.textContent = "";
    childListContainer.appendChild(childHeading);

    dataList.forEach(item => {
        const childDiv = document.createElement('div');
        childDiv.classList.add('border-bottom-primary', 'child-div');

        const childLink = document.createElement('a');
        childLink.href = '#';
        childLink.classList.add('href-decoration-none', 'home-options-list');

        const checkboxSpan = document.createElement('span');
        checkboxSpan.classList.add('icon');
        const checkboxInput = document.createElement('input');
        checkboxInput.type = 'checkbox';
        checkboxInput.classList.add('child-checkbox'); 
        checkboxSpan.appendChild(checkboxInput);

        const textNode = document.createTextNode(`${item.firstName}, (${item.lastName}) `);
        childLink.appendChild(checkboxSpan);
        childLink.appendChild(textNode);

        const chosenIcon = document.createElement('span');
        chosenIcon.classList.add('fas', 'fa-check', 'icon', 'chosen', 'hidden');
        childLink.appendChild(chosenIcon);

        childDiv.appendChild(childLink);
        childListContainer.appendChild(childDiv);
    });
}


 const startTime = document.getElementById('startTimeId')
 const finishTime = document.getElementById('finishTimeId')

const jsonBookingData = {
  "date": "",
  "startTime": "",
  "finishTime": "",
  "child" : [],
  "amount" : 0
}

console.log(selectedCheckboxes);

const sendBookingDataToBackEnd  = ()=>{
  const parentEmailAddress = localStorage.getItem('emailAddress')

  jsonBookingData.date = myDateObject;
  jsonBookingData.child = selectedCheckboxes;
  jsonBookingData.startTime = startTime.value;
  jsonBookingData.finishTime = finishTime.value;
  jsonBookingData.amount = Number(48.30)

  console.log ("I'm the jsonBookingData", jsonBookingData);

  console.log(jsonBookingData.child);

  fetch(`http://localhost:8080/api/v1/bookOnline?emailAddress=${encodeURIComponent(parentEmailAddress)}`, {
   

  method : 'POST',
  headers : {'Content-Type': 'application/json'},
  body: JSON.stringify(jsonBookingData)
  })

  .then(response=>{
    if(response.ok){
      console.log(response.data);
      window.location.href = "indexBookingOnline.html"
    }
    else{
      console.log("booking unsuccessful");
    }
  })
}


const bookNow = document.getElementById('bookNowId');

bookNow.addEventListener('click', sendBookingDataToBackEnd);


