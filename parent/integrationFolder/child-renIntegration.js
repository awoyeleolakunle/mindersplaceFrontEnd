


// async  function fetchChildListFromBackend(){
//     const email = "parentmail@gmail.com";
//     try{
//     const response = await fetch(`http://localhost:8080/api/v1/findAllChild?parentEmailAddress=${encodeURIComponent(email)}`);
//     if(!response.ok){
//         throw new Error("Failed")
//     };

//     const dataList = await response.json();
//     display(dataList);

//     }
//     catch(error){
//         console.error("error");
//     }
// }


// let display = (dataList) => {
//     const childList = document.getElementById('childListId');

//     dataList.forEach(item => {
//         const div = document.createElement('div');
//         div.classList.add('border-bottom-primary');

//         const a = document.createElement('a');
//         a.href = 'add-a-child.html';
//         a.classList.add('href-decoration-none', 'home-options-list');

//         const spanIcon = document.createElement('span');
//         spanIcon.classList.add('icon');
//         const imgIcon = document.createElement('img');
//         imgIcon.src = '../icons/avatar-dark.svg';
//         imgIcon.alt = 'Avatar Darker Icon';
//         spanIcon.appendChild(imgIcon);

//         const text = document.createTextNode(`${item.firstName}, (${item.gender})`);

//         const spanCheckIcon = document.createElement('span');
//         spanCheckIcon.classList.add('fas', 'fa-check', 'icon', 'chosen', 'hidden');

//         const spanChooseIcon = document.createElement('span');
//         spanChooseIcon.classList.add('icon', 'choose', 'float-right');
//         const imgAngleRightIcon = document.createElement('img');
//         imgAngleRightIcon.src = '../icons/angle-right.svg';
//         imgAngleRightIcon.alt = 'Angle Right Icon';
//         spanChooseIcon.appendChild(imgAngleRightIcon);

//         a.appendChild(spanIcon);
//         a.appendChild(text);
//         a.appendChild(spanCheckIcon);
//         a.appendChild(spanChooseIcon);
//         div.appendChild(a);

        
//         childList.appendChild(div);
//     });

// }


document.addEventListener('DOMContentLoaded', fetchChildListFromBackend);

function fetchChildListFromBackend() {
    console.log("i'm here");
    const email = localStorage.getItem('emailAddress')
    console.log(email);
    fetch(`http://localhost:8080/api/v1/findAllChild?parentEmailAddress=${encodeURIComponent(email)}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed");
            }
            console.log("I'm the response from backend", response.data);
            const childListObject = JSON.stringify(response.data)
            localStorage.setItem('childListObject', childListObject)
            return response.json();

        })
        .then(dataList => {
            display(dataList);
        })
        .catch(error => {
            console.error(error);
        });
}

function display(dataList) {
    const childList = document.getElementById('childListId');

    dataList.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('border-bottom-primary');

        const a = document.createElement('a');
        a.href = 'add-a-child.html';
        a.classList.add('href-decoration-none', 'home-options-list');

        const spanIcon = document.createElement('span');
        spanIcon.classList.add('icon');
        const imgIcon = document.createElement('img');
        imgIcon.src = '../icons/avatar-dark.svg';
        imgIcon.alt = 'Avatar Darker Icon';
        spanIcon.appendChild(imgIcon);

        const text = document.createTextNode(`${item.firstName}, (${item.gender})`);

        const spanCheckIcon = document.createElement('span');
        spanCheckIcon.classList.add('fas', 'fa-check', 'icon', 'chosen', 'hidden');

        const spanChooseIcon = document.createElement('span');
        spanChooseIcon.classList.add('icon', 'choose', 'float-right');
        const imgAngleRightIcon = document.createElement('img');
        imgAngleRightIcon.src = '../icons/angle-right.svg';
        imgAngleRightIcon.alt = 'Angle Right Icon';
        spanChooseIcon.appendChild(imgAngleRightIcon);

        a.appendChild(spanIcon);
        a.appendChild(text);
        a.appendChild(spanCheckIcon);
        a.appendChild(spanChooseIcon);
        div.appendChild(a);


        childList.insertBefore(div, childList.firstChild);

       // childList.appendChild(div);
    });
}