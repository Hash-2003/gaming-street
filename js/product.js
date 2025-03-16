document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");
    let category = urlParams.get("category"); 

    let foundProduct = null;
    let foundCategory = null;

    
    for (const cat in products) {
        const product = products[cat].find(prod => prod.id === productId);
        if (product) {
            foundProduct = product;
            foundCategory = cat; 
            break;
        }
    }

    if (!foundProduct) {
        console.error("Product Not Found!");
        document.querySelector(".product-details").innerHTML = "<h2>Product Not Found</h2>";
        return;
    }

    if (!category) {
        category = foundCategory;
    }

    document.getElementById("product-title").textContent = foundProduct.title;
    document.getElementById("product-warranty").textContent = foundProduct.warranty;
    document.getElementById("product-description").textContent = foundProduct.description;
    document.getElementById("learn-more-link").href = foundProduct.link;
    document.getElementById("learn-more-link").textContent = "Learn more";

    let imageIndex = 0;
    const productImage = document.getElementById("product-image");
    const images = foundProduct.images;
    productImage.src = images[imageIndex];

    window.prevImage = function () {
        imageIndex = (imageIndex - 1 + images.length) % images.length;
        productImage.src = images[imageIndex];
    };

    window.nextImage = function () {
        imageIndex = (imageIndex + 1) % images.length;
        productImage.src = images[imageIndex];
    };

    const optionsDropdown = document.getElementById("product-options");
    optionsDropdown.innerHTML = ""; 

    for (const option in foundProduct.options) {
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.textContent = option;
        optionsDropdown.appendChild(optionElement);
    }

    const priceElement = document.getElementById("product-price");
    priceElement.textContent = `Rs.${foundProduct.basePrice.toLocaleString()}`;

    optionsDropdown.addEventListener("change", function () {
        const selectedOption = optionsDropdown.value;
        const extraCost = foundProduct.options[selectedOption] || 0;
        const finalPrice = foundProduct.basePrice + extraCost;
        priceElement.textContent = `Rs.${finalPrice.toLocaleString()}`;
    });

    // Update specifications
    const specsList = document.getElementById("product-specs");
    specsList.innerHTML = "";
    foundProduct.specs.forEach(spec => {
        const li = document.createElement("li");
        li.textContent = spec;
        specsList.appendChild(li);
    });

    // Update breadcrumbs
    const categoryBreadcrumb = document.getElementById("breadcrumb-category");
    const productBreadcrumb = document.getElementById("breadcrumb-product");

    if (category && categoryBreadcrumb) {
        // Format category name
        const formattedCategory = category.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());

        categoryBreadcrumb.textContent = formattedCategory;
        categoryBreadcrumb.href = `category.html?category=${category}`;
    }

    if (productBreadcrumb) {
        productBreadcrumb.textContent = foundProduct.title;
    }
});
