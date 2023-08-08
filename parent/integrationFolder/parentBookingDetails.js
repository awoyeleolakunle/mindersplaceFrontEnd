




// const bookingHistoryInfoObject = JSON.parse(localStorage.getItem('bookingHistory'))

// console.log(bookingHistoryInfoObject);

// console.log("I'm the booking id " , bookingHistoryInfoObject.id);
//  //document.getElementById('bookingId').innerHTML = bookingHistoryInfoObject.bookingId;
//  document.getElementById('dateId').innerHTML = bookingHistoryInfoObject.date;

//  const childrenList = bookingHistoryInfoObject.child;
//  console.log(childrenList);

//  const historyItem = document.querySelector("history-item");
//  const dateContainer = document.querySelector("border-bottom-primary")


//  childrenList.forEach(item => {

//     const childDiv = document.createElement("div")
//     childDiv.classList.add('border-bottom-primary');

//     const subElement = document.createElement("a");
//    // subElement.classList.add("href-decoration-none home-options-list");
//     subElement.href = "#";
   


//     const spanLink = document.createElement("span");
//     spanLink.classList.add("icon");
   

//     const inputTag = document.createElement("input");
//     inputTag.type = "checkbox";


//     spanLink.appendChild(inputTag);
//     spanLink.textContent =item.frstName + item.lastName 

//     subElement.appendChild(spanLink);


//     const spanLinkTwo = document.createElement("span");
//    // spanLinkTwo.classList.add("fas fa-check icon chosen hidden");

//     subElement.appendChild(spanLinkTwo);

//     childDiv.appendChild(subElement);

//     historyItem.appendChild(childDiv)
//    // historyItem.appendChild(childDiv, dateContainer.nextSibling );

    
//  });



// const bookingHistoryInfoObject = JSON.parse(localStorage.getItem('bookingHistory'));

// if (bookingHistoryInfoObject) {
//   console.log(bookingHistoryInfoObject);

//   console.log("I'm the booking id ", bookingHistoryInfoObject.id);
//   document.getElementById('bookingId').innerHTML = bookingHistoryInfoObject.bookingId;
//   document.getElementById('dateId').innerHTML = bookingHistoryInfoObject.date;

//   const childrenList = bookingHistoryInfoObject.child;
//   console.log(childrenList);

//   const historyItem = document.querySelector(".history-item");
//   const dateContainer = document.querySelector(".border-bottom-primary");

//   childrenList.forEach(item => {
//     const childDiv = document.createElement("div");
//     childDiv.classList.add('border-bottom-primary');

//     const subElement = document.createElement("a");
//     subElement.href = "#";
//     subElement.classList.add("href-decoration-none", "home-options-list");

//     const spanLink = document.createElement("span");
//     spanLink.classList.add("icon");

//     const inputTag = document.createElement("input");
//     inputTag.type = "checkbox";

//     spanLink.appendChild(inputTag);
//     spanLink.textContent = item.firstName + " " + item.lastName + ", (" + item.age + ")";
//     // Assuming the 'age' property is available in the 'childrenList' items.
//     // You can adjust the format as needed.

//     subElement.appendChild(spanLink);

//     const spanLinkTwo = document.createElement("span");
//     spanLinkTwo.classList.add("fas", "fa-check", "icon", "chosen", "hidden");

//     subElement.appendChild(spanLinkTwo);

//     childDiv.appendChild(subElement);
//     historyItem.appendChild(childDiv);
//   });
// } else {
//   console.log("Booking history not found in localStorage.");
// }


const bookingHistoryInfoObject = JSON.parse(localStorage.getItem('bookingHistory'));

if (bookingHistoryInfoObject) {
  console.log(bookingHistoryInfoObject);

  console.log("I'm the booking id ", bookingHistoryInfoObject.id);
  document.getElementById('bookingId').innerHTML = bookingHistoryInfoObject.bookingId;
  document.getElementById('dateId').innerHTML = bookingHistoryInfoObject.date;
  document.getElementById('startTimeId').value = bookingHistoryInfoObject.startTime;
  document.getElementById('finishTimeId').innerHTML = bookingHistoryInfoObject.finishTime;
  document.getElementById('totalPaidAmountId').innerHTML = "£"+bookingHistoryInfoObject.amount;

  const childrenList = bookingHistoryInfoObject.child;
  console.log(childrenList);

  const historyItem = document.querySelector(".history-item");
  const dateContainer = document.querySelector(".border-bottom-primary");

  // Create a new div for the childrenList
  const childrenListDiv = document.createElement("div");
  childrenListDiv.classList.add("border-bottom-primary");

  childrenList.forEach(item => {
    const subElement = document.createElement("a");
    subElement.href = "#";
    subElement.classList.add("href-decoration-none", "home-options-list");

    const spanLink = document.createElement("span");
    spanLink.classList.add("icon");

    const inputTag = document.createElement("input");
    inputTag.type = "checkbox";

    spanLink.appendChild(inputTag);
    spanLink.textContent = item.firstName + " " + item.lastName + ", (" + item.age + ")";

    subElement.appendChild(spanLink);

    const spanLinkTwo = document.createElement("span");
    spanLinkTwo.classList.add("fas", "fa-check", "icon", "chosen", "hidden");

    subElement.appendChild(spanLinkTwo);

    childrenListDiv.appendChild(subElement);
  });

  // Insert the childrenListDiv after the existing dateContainer div
  dateContainer.insertAdjacentElement("afterend", childrenListDiv);
} else {
  console.log("Booking history not found in localStorage.");
}


