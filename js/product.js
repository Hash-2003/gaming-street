document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    let foundProduct = null;
    //product-data looping
    for (const category in products) {
        foundProduct = products[category].find(product => product.id === productId);
        if (foundProduct) break;
    }

    if (!foundProduct) {
        console.error("Product Not Found!");
        document.querySelector(".product-details").innerHTML = "<h2>Product Not Found</h2>";
        return;
    }

    const product = foundProduct;

    //product-details page update
    document.getElementById("product-title").textContent = product.title;
    document.getElementById("product-warranty").textContent = product.warranty;
    document.getElementById("product-description").textContent = product.description;
    document.getElementById("learn-more-link").href = product.link;
    document.getElementById("learn-more-link").textContent = "Learn more";

    // image slider
    let imageIndex = 0;
    const productImage = document.getElementById("product-image");
    const images = product.images;
    productImage.src = images[imageIndex];

    window.prevImage = function () {
        imageIndex = (imageIndex - 1 + images.length) % images.length;
        productImage.src = images[imageIndex];
    };

    window.nextImage = function () {
        imageIndex = (imageIndex + 1) % images.length;
        productImage.src = images[imageIndex];
    };

    // product options
    const optionsDropdown = document.getElementById("product-options");
    optionsDropdown.innerHTML = ""; 

    for (const option in product.options) {
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.textContent = option;
        optionsDropdown.appendChild(optionElement);
    }

    const priceElement = document.getElementById("product-price");
    priceElement.textContent = `Rs.${product.basePrice.toLocaleString()}`;

    optionsDropdown.addEventListener("change", function () {
        const selectedOption = optionsDropdown.value;
        const extraCost = product.options[selectedOption] || 0;
        const finalPrice = product.basePrice + extraCost;
        priceElement.textContent = `Rs.${finalPrice.toLocaleString()}`;
    });

    // specifications
    const specsList = document.getElementById("product-specs");
    specsList.innerHTML = "";
    product.specs.forEach(spec => {
        const li = document.createElement("li");
        li.textContent = spec;
        specsList.appendChild(li);
    });
});
