document.addEventListener("DOMContentLoaded", function () {

    const products = {
        "tuf-f15": {
            title: "ASUS TUF Gaming F15 RTX 4070",
            images: ["images/tuf_f15_1.png", "images/tuf_f15_2.png"],
            basePrice: 409000,  
            warranty: "2 Year ASUS International Warranty",
            description: "A high-performance gaming laptop with Intel i7 and RTX 4070, designed for durability and power.",
            specs: [
                "Processor: Intel Core i7-13620H",
                "Graphics: NVIDIA GeForce RTX 4070 12GB",
                "Memory: 16GB, 32GB, 64GB DDR5",
                "Storage: 512GB, 1TB, 2TB NVMe SSD",
                "Display: 15.6-inch Full HD 144Hz",
                "Keyboard: RGB backlit",
                "Audio: Dolby Atmos, Hi-Res Audio",
                "Connectivity: Wi-Fi 6, Bluetooth 5.2",
                "Ports: USB-C, USB-A, HDMI, Ethernet",
                "Operating System: Windows 11"
            ],
            options: {
                "16GB 512GB SSD": 0,      
                "32GB 1TB SSD": 25000,   
                "64GB 2TB SSD": 50000    
            },
            link: "https://www.asus.com/laptops/for-gaming/tuf-gaming/asus-tuf-gaming-f15-2023/techspec/"
        },
        "legion-5": {
            title: "Lenovo Legion 5 RTX 4060",
            images: ["images/legion_5_1.png", "images/legion_5_2.png"],
            basePrice: 375000,
            warranty: "1 Year Lenovo International Warranty",
            description: "A powerful gaming laptop featuring Ryzen 7 and RTX 4060, offering smooth gaming performance.",
            specs: [
                "Processor: AMD Ryzen 7 5800H",
                "Graphics: NVIDIA GeForce RTX 4060 8GB",
                "Memory: 16GB DDR5",
                "Storage: 1TB NVMe SSD",
                "Display: 15.6-inch Full HD 165Hz",
                "Keyboard: RGB backlit",
                "Audio: Nahimic 3D Audio",
                "Connectivity: Wi-Fi 6, Bluetooth 5.1",
                "Ports: USB-C, USB-A, HDMI, Ethernet",
                "Operating System: Windows 11"
            ],
            options: {
                "16GB 1TB SSD": 0,
                "32GB 1TB SSD": 20000
            },
            link: "https://www.lenovo.com/legion-5"
        },
        "pny-5090": {
            title: "PNY GeForce RTX 5090 12GB",
            images: ["images/pny_5090_1.png", "images/pny_5090_2.png"],
            basePrice: 520000,  
            warranty: "2 Year Manufacturer Warranty",
            description: "The NVIDIA® GeForce RTX™ 5090 is the most powerful GeForce GPU ever made, bringing game-changing capabilities to gamers and creators. Tackle the most advanced models and most challenging creative workloads with unprecedented AI horsepower. Game with full ray tracing and the lowest latency. The GeForce RTX 5090 is powered by the NVIDIA® Blackwell architecture and equipped with 12GB of super-fast GDDR7 memory, so you can do it all.",
            specs: [
                "NVIDIA Blackwell Architecture",
                "12GB GDDR7 Memory",
                "3x Display Port 1x HDMI",
                "21,760 CUDA® Cores",
                "600 W Thermal Design Power",
                "PCI Express 5.0"
            ],
            options: {
                "-No options-": 0,      
                    
            },
            link: "https://www.pny.com/geforce-rtx-5090-models"
        },
        "tuf-rtx-4090": {
            title: "ASUS TUF Gaming GeForce RTX™ 4090",
            images: ["images/tuf_4090_1.png", "images/tuf_4090_2.png"],
            basePrice: 320000,  
            warranty: "2 Year Asus International Warranty",
            description: "The ASUS TUF Gaming GeForce RTX 4090 is a high-performance gaming and workstation GPU, built for extreme power, durability, and cooling efficiency. Designed with NVIDIA’s Ada Lovelace architecture, this flagship graphics card delivers cutting-edge ray tracing, AI-powered rendering, and ultra-high FPS performance for 4K and beyond.",
            specs: [
                "Unmatched Performance: 21,760 CUDA Cores",
                "AI-Powered Graphics: DLSS 3.0",
                "Ray Tracing Excellence",
                "Massive GDDR6X Memory",
                "Advanced Cooling System",
                "TUF Durability: Military-grade components"
            ],
            options: {
                "4090 16GB": 0,
                "4090 24GB": 60000,
                "4090 32GB": 90000      
                    
            },
            link: "https://www.asus.com/motherboards-components/graphics-cards/tuf-gaming/tuf-rtx4090-24g-gaming/"
        },
        "sam-ssd980-500": {
            title: "Samsung 980 500GB NVMe SSD",
            images: ["images/sam_980_500.png"],
            basePrice: 18000,  
            warranty: "2 Year Manufacturer Warranty",
            description: "The Samsung 980 500GB SSD is small enough to fit into even the tightest of spaces. This makes it perfect for use in laptops, Ultrabook, and other mobile devices.It features an NVMe interface, which provides faster data transfer rates than traditional SATA-based solid-state drives.With read speeds of up to 3,500 MB/s and write speeds of up to 3,000 MB/s, this SSD can handle even the most demanding workloads.",
            specs: [
                "980 PCIe 3.0 NVMe SSD",
                "500GB Storage Capacity",
                "M.2 2280 Form Factor",
                "PCIe 3.0 Interface",
                "1.5 Million Hours Reliability (MTBF)",
            ],
            options: {
                "-No options-": 0,      
                    
            },
            link: "https://www.samsung.com/us/computing/memory-storage/solid-state-drives/980-pcie-3-0-nvme-gaming-ssd-500gb-mz-v8v500b-am/?msockid=2a1c71fc14b564e41daf650315b46520"
        },

    };

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    if (products[productId]) {
        const product = products[productId];

        document.getElementById("product-title").textContent = product.title;
        document.getElementById("product-warranty").textContent = product.warranty;
        document.getElementById("product-description").textContent = product.description;
        document.getElementById("learn-more-link").href = product.link;
        document.getElementById("learn-more-link").textContent = `Learn more`;

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

        
        const specsList = document.getElementById("product-specs");
        specsList.innerHTML = ""; 
        product.specs.forEach(spec => {
            const li = document.createElement("li");
            li.textContent = spec;
            specsList.appendChild(li);
        });

    } else {
        console.error("Product Not Found!");
        document.querySelector(".product-details").innerHTML = "<h2>Product Not Found</h2>";
    }
});
