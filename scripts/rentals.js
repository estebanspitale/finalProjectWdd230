// // Grid and List

// const listbutton = document.querySelector("#list");
// const gridbutton = document.querySelector("#grid");
// const display = document.querySelector("article");


// listbutton.addEventListener("click", () => {
// 	display.classList.add("directory-list");
// 	display.classList.remove("directory-grid");
// });

// gridbutton.addEventListener("click", () => {
// 	display.classList.add("directory-grid");
// 	display.classList.remove("directory-list");
// });

// // Rental models and prices

// const getModelsURL = "https://estebanspitale.github.io/finalProjectWdd230/data/rentals.json";
// const rentalsContainer = document.querySelector('.directory-grid');

// async function getModels() {
//     const response = await fetch(getModelsURL);
//     const data = await response.json();
//     console.log(data.rentals);
//     displayModels(data.rentals);
// }

// const displayModels = (rentals) => {
//     rentals.forEach((rental) => {
//         let card = document.createElement('section');
//         let model = document.createElement('h2');
//         let maxpersons = document.createElement('p');
//         let reservhalfday = document.createElement('p');
//         let reservfullday = document.createElement('p');
//         let walkinhalfday = document.createElement('p');
//         let walkinfullday = document.createElement('p');
//         let image = document.createElement('img');
//         let description = document.createElement('p');
        
//         card.setAttribute('class', 'model-card');

//         model.setAttribute('class', 'd-model');
//         model.textContent = rental.model;
        
//         maxpersons.setAttribute('class', 'd-maxpersons');
//         maxpersons.textContent = rental.maxpersons;

//         reservhalfday.setAttribute('class', 'd-reservhalfday');
//         reservhalfday.textContent = rental.reservhalfday;

//         reservfullday.setAttribute('class', 'd-reservfullday');
//         reservfullday.textContent = rental.reservfullday;

//         walkinhalfday.setAttribute('class', 'd-walkinhalfday');
//         walkinhalfday.textContent = rental.walkinhalfday;

//         walkinfullday.setAttribute('class', 'd-walkinfullday');
//         walkinfullday.textContent = rental.walkinfullday;


//         image.setAttribute('class', 'd-image');
//         image.setAttribute('src', rental.image);
//         image.setAttribute('alt', `Logo of ${rental.model}`);
//         image.setAttribute('loading', 'lazy');

//         description.setAttribute('class', 'd-description');
//         description.textContent = rental.description;


//         card.appendChild(model);
//         card.appendChild(maxpersons);
//         card.appendChild(image);
//         card.appendChild(reservhalfday);
//         card.appendChild(reservfullday);
//         card.appendChild(walkinhalfday);
//         card.appendChild(walkinfullday);
//         card.appendChild(description);


        
//         rentalsContainer.appendChild(card);
//     });
// }

// getModels();


// Grid and List

const listbutton = document.querySelector("#list");
const gridbutton = document.querySelector("#grid");
const display = document.querySelector("article");


listbutton.addEventListener("click", () => {
	display.classList.add("directory-list");
	display.classList.remove("directory-grid");
});

gridbutton.addEventListener("click", () => {
	display.classList.add("directory-grid");
	display.classList.remove("directory-list");
});

// Chamber Directory

const getMembersURL = "https://estebanspitale.github.io/finalProjectWdd230/data/members.json";
const directoryContainer = document.querySelector('.directory-grid');

async function getMembers() {
    const response = await fetch(getMembersURL);
    const data = await response.json();
    console.log(data.companies);
    displayMembers(data.companies);
}

const displayMembers = (companies) => {
    companies.forEach((company) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('a');
        let webURL = document.createElement('a');
        let image = document.createElement('img');
        let membershipL = document.createElement('p');
        
        card.setAttribute('class', 'member-card');

        name.setAttribute('class', 'd-name');
        name.textContent = company.name;
        
        address.setAttribute('class', 'd-address');
        address.textContent = company.address;

        phone.setAttribute('class', 'd-phone');
        phone.textContent = company.phone;
        phone.setAttribute('href', `tel:${company.phone}`);

        webURL.setAttribute('class', 'd-url');
        webURL.textContent = company.websiteURL;
        webURL.setAttribute('href', `https://${company.websiteURL}/`);
        webURL.setAttribute('target', '_blank');

        image.setAttribute('class', 'd-image');
        image.setAttribute('src', company.image);
        image.setAttribute('alt', `Logo of ${company.name}`);
        image.setAttribute('loading', 'lazy');

        membershipL.setAttribute('class', 'd-lvl');
        membershipL.textContent = company.membershiplevel;


        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(webURL);
        card.appendChild(membershipL);


        
        directoryContainer.appendChild(card);
    });
}

getMembers();