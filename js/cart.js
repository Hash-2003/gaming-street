// Ensure cart is loaded from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to add item to cart
function addToCart() {
    console.log("Attempting to add product to cart...");

    // Get the product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    if (!productId) {
        console.error("Product ID not found in URL!");
        return;
    }

    // Find the product in product-data.js
    let foundProduct = null;
    for (const category in products) {
        foundProduct = products[category].find(product => product.id === productId);
        if (foundProduct) break;
    }

    if (!foundProduct) {
        console.error("Product data not found!");
        return;
    }

    console.log("Product found:", foundProduct.title);

    // Get selected option
    const optionsDropdown = document.getElementById("product-options");
    const selectedOption = optionsDropdown ? optionsDropdown.value : null;

    // Set base price and calculate option price (if applicable)
    let basePrice = foundProduct.basePrice;
    let optionPrice = selectedOption ? (foundProduct.options[selectedOption] || 0) : 0;
    let finalPrice = basePrice + optionPrice;

    // Check if product with the same option already exists in cart
    let existingItem = cart.find(item => item.id === productId && item.option === selectedOption);

    if (existingItem) {
        existingItem.quantity += 1;
        console.log("Increased quantity:", existingItem);
    } else {
        cart.push({
            id: productId,
            title: foundProduct.title,
            image: foundProduct.images[0], // First image as thumbnail
            price: finalPrice,
            option: selectedOption || "Default",
            quantity: 1
        });
        console.log("Product added:", foundProduct.title);
    }

    // Save cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Alert the user
    alert(`Added ${foundProduct.title} to the cart!`);
}

// Function to load cart items on cart.html
function loadCart() {
    const cartContainer = document.getElementById("cart-container");
    const cartCount = document.getElementById("cart-count");
    cartContainer.innerHTML = ""; // Clear previous content

    if (cart.length === 0) {
        cartContainer.innerHTML = `<p class="empty-cart">Your cart is empty.</p>`;
        cartCount.textContent = "0";
        return;
    }

    let totalPrice = 0;
    cartCount.textContent = cart.length; // Update cart count

    cart.forEach((item, index) => {
        let itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;

        cartContainer.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.title}">
                <div class="cart-info">
                    <h3>${item.title}</h3>
                    <p>Option: ${item.option}</p>
                    <p>Price: Rs.${item.price.toLocaleString()}</p>
                    <p>Quantity: 
                        <button onclick="updateQuantity(${index}, -1)">-</button> 
                        ${item.quantity} 
                        <button onclick="updateQuantity(${index}, 1)">+</button>
                    </p>
                    <p>Total: Rs.${itemTotal.toLocaleString()}</p>
                    <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
                </div>
            </div>
        `;
    });

    cartContainer.innerHTML += `<h3>Total Price: Rs.${totalPrice.toLocaleString()}</h3>`;
}

// Function to update quantity
function updateQuantity(index, change) {
    cart[index].quantity += change;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

// Function to remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

// Function to clear cart
function clearCart() {
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

// Load cart on cart page
document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("cart-container")) {
        loadCart();
    }
});
