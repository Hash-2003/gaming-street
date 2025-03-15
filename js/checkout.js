document.addEventListener("DOMContentLoaded", function () {
    loadCartSummary();

    document.getElementById("checkout-form").addEventListener("submit", function (event) {
        event.preventDefault();
        if (validateForm()) {
            placeOrder();
        }
    });
});

// Load cart summary
function loadCartSummary() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartSummary = document.getElementById("cart-summary");
    const placeOrderBtn = document.getElementById("place-order-btn");

    if (cart.length === 0) {
        cartSummary.innerHTML = "<p style='color: red;'>Your cart is empty.</p>";
        placeOrderBtn.disabled = true;
        placeOrderBtn.style.backgroundColor = "#888";
        return;
    }

    let totalPrice = 0;
    cartSummary.innerHTML = "<h2 style='color: black; margin-bottom: 5px;'>Order Summary</h2>";
    cart.forEach(item => {
        let itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;

        cartSummary.innerHTML += `
            <p style='color: black; line-height: 1.8;'>${item.title} - Rs.${item.price.toLocaleString()} x ${item.quantity} = Rs.${itemTotal.toLocaleString()}</p>
        `;
    });

    cartSummary.innerHTML += `<h3 style='color: black; margin-top: 5px;'>Total: Rs.${totalPrice.toLocaleString()}</h3>`;
    placeOrderBtn.disabled = false;
    placeOrderBtn.style.backgroundColor = "#0ed100";
}

// JavaScript Form Validation
function validateForm() {
    let isValid = true;

    const name = document.getElementById("name").value.trim();
    const nic = document.getElementById("nic").value.trim();
    const address = document.getElementById("address").value.trim();
    const email = document.getElementById("email").value.trim();
    const payment = document.querySelector('input[name="payment"]:checked');
    const deliveryMethod = document.getElementById("delivery-method").value;
    const agreeTerms = document.getElementById("agree-terms").checked;

    if (name === "") {
        document.getElementById("name-error").textContent = "Name is required.";
        isValid = false;
    } else {
        document.getElementById("name-error").textContent = "";
    }

    if (!(nic.length === 9 || nic.length === 12)) {
        document.getElementById("nic-error").textContent = "NIC number must be 9 or 12 digits.";
        isValid = false;
    } else {
        document.getElementById("nic-error").textContent = "";
    }

    if (address === "") {
        document.getElementById("address-error").textContent = "Address is required.";
        isValid = false;
    } else {
        document.getElementById("address-error").textContent = "";
    }

    if (!email.match(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)) {
        document.getElementById("email-error").textContent = "Enter a valid email.";
        isValid = false;
    } else {
        document.getElementById("email-error").textContent = "";
    }

    if (!payment) {
        document.getElementById("payment-error").textContent = "Please select a payment method.";
        isValid = false;
    } else {
        document.getElementById("payment-error").textContent = "";
    }

    if (deliveryMethod === "") {
        document.getElementById("delivery-error").textContent = "Please select a delivery method.";
        isValid = false;
    } else {
        document.getElementById("delivery-error").textContent = "";
    }

    if (!agreeTerms) {
        document.getElementById("terms-error").textContent = "You must agree to the terms and conditions.";
        isValid = false;
    } else {
        document.getElementById("terms-error").textContent = "";
    }

    return isValid;
}

// Place Order
function placeOrder() {
    alert("Order placed successfully!");
    localStorage.removeItem("cart");
    window.location.href = "index.html";
}

//cancel
function cancel(){
    if (confirm("Your order will be canceled.Are you sure you want to proceed?")) {
        alert("Order was canceled");
        localStorage.removeItem("cart");
        window.location.href = "index.html";
    }
}
