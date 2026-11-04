
const drinks = [
    {
        id: 1,
        name: "Doodh Patti",
        type: "Hot Tea",
        price: 180,
        available: true,
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 2,
        name: "Karak Chai",
        type: "Hot Tea",
        price: 150,
        available: true,
        image: "https://b.zmtcdn.com/data/dish_photos/f0f/01c37999c52a14299484f2e52addff0f.jpeg"
    },
    {
        id: 3,
        name: "Kashmiri Chai",
        type: "Hot Tea",
        price: 250,
        available: true,
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ed/Kashmiri_Chai.JPG/960px-Kashmiri_Chai.JPG"
    },
    {
        id: 4,
        name: "Cappuccino",
        type: "Coffee",
        price: 450,
        available: true,
        image: "https://images.unsplash.com/photo-1700127272763-b775d79ecd8c?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 5,
        name: "Cold Coffee",
        type: "Cold Coffee",
        price: 400,
        available: true,
        image: "https://images.unsplash.com/photo-1717768023285-3a09846f32be?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 6,
        name: "Iced Latte",
        type: "Cold Coffee",
        price: 500,
        available: false,
        image: "https://images.unsplash.com/photo-1671759545218-831c32bfe92d?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 7,
        name: "Fresh Lime",
        type: "Cold Drink",
        price: 200,
        available: true,
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto/738648e29bc0aa9de8e6648310ae8e77"
    },
    {
        id: 8,
        name: "Qehwa",
        type: "Hot Tea",
        price: 180,
        available: false,
        image: "https://tearebellion.com/cdn/shop/files/Sakare_Specialty_Black_Tea_Tea_Rebellion.png?v=1774192327&width=533"
    }
];

// Search and category variables
let searchText = "";
let category = "All";

// HTML elements
const list = document.getElementById("list");
const search = document.getElementById("search");
const count = document.getElementById("count");
const buttons = document.querySelectorAll(".categories button");

// This function displays the drink cards
function render(items) {

    const cards = items.map(drink => {
        return `
            <div class="card">

                <img src="${drink.image}" alt="${drink.name}">

                <div class="card-content">

                    <h2>${drink.name}</h2>

                    <p class="type">${drink.type}</p>

                    <p class="price">Rs. ${drink.price}</p>

                    <p class="status ${drink.available ? "available" : "sold-out"}">
                        ${drink.available ? "Available" : "Sold Out"}
                    </p>

                </div>

            </div>
        `;
    });

    list.innerHTML = cards.join("");
}

// This function searches and filters the drinks
function update() {

    const filteredDrinks = drinks.filter(drink => {

        const matchesSearch = drink.name.toLowerCase().includes(searchText.toLowerCase());

        const matchesCategory = category === "All" || drink.type === category;

        return matchesSearch && matchesCategory;

    });

    count.textContent = `Showing ${filteredDrinks.length} of ${drinks.length}`;

    // Show a message if no drinks match
    if (filteredDrinks.length === 0) {
        list.innerHTML = `
            <div class="empty">
                <h2>No drinks found!</h2>
                <p>Try searching for something else.</p>
            </div>
        `;
    } else {
        render(filteredDrinks);
    }
}

// Search as the user types
search.addEventListener("input", function() {

    searchText = search.value;

    update();

});

// Category button events
buttons.forEach(button => {

    button.addEventListener("click", function() {

        category = button.dataset.category;

        buttons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        update();

    });

});

// Display all drinks when the page opens
update();
