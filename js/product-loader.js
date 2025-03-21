// product-loader.js
let productData = {};

async function loadProductDataFromXML() {
    const res = await fetch("xml/product-data.xml");
    const xmlText = await res.text();
    const parser = new DOMParser();
    const xml = parser.parseFromString(xmlText, "application/xml");

    const categories = xml.querySelectorAll("category");
    categories.forEach(category => {
        const categoryName = category.getAttribute("name");
        productData[categoryName] = [];

        category.querySelectorAll("product").forEach(product => {
            const id = product.getAttribute("id");
            const brand = product.querySelector("brand")?.textContent;
            const title = product.querySelector("title")?.textContent;
            const basePrice = parseInt(product.querySelector("basePrice")?.textContent || "0");
            const warranty = product.querySelector("warranty")?.textContent;
            const description = product.querySelector("description")?.textContent;
            const link = product.querySelector("link")?.textContent;

            const images = [...product.querySelectorAll("images > image")].map(img => img.textContent);
            const specs = [...product.querySelectorAll("specs > spec")].map(spec => spec.textContent);

            const options = {};
            product.querySelectorAll("options > option").forEach(opt => {
                options[opt.getAttribute("name")] = parseInt(opt.textContent || "0");
            });

            productData[categoryName].push({
                id, brand, title, basePrice, warranty, description, link,
                images, specs, options, category: categoryName
            });
        });
    });
}
