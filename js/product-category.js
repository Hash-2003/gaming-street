document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get("category");
    const sortSelect = document.getElementById("sort-select");
    let currentProducts = [];

    fetch('xml/product-data.xml')
        .then(response => response.text())
        .then(xmlString => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(xmlString, "application/xml");
            const categoryNode = xml.querySelector(`category[name="${category}"]`);
            
            if (!categoryNode) {
                loadProducts([]);
                return;
            }

            const productNodes = categoryNode.querySelectorAll("product");
            currentProducts = Array.from(productNodes).map(productNode => {
                const images = Array.from(productNode.querySelectorAll("images > image")).map(img => img.textContent);
                const specs = Array.from(productNode.querySelectorAll("specs > spec")).map(spec => spec.textContent);
                const options = {};
                productNode.querySelectorAll("options > option").forEach(opt => {
                    options[opt.getAttribute("name")] = parseInt(opt.textContent);
                });

                return {
                    id: productNode.getAttribute("id"),
                    brand: productNode.querySelector("brand").textContent,
                    title: productNode.querySelector("title").textContent,
                    basePrice: parseInt(productNode.querySelector("basePrice").textContent),
                    warranty: productNode.querySelector("warranty").textContent,
                    description: productNode.querySelector("description").textContent,
                    images: images,
                    specs: specs,
                    options: options,
                    link: productNode.querySelector("link").textContent,
                    category: category
                };
            });

            loadProducts(currentProducts);

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
        })
        .catch(error => {
            console.error("Failed to load XML:", error);
            loadProducts([]);
        });
});

function loadProducts(productList) {
    const container = document.getElementById("product-container");

    if (!productList || productList.length === 0) {
        container.innerHTML = '<p style="color: white; font-size: 18px; text-align: center;">No products found in this category.</p>';
        return;
    }

    container.innerHTML = "";
    productList.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <a href="product-details.html?id=${product.id}&category=${encodeURIComponent(product.category)}">
                <img src="${product.images[0]}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>Starting from Rs.${product.basePrice.toLocaleString()}</p>
            </a>
        `;
        container.appendChild(productDiv);
    });
}
