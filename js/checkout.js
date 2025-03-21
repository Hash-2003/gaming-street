document.addEventListener("DOMContentLoaded", function () {
    loadCartSummary();

    
    const creditCardRadio = document.getElementById("credit-card");
    const kokoRadio = document.getElementById("koko");
    const cardDetails = document.getElementById("card-details");
    const kokoDetails = document.getElementById("koko-details");
    const paymentRadios = document.querySelectorAll('input[name="payment"]');

    // Visibility of sub-forms
    paymentRadios.forEach(radio => {
        radio.addEventListener("change", function () {
            if (creditCardRadio.checked) {
                cardDetails.style.display = "block";
                kokoDetails.style.display = "none";
            } else if (kokoRadio.checked) {
                cardDetails.style.display = "none";
                kokoDetails.style.display = "block";
            } else {
                cardDetails.style.display = "none";
                kokoDetails.style.display = "none";
            }
        });
    });

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

    const creditCardRadio = document.getElementById("credit-card");
    const kokoRadio = document.getElementById("koko");

    // Name validation
    if (name === "") {
        document.getElementById("name-error").textContent = "Name is required.";
        isValid = false;
    } else {
        document.getElementById("name-error").textContent = "";
    }

    // NIC validation
    if (!(nic.length === 9 || nic.length === 12)) {
        document.getElementById("nic-error").textContent = "NIC number must be 9 or 12 digits.";
        isValid = false;
    } else {
        document.getElementById("nic-error").textContent = "";
    }

    // Address validation
    if (address === "") {
        document.getElementById("address-error").textContent = "Address is required.";
        isValid = false;
    } else {
        document.getElementById("address-error").textContent = "";
    }

    // Email validation
    if (!email.match(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)) {
        document.getElementById("email-error").textContent = "Enter a valid email.";
        isValid = false;
    } else {
        document.getElementById("email-error").textContent = "";
    }

    // Payment validation
    if (!payment) {
        document.getElementById("payment-error").textContent = "Please select a payment method.";
        isValid = false;
    } else {
        document.getElementById("payment-error").textContent = "";
    }

    // Delivery method validation
    if (deliveryMethod === "") {
        document.getElementById("delivery-error").textContent = "Please select a delivery method.";
        isValid = false;
    } else {
        document.getElementById("delivery-error").textContent = "";
    }

    // Terms checkbox validation
    if (!agreeTerms) {
        document.getElementById("terms-error").textContent = "You must agree to the terms and conditions.";
        isValid = false;
    } else {
        document.getElementById("terms-error").textContent = "";
    }

    // Credit card fields validation
    if (creditCardRadio.checked) {
        const cardNumber = document.getElementById("card-number").value.trim();
        const expiryDate = document.getElementById("expiry-date").value.trim();
        const cvv = document.getElementById("cvv").value.trim();

        if (!/^\d{16}$/.test(cardNumber)) {
            document.getElementById("card-number").style.border = "2px solid red";
            isValid = false;
        } else {
            document.getElementById("card-number").style.border = "";
        }
        //dd/mm or dd-mm
        if (!(/^\d{2}\/\d{2}$/.test(expiryDate) || /^\d{2}-\d{2}$/.test(expiryDate))) {
            document.getElementById("expiry-date").style.border = "2px solid red";
            isValid = false;
        } else {
            document.getElementById("expiry-date").style.border = "";
        }

        if (!/^\d{3}$/.test(cvv)) {
            document.getElementById("cvv").style.border = "2px solid red";
            isValid = false;
        } else {
            document.getElementById("cvv").style.border = "";
        }
    }

    // Koko fields validation
    if (kokoRadio.checked) {
        const kokoEmail = document.getElementById("koko-email").value.trim();
        const kokoPassword = document.getElementById("koko-password").value.trim();

        if (!kokoEmail.match(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)) {
            document.getElementById("koko-email").style.border = "2px solid red";
            isValid = false;
        } else {
            document.getElementById("koko-email").style.border = "";
        }

        if (kokoPassword.length < 6) {
            document.getElementById("koko-password").style.border = "2px solid red";
            isValid = false;
        } else {
            document.getElementById("koko-password").style.border = "";
        }
    }

    return isValid;
}

// Place Order
function placeOrder() {
    alert("Order placed successfully!");
    localStorage.removeItem("cart");
    window.location.href = "index.html";
}

// Cancel Order
function cancel() {
    if (confirm("Your order will be canceled.Are you sure you want to proceed?")) {
        localStorage.removeItem("cart");
        window.location.href = "index.html";
    }
}
