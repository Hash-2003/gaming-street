
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// add to cart func
function addToCart() {
    console.log("Attempting to add product to cart...");

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    if (!productId) {
        console.error("Product ID not found in URL!");
        return;
    }

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

    //selected option
    const optionsDropdown = document.getElementById("product-options");
    const selectedOption = optionsDropdown ? optionsDropdown.value : null;

    // calculate price
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
            image: foundProduct.images[0], 
            price: finalPrice,
            option: selectedOption || "Default",
            quantity: 1
        });
        console.log("Product added:", foundProduct.title);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    // user message
    alert(`Added ${foundProduct.title} to the cart!`);
}

// cart.html functions
function loadCart() {
    const cartContainer = document.getElementById("cart-container");
    const cartCount = document.getElementById("cart-count");
    cartContainer.innerHTML = ""; 

    if (cart.length === 0) {
        cartContainer.innerHTML = `<p style="margin-bottom:130px; margin-top:130px; text-align:center; color:white; font-size: 24px;" class="empty-cart">Your cart is empty.</p>`;
        cartCount.textContent = "0";
        return;
    }

    let totalPrice = 0;
    cartCount.textContent = cart.length; 

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
                    <button class="remove-btn" onclick="removeFromCart(${index})"style="background-color: #fd4a4a; color: white; padding: 5px 10px; border: none; cursor: pointer; border-radius: 5px;">Remove</button>
                </div>
            </div>
        `;
    });

    cartContainer.innerHTML += `<h2 style="color:white;" >Total Price: Rs.${totalPrice.toLocaleString()}</h2>`;
}

// update quantity
function updateQuantity(index, change) {
    cart[index].quantity += change;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

// remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

// clear cart
function clearCart() {
    if (confirm("All the items in your cart will be deleted.")) {
        cart = [];
        localStorage.setItem("cart", JSON.stringify(cart));
        loadCart();
    }
}

//checkout
function proceedToCheckout() {
    if (cart.length === 0) {
        alert("Your cart is empty. Add items before proceeding to checkout.");
        return;
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    window.location.href = "checkout.html";
}


document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("cart-container")) {
        loadCart();
    }
});
