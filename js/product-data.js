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
    }

]


};
