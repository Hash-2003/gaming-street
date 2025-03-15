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
        },

        {
            id: "lenovo-loq-15irx9",
            brand: "Lenovo",
            title: "Lenovo LOQ 15IRX9 Gaming Laptop",
            images: ["images/lenovo_loq15_1.png", "images/lenovo_loq15_2.png", "images/lenovo_loq15_3.png"],
            basePrice: 320000,  
            warranty: "2-Year Lenovo International Warranty",
            description: "The Lenovo LOQ 15IRX9 gaming laptop is built for gamers with up to Intel® Core™ i7-14700HX processors and NVIDIA GeForce RTX™ 40 Series Laptop GPUs, delivering a powerful and immersive gaming experience.",
            specs: [
                "Processor: Up to Intel® Core™ i7-14700HX",
                "Operating System: Up to Windows 11 Pro",
                "Graphics: NVIDIA® GeForce RTX® 4060 Laptop GPU 8GB GDDR6 (115W) / RTX® 4050 6GB GDDR6 (95W) / RTX® 3050 8GB GDDR6 (95W)",
                "Memory: Up to 16GB 5600MHz DDR5 (2 x SO-DIMM)",
                "Storage: Up to 1TB M.2 2242 PCIe Gen 4 SSD (2 x PCIe Gen 4 slots)",
                "Battery: 4-cell 60Whr, Super Rapid Charge Pro (40% in 10 min, 100% in 60 min)",
                "Display: 15.6” WQHD (2560x1440) IPS, 165Hz, 100% sRGB, G-SYNC / 15.6” FHD (1920x1080) IPS, 144Hz, 100% sRGB",
                "Audio: 2 x 2W speakers with Nahimic® Audio",
                "Camera: Up to 1080p with E-Shutter",
                "Connectivity: WiFi 6, Bluetooth 5.1",
                "Ports: USB-A 3.2 Gen 1, USB-C 3.2 Gen 2, HDMI 2.1, Ethernet, Headphone/mic combo",
                "Keyboard: 1.5mm key travel, White backlight (Optional: 4-zone RGB)"
            ],
            options: {
                "RTX 3050, 8GB RAM, 512GB SSD": 0,
                "RTX 4050, 16GB RAM, 1TB SSD": 45000,
                "RTX 4060, 16GB RAM, 1TB SSD": 90000
            },
            link: "https://www.lenovo.com/lk/en/p/laptops/loq-laptops/lenovo-loq-15irx9/len101q0005#tech_specs"
        },

        {
            id: "hp-victus-15t-fa100",
            brand: "HP",
            title: "Victus by HP Gaming Laptop 15t-fa100",
            images: ["images/hp_victus15_1.png", "images/hp_victus15_2.png"],
            basePrice: 220000,  
            warranty: "1-Year HP Warranty",
            description: "The Victus by HP Gaming Laptop 15t-fa100 is designed for casual to pro gamers, offering powerful hardware configurations, customizable options, and sleek aesthetics.",
            specs: [
                "Processor: Intel® Core™ i5-13500H (4.7 GHz, 12 Cores, 16 Threads) / Intel® Core™ i7-13700H (5.0 GHz, 14 Cores, 20 Threads)",
                "Graphics: NVIDIA® GeForce RTX™ 3050 6GB / RTX™ 4050 6GB",
                "Memory: 8GB DDR4-3200 SDRAM (2x4GB) / 16GB DDR4-3200 SDRAM (2x8GB)",
                "Display: 15.6” FHD (1920 x 1080), IPS, micro-edge, anti-glare, 250 nits / 144Hz, 9ms response time, 250 nits",
                "Storage: 512GB PCIe® NVMe™ TLC M.2 SSD / 1TB PCIe® NVMe™ M.2 SSD",
                "Battery: 4-cell, 70Wh Li-ion polymer",
                "Keyboard: Full-size, backlit, mica silver keyboard with numeric keypad",
                "Audio: Dual speakers with B&O tuning",
                "Camera: HP Wide Vision 720p HD camera with dual array digital microphones",
                "Connectivity: Wi-Fi 6 / Intel® Wi-Fi 6E AX211 (2x2), Bluetooth® 5.3",
                "Ports: HDMI 2.1, USB-C, USB-A, Ethernet, Headphone/mic combo",
                "Operating System: Windows 11 Home / Windows 11 Pro"
            ],
            options: {
                "i5, RTX 3050, 8GB RAM, 512GB SSD": 0,
                "i5, RTX 4050, 16GB RAM, 1TB SSD": 20000,
                "i7, RTX 3050, 8GB RAM, 512GB SSD": 35000,
                "i7, RTX 4050, 16GB RAM, 1TB SSD": 55000
            },
            link: "https://www.hp.com/us-en/shop/pdp/victus-by-hp-gaming-laptop-pc-15t-fa100-156-771t0av-1"
        },

        {
            id: "omen-transcend-14",
            brand: "HP",
            title: "HP OMEN Transcend 14 Gaming Laptop",
            images: ["images/omen_transcend14_1.png", "images/omen_transcend14_2.png"],
            basePrice: 374999,  
            warranty: "1-Year HP Limited Hardware Warranty",
            description: "The OMEN Transcend 14 is a high-performance gaming and content creation laptop featuring a stunning 3K OLED display, Intel Core Ultra 9 processor, and NVIDIA GeForce RTX 4070 GPU.",
            specs: [
                "Processor: Intel® Core™ Ultra 9 185H (5.1 GHz, 16 Cores, 22 Threads, 24MB L3 Cache)",
                "Graphics: Intel® Arc™ Graphics (Integrated) / NVIDIA® GeForce RTX™ 4070 Laptop GPU (8GB GDDR6)",
                "Memory: 32GB LPDDR5x-7467 MT/s (Onboard)",
                "Storage: 2TB PCIe® Gen4 NVMe™ Performance M.2 SSD",
                "Display: 14” 3K (2880 x 1800) OLED, 48-120Hz, 0.2ms response, HDR 500, 100% DCI-P3, 400 nits",
                "Battery: 6-cell, 71Wh Li-ion polymer (Up to 8 hours 15 mins usage, Up to 13 hours video playback)",
                "Keyboard: Full-size, 4-zone RGB backlit keyboard with 26-Key Rollover Anti-Ghosting",
                "Audio: DTS:X® Ultra, HyperX Dual Speakers, HP Audio Boost",
                "Camera: HP True Vision 1080p FHD IR camera with noise reduction",
                "Connectivity: Intel® Wi-Fi 7 BE200 (2x2), Bluetooth® 5.4",
                "Ports: 1 USB-A 10Gbps, 1 USB-C 40Gbps (Thunderbolt 4), 1 USB-C 10Gbps, 1 HDMI 2.1, 1 Headphone/mic combo",
                "Operating System: Windows 11 Home"
            ],
            options: {
                "Shadow Black, RTX 4070, 32GB RAM, 2TB SSD": 0
            },
            link: "https://www.hp.com/us-en/shop/pdp/omen-transcend-laptop-14-fb0097nr?jumpid=ma_hp-gaming_product-tile_laptops_12_9q056ua_omen-transcend-lapto"
        },

        {
            id: "predator-helios-16-ai",
            brand: "Acer",
            title: "Acer Predator Helios 16 AI Gaming Laptop",
            images: ["images/predator_helios_16_3.png", "images/predator_helios_16_2.png", "images/predator_helios_16_1.png"],
            basePrice: 620000,  
            warranty: "1-Year Acer Limited Warranty",
            description: "The Predator Helios 16 AI is an AI-powered gaming laptop featuring Intel Core Ultra 9, RTX 5090 GPU, and an immersive OLED display, built for extreme gaming and content creation.",
            specs: [
                "Processor: Intel® Core™ Ultra 9 275HX (5.4 GHz, 24 Cores, 8P + 16E)",
                "Graphics: NVIDIA® GeForce RTX™ 5090 Laptop GPU (AI-powered, DLSS 4, Studio Support)",
                "Memory: Up to 32GB DDR5",
                "Storage: Up to 2TB PCIe Gen 4 NVMe SSD",
                "Display: 16” WQXGA (2560 x 1600) OLED, 240Hz, 3ms response, 100% DCI-P3, G-SYNC",
                "Cooling: 6th Gen AeroBlade™ 3D Fan with Adaptive Blades",
                "Keyboard: MagKey™ 4.0 Swappable WASD & Arrow Keys, Per-Key RGB Lighting",
                "Audio: DTS:X® Ultra, AI-powered PurifiedVoice™ 2.0",
                "Connectivity: Thunderbolt™ 5 (120Gbps), Wi-Fi 7, Ethernet RJ45",
                "Ports: 2 x USB-C (Thunderbolt™ 5), 2 x USB-A 3.2, HDMI 2.1, Headphone Jack",
                "AI Features: Intel® Application Optimization, Acer ProCam™, AI Voice Enhancement",
                "Battery: Fast Charge, 40% in 10 min, 100% in 60 min",
                "Operating System: Windows 11 Home"
            ],
            options: {
                "RTX 5090, 32GB RAM, 2TB SSD": 0,
                "RTX 5090, 64GB RAM, 4TB SSD": 85000
            },
            link: "https://www.acer.com/us-en/predator/laptops/helios/helios-16-ai"
        },

        {
            id: "lenovo-slim7i-gen8",
            brand: "Lenovo",
            title: "Lenovo Legion Slim 7i Gen 8 (16″ Intel)",
            images: ["images/legion_slim7i_1.png", "images/legion_slim7i_2.png", "images/legion_slim7i_3.png"],
            basePrice: 475000,  
            warranty: "2 Year Lenovo International Warranty",
            description: "The Lenovo Legion Slim 7i Gen 8 is a powerful 16-inch AI-enhanced gaming laptop, featuring 13th Gen Intel® Core™ processors and NVIDIA® GeForce RTX™ 40 Series graphics with a high-refresh-rate display for an immersive gaming experience.",
            specs: [
                "Processor: Up to 13th Gen Intel® Core™ i9-13900H",
                "Graphics: Up to NVIDIA® GeForce RTX™ 4070 Laptop GPU 8GB GDDR6",
                "Memory: Up to 32GB 5200MHz DDR5 (16GB onboard + 16GB slot)",
                "Storage: Up to 1TB PCIe SSD Gen 4",
                "Battery: Up to 99.99Whr with Super Rapid Charge",
                "Display: 16″ WQXGA (2560 x 1600) IPS, 240Hz VRR, Dolby Vision®",
                "Cooling: Legion ColdFront 5.0 Thermal System",
                "Keyboard: Lenovo Legion TrueStrike RGB Backlit Keyboard",
                "Audio: 2 x 2W Harman® Speaker with Nahimic Audio",
                "Camera: 1080p Webcam with E-Shutter & Tobii Horizon Support",
                "Connectivity: WiFi 7, Bluetooth 5.1, Thunderbolt™ 4, HDMI 2.1",
                "Ports: USB-C, USB-A, SD Card Reader, Audio Combo Jack"
            ],
            options: {
                "i7-13700H | RTX 4060 | 16GB RAM | 512GB SSD": 0,
                "i9-13900H | RTX 4070 | 32GB RAM | 1TB SSD": 85000
            },
            link: "https://www.lenovo.com/lk/en/p/laptops/legion-laptops/legion-slim-series-laptops/lenovo-legion-slim-7i-gen-8-(16-inch-intel)/len101g0028"
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
        },

        {
            id: "rog-rtx4080-super",
            brand: "Asus",
            title: "ROG Strix GeForce RTX 4080 SUPER 16GB OC Edition",
            images: ["images/rog_rtx4080_1.png", "images/rog_rtx4080_2.png"],
            basePrice: 330000,  
            warranty: "3 Year Asus International Warranty",
            description: "The ROG Strix GeForce RTX 4080 SUPER 16GB GDDR6X OC Edition delivers top-tier AI performance, ultra-efficient cooling, and cutting-edge graphics technology with DLSS 3 and full ray tracing.",
            specs: [
                "AI Performance: 865 AI TOPS",
                "4th Gen Tensor Cores: Up to 4x performance with DLSS 3",
                "3rd Gen RT Cores: Up to 2X ray tracing performance",
                "OC Mode: 2670 MHz (OC mode) / 2640 MHz (Default mode)",
                "Axial-tech fans with 23% more airflow",
                "Patented vapor chamber for superior cooling",
                "3.5-slot massive heatsink design",
                "Digital power control with high-current power stages",
                "Auto-Extreme precision manufacturing for high reliability",
                "Memory: 16GB GDDR6X",
                "CUDA Cores: 10,240",
                "Memory Speed: 23 Gbps",
                "Memory Interface: 256-bit",
                "Display Outputs: 2 x HDMI 2.1a, 3 x DisplayPort 1.4a",
                "Max Resolution: 7680 x 4320",
                "Power Supply Requirement: 850W",
                "Power Connector: 1 x 16-pin",
                "ARGB Aura Sync Support",
                "Dimensions: 357.6 x 149.3 x 70.1mm"
            ],
            options: {
                "-No options-": 0
            },
            link: "https://rog.asus.com/us/graphics-cards/graphics-cards/rog-strix/rog-strix-rtx4080s-o16g-gaming/"
        },
        
        
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
            brand: "SanDisk",
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
            brand: "Crucial",
            title: "Crucial P5 Plus 2TB NVMe SSD",
            images: ["images/crucial_p5_1.png","images/crucial_p5_2.png"],
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
            link: "https://www.crucial.com/products/ssd/crucial-p5-plus-ssd"
        },
        {
            id: "crucial-ddr5-6000-ram",
            brand: "Crucial",
            title: "Crucial Pro DDR5-6000 64GB Kit UDIMM:Gaming Ram",
            images: ["images/crucial_ram_1.png"],
            basePrice: 60000,  
            warranty: "4 Year Crucial International Warranty",
            description: "Push performance to the next level with the blazing speed and massive bandwidth of Crucial DDR5 Pro OC Gaming Memory. Mobilize the power of low latency to beat the clock and fuel your next win instead of worrying about performance bottlenecks. This powerful, high-performance memory supports next-gen multi-core CPUs and stable overclocking with Intel® XMP 3.0 and AMD EXPO™. Available in black or white.",
            specs: [
                "64GB Memory",
                "UDIMM OC",
                "Speed: 6400MHz",
                "Advanced Thermal Management"
            ],
            options: {
                "-No options-": 0
            },
            link: "https://www.crucial.com/memory/ddr5/CP2K32G60C40U5W?_gl=1*2glgec*_up*MQ..*_ga*MzYwMzg0MTcyLjE3NDE5NDY2ODE.*_ga_6H4RYWV7QY*MTc0MTk0NjY4MS4xLjEuMTc0MTk0NzQwOC4wLjAuMTgwNjAxNDgzNw.."
        },
        {
            id: "adata-ddr5_ram",
            brand: "ADATA",
            title: "ADATA DDR5 32GB 5600MHZ LAPTOP Ram",
            images: ["images/adata_lapram_2.png","images/adata_lapram_1.png"],
            basePrice: 40000,  
            warranty: "2 Year Shop Warranty",
            description: "The Crucial P5 Plus 2TB NVMe SSD delivers extreme performance with PCIe Gen4 speeds, superior reliability, and optimal gaming responsiveness.",
            specs: [
                
                "Memory Type: DDR5",
                "SO-DIMM Form Factor",
                "Capacity: 32GB",
                "Speed: 5600 MHz",
                "Operating Temperature: 0°C to 85°C"
            ],
            options: {
                "-No options-": 0
            },
            link: "https://www.adata.com/en/consumer/category/computer-memory/dram-module-ddr5-5600-so-dimm/"
        },
        {
            id: "samsung-external-t7",
            brand: "Samsung",
            title: "SAMSUNG T7 Shield 2TB,4TB Portable SSD",
            images: ["images/sam_t7_1.png","images/sam_t7_2.png"],
            basePrice: 75000,  
            warranty: "2 Year Samsung International Warranty",
            description: "Tough, fast, and compact. The all new rugged PSSD T7 Shield is built to endure with the space to create thanks to an IP65 rating for Dust and Water resistance.",
            specs: [
                "USB3.2 Gen3",
                "2TB,4TB Storage Capacity",
                "Weight: 94g",
                "PCIe 4.0 Interface",
                "Speed: 10Gb/s",
                "Encryption: AES 256-bit hardware encryption",
            ],
            options: {
                "2TB": 0,
                "4TB": 27500
            },
            link: "https://www.samsung.com/us/computing/memory-storage/portable-solid-state-drives/portable-ssd-t7-shield-usb-3-2-4tb-black-mu-pe4t0s-am/"
        }
        
    ],
    "processors": [
    {
        id: "amd-ryzen7-9800x3d",
        brand: "AMD",
        title: "AMD Ryzen 7 9800X3D",
        images: ["images/amd_ry7.png"],
        basePrice: 185000,
        warranty: "3 Year AMD International Warranty",
        description: "The AMD Ryzen 7 9800X3D features 3D V-Cache technology, offering superior gaming performance with 8 cores and 16 threads, making it an excellent choice for high-end gaming and content creation.",
        specs: [
            "Cores: 8",
            "Threads: 16",
            "Base Clock: 4.2 GHz",
            "Max Boost Clock: Up to 5.2 GHz",
            "Cache: 96MB L3 Cache",
            "TDP: 120W",
            "Socket: AM5",
            "PCIe 5.0 Support"
        ],
        options: {
            "-No options-": 0
        },
        link: "https://www.amd.com/en/products/processors/desktops/ryzen/9000-series/amd-ryzen-7-9800x3d.html"
    },

    {
        id: "amd-ryzen9-9950x",
        brand: "AMD",
        title: "AMD Ryzen 9 9950X",
        images: ["images/ryz_9.png"],
        basePrice: 235000,
        warranty: "3 Year AMD International Warranty",
        description: "The AMD Ryzen 9 7950X is a high-end desktop processor with 16 cores and 32 threads, delivering incredible performance for gaming, streaming, and multi-threaded workloads.",
        specs: [
            "Cores: 16",
            "Threads: 32",
            "Base Clock: 4.5 GHz",
            "Max Boost Clock: Up to 5.7 GHz",
            "Cache: 80MB (L2+L3)",
            "TDP: 170W",
            "Socket: AM5",
            "PCIe 5.0 Support"
        ],
        options: {
            "-No options-": 0
        },
        link: "https://www.amd.com/en/products/processors/desktops/ryzen/9000-series/amd-ryzen-9-9950x.html"
    },

    {
        id: "intel-ultra7-265k",
        brand: "Intel",
        title: "Intel Core Ultra 7 265K",
        images: ["images/intel_u7.png"],
        basePrice: 134500,
        warranty: "3 Year Intel International Warranty",
        description: "The Intel Core Ultra 7 265K is a high-performance desktop processor featuring AI-enhanced computing, high core counts, and cutting-edge Intel technologies for gaming and professional workloads.",
        specs: [
            "Cores: 20 (8 Performance + 12 Efficient)",
            "Threads: 20",
            "Base Clock: 3.9 GHz (P-Cores), 3.3 GHz (E-Cores)",
            "Max Turbo Frequency: Up to 5.5 GHz",
            "Cache: 30MB Intel Smart Cache",
            "Total L2 Cache: 36MB",
            "TDP: 125W (Base), 250W (Turbo)",
            "Memory Support: Up to 192GB DDR5 6400 MT/s",
            "PCI Express: Gen 5.0 & 4.0 (24 Lanes)",
            "Integrated Graphics: Intel Graphics with 4 Xe-Cores",
            "Graphics Max Frequency: 2.0 GHz",
            "Display Support: 4K @ 60Hz (HDMI), 8K @ 60Hz (DP)",
            "AI Processing: Intel AI Boost, Deep Learning Support",
            "Thunderbolt 4 Support: Yes",
            "Socket: LGA1851 (15th Gen Intel)"
        ],
        options: {
            "-No options-": 0
        },
        link: "https://www.intel.com/content/www/us/en/products/sku/241063/intel-core-ultra-7-processor-265k-30m-cache-up-to-5-50-ghz/specifications.html"
    },

    {
        id: "intel-ultra9-285k",
        brand: "Intel",
        title: "Intel Core Ultra 9 285K",
        images: ["images/intel_u9.png"],
        basePrice: 194000,
        warranty: "3 Year Intel International Warranty",
        description: "The Intel Core Ultra 9 285K is a high-end desktop processor designed for extreme gaming, AI-powered applications, and professional workloads with cutting-edge performance and efficiency.",
        specs: [
            "Cores: 24 (8 Performance + 16 Efficient)",
            "Threads: 24",
            "Base Clock: 3.7 GHz (P-Cores), 3.2 GHz (E-Cores)",
            "Max Turbo Frequency: Up to 5.7 GHz",
            "Intel Turbo Boost Max 3.0 Frequency: 5.6 GHz",
            "Cache: 36MB Intel Smart Cache",
            "Total L2 Cache: 40MB",
            "TDP: 125W (Base), 250W (Turbo)",
            "Memory Support: Up to 192GB DDR5 6400 MT/s",
            "PCI Express: Gen 5.0 & 4.0 (24 Lanes)",
            "Integrated Graphics: Intel Graphics with 4 Xe-Cores",
            "Graphics Max Frequency: 2.0 GHz",
            "Display Support: 4K @ 60Hz (HDMI), 8K @ 60Hz (DP)",
            "AI Processing: Intel AI Boost, Deep Learning Support",
            "Thunderbolt 4 Support: Yes",
            "Socket: LGA1851 (15th Gen Intel)"
        ],
        options: {
            "-No options-": 0
        },
        link: "https://www.intel.com/content/www/us/en/products/sku/241060/intel-core-ultra-9-processor-285k-36m-cache-up-to-5-70-ghz/specifications.html"
    },
    {
        id: "amd-ryzen5-8500g",
        brand: "AMD",
        title: "AMD Ryzen 5 8500G",
        images: ["images/ryz_5.png"],
        basePrice: 57500,
        warranty: "3 Year AMD International Warranty",
        description: "The AMD Ryzen 5 8500G is a 6-core, 12-thread processor with built-in Radeon graphics, designed for gaming, content creation, and efficient multitasking.",
        specs: [
            "Cores: 6",
            "Threads: 12",
            "Base Clock: 3.5 GHz",
            "Max Boost Clock: Up to 5.0 GHz",
            "Cache: 6MB L2, 16MB L3",
            "Default TDP: 65W",
            "Memory Support: Up to DDR5 6400 MT/s",
            "PCI Express: Gen 4.0",
            "Integrated Graphics: AMD Radeon Graphics",
            "Max Operating Temperature: 95°C",
            "Socket: AM5",
            "Supported OS: Windows 11, Windows 10, RHEL, Ubuntu"
        ],
        options: {
            "-No options-": 0
        },
        link: "https://www.amd.com/en/products/processors/desktops/ryzen/8000-series/amd-ryzen-5-8500g.html"
    }
    
    
],
"accessories": [
    {
        id: "logitech-gpro-x",
        brand: "Logitech",
        title: "Logitech G Pro X Wireless Gaming Headset",
        images: ["images/logi_headset_1.png", "images/logi_headset_2.png"],
        basePrice: 42000,
        warranty: "2 Year Logitech Warranty",
        description: "The Logitech G Pro X Wireless headset delivers pro-level sound and premium comfort with Blue VO!CE technology, DTS surround sound, and a lightweight design.",
        specs: [
            "Connectivity: Wireless (Lightspeed 2.4GHz)",
            "Drivers: 50mm PRO-G",
            "Surround Sound: DTS Headphone:X 2.0",
            "Battery Life: Up to 20 hours",
            "Microphone: Detachable with Blue VO!CE",
            "Compatibility: PC, PlayStation, Mobile"
        ],
        options: {
            "-No options-": 0
        },
        link: "https://www.logitechg.com/en-us/products/gaming-audio/pro-x-wireless-headset.981-000906.html"
    },

    {
        id: "razer-huntsman-mini",
        title: "Razer Huntsman Mini Gaming Keyboard",
        images: ["images/razer_mini_key_1.png", "images/razer_mini_key_2.png"],
        basePrice: 38000,
        warranty: "2 Year Razer Warranty",
        description: "The Razer Huntsman Mini is a compact 60% gaming keyboard with Razer Optical switches, designed for ultra-fast response and durability.",
        specs: [
            "Switch Type: Razer Optical Switches",
            "Keycap Material: Doubleshot PBT",
            "Backlighting: Razer Chroma RGB",
            "Size: 60% compact form factor",
            "Connectivity: USB-C detachable cable",
            "Compatibility: Windows, macOS"
        ],
        options: {
            "Clicky Optical Switches": 0,
            "Linear Optical Switches": 2000
        },
        link: "https://www.razer.com/gaming-keyboards/razer-huntsman-mini"
    },

    {
        id: "corsair-mm700",
        title: "Corsair MM700 RGB Extended Gaming Mousepad",
        images: ["images/corsair_mm700_2.png", "images/corsair_mm700_1.png"],
        basePrice: 14000,
        warranty: "1 Year Corsair Warranty",
        description: "The Corsair MM700 RGB Extended Mousepad features dynamic RGB lighting, a smooth micro-weave surface, and USB passthrough for seamless gaming.",
        specs: [
            "Dimensions: 930mm x 400mm x 4mm",
            "Lighting: Dynamic 3-zone RGB",
            "Surface: Micro-weave cloth for precision",
            "Base: Non-slip rubber",
            "USB Hub: Two USB ports",
            "Compatibility: Windows, macOS"
        ],
        options: {
            "-No options-": 0
        },
        link: "https://www.corsair.com/us/en/p/CH-9417070-WW"
    },

    {
        id: "steelseries-aerox3",
        title: "SteelSeries Aerox 3 Wireless Gaming Mouse",
        images: ["images/steelseries_aerox3_1.png", "images/steelseries_aerox3_2.png"],
        basePrice: 26000,
        warranty: "1 Year SteelSeries Warranty",
        description: "The SteelSeries Aerox 3 Wireless is an ultra-lightweight gaming mouse with fast wireless connectivity and AquaBarrier protection.",
        specs: [
            "Weight: 66g ultralight design",
            "Sensor: TrueMove Air Optical Sensor",
            "DPI: Up to 18,000 CPI",
            "Connectivity: Wireless 2.4GHz / Bluetooth",
            "Battery Life: Up to 200 hours",
            "Compatibility: PC, macOS, PlayStation"
        ],
        options: {
            "Black Edition": 0,
            "White Edition": 1500
        },
        link: "https://steelseries.com/gaming-mice/aerox-3-wireless-2022"
    },

    {
        id: "elgato-streamdeck",
        title: "Elgato Stream Deck MK.2",
        images: ["images/elgato_streamdeck_1.png"],
        basePrice: 55000,
        warranty: "1 Year Elgato Warranty",
        description: "The Elgato Stream Deck MK.2 is a customizable 15-key controller for streamers, video editors, and content creators, allowing quick access to shortcuts and automation.",
        specs: [
            "Keys: 15 customizable LCD keys",
            "Software: Elgato Stream Deck software",
            "Connectivity: USB-C to USB-A",
            "Adjustable Stand: Yes",
            "RGB Lighting: Yes",
            "Compatibility: Windows, macOS"
        ],
        options: {
            "-No options-": 0
        },
        link: "https://www.elgato.com/en/stream-deck"
    },

    {
        id: "logitech-pro-x-superlight-2-dex",
        brand: "Logitech",
        title: "Logitech PRO X SUPERLIGHT 2 DEX",
        images: ["images/logitech_prodex_1.png", "images/logitech_prodex_2.png"],
        basePrice: 45000,  
        warranty: "2-Year Limited Hardware Warranty",
        description: "PRO X SUPERLIGHT 2 DEX is a 60g asymmetrical mouse featuring advanced HERO 2 sensor, robust LIGHTSPEED wireless, and LIGHTFORCE switches while delivering up to 95 hours of battery life.",
        specs: [
            "Onboard memory: 1 Advanced features require Logitech G HUB Software",
            "Buttons: 5",
            "Sensor: HERO 2",
            "Resolution: 100 – 44,000 DPI",
            "Max acceleration: >88 G (Tested on Logitech G640 Gaming Mouse Pad)",
            "Max speed: >888 IPS (Tested on Logitech G640 Gaming Mouse Pad)",
            "Zero smoothing/acceleration/filtering",
            "Max wired report rate: 1000Hz (1ms)",
            "Max LIGHTSPEED report rate: 8000Hz (0.25ms)",
            "Battery life (constant motion): 95 hours"
        ],
        options: {
            "-No options-": 0
        },
        link: "https://www.logitechg.com/en-us/products/gaming-mice/pro-x-superlight-2-dex.910-007328.html"
    },

    {
        id: "razer-hammerhead-pro",
        brand: "Razer",
        title: "Razer Hammerhead Pro HyperSpeed Wireless Gaming Earbuds",
        images: ["images/razer_hammerhead_pro_1.png", "images/razer_hammerhead_pro_2.png"],
        basePrice: 55000,  
        warranty: "2 Year Razer International Warranty",
        description: "The Razer Hammerhead Pro HyperSpeed delivers cutting-edge wireless audio for gamers, featuring HyperSpeed Wireless, Bluetooth 5.3, Adjustable ANC, and Chroma RGB lighting with up to 30 hours of battery life.",
        specs: [
            "Connectivity: Razer HyperSpeed Wireless (2.4GHz) & Bluetooth 5.3",
            "Adjustable Active Noise Cancellation (ANC)",
            "Fast Wireless Charging Case with 24hr Additional Battery",
            "Battery Life: Up to 30 Hours (with charging case)",
            "Chroma RGB Lighting with 16.8 Million Colors",
            "Dual-Wireless Connection with Do Not Disturb Mode",
            "Compatibility: PC, PlayStation, Switch, Mobile, Steam Deck",
            "USB-A / USB-C Dongle Included"
        ],
        options: {
            "-No options-": 0
        },
        link: "https://www.razer.com/mobile-earphones/razer-hammerhead-true-wireless-pro"
    },

    {
        id: "logitech-g515-tkl",
        brand: "Logitech",
        title: "Logitech G515 TKL Wired Gaming Keyboard",
        images: ["images/logitech_g515_1.png"],
        basePrice: 8999,  
        warranty: "2 Year Logitech Warranty",
        description: "The Logitech G515 TKL is a wired tenkeyless gaming keyboard that combines high performance with a low-profile design. Engineered for durability and finely-tuned for intense gaming moments.",
        specs: [
            "Tenkeyless (TKL) design for a compact setup",
            "Ultra-low profile mechanical switches",
            "Personalizable RGB lighting",
            "Wired USB connection",
            "Durable aluminum top plate",
            "Customizable macros and key assignments",
            "Compatible with Windows and macOS",
            "Free shipping and returns"
        ],
        options: {
            "Black": 0
        },
        link: "https://www.logitechg.com/en-us/products/gaming-keyboards/g515-tkl-wired.html"
    },

    {
        id: "samsung-qd-oled-g8",
        brand: "Samsung",
        title: "Samsung 34\" Odyssey QD-OLED G8 Ultra-WQHD Gaming Monitor",
        images: ["images/samsung_qd_oled_g8_1.png","images/samsung_qd_oled_g8_2.png"],
        basePrice: 328499,  
        warranty: "3-Year Manufacturer Warranty",
        description: "The Samsung Odyssey QD-OLED G8 delivers ultra-high performance with a 34-inch Ultra-WQHD display, 175Hz refresh rate, and 0.03ms response time for seamless, tear-free gaming.",
        specs: [
            "Display: 34-inch Ultra-WQHD (3440 x 1440)",
            "Panel Type: QD-OLED Curved",
            "Aspect Ratio: 21:9",
            "Refresh Rate: 175Hz",
            "Response Time: 0.03ms (GtG)",
            "G-Sync & FreeSync Compatible",
            "Pixel Density: 110 PPI",
            "Glare Free Technology",
            "OLED Safeguard: Thermal Modulation System",
            "Smart Features: Gaming Hub, Smart TV Apps",
            "Connectivity: HDMI 2.1, DisplayPort, USB-C",
            "Ergonomic Stand with Height, Tilt & Swivel Adjustment",
            "Slim Metal Design",
            "Warranty: 3 Years Manufacturer Warranty"
        ],
        options: {
            "-No options-": 0
        },
        link: "https://www.samsung.com/us/computing/monitors/gaming/34-odyssey-qd-oled-g8-ultra-wqhd-175hz-g-sync-compatible-curved-gaming-monitor-ls34dg856snxza/"
    }
    
    

]


};
