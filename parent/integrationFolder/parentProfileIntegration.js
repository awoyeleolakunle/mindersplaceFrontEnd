
const loadedProfileDetails = {
    "phoneNumber": "",
    "firstName": "",
    "lastName":"",  
    "country":"",
    "city":"",
    "address":"",
    "postCode":"",
    "emailAddress":""
}



const parentEmailAddress = localStorage.getItem('emailAddress')

document.getElementById('parentProfileEmailId').innerHTML = parentEmailAddress;
console.log(parentEmailAddress);
document.addEventListener('DOMContentLoaded', function(){
    loadParentProfileDetailsFromBackend();
})


const loadParentProfileDetailsFromBackend =()=>{

    fetch(`http://localhost:8080/api/v1/parentProfileDetails?emailAddress=${encodeURIComponent(parentEmailAddress)}`, {
        method : "POST",
        headers : {
            'Content-type': 'application/x-www-form-urlencoded'
        },
    })

    .then(response =>{
       if(!response.ok){
        throw new Error ("No user profile found")
    }
    return response.json()
 } )
    .then(data=>{
        console.log(data);
        console.log(data.data);
        const profileObject = data.data;
        mapProfileObject(profileObject)


    })

    }

    const mapProfileObject =(data)=>{
    
        loadedProfileDetails.firstName = data.firstName,
        loadedProfileDetails.lastName = data.lastName,
        loadedProfileDetails.address = data.address,
        loadedProfileDetails.city = data.city,
        loadedProfileDetails.phoneNumber = data.phoneNumber,
        loadedProfileDetails.postCode= data.postCode,
        loadedProfileDetails.country = data.country
        document.getElementById('profileNameId').innerHTML = loadedProfileDetails.firstName + " " + loadedProfileDetails.lastName



        document.getElementById('phoneNumberId').value = loadedProfileDetails.phoneNumber
        document.getElementById('firstNameId').value = loadedProfileDetails.firstName
        document.getElementById('lastNameId').value = loadedProfileDetails.lastName
        document.getElementById('addressId').value = loadedProfileDetails.address
        document.getElementById('cityId').value = loadedProfileDetails.city
        document.getElementById('countryId').value = loadedProfileDetails.country
        document.getElementById('zipCodeId').value = loadedProfileDetails.postCode
        document.getElementById('emailId').value =parentEmailAddress
    }








    let updatedPhoneNumber;
    let updatedFirstName;
    let updatedLastName;
    let updatedAddress;
    let updatedCity;
    let updatedCountry;
    let updatedZipCode;







    const editProfile = ()=>{

    updatedPhoneNumber = document.getElementById('phoneNumberId').value
     updatedFirstName = document.getElementById('firstNameId').value
     updatedLastName = document.getElementById('lastNameId').value
     updatedAddress = document.getElementById('addressId').value
     updatedCity = document.getElementById('cityId').value
     updatedCountry = document.getElementById('countryId').value
     updatedZipCode = document.getElementById('zipCodeId').value
    }


    document.getElementById('phoneNumberId').addEventListener('input', editProfile)
    document.getElementById('firstNameId').addEventListener('input', editProfile)
    document.getElementById('lastNameId').addEventListener('input', editProfile)
    document.getElementById('addressId').addEventListener('input', editProfile )
    document.getElementById('cityId').addEventListener('input', editProfile)
    document.getElementById('countryId').addEventListener('input', editProfile)
    document.getElementById('zipCodeId').addEventListener('input', editProfile)



    let jsonData = {
        "phoneNumber": "",
        "firstName": "",
        "lastName":"",  
        "country":"",
        "city":"",
        "address":"",
        "postCode":""
    }

    const updateParentProfileDetails = ()=>{

        jsonData.phoneNumber = updatedPhoneNumber
        jsonData.firstName = updatedFirstName
        jsonData.lastName = updatedLastName
        jsonData.address = updatedAddress
        jsonData.city = updatedCity
        jsonData.country = updatedCountry
        jsonData.postCode = updatedZipCode

        console.log(jsonData.postCode);


        fetch(`http://localhost:8080/api/v1/parentProfileUpdate?emailAddress=${encodeURIComponent(parentEmailAddress)}`, {
            method : "POST",
            headers : {
                'Content-type': 'application/json'
            },
            body:JSON.stringify(jsonData) 
        })
    
        .then(response=>{
            if(!response.ok){
                throw new Error ("Failed to get profile")
            } 
    
            return response.json();
        })
        .then(data=>{
            console.log("profile object", data);
            // mapProfileObject(data)
        })
    
    }

    saveProfileBtn = document.getElementById('saveId')

    saveProfileBtn.addEventListener('click', updateParentProfileDetails)



  