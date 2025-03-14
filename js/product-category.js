document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get("category");
    loadProducts(category);
});

function loadProducts(category) {
    const productContainer = document.getElementById("product-container");

    if (!products[category]) {
        productContainer.innerHTML = '<p style="color: white; font-size: 18px; text-align: center;">No products found in this category.</p>';

        return;
    }

    productContainer.innerHTML = "";

    products[category].forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");

        productElement.innerHTML = `
            <a href="product-details.html?id=${product.id}">
                <img src="${product.images[0]}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>Starting from Rs.${product.basePrice.toLocaleString()}</p>
            </a>
        `;

        productContainer.appendChild(productElement);
    });
}
