const products = {
    "gaming-laptops": [
        {
            id: "tuf-f15",
            brand: "Asus",
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
        {
            id: "legion-5",
            brand: "Lenovo",
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
            link: "https://www.lenovo.com/lk/en/c/laptops/legion-laptops/legion-5-series/"
        },
        {
            id: "rog-g16",
            brand: "Asus",
            title: "ASUS ROG Strix G16",
            images: ["images/rog_g16_1.png", "images/rog_g16_2.png"],
            basePrice: 500000,
            warranty: "4 Year Asus International Warranty",
            description: "The ASUS ROG Strix G16 is a high-performance gaming laptop designed for gamers and creators who demand power, speed, and a futuristic design. Built with the latest Intel Core 13th Gen processors and NVIDIA GeForce RTX 40-Series GPUs, it delivers outstanding gaming performance, high frame rates, and smooth multitasking.",
            specs: [
                "Processor: Intel i7,i9 High performance",
                "Graphics: NVIDIA GeForce RTX 4070 12GB",
                "Memory: 16GB,32GB DDR5",
                "Storage: 1TB,2TB NVMe SSD",
                "Display: 16″ QHD+ 240Hz G-Sync",
                "Keyboard: RGB backlit",
                "Audio: Smart Amp Technology",
                "Connectivity: Wi-Fi 6, Bluetooth 5.1",
                "Ports: USB-C, USB-A, HDMI, Ethernet",
                "Operating System: Windows 11"
            ],
            options: {
                "i7 13980HX 16GB 1TB SSD": 0,
                "i7 13650HX 32GB 2TB SSD": 65000,
		        "i9 13980HX 32GB 2TB SSD": 150000
            },
            link: "https://rog.asus.com/us/laptops/rog-strix/rog-strix-g16-2023-series/"
        },
        {
            id: "katana-15",
            brand: "MSI",
            title: "MSI Katana 15 B13VFK I7 13TH GEN RTX 4060 8GB",
            images: ["images/katana_15_2.png", "images/katana_15_1.png"],
            basePrice: 420000,
            warranty: "2 Year MSI International Warranty",
            description: "A powerful gaming laptop featuring Intel i7 and RTX 4060, offering smooth gaming performance.",
            specs: [
                "Processor: Intel Core i7-13620H 10 Core (24M Cache, up to 4.90 GHz)",
                "Graphics: NVIDIA GeForce RTX 4060 8GB GDDR6",
                "Memory: 16GB,32GB DDR5",
                "Storage: 1TB M.2 NVME GEN4 SSD",
                "Display: 15.6 1080P 144Hz  NTSC IPS Level",
                "Keyboard: 4-Zone RGB backlit",
                "Audio: Dolby Atmos",
                "Connectivity: Wi-Fi 6, Bluetooth 5.1",
                "Ports: USB-C, USB-A, HDMI, Ethernet",
                "Operating System: Windows 11"
            ],
            options: {
                "16GB Memory": 0,
                "32GB Memory": 20000,
		        "64GB Memory": 40000
            },
            link: "https://www.msi.com/Laptop/Katana-15-B13VX"
        },
        {
            id: "zephyrus-g16",
            brand: "Asus",
            title: "Asus ROG Zephyrus G16",
            images: ["images/zephyrus_g16_1.png"],
            basePrice: 630000,
            warranty: "3 Year Asus International Warranty",
            description: "The 2025 Zephyrus G16 and Windows 11 Pro make gaming, creation, and everything in between a breeze. Featuring an Intel® Core™ Ultra 9 processor 285H and up to an NVIDIA® GeForce RTX™ 5090 Laptop GPU, this 16-inch machine can easily handle the latest games and cutting-edge creative software alike. The Zephyrus G16 can effortlessly transcribe voice notes into text documents, save valuable time during a video render, and play the latest AAA games at blazingly fast refresh rates. The future is here.",
            specs: [
                "Processor: Intel® Core™ Ultra 9 Processor 285H 2.9 GHz",
                "Graphics: NVIDIA® GeForce RTX™ 50- series Laptop GPU",
                "Intel NPU",
                "Memory: 64GB,32GB DDR5",
                "Storage: 2TB M.2 NVME GEN4 SSD",
                "Display: 16-inch OLED screen, with a 240Hz refresh rate and G-SYNC",
                "Keyboard: 4-Zone RGB backlit",
                "Audio: Smart Amp Technology, Dolby Atmos",
                "Connectivity: Wi-Fi 6, Bluetooth 5.1",
                "Ports: USB-C, USB-A, HDMI, Ethernet",
                "Operating System: Windows 11"
            ],
            options: {
                "32GB Memory, RTX 5090 12GB": 0,
                "32GB Memory, RTX 5090 24GB": 98000,
		        "64GB Memory, RTX 5090 32GB": 150000
            },
            link: "https://rog.asus.com/laptops/rog-zephyrus/rog-zephyrus-g16-2025-gu605/"
        },
        {
            id: "alienware-m16",
            brand: "Dell",
            title: "Alienware m16 R2 Gaming Laptop",
            images: ["images/alienware_m16_1.png","images/alienware_m16_2.png","images/alienware_m16_3.png"],
            basePrice: 550000,
            warranty: "1 Year Hardware Warranty + 2 Year Service Warranty",
            description: "Featuring Intel® Core™ Ultra H Processors with built-in AI for endurance gaming. The redesigned chassis with updated thermals and Stealth Mode let you seamlessly transitions from gaming to productivity to anything you love to do.",
            specs: [
                "Processor: Intel® Core™ Ultra 16 core Processors",
                "Graphics: NVIDIA® GeForce RTX™ 40- series Laptop GPU",
                "Intel NPU",
                "Memory: 32GB DDR5",
                "Storage: 2TB M.2 NVME GEN4 SSD",
                "Display: 16-inch QHD+ 240Hz",
                "Keyboard: RGB backlit",
                "Audio: Stereo speakers, 2 W x 2 = 4 W total",
                "Connectivity: Wi-Fi 6, Bluetooth 5.1",
                "Ports: USB-C, USB-A, HDMI, Ethernet",
                "Operating System: Windows 11"
            ],
            options: {
                "Intel Ultra 7, RTX 4060 8GB": 0,
                "Intel Ultra 9, RTX 4070 12GB": 80000,
		        "Intel Ultra 9, RTX 4090 16GB": 150000
            },
            link: "https://www.dell.com/en-us/shop/cty/pdp/spd/alienware-m16-r2-laptop"
        }

    ],
    
    "graphics-cards": [
        {
            id: "tuf-rtx4090",
            brand: "Asus",
            title: "ASUS TUF Gaming RTX 4090",
            images: ["images/tuf_4090_1.png", "images/tuf_4090_2.png"],
            basePrice: 320000,  
            warranty: "2 Year Asus International Warranty",
            description: "The ASUS TUF Gaming GeForce RTX 4090 is a high-performance gaming and workstation GPU, built for extreme power, durability, and cooling efficiency.",
            specs: [
                "CUDA Cores: 21,760",
                "Memory: 24GB GDDR6X",
                "Ray Tracing & DLSS 3.0",
                "PCI Express 4.0",
                "TUF Military-Grade Components"
            ],
            options: {
                "Stock Edition": 0,
                "OC Edition": 15000
            },
            link: "https://www.asus.com/motherboards-components/graphics-cards/tuf-gaming/tuf-rtx4090-24g-gaming/"
        },
        {
            id: "pny-5090",
            brand:"PNY",
            title: "PNY GeForce RTX 5090 12GB",
            images: ["images/pny_5090_1.png", "images/pny_5090_2.png"],
            basePrice: 520000,  
            warranty: "2 Year Manufacturer Warranty",
            description: "The NVIDIA® GeForce RTX™ 5090 is the most powerful GeForce GPU ever made, bringing game-changing capabilities to gamers and creators.",
            specs: [
                "NVIDIA Blackwell Architecture",
                "12GB GDDR7 Memory",
                "PCI Express 5.0",
                "3x Display Port 1x HDMI",
                "21,760 CUDA® Cores",
                "600 W Thermal Design Power"
            ],
            options: {
                "-No options-": 0
            },
            link: "https://www.pny.com/geforce-rtx-5090-models"
        },
        {
            id: "msi-suprim-rtx4090",
            brand: "MSI",
            title: "MSI GeForce RTX 4090 SUPRIM X",
            images: ["images/suprim_4090_1.png", "images/suprim_4090_2.png"],
            basePrice: 340000,  
            warranty: "3 Year MSI International Warranty",
            description: "The MSI GeForce RTX 4090 SUPRIM X is built for maximum performance, featuring a premium cooling system, advanced ray tracing, and ultra-high frame rates for 4K gaming.",
            specs: [
                "CUDA Cores: 21,760",
                "Memory: 24GB GDDR6X",
                "Clock Speed: Boost Clock 2625 MHz",
                "PCI Express 4.0",
                "Triple Fan Cooling",
                "Metal Backplate with RGB Lighting"
            ],
            options: {
                "Stock Edition": 0,
                "OC Edition": 20000
            },
            link: "https://www.msi.com/Graphics-Card/GeForce-RTX-4090-SUPRIM-X-24G"
        },
        
        {
            id: "gigabyte-aorus-rtx4080",
            brand: "Gigabyte",
            title: "Gigabyte AORUS GeForce RTX 4080 Master",
            images: ["images/aorus_4080_1.png", "images/aorus_4080_2.png"],
            basePrice: 280000,  
            warranty: "3 Year Gigabyte International Warranty",
            description: "The Gigabyte AORUS GeForce RTX 4080 Master features advanced cooling, AI-powered graphics acceleration, and ultra-fast memory for next-generation gaming.",
            specs: [
                "CUDA Cores: 14,080",
                "Memory: 16GB GDDR6X",
                "Windforce 3X Cooling System",
                "AI Frame Generation (DLSS 3.0)",
                "PCI Express 4.0",
                "RGB Fusion 2.0 Lighting"
            ],
            options: {
                "Standard Edition": 0,
                "OC Edition": 12000
            },
            link: "https://www.gigabyte.com/Graphics-Card/GV-N4080AORUS-M-16GD"
        }
        
    ],

    "ssds-rams": [
        {
            id: "sam-ssd980-500",
            brand: "samsung",
            title: "Samsung 980 500GB NVMe SSD",
            images: ["images/sam_980_500.png"],
            basePrice: 18000,  
            warranty: "2 Year Manufacturer Warranty",
            description: "The Samsung 980 500GB SSD features NVMe interface, providing faster data transfer rates than traditional SATA-based solid-state drives.",
            specs: [
                "980 PCIe 3.0 NVMe SSD",
                "500GB Storage Capacity",
                "M.2 2280 Form Factor",
                "PCIe 3.0 Interface",
                "1.5 Million Hours Reliability (MTBF)"
            ],
            options: {
                "-No options-": 0
            },
            link: "https://www.samsung.com/us/computing/memory-storage/solid-state-drives/980-pcie-3-0-nvme-gaming-ssd-500gb-mz-v8v500b-am/"
        },
        {
            id: "wd-black-sn850x",
            brand: "WD",
            title: "WD Black SN850X 500GB, 1TB, 2TB NVMe SSD",
            images: ["images/wd_sn850x.png"],
            basePrice: 27000,  
            warranty: "5 Year Manufacturer Warranty",
            description: "The WD Black SN850X NVMe SSD is designed for high-performance gaming with ultra-fast speeds, PCIe Gen4 technology, and improved thermal efficiency.",
            specs: [
                "WD Black SN850X PCIe 4.0 NVMe SSD",
                "500GB,1TB,2TB Storage Capacity",
                "M.2 2280 Form Factor",
                "PCIe 4.0 Interface",
                "Read Speed: Up to 7,300 MB/s",
                "Write Speed: Up to 6,300 MB/s",
                "Heatsink Option for Cooling"
            ],
            options: {
                "500GB": 0,
                "1TB": 12000,
                "2TB": 27000
            },
            link: "https://www.westerndigital.com/products/internal-drives/wd-black-sn850x-nvme-ssd"
        },
        
        {
            id: "crucial-p5-plus-2tb",
            brand: "Micron",
            title: "Crucial P5 Plus 2TB NVMe SSD",
            images: ["images/crucial_p5_plus_2tb.png"],
            basePrice: 55000,  
            warranty: "5 Year Crucial International Warranty",
            description: "The Crucial P5 Plus 2TB NVMe SSD delivers extreme performance with PCIe Gen4 speeds, superior reliability, and optimal gaming responsiveness.",
            specs: [
                "Crucial P5 Plus PCIe 4.0 NVMe SSD",
                "2TB Storage Capacity",
                "M.2 2280 Form Factor",
                "PCIe 4.0 Interface",
                "Read Speed: Up to 6,600 MB/s",
                "Write Speed: Up to 5,000 MB/s",
                "Advanced Thermal Management"
            ],
            options: {
                "-No options-": 0
            },
            link: "https://www.crucial.com/products/ssd/crucial-p5-plus-nvme-ssd"
        }
        
    ]
};
