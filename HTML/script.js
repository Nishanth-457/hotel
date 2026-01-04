const menuItems = [
    { id: 1, name: "Paneer Tikka", category: "veg", price: 280, img: "images/PannerTikka.jpg", ingredients: "Paneer, Yogurt, Spices, Capsicum" },
    { id: 2, name: "Chicken 65", category: "non-veg", price: 320, img: "images/Chicken65.jpg", ingredients: "Chicken, Curry Leaves, Red Chili" },
    { id: 3, name: "Veg Biryani", category: "veg", price: 250, img: "images/VegBiryani.jpg", ingredients: "Basmati Rice, Mixed Vegetables, Spices" },
    { id: 4, name: "Mutton Seekh", category: "non-veg", price: 450, img: "images/MuttonSeekh.jpg", ingredients: "Minced Mutton, Spices, Onion, Herbs" },
    { id: 5, name: "Spring Rolls", category: "veg", price: 180, img: "images/SpringRolls.jpg", ingredients: "Cabbage, Carrot, Flour Wrapper" },
    { id: 6, name: "Fish Fry", category: "non-veg", price: 380, img: "images/FishFingers.jpg", ingredients: "Fish Fillet, Breadcrumbs, Spices" },
    { id: 7, name: "samosa-chat", category: "veg", price: 60, img: "images/samosa-chat.jpg", ingredients: "Potatoes, Peas, Flour, Spices" },
    { id: 8, name: "Chicken Tikka", category: "non-veg", price: 300, img: "images/ChickenTikka.jpg", ingredients: "Boneless Chicken, Yogurt, Tandoori Masala" },
    { id: 9, name: "Hara Bhara Kabab", category: "veg", price: 220, img: "images/HaraBharaKabab.jpg", ingredients: "Spinach, Green Peas, Potatoes" },
    { id: 10, name: "Prawn Fry", category: "non-veg", price: 420, img: "images/PrawnsFry.jpg", ingredients: "Prawns, Garlic, Red Chili, Lemon" },
    { id: 11, name: "Gobi 65", category: "veg", price: 200, img: "images/Gobi65.jpg", ingredients: "Cauliflower, Soy Sauce, Garlic, Chili" },
    { id: 12, name: "Tandoori Chicken", category: "non-veg", price: 500, img: "images/TandooriChicken.jpg", ingredients: "Whole Chicken, Yogurt, Lemon, Spices" },
    { id: 13, name: "Dal Makhani", category: "veg", price: 280, img: "images/DalMakhani.jpg", ingredients: "Black Lentils, Butter, Cream, Tomatoes" },
    { id: 14, name: "Paneer Butter Masala", category: "veg", price: 320, img: "images/PaneerButterMasala.jpg", ingredients: "Paneer, Butter, Cashew Paste, Cream" },
    { id: 15, name: "Palak Paneer", category: "veg", price: 300, img: "images/PalakPaneer.jpg", ingredients: "Spinach, Paneer, Garlic, Cream" },
    { id: 16, name: "Malai Kofta", category: "veg", price: 330, img: "images/MalaiKofta.jpg", ingredients: "Potato, Paneer, Cream, Cashew Nut" },
    { id: 17, name: "Dal Tadka", category: "veg", price: 240, img: "images/DalTadka.jpg", ingredients: "Chickpeas, Onion, Tomato, Spices" },
    { id: 18, name: "Aloo Gobi", category: "veg", price: 220, img: "images/AlooGobi.jpg", ingredients: "Potatoes, Cauliflower, Turmeric, Cumin" },
    { id: 19, name: "Butter Chicken", category: "non-veg", price: 380, img: "images/ButterChicken.jpg", ingredients: "Chicken, Butter, Tomato Puree, Cream" },
    { id: 20, name: "Mutton Rogan Josh", category: "non-veg", price: 480, img: "images/MuttonRoganJosh.jpg", ingredients: "Mutton, Kashmiri Chili, Yogurt, Spices" },
    { id: 21, name: "Chicken Curry", category: "non-veg", price: 360, img: "images/ChickenCurry.jpg", ingredients: "Chicken, Yogurt, Almond Paste, Spices" },
    { id: 22, name: "Fish Curry", category: "non-veg", price: 400, img: "images/FishCurry.jpg", ingredients: "Fish, Coconut Milk, Tamarind, Mustard" },
    { id: 23, name: "Chicken Biryani", category: "non-veg", price: 350, img: "images/ChickenBiryani.jpg", ingredients: "Chicken, Basmati Rice, Saffron, Spices" },
    { id: 24, name: "Egg Curry", category: "non-veg", price: 210, img: "images/EggCurry.jpg", ingredients: "Boiled Eggs, Tomato Gravy, Spices" },
    { id: 25, name: "Garlic Naan", category: "veg", price: 60, img: "images/GarlicNaan.jpg", ingredients: "Flour, Garlic, Butter" },
    { id: 26, name: "Butter Naan", category: "veg", price: 50, img: "images/ButterNaan.jpg", ingredients: "Flour, Butter, Sesame Seeds" },
    { id: 27, name: "Tandoori Roti", category: "veg", price: 40, img: "images/TandooriRoti.jpg", ingredients: "Whole Wheat Flour" },
    { id: 28, name: "Jeera Rice", category: "veg", price: 180, img: "images/JeeraRice.jpg", ingredients: "Basmati Rice, Cumin Seeds, Ghee" },
    { id: 29, name: "Gulab Jamun", category: "veg", price: 120, img: "images/GulabJamun.jpg", ingredients: "Milk Solids, Sugar Syrup, Cardamom" },
    { id: 30, name: "Rasgulla", category: "veg", price: 120, img: "images/Rasgulla.jpg", ingredients: "Chenna, Sugar Syrup" },
    { id: 31, name: "Gajar Ka Halwa", category: "veg", price: 150, img: "images/GajarHalwa.jpg", ingredients: "Carrots, Milk, Sugar, Nuts" },
    { id: 32, name: "Rasmalai", category: "veg", price: 160, img: "images/Rasmalai.jpg", ingredients: "Chenna, Milk, Saffron, Pistachios" },
    { id: 33, name: "Mango Lassi", category: "veg", price: 100, img: "images/MangoLassi.jpg", ingredients: "Yogurt, Mango Pulp, Sugar" },
    { id: 34, name: "Masala Chai", category: "veg", price: 50, img: "images/MasalaChai.jpg", ingredients: "Tea Leaves, Milk, Ginger, Cardamom" },
    { id: 35, name: "Fresh Lime Soda", category: "veg", price: 80, img: "images/LimeSoda.jpg", ingredients: "Lemon, Soda, Salt/Sugar" },
    { id: 36, name: "Cold Coffee", category: "veg", price: 140, img: "images/ColdCoffee.jpg", ingredients: "Coffee, Milk, Ice Cream, Chocolate" }
];
let cart = [];
function renderMenu(filter) {
    const container = document.getElementById("menu-container");
    container.innerHTML = "";
    for (let i = 0; i < menuItems.length; i++) {
        let item = menuItems[i];
        if (filter === 'all' || item.category === filter) {
            container.innerHTML += `
                <div class="col-md-4 mb-4">
                    <div class="card h-100 shadow-sm">
                        <img src="${item.img}" class="card-img-top" style="height: 200px; object-fit: cover;">
                        <div class="card-body text-center">
                            <h5>${item.name}</h5>
                            <p class="badge ${item.category === 'veg' ? 'bg-success' : 'bg-danger'}">
                                ${item.category}
                            </p>
                            <h4>₹${item.price}</h4>
                            <button class="btn btn-sm btn-outline-dark mb-2" onclick="showIngredients(${item.id})">
                                View Ingredients
                            </button>
                            <button class="btn btn-warning w-100" onclick="addToCart(${item.id})">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }
    }
}

function showIngredients(id) {
    
    let item;
    for (let i = 0; i < menuItems.length; i++) {
        if (menuItems[i].id === id) {
            item = menuItems[i];
            break;
        }
    }
    document.getElementById("ing-title").innerText = item.name;
    document.getElementById("ing-text").innerText = item.ingredients;

    
    const myModal = new bootstrap.Modal(document.getElementById('ingredientsModal'));
    myModal.show();
}

function addToCart(id) {
let found = false;
for (let i = 0; i < cart.length; i++) {
if (cart[i].id === id) {
cart[i].qty++;
found = true;
break;
}
}
if (!found) {
for (let i = 0; i < menuItems.length; i++) {
if (menuItems[i].id === id) {
let newItem = {
id: menuItems[i].id,
name: menuItems[i].name,
price: menuItems[i].price,
qty: 1
};
cart.push(newItem);
break;
}
}
}
updateCartCount();
}
function updateCartCount() {
let totalCount = 0;
for (let i = 0; i < cart.length; i++) {
totalCount += cart[i].qty;
}
document.getElementById("cart-count").innerText = totalCount;
}
function updateCartDisplay() {
const cartList = document.getElementById("cart-items");
const totalSpan = document.getElementById("cart-total");
cartList.innerHTML = "";
let total = 0;
for (let i = 0; i < cart.length; i++) {
let item = cart[i];
let itemTotal = item.price * item.qty;
total += itemTotal;
cartList.innerHTML += `
<li class="list-group-item d-flex justify-content-between align-items-center">
<div>
<strong>${item.name}</strong>
<br>
<small>₹${item.price} x ${item.qty} = ₹${itemTotal}</small>
</div>
<div>
<button class="btn btn-sm btn-secondary" onclick="changeQty(${i}, -1)">-</button>
<span class="mx-2">${item.qty}</span>
<button class="btn btn-sm btn-secondary" onclick="changeQty(${i}, 1)">+</button>
</div>
</li>
`;
}
totalSpan.innerText = total;
}

function showCart() {
updateCartDisplay(); 
const myModal = new bootstrap.Modal(document.getElementById('cartModal'));
myModal.show(); 
}

function changeQty(index, change) {
cart[index].qty += change;
if (cart[index].qty <= 0) {
cart.splice(index, 1);
}
updateCartCount(); 
updateCartDisplay(); 
}

renderMenu('all');
function openCheckout() {
if (cart.length === 0) {
alert("Your cart is empty!");
return;
}
const cartModal = bootstrap.Modal.getInstance(document.getElementById('cartModal'));
cartModal.hide();
const checkoutModal = new bootstrap.Modal(document.getElementById('checkoutModal'));
checkoutModal.show();
}
function confirmOrder() {
let name = document.getElementById("customer-name").value;
let address = document.getElementById("customer-address").value;
if (name === "" || address === "") {
alert("Please fill in all details!");
return;
}
alert("Thank you " + name + "! Your food will be delivered to: " + address);

cart = [];
updateCartCount();
window.location.reload();
}