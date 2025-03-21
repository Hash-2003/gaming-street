document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get("category");

    const sortSelect = document.getElementById("sort-select");

    let currentProducts = [];

    if (products[category]) {
        currentProducts = [...products[category]];
        loadProducts(currentProducts);
    }

    if (sortSelect) {
        sortSelect.addEventListener("change", function () {
            const selected = this.value;

            if (selected === "brand") {
                currentProducts.sort((a, b) => a.brand.localeCompare(b.brand));
            } else if (selected === "price-low") {
                currentProducts.sort((a, b) => a.basePrice - b.basePrice);
            } else if (selected === "price-high") {
                currentProducts.sort((a, b) => b.basePrice - a.basePrice);
            }

            loadProducts(currentProducts);
        });
    }
});

function loadProducts(productList) {
    const productContainer = document.getElementById("product-container");

    if (!productList || productList.length === 0) {
        productContainer.innerHTML = '<p style="color: white; font-size: 18px; text-align: center;">No products found in this category.</p>';
        return;
    }

    productContainer.innerHTML = "";

    productList.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");

        productElement.innerHTML = `
            <a href="product-details.html?id=${product.id}&category=${encodeURIComponent(product.category || '')}">
                <img src="${product.images[0]}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>Starting from Rs.${product.basePrice.toLocaleString()}</p>
            </a>
        `;

        productContainer.appendChild(productElement);
    });
}
