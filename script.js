    const carWashData = [
            {
                name: "Carwash Location 1",
                address: "123 Main St, City",
                services: ["Exterior Wash", "Interior Cleaning", "Waxing"],
                phone: "123-456-7890",
                email: "carwash1@example.com",
                image: "1.jpg",
            },
            {
                name: "Carwash Location 2",
                address: "456 Elm St, City",
                services: ["Exterior Wash", "Vacuuming", "Polishing"],
                phone: "987-654-3210",
                email: "carwash2@example.com",
                image: "1.jpg",
            },
            {
                name: "Carwash Location 3",
                address: "789 Oak St, City",
                services: ["Full Service Wash", "Interior Detailing"],
                phone: "555-123-4567",
                email: "carwash3@example.com",
                image: "1.jpg",
            },
            {
                name: "Carwash Location 4",
                address: "789 india St, City",
                services: ["Full Service Wash", "Interior Detailing"],
                phone: "555-123-1355",
                email: "carwash3@example.com",
                image: "1.jpg",
            },
            {
                name: "Carwash Location 5",
                address: "533 Normal St, City",
                services: ["Full Service Wash", "Interior Detailing"],
                phone: "555-123-0955",
                email: "carwash3@example.com",
                image: "1.jpg",
            },
            {
                name: "Carwash Location 5",
                address: "533 Normal St, City",
                services: ["Full Service Wash", "Interior Detailing"],
                phone: "555-123-0955",
                email: "carwash3@example.com",
                image: "1.jpg",
            },

    ];

    let cartCount = 0;
    
    function updateCartCounter() {
        document.querySelector('#cartCounter').textContent = cartCount;
    }
    
    function addToCart(service) {
        cartCount++;
        updateCartCounter();
    }
    
    function updateServiceOptions() {
        const selectedLocation = document.querySelector("#locationSelect").value;
        const servicesList = document.querySelector("#servicesList");
        
        const services = carWashData.find(carwash => carwash.name === selectedLocation).services;
        
        servicesList.innerHTML = '';
        services.forEach(service => {
            servicesList.innerHTML += `
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="${service}" value="${service}" onchange="addToCart('${service}')">
                    <label class="custom-control-label" for="${service}">${service}</label>
                </div>
            `;
        });

        // Reset the cart counter when the user changes location
    cartCount = 0;
    updateCartCounter();
    }
    
    function checkout() {
        alert(`You have selected ${cartCount} car wash services.`);
    }
    
    function submitForm() {
        const name = document.querySelector("#name").value;
        const phone = document.querySelector("#phone").value;
    
        if (!name || !phone) {
            alert('Please enter all required fields.');
            return;
        }
    
        alert(`Thank you for the details, ${name}. Your details are saved, visit the ${carwash.name}.`);
    }
    
    // Populate car wash grid and location dropdown
    const carWashContainer = document.querySelector("#carWashContainer");
    const locationSelect = document.querySelector("#locationSelect");
    carWashContainer.innerHTML = carWashData.map(carwash => `
        <div class="card col-md-6 mb-4">
            <img src="${carwash.image}" class="card-img-top" alt="${carwash.name}">
            <div class="card-body">
                <h5 class="card-title">${carwash.name}</h5>
                <p>Phone number: ${carwash.phone} </p>
                <p>Address : ${carwash.address}</p>
                <p>Services offered: ${carwash.services.join(', ')}</p>
            </div>
        </div>
    `).join('');
    
    carWashData.forEach(carwash => {
        locationSelect.innerHTML += `<option value="${carwash.name}">${carwash.name}</option>`;
    });
    
    // Load services for the first location by default
    updateServiceOptions();
    