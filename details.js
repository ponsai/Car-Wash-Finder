const DetailData = [
    {
        name: "Carwash Location 1",
        address: "123 Main St, City",
        overview: "Summary of Location 1",
        review: "Review of Location 1",
        image: "css/1.jpg",
    },
    {
        name: "Carwash Location 2",
        address: "456 Elm St, City",
        overview: "Summary of Location 2",
        review: "Review of Location 2",
        image: "css/2.jpg",
    },
    {
        name: "Carwash Location 3",
        address: "789 Oak St, City",
        overview: "Summary of Location 3",
        review: "Review of Location 3",
        image: "css/3.jpg",
    },
    {
        name: "Carwash Location 4",
        address: "789 india St, City",
        overview: "Summary of Location 4",
        review: "Review of Location 4",
        image: "css/4.jpg",
    },
    {
        name: "Carwash Location 5",
        address: "533 Normal St, City",
        overview: "Summary of Location 5",
        review: "Review of Location 5",


        image: "css/5.jpg",
    },

];

// Populate car wash grid and location dropdown
const DetailsContainer = document.querySelector("#DetailsContainer");
DetailsContainer.innerHTML = DetailData.map(carwash => `
<div class="container-fluid" >
        <div class="card col-md-6 mb-4"  id = "cardBackground">
        <h3 class="card-title">${carwash.name}</h3>
            <img src="${carwash.image}" class="card-img-top" alt="${carwash.address}">
            <p>Address: ${carwash.address} </p>
            <div class="card-body">
                <p>Overview: ${carwash.overview} </p>
                <p>Reviews: ${carwash.review} </p>                      
            </div>
        </div>
       </div>
    `).join('');


