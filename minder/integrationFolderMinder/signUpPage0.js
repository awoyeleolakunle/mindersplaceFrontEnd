

const formPage0 = document.forms['formPage0'];
console.log(formPage0);
const unitCityInput = formPage1['unitCity'];
const jobTitleInput = formPage1['jobTitle'];
const applicationCodeInput = formPage1['applicationCode'];

function registrationData() {
    const unitCity = unitCityInput.value;
    const  jobTitle= jobTitleInput.value;
    const applicationCode = applicationCodeInput.value;
    
    localStorage.setItem("unitCity", unitCity)
    localStorage.setItem("jobTitle", jobTitle)
    localStorage.setItem("applicationCode", applicationCode)

    console.log("I am the unitCity:", unitCity);
    console.log("I am the jobTitle:", jobTitle);
    console.log("I am the applicationCode:", applicationCode);

}

formPage0.addEventListener('input', registrationData);