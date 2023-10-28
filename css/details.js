const DetailData = [
    {
        name: "Carwash Location 1",
        address: "123 Main St, City",
        overview: "Summary of Location 1",
        review: "Review of Location 1",
        image: "1.jpg",
    },
    {
        name: "Carwash Location 2",
        address: "456 Elm St, City",
        overview: "Summary of Location 2",
        review: "Review of Location 2",
        image: "2.jpg",
    },
    {
        name: "Carwash Location 3",
        address: "789 Oak St, City",
        overview: "Summary of Location 3",
        review: "Review of Location 3",
        image: "3.jpg",
    },
    {
        name: "Carwash Location 4",
        address: "789 india St, City",
        overview: "Summary of Location 4",
        review: "Review of Location 4",
        image: "4.jpg",
    },
    {
        name: "Carwash Location 5",
        address: "533 Normal St, City",
        overview: "Summary of Location 5",
        review: "Review of Location 5",


        image: "1.jpg",
    },

];

// Populate car wash grid and location dropdown
const DetailsContainer = document.querySelector("#DetailsContainer");
DetailsContainer.innerHTML = DetailData.map(carwash => `
<div class="container-fluid">
        <div class="card col-md-6 mb-4">
        <h5 class="card-title">${carwash.name}</h5>
            <img src="${carwash.image}" class="card-img-top" alt="${carwash.address}">
            <div class="card-body">
                <p>Overview: ${carwash.overview} </p>
                <p>Reviews: ${carwash.review} </p>                      
            </div>
        </div>
       </div>
    `).join('');


