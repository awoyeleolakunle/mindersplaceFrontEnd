

// // href="payment-method.html" --- it belongs to add a child html2. the href for save and continue. 





console.log("I'm here");

const firstNameInput = document.getElementById('firstNameId');
const lastNameInput = document.getElementById('lastNameId');
const middleNameInput = document.getElementById('middleNameId');
const genderInput = document.getElementById('genderId');
const dayOfBirthInput = document.getElementById('dayOfBirthId');
const monthOfBirthInput = document.getElementById('monthOfBirthId');
const yearOfBirthInput = document.getElementById('yearOfBirthId');
const countryOfBirthInput = document.getElementById('countryOfBirthId');
const saveBtn = document.getElementById('savebtnId');

var parentEmail = localStorage.getItem('emailAddress');
alert(parentEmail);


console.log("I got here too");

const sendChildInfoToBackEnd = () => {
    var firstName = firstNameInput.value;
    console.log(firstName);
    var lastName = lastNameInput.value;
    var middleName = middleNameInput.value;
    var gender = genderInput.value;
    var countryOfBirth = countryOfBirthInput.value;
    var dayOfBirth = dayOfBirthInput.value;
    var monthOfBirth = monthOfBirthInput.value;
    var yearOfBirth = yearOfBirthInput.value;

    let jsonData = {
        "firstName": firstName,
        "middleName": middleName,
        "lastName": lastName,
        "dateOfBirth": new Date(yearOfBirth, monthOfBirth-1, dayOfBirth),
        "gender": gender,
        "countryOfBirth": countryOfBirth
    };

    for (const property in jsonData) {
        if (Object.hasOwnProperty.call(jsonData, property)) {
          const value = jsonData[property];
          console.log(property, value);
        }
      }

    fetch(`http://localhost:8080/api/v1/addAChild?parentEmail=${encodeURIComponent(parentEmail)}`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jsonData)
    })
        .then(response => {
            if (response.ok) {
                alert("Successfully added a child");
                window.location.href = "payment-method.html";
            } else {
                console.log("error found");
                alert(response.statusText);
            }
        })
        .catch(error => {
            console.log("error:", error.message);
            alert("Error:", error.message);
        });
};

saveBtn.addEventListener('click', sendChildInfoToBackEnd);
