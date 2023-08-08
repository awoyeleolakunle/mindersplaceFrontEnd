



let dataList = [];

document.addEventListener('DOMContentLoaded', function() {

fetchParentBookingListFromBackend();

})



function fetchParentBookingListFromBackend() {
    console.log("Fetching parent's booking list from the backend...");
    const email = localStorage.getItem('emailAddress');

   
    // fetch(`http://localhost:8080/api/v1/parentBookingHistory?parentEmailAddress=${encodeURIComponent(email)}`)
   

    fetch('http://localhost:8080/api/v1/parentBookingHistory', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `parentEmailAddress=${encodeURIComponent(email)}`
    })
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
    const startBookingButton = document.querySelector(".form-submit-button");
    const historyItemsContainer = document.querySelector(".all-history-items");

        dataList.forEach(item => {
            const historyItem = document.createElement("div");
            historyItem.classList.add("history-items-container", "history-items-padding");

            const statusContainer = document.createElement("div");
            statusContainer.classList.add("border-bottom-primary", "thin");

            const dateDiv = document.createElement("div");
            dateDiv.classList.add("date", "float-left");
            dateDiv.textContent = item.date;

            const amountDiv = document.createElement("div");
            amountDiv.classList.add("status-none", "float-right", "text-uppercase");
            amountDiv.textContent = "£" + item.amount;

            const clearfixDiv = document.createElement("div");
            clearfixDiv.classList.add("clearfix");

            statusContainer.appendChild(dateDiv);
            statusContainer.appendChild(amountDiv);
            statusContainer.appendChild(clearfixDiv);

            const addressesContainer = document.createElement("div");
            addressesContainer.classList.add("addresses-container", "position-relative");

            const startTimeDiv = document.createElement("div");
            startTimeDiv.classList.add("w-100", "map-input-container", "map-input-container-top");

            const startTimeIcon = document.createElement("span");
            startTimeIcon.classList.add("fas", "fa-location-arrow", "location-icon-rotate", "map-input-icon");

            const startTimeInput = document.createElement("input");
            startTimeInput.id = "startTimeId";
            startTimeInput.classList.add("controls", "flex-1", "font-weight-light");
            startTimeInput.type = "text";
            startTimeInput.placeholder = "Enter an origin location";
            startTimeInput.value = item.startTime;
            startTimeInput.disabled = true;

            startTimeDiv.appendChild(startTimeIcon);
            startTimeDiv.appendChild(startTimeInput);

            const finishTimeLink = document.createElement("a");
            finishTimeLink.href = "booking-details.html";
            finishTimeLink.classList.add("href-decoration-none");

            const finishTimeDiv = document.createElement("div");
            finishTimeDiv.classList.add("w-100", "map-input-container", "map-input-container-bottom");

            const finishTimeIcon = document.createElement("span");
            finishTimeIcon.classList.add("map-input-icon");
            finishTimeIcon.innerHTML = '<img src="../icons/circle.svg" alt="Current Location Icon">';

            const finishTimeInput = document.createElement("div");
            finishTimeInput.id = "finishTimeId";
            finishTimeInput.classList.add("map-input", "display-flex", "controls", "flex-1", "align-items-center");
            finishTimeInput.textContent = item.finishTime;

            const dottedLineSpan = document.createElement("span");
            dottedLineSpan.classList.add("dotted-line");

            finishTimeDiv.appendChild(finishTimeIcon);
            finishTimeDiv.appendChild(finishTimeInput);
            finishTimeLink.appendChild(finishTimeDiv);

            addressesContainer.appendChild(startTimeDiv);
            addressesContainer.appendChild(finishTimeLink);

            const moreDetailsLink = document.createElement("a");
           // moreDetailsLink.href = "booking-details.html"
           moreDetailsLink.href = "#";

           console.log(item.id);
        
            moreDetailsLink.addEventListener('click',()=>{ fetchABookingHistoryDetailsFromBackEnd(item.id)})
            moreDetailsLink.classList.add("btn", "btn-dark", "text-uppercase");
            moreDetailsLink.textContent = "More Details";

            const moreDetailsContainer = document.createElement("div");
            moreDetailsContainer.classList.add("margin-bottom-30");

            moreDetailsContainer.appendChild(moreDetailsLink);

            historyItem.appendChild(statusContainer);
            historyItem.appendChild(addressesContainer);
            historyItem.appendChild(moreDetailsContainer);

            historyItemsContainer.appendChild(historyItem);
        });
    
}

const fetchABookingHistoryDetailsFromBackEnd =(id)=>{
    console.log(id);
    console.log("i'm here");

    fetch('http://localhost:8080/api/v1/singleBookingHistory', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `bookingId=${encodeURIComponent(id)}`
    })
    .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch booking record history from the backend.");
            }
            return response.json();
        })
        .then(data => {
            console.log("i got here");
            console.log("Data from the backend:", data)
            localStorage.setItem('bookingHistory', JSON.stringify(data)); 
            window.location.href = "booking-details.html";
        })
        .catch(error => {
            console.error(error);
        });

    // try{
    // const response = fetch( `http://localhost:8080/api/v1/singleBookingHistory?bookingId=${encodeURIComponent(id)}`)
    //     if(response.ok){
    //         console.log("i'm here");
    //         console.log("Data from the backend:", response.JSON)
    //         localStorage.setItem('bookingHistory', JSON.stringify(response.JSON)); 
    //     }
    //     else{
    //         console.log("i didn't recieve anything");
    //     }
    // }
    // catch(error){
    //     console.log("Error", error);
    // }

}


