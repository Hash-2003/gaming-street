document.addEventListener("DOMContentLoaded", async function () {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");
    let category = urlParams.get("category");

    await loadProductDataFromXML(); // XML Load wait

    let foundProduct = null;

    if (category && productData[category]) {
        foundProduct = productData[category].find(p => p.id === productId);
    }

    //search all categories if not found in specific one
    if (!foundProduct) {
        for (const cat in productData) {
            const product = productData[cat].find(p => p.id === productId);
            if (product) {
                foundProduct = product;
                category = cat;
                break;
            }
        }
    }

    if (!foundProduct) {
        console.error("Product Not Found!");
        document.querySelector(".product-details").innerHTML = "<h2>Product Not Found</h2>";
        return;
    }

    // Update content
    document.getElementById("product-title").textContent = foundProduct.title;
    document.getElementById("product-warranty").textContent = foundProduct.warranty;
    document.getElementById("product-description").textContent = foundProduct.description;
    document.getElementById("learn-more-link").href = foundProduct.link;
    document.getElementById("learn-more-link").textContent = "Learn more";

    // Image slider
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

    // Options
    const optionsDropdown = document.getElementById("product-options");
    optionsDropdown.innerHTML = "";

    for (const option in foundProduct.options) {
        const optElem = document.createElement("option");
        optElem.value = option;
        optElem.textContent = option;
        optionsDropdown.appendChild(optElem);
    }

    const priceElement = document.getElementById("product-price");
    priceElement.textContent = `Rs.${foundProduct.basePrice.toLocaleString()}`;

    optionsDropdown.addEventListener("change", () => {
        const selected = optionsDropdown.value;
        const extra = foundProduct.options[selected] || 0;
        const total = foundProduct.basePrice + extra;
        priceElement.textContent = `Rs.${total.toLocaleString()}`;
    });

    // Specs
    const specsList = document.getElementById("product-specs");
    specsList.innerHTML = "";
    foundProduct.specs.forEach(spec => {
        const li = document.createElement("li");
        li.textContent = spec;
        specsList.appendChild(li);
    });

    const reviewsContainer = document.querySelector(".product-reviews .review");
    reviewsContainer.innerHTML = ""; // Clear the "No reviews yet." text

    if (foundProduct.reviews && foundProduct.reviews.length > 0) {
        foundProduct.reviews.forEach(review => {
            const reviewDiv = document.createElement("div");
            reviewDiv.classList.add("review-item");
            reviewDiv.innerHTML = `
                <strong>${review.author}</strong> - ⭐ ${review.rating}/5
                <p class="desc">${review.comment}</p>
                <hr>
            `;
            reviewsContainer.appendChild(reviewDiv);
        });
    } else {
        reviewsContainer.innerHTML = `<p class="desc">No reviews yet.</p>`;
    }


    // Breadcrumbs
    const categoryBreadcrumb = document.getElementById("breadcrumb-category");
    const productBreadcrumb = document.getElementById("breadcrumb-product");

    if (categoryBreadcrumb && category) {
        const formatted = category.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
        categoryBreadcrumb.textContent = formatted;
        categoryBreadcrumb.href = `category.html?category=${category}`;
    }

    if (productBreadcrumb) {
        productBreadcrumb.textContent = foundProduct.title;
    }
});
