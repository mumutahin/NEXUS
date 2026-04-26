    // ============================
    // DATA
    // ============================
    const phones = [
    {
        id: 0,
        brand: "Apple",
        name: "iPhone 16 Pro Max",
        emoji: "📱",
        price: 1199,
        oldPrice: 1399,
        rating: 4.9,
        reviews: 4820,
        badges: ["New", "Best Seller"],
        category: "apple",
        is5g: true,
        isNew: true,
        colors: ["#c0b090", "#1c1c1e", "#4a4a4a", "#ffffff"],
        storage: ["256GB", "512GB", "1TB"],
        specs: {
        Display: '6.9" ProMotion',
        Chip: "A18 Pro",
        Camera: "48MP + 48MP + 12MP",
        Battery: "4685 mAh",
        RAM: "8GB",
        Storage: "256GB",
        OS: "iOS 18",
        "5G": "Yes",
        },
        features: [
        "Titanium design",
        "Action button",
        "ProRes Video",
        "Face ID",
        ],
        desc: "The ultimate iPhone with titanium build, A18 Pro chip, and the most advanced camera system ever in an iPhone.",
    },
    {
        id: 1,
        brand: "Samsung",
        name: "Galaxy S25 Ultra",
        emoji: "📲",
        price: 1299,
        oldPrice: 1499,
        rating: 4.8,
        reviews: 3910,
        badges: ["Sale", "Top Pick"],
        category: "samsung",
        is5g: true,
        isNew: true,
        colors: ["#1a1a2e", "#f0e6d3", "#2d5016", "#4a0404"],
        storage: ["256GB", "512GB", "1TB"],
        specs: {
        Display: '6.9" Dynamic AMOLED',
        Chip: "Snapdragon 8 Elite",
        Camera: "200MP + 50MP + 10MP",
        Battery: "5000 mAh",
        RAM: "12GB",
        Storage: "256GB",
        OS: "Android 15",
        "5G": "Yes",
        },
        features: [
        "Built-in S Pen",
        "200MP camera",
        "45W fast charge",
        "Titanium frame",
        ],
        desc: "Samsung's most powerful phone with the iconic S Pen and industry-leading 200MP camera system.",
    },
    {
        id: 2,
        brand: "Google",
        name: "Pixel 9 Pro",
        emoji: "🟢",
        price: 999,
        oldPrice: 1099,
        rating: 4.7,
        reviews: 2240,
        badges: ["Hot"],
        category: "google",
        is5g: true,
        isNew: true,
        colors: ["#f0e6d3", "#1c1c1e", "#2271c3", "#d4e9c5"],
        storage: ["128GB", "256GB", "512GB"],
        specs: {
        Display: '6.3" LTPO OLED',
        Chip: "Google Tensor G4",
        Camera: "50MP + 48MP + 48MP",
        Battery: "4700 mAh",
        RAM: "16GB",
        Storage: "128GB",
        OS: "Android 15",
        "5G": "Yes",
        },
        features: [
        "AI photography",
        "Magic Eraser",
        "7 years updates",
        "Gemini AI",
        ],
        desc: "Google's smartest phone with Tensor G4 chip, exceptional AI features and the best camera experience on Android.",
    },
    {
        id: 3,
        brand: "OnePlus",
        name: "OnePlus 13",
        emoji: "🔴",
        price: 899,
        oldPrice: 999,
        rating: 4.6,
        reviews: 1820,
        badges: ["Value Pick"],
        category: "oneplus",
        is5g: true,
        isNew: false,
        colors: ["#1c1c1e", "#2d5a27", "#7c3a4a"],
        storage: ["256GB", "512GB"],
        specs: {
        Display: '6.82" LTPO4 AMOLED',
        Chip: "Snapdragon 8 Elite",
        Camera: "50MP + 50MP + 50MP",
        Battery: "6000 mAh",
        RAM: "16GB",
        Storage: "256GB",
        OS: "OxygenOS 15",
        "5G": "Yes",
        },
        features: [
        "100W charging",
        "6000mAh battery",
        "Hasselblad cameras",
        "Alert slider",
        ],
        desc: "Flagship performance at a competitive price. The OnePlus 13 packs serious power with Hasselblad cameras.",
    },
    {
        id: 4,
        brand: "Xiaomi",
        name: "Xiaomi 15 Ultra",
        emoji: "🔵",
        price: 1099,
        oldPrice: 1199,
        rating: 4.7,
        reviews: 1540,
        badges: ["Import"],
        category: "xiaomi",
        is5g: true,
        isNew: true,
        colors: ["#1c1c1e", "#f5f5f0", "#2d3561"],
        storage: ["256GB", "512GB", "1TB"],
        specs: {
        Display: '6.73" 2K AMOLED',
        Chip: "Snapdragon 8 Elite",
        Camera: "50MP + 200MP + 50MP",
        Battery: "6000 mAh",
        RAM: "16GB",
        Storage: "256GB",
        OS: "HyperOS 2",
        "5G": "Yes",
        },
        features: [
        "Leica cameras",
        "90W wireless charge",
        "IP68 rated",
        "Ceramic back",
        ],
        desc: "Xiaomi's masterpiece with Leica optics, 90W wireless charging, and flagship Snapdragon 8 Elite performance.",
    },
    {
        id: 5,
        brand: "Apple",
        name: "iPhone 15",
        emoji: "📱",
        price: 699,
        oldPrice: 799,
        rating: 4.6,
        reviews: 6120,
        badges: ["Sale"],
        category: "apple",
        is5g: true,
        isNew: false,
        colors: ["#f5cba7", "#5d6d7e", "#2ecc71", "#f8f9fa", "#1c1c1e"],
        storage: ["128GB", "256GB", "512GB"],
        specs: {
        Display: '6.1" Super Retina XDR',
        Chip: "A16 Bionic",
        Camera: "48MP + 12MP",
        Battery: "3877 mAh",
        RAM: "6GB",
        Storage: "128GB",
        OS: "iOS 18",
        "5G": "Yes",
        },
        features: [
        "Dynamic Island",
        "USB-C",
        "48MP main camera",
        "Ceramic Shield",
        ],
        desc: "The perfect everyday iPhone. Dynamic Island, USB-C, and 48MP camera in a compact, gorgeous package.",
    },
    {
        id: 6,
        brand: "Samsung",
        name: "Galaxy A55",
        emoji: "📳",
        price: 449,
        oldPrice: 499,
        rating: 4.4,
        reviews: 3380,
        badges: ["Budget Friendly"],
        category: "samsung",
        is5g: true,
        isNew: false,
        colors: ["#1c1c1e", "#6c5ce7", "#e17055", "#dfe6e9"],
        storage: ["128GB", "256GB"],
        specs: {
        Display: '6.6" Super AMOLED',
        Chip: "Exynos 1480",
        Camera: "50MP + 12MP + 5MP",
        Battery: "5000 mAh",
        RAM: "8GB",
        Storage: "128GB",
        OS: "Android 14",
        "5G": "Yes",
        },
        features: [
        "OIS camera",
        "IP67 water resistance",
        "Samsung DeX",
        "25W charging",
        ],
        desc: "Incredible mid-range value with flagship-like features. The Galaxy A55 punches way above its price.",
    },
    {
        id: 7,
        brand: "Google",
        name: "Pixel 8a",
        emoji: "🟩",
        price: 499,
        oldPrice: 549,
        rating: 4.5,
        reviews: 2890,
        badges: ["Best Value"],
        category: "google",
        is5g: true,
        isNew: false,
        colors: ["#4a90e2", "#1c1c1e", "#e8f5e9", "#ff7675"],
        storage: ["128GB", "256GB"],
        specs: {
        Display: '6.1" OLED',
        Chip: "Google Tensor G3",
        Camera: "64MP + 13MP",
        Battery: "4492 mAh",
        RAM: "8GB",
        Storage: "128GB",
        OS: "Android 14",
        "5G": "Yes",
        },
        features: [
        "AI features",
        "7 years updates",
        "Pixel Camera",
        "Wireless charging",
        ],
        desc: "All the magic of Pixel AI in a more affordable package. The Pixel 8a makes AI photography accessible to everyone.",
    },
    {
        id: 8,
        brand: "OnePlus",
        name: "OnePlus 12R",
        emoji: "🔴",
        price: 499,
        oldPrice: 599,
        rating: 4.5,
        reviews: 1230,
        badges: ["Budget Flagship"],
        category: "oneplus",
        is5g: true,
        isNew: false,
        colors: ["#1c1c1e", "#2980b9"],
        storage: ["128GB", "256GB"],
        specs: {
        Display: '6.78" LTPO3 AMOLED',
        Chip: "Snapdragon 8 Gen 2",
        Camera: "50MP + 8MP + 2MP",
        Battery: "5500 mAh",
        RAM: "8GB",
        Storage: "128GB",
        OS: "OxygenOS 14",
        "5G": "Yes",
        },
        features: [
        "100W charging",
        "Gaming mode",
        "Alert slider",
        "Smooth display",
        ],
        desc: "Flagship-grade chipset and 100W charging at a mid-range price. The OnePlus 12R is an incredible deal.",
    },
    {
        id: 9,
        brand: "Xiaomi",
        name: "Redmi Note 13 Pro",
        emoji: "🔵",
        price: 299,
        oldPrice: 349,
        rating: 4.3,
        reviews: 4120,
        badges: ["Budget Pick"],
        category: "xiaomi",
        is5g: true,
        isNew: false,
        colors: ["#1c1c1e", "#6c5ce7", "#2ecc71"],
        storage: ["128GB", "256GB"],
        specs: {
        Display: '6.67" AMOLED',
        Chip: "Snapdragon 7s Gen 2",
        Camera: "200MP + 8MP + 2MP",
        Battery: "5000 mAh",
        RAM: "8GB",
        Storage: "128GB",
        OS: "MIUI 14",
        "5G": "Yes",
        },
        features: [
        "200MP camera",
        "IP54 rated",
        "67W fast charge",
        "Curved display",
        ],
        desc: "200MP camera in a budget phone? Redmi Note 13 Pro delivers incredible camera specs without breaking the bank.",
    },
    {
        id: 10,
        brand: "Apple",
        name: "iPhone 16 Pro",
        emoji: "📱",
        price: 999,
        oldPrice: 1099,
        rating: 4.9,
        reviews: 3210,
        badges: ["New"],
        category: "apple",
        is5g: true,
        isNew: true,
        colors: ["#c0b090", "#1c1c1e", "#4a4a4a", "#ffffff"],
        storage: ["128GB", "256GB", "512GB", "1TB"],
        specs: {
        Display: '6.3" ProMotion',
        Chip: "A18 Pro",
        Camera: "48MP + 48MP + 12MP",
        Battery: "3582 mAh",
        RAM: "8GB",
        Storage: "128GB",
        OS: "iOS 18",
        "5G": "Yes",
        },
        features: ["Action button", "ProRes video", "Face ID", "MagSafe"],
        desc: "Pro camera system, A18 Pro chip, and Action button in a refined compact design. The perfect professional iPhone.",
    },
    {
        id: 11,
        brand: "Samsung",
        name: "Galaxy Z Fold 6",
        emoji: "📰",
        price: 1799,
        oldPrice: 1999,
        rating: 4.6,
        reviews: 980,
        badges: ["Foldable", "Premium"],
        category: "samsung",
        is5g: true,
        isNew: true,
        colors: ["#1c1c1e", "#f0e6d3", "#2d5016"],
        storage: ["256GB", "512GB"],
        specs: {
        Display: '7.6" Foldable AMOLED',
        Chip: "Snapdragon 8 Gen 3",
        Camera: "50MP + 12MP + 10MP",
        Battery: "4400 mAh",
        RAM: "12GB",
        Storage: "256GB",
        OS: "Android 14",
        "5G": "Yes",
        },
        features: [
        "Foldable design",
        "Taskbar multitask",
        "S Pen support",
        "IPX8 rated",
        ],
        desc: "The future of smartphones, today. Galaxy Z Fold 6 transforms from phone to tablet, redefining what's possible.",
    },
    ];

    // Comparison data
    const comparePhones = [
    {
        name: "iPhone 16 Pro Max",
        brand: "Apple",
        icon: "📱",
        display: '6.9" ProMotion OLED',
        chip: "A18 Pro",
        ram: "8GB",
        storage: "256GB / 512GB / 1TB",
        camera: "48+48+12MP",
        battery: "4685 mAh",
        charging: "27W wired",
        os: "iOS 18",
        price: "$1,199",
        weight: "227g",
        ipRating: "IP68",
        fiveG: "Yes",
    },
    {
        name: "Galaxy S25 Ultra",
        brand: "Samsung",
        icon: "📲",
        display: '6.9" Dynamic AMOLED',
        chip: "Snapdragon 8 Elite",
        ram: "12GB",
        storage: "256GB / 512GB / 1TB",
        camera: "200+50+10MP",
        battery: "5000 mAh",
        charging: "45W wired",
        os: "Android 15",
        price: "$1,299",
        weight: "218g",
        ipRating: "IP68",
        fiveG: "Yes",
    },
    {
        name: "Pixel 9 Pro",
        brand: "Google",
        icon: "🟢",
        display: '6.3" LTPO OLED',
        chip: "Tensor G4",
        ram: "16GB",
        storage: "128GB / 256GB / 512GB",
        camera: "50+48+48MP",
        battery: "4700 mAh",
        charging: "37W wired",
        os: "Android 15",
        price: "$999",
        weight: "221g",
        ipRating: "IP68",
        fiveG: "Yes",
    },
    {
        name: "OnePlus 13",
        brand: "OnePlus",
        icon: "🔴",
        display: '6.82" LTPO4 AMOLED',
        chip: "Snapdragon 8 Elite",
        ram: "16GB",
        storage: "256GB / 512GB",
        camera: "50+50+50MP",
        battery: "6000 mAh",
        charging: "100W wired",
        os: "OxygenOS 15",
        price: "$899",
        weight: "210g",
        ipRating: "IP69",
        fiveG: "Yes",
    },
    {
        name: "Xiaomi 15 Ultra",
        brand: "Xiaomi",
        icon: "🔵",
        display: '6.73" 2K AMOLED',
        chip: "Snapdragon 8 Elite",
        ram: "16GB",
        storage: "256GB / 512GB / 1TB",
        camera: "50+200+50MP",
        battery: "6000 mAh",
        charging: "90W wired",
        os: "HyperOS 2",
        price: "$1,099",
        weight: "226g",
        ipRating: "IP68",
        fiveG: "Yes",
    },
    {
        name: "iPhone 15",
        brand: "Apple",
        icon: "📱",
        display: '6.1" Super Retina XDR',
        chip: "A16 Bionic",
        ram: "6GB",
        storage: "128GB / 256GB / 512GB",
        camera: "48+12MP",
        battery: "3877 mAh",
        charging: "27W wired",
        os: "iOS 18",
        price: "$699",
        weight: "171g",
        ipRating: "IP68",
        fiveG: "Yes",
    },
    {
        name: "Galaxy A55",
        brand: "Samsung",
        icon: "📳",
        display: '6.6" Super AMOLED',
        chip: "Exynos 1480",
        ram: "8GB",
        storage: "128GB / 256GB",
        camera: "50+12+5MP",
        battery: "5000 mAh",
        charging: "25W wired",
        os: "Android 14",
        price: "$449",
        weight: "213g",
        ipRating: "IP67",
        fiveG: "Yes",
    },
    {
        name: "Pixel 8a",
        brand: "Google",
        icon: "🟩",
        display: '6.1" OLED',
        chip: "Tensor G3",
        ram: "8GB",
        storage: "128GB / 256GB",
        camera: "64+13MP",
        battery: "4492 mAh",
        charging: "18W wired",
        os: "Android 14",
        price: "$499",
        weight: "188g",
        ipRating: "IP67",
        fiveG: "Yes",
    },
    ];

    const compareRows = [
    { label: "Display", key: "display" },
    { label: "Chipset", key: "chip" },
    { label: "RAM", key: "ram" },
    { label: "Storage Options", key: "storage" },
    { label: "Camera", key: "camera" },
    { label: "Battery", key: "battery" },
    { label: "Charging", key: "charging" },
    { label: "Operating System", key: "os" },
    { label: "Price", key: "price" },
    { label: "Weight", key: "weight" },
    { label: "IP Rating", key: "ipRating" },
    { label: "5G", key: "fiveG" },
    ];

    const accessories = [
    {
        id: 0,
        name: "AirPods Pro 3",
        brand: "Apple",
        cat: "audio",
        emoji: "🎧",
        price: 249,
        oldPrice: 279,
        desc: "Active noise cancellation, Transparency mode, and spatial audio.",
        badge: "New",
        badgeType: "badge-accent",
    },
    {
        id: 1,
        name: "Galaxy Buds 3 Pro",
        brand: "Samsung",
        cat: "audio",
        emoji: "🎵",
        price: 199,
        oldPrice: 229,
        desc: "Hi-Fi sound with adaptive ANC and 360° audio.",
        badge: "Hot",
        badgeType: "badge-amber",
    },
    {
        id: 2,
        name: "Anker 200W Power Bank",
        brand: "Anker",
        cat: "power",
        emoji: "🔋",
        price: 89,
        oldPrice: 119,
        desc: "26,800mAh with 200W output. Charges up to 6 devices at once.",
        badge: "Best Seller",
        badgeType: "badge-green",
    },
    {
        id: 3,
        name: "Spigen MagSafe Case",
        brand: "Spigen",
        cat: "protection",
        emoji: "🛡️",
        price: 49,
        desc: "Military-grade drop protection with MagSafe compatibility.",
        badge: "Sale",
        badgeType: "badge-red",
    },
    {
        id: 4,
        name: "Apple Watch Ultra 2",
        brand: "Apple",
        cat: "wearable",
        emoji: "⌚",
        price: 799,
        oldPrice: 899,
        desc: "Titanium case, 60-hour battery, and extreme sport features.",
        badge: "Premium",
        badgeType: "badge-purple",
    },
    {
        id: 5,
        name: "Samsung 65W Charger",
        brand: "Samsung",
        cat: "power",
        emoji: "🔌",
        price: 39,
        oldPrice: 49,
        desc: "Super fast 65W USB-C charger with 1.8m braided cable.",
        badge: null,
    },
    {
        id: 6,
        name: "ZAGG Screen Protector",
        brand: "ZAGG",
        cat: "protection",
        emoji: "📱",
        price: 29,
        desc: "Nano-Shield glass with self-healing properties.",
        badge: "Popular",
        badgeType: "badge-accent",
    },
    {
        id: 7,
        name: "Google Pixel Watch 3",
        brand: "Google",
        cat: "wearable",
        emoji: "⌚",
        price: 349,
        oldPrice: 399,
        desc: "Advanced health metrics with Google Maps and Fitbit integration.",
        badge: "New",
        badgeType: "badge-accent",
    },
    {
        id: 8,
        name: "Sony WH-1000XM5",
        brand: "Sony",
        cat: "audio",
        emoji: "🎧",
        price: 349,
        oldPrice: 399,
        desc: "Industry-leading noise cancellation with 30-hour battery life.",
        badge: "Top Rated",
        badgeType: "badge-green",
    },
    {
        id: 9,
        name: "MagSafe Duo Charger",
        brand: "Apple",
        cat: "power",
        emoji: "💡",
        price: 129,
        oldPrice: 149,
        desc: "Charge iPhone and Apple Watch simultaneously. Travel-friendly.",
        badge: null,
    },
    {
        id: 10,
        name: "dbrand Teardown Skin",
        brand: "dbrand",
        cat: "protection",
        emoji: "🎨",
        price: 35,
        desc: "Ultra-precise vinyl skin for scratch protection and unique style.",
        badge: "Trending",
        badgeType: "badge-purple",
    },
    {
        id: 11,
        name: "Samsung Galaxy Ring",
        brand: "Samsung",
        cat: "wearable",
        emoji: "💍",
        price: 399,
        oldPrice: 449,
        desc: "Track health 24/7 with a discreet titanium smart ring.",
        badge: "New",
        badgeType: "badge-accent",
    },
    ];

    const services = [
    {
        icon: "📺",
        iconClass: "",
        name: "Screen Replacement",
        desc: "Cracked or shattered screen? We replace it with original OEM parts, restoring your phone to factory condition.",
        features: [
        "OEM quality parts",
        "90-day warranty",
        "Same-day service",
        "Free diagnostics",
        ],
        priceFrom: "From",
        price: "$49",
    },
    {
        icon: "🔋",
        iconClass: "purple",
        name: "Battery Replacement",
        desc: "Restore your phone's battery life to 100%. We use certified batteries to ensure safety and performance.",
        features: [
        "Certified batteries",
        "Health check included",
        "1-year warranty",
        "Express service",
        ],
        priceFrom: "From",
        price: "$39",
    },
    {
        icon: "📷",
        iconClass: "amber",
        name: "Camera Repair",
        desc: "Blurry photos or broken cameras? Our specialists diagnose and fix all camera issues — front and rear.",
        features: [
        "Front & rear cameras",
        "OIS calibration",
        "Software check",
        "60-day warranty",
        ],
        priceFrom: "From",
        price: "$59",
    },
    {
        icon: "💧",
        iconClass: "green",
        name: "Water Damage Recovery",
        desc: "Dropped your phone in water? Don't panic. Our technicians can often recover water-damaged devices and your data.",
        features: [
        "Ultrasonic cleaning",
        "Data recovery attempt",
        "Corrosion treatment",
        "No fix, no fee",
        ],
        priceFrom: "From",
        price: "$79",
    },
    {
        icon: "⚡",
        iconClass: "red",
        name: "Charging Port Fix",
        desc: "Phone not charging? Loose connector or blocked port — we fix all charging port issues quickly and reliably.",
        features: [
        "Port cleaning or swap",
        "24-hour turnaround",
        "USB-C & Lightning",
        "90-day warranty",
        ],
        priceFrom: "From",
        price: "$29",
    },
    {
        icon: "💾",
        iconClass: "",
        name: "Software & Unlocking",
        desc: "Device software issues, factory resets, OS updates, and network unlocking services by certified experts.",
        features: [
        "OS reinstall / update",
        "Network unlock",
        "Virus removal",
        "Data backup",
        ],
        priceFrom: "From",
        price: "$19",
    },
    ];

    // ============================
    // STATE
    // ============================
    let cart = [];
    let wishlist = [];
    let currentPhone = null;
    let modalQty = 1;
    let currentFilter = "all";
    let currentSort = "default";
    let countdownSeconds = 8 * 3600 + 34 * 60 + 59;

    // ============================
    // RENDER PHONES
    // ============================
    function renderPhones(data) {
    const grid = document.getElementById("phones-grid");
    if (!data.length) {
        grid.innerHTML =
        '<div style="grid-column:1/-1;text-align:center;padding:60px;color:var(--text-muted)"><div style="font-size:48px;margin-bottom:16px">🔍</div><p>No phones found. Try a different filter.</p></div>';
        return;
    }
    // First item as featured
    let html = "";
    data.forEach((p, i) => {
        const save = p.oldPrice
        ? Math.round((1 - p.price / p.oldPrice) * 100)
        : 0;
        const stars =
        "★".repeat(Math.round(p.rating)) +
        "☆".repeat(5 - Math.round(p.rating));
        html += `
    <div class="phone-card" data-id="${p.id}">
    <div class="phone-card-badges">
        ${p.badges.map((b) => `<span class="badge ${b === "New" ? "badge-accent" : b === "Sale" ? "badge-red" : b === "Hot" ? "badge-amber" : "badge-green"}">${b}</span>`).join("")}
    </div>
    <div class="phone-card-wish ${wishlist.find((w) => w.id === p.id) ? "active" : ""}" onclick="toggleWish(${p.id}, event)" title="Add to wishlist">♡</div>
    <div class="phone-card-img">
        <div class="phone-img-placeholder" style="animation-delay:${i * 0.2}s">${p.emoji}</div>
    </div>
    <div class="phone-card-body">
        <div class="phone-card-brand">${p.brand}</div>
        <div class="phone-card-name">${p.name}</div>
        <div class="phone-card-rating">
        <span class="stars">${stars}</span>
        <span class="rating-num">${p.rating} (${p.reviews.toLocaleString()})</span>
        </div>
        <div class="phone-card-specs">
        <div class="spec-item">
            <div class="spec-key">Display</div>
            <div class="spec-val">${p.specs.Display}</div>
        </div>
        <div class="spec-item">
            <div class="spec-key">Camera</div>
            <div class="spec-val">${p.specs.Camera.split(" ")[0]}</div>
        </div>
        <div class="spec-item">
            <div class="spec-key">Chip</div>
            <div class="spec-val">${p.specs.Chip.split(" ").slice(0, 2).join(" ")}</div>
        </div>
        <div class="spec-item">
            <div class="spec-key">Battery</div>
            <div class="spec-val">${p.specs.Battery}</div>
        </div>
        </div>
        <div class="phone-card-footer">
        <div class="phone-price">
            <div class="price-current">$${p.price}</div>
            ${p.oldPrice ? `<div><span class="price-old">$${p.oldPrice}</span> <span class="price-save">Save ${save}%</span></div>` : ""}
        </div>
        <div class="phone-card-actions">
            <button class="btn btn-outline btn-sm" onclick="openModal(${p.id})">Quick View</button>
            <button class="btn btn-primary btn-sm" onclick="addToCart(${p.id}, event)">+ Cart</button>
        </div>
        </div>
    </div>
    </div>`;
    });
    grid.innerHTML = html;
    }

    // ============================
    // FILTER & SORT
    // ============================
    function filterPhones(cat, catEl, btnEl) {
    // Update active cat pill
    if (catEl) {
        document
        .querySelectorAll(".cat-pill")
        .forEach((p) => p.classList.remove("active"));
        catEl.classList.add("active");
    }
    // Update active filter btn
    if (btnEl) {
        document
        .querySelectorAll("#phones-filter .filter-btn")
        .forEach((b) => b.classList.remove("active"));
        btnEl.classList.add("active");
    }
    currentFilter = cat;
    applyFilters();
    }
    function filterPhonesPrice(type, catEl) {
    document
        .querySelectorAll(".cat-pill")
        .forEach((p) => p.classList.remove("active"));
    catEl.classList.add("active");
    let data = [...phones];
    if (type === "budget") data = data.filter((p) => p.price < 500);
    if (type === "flagship") data = data.filter((p) => p.price >= 1000);
    renderPhones(data);
    }
    function applyFilters() {
    let data = [...phones];
    if (currentFilter !== "all" && currentFilter !== "5g") {
        data = data.filter((p) => p.category === currentFilter);
    }
    if (currentFilter === "5g") data = data.filter((p) => p.is5g);
    sortData(data);
    }
    function sortPhones(val) {
    currentSort = val;
    applyFilters();
    }
    function sortData(data) {
    if (currentSort === "price-asc") data.sort((a, b) => a.price - b.price);
    if (currentSort === "price-desc")
        data.sort((a, b) => b.price - a.price);
    if (currentSort === "rating") data.sort((a, b) => b.rating - a.rating);
    if (currentSort === "newest")
        data.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    renderPhones(data);
    }

    // ============================
    // SEARCH
    // ============================
    function handleSearch(val) {
    if (!val.trim()) {
        applyFilters();
        return;
    }
    const q = val.toLowerCase();
    const data = phones.filter(
        (p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.specs.Chip.toLowerCase().includes(q) ||
        p.specs.Camera.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q),
    );
    renderPhones(data);
    }

    // ============================
    // MODAL
    // ============================
    function openModal(id) {
    currentPhone = phones.find((p) => p.id === id);
    if (!currentPhone) return;
    modalQty = 1;
    document.getElementById("modal-qty").textContent = 1;
    document.getElementById("modal-title").textContent = currentPhone.name;
    document.getElementById("modal-brand").textContent = currentPhone.brand;
    document.getElementById("modal-name").textContent = currentPhone.name;
    document.getElementById("modal-img").textContent = currentPhone.emoji;
    document.getElementById("modal-img").style.fontSize = "120px";
    document.getElementById("modal-price").textContent =
        "$" + currentPhone.price;
    const oldEl = document.getElementById("modal-price-old");
    oldEl.textContent = currentPhone.oldPrice
        ? "$" + currentPhone.oldPrice
        : "";
    // Specs
    const specsHtml = Object.entries(currentPhone.specs)
        .map(
        ([k, v]) => `
<div class="modal-spec">
    <div class="modal-spec-key">${k}</div>
    <div class="modal-spec-val">${v}</div>
</div>`,
        )
        .join("");
    document.getElementById("modal-specs").innerHTML = specsHtml;
    // Colors
    const colorsHtml = currentPhone.colors
        .map(
        (c, i) => `
<div class="color-option ${i === 0 ? "selected" : ""}" style="background:${c}" onclick="selectColor(this)" title="${c}"></div>`,
        )
        .join("");
    document.getElementById("modal-colors").innerHTML = colorsHtml;
    // Storage
    const storageHtml = currentPhone.storage
        .map(
        (s, i) => `
<button class="btn btn-outline btn-sm ${i === 0 ? "" : "opacity"}" onclick="selectStorage(this)" style="${i === 0 ? "border-color:var(--accent);color:var(--accent)" : ""}">${s}</button>`,
        )
        .join("");
    document.getElementById("modal-storage").innerHTML = storageHtml;
    // Wishlist btn
    const isWished = wishlist.find((w) => w.id === currentPhone.id);
    document.getElementById("modal-wish-btn").textContent = isWished
        ? "❤️"
        : "♡";
    document.getElementById("modal-overlay").classList.add("active");
    document.getElementById("overlay-bg").classList.add("active");
    document.body.style.overflow = "hidden";
    }
    function closeModal() {
    document.getElementById("modal-overlay").classList.remove("active");
    if (
        !document.getElementById("cart-sidebar").classList.contains("open") &&
        !document
        .getElementById("wishlist-sidebar")
        .classList.contains("open")
    ) {
        document.getElementById("overlay-bg").classList.remove("active");
        document.body.style.overflow = "";
    }
    }
    function changeQty(delta) {
    modalQty = Math.max(1, Math.min(10, modalQty + delta));
    document.getElementById("modal-qty").textContent = modalQty;
    }
    function selectColor(el) {
    document
        .querySelectorAll(".color-option")
        .forEach((c) => c.classList.remove("selected"));
    el.classList.add("selected");
    }
    function selectStorage(el) {
    document.querySelectorAll("#modal-storage .btn").forEach((b) => {
        b.style.borderColor = "";
        b.style.color = "";
    });
    el.style.borderColor = "var(--accent)";
    el.style.color = "var(--accent)";
    }
    function addToCartFromModal() {
    if (!currentPhone) return;
    addToCart(currentPhone.id);
    closeModal();
    }
    function addToWishlistFromModal() {
    if (!currentPhone) return;
    toggleWish(currentPhone.id);
    const isWished = wishlist.find((w) => w.id === currentPhone.id);
    document.getElementById("modal-wish-btn").textContent = isWished
        ? "❤️"
        : "♡";
    }

    // ============================
    // CART
    // ============================
    function addToCart(id, e) {
    if (e) e.stopPropagation();
    const phone = phones.find((p) => p.id === id);
    if (!phone) return;
    const existing = cart.find((c) => c.id === id);
    if (existing) {
        existing.qty = (existing.qty || 1) + 1;
    } else {
        cart.push({ ...phone, qty: 1 });
    }
    updateCartUI();
    showToast("✅", `${phone.name} added to cart!`);
    }
    function removeFromCart(id) {
    cart = cart.filter((c) => c.id !== id);
    updateCartUI();
    }
    function updateCartUI() {
    const count = cart.reduce((s, c) => s + (c.qty || 1), 0);
    document.getElementById("cart-count").textContent = count;
    const itemsEl = document.getElementById("cart-items");
    const footerEl = document.getElementById("cart-footer");
    if (!cart.length) {
        itemsEl.innerHTML =
        '<div class="cart-empty"><div class="cart-empty-icon">🛍️</div><p class="cart-empty-text">Your cart is empty.<br>Start shopping!</p></div>';
        footerEl.style.display = "none";
        return;
    }
    footerEl.style.display = "";
    itemsEl.innerHTML = cart
        .map(
        (p) => `
<div class="cart-item">
    <div class="cart-item-img">${p.emoji}</div>
    <div style="flex:1;min-width:0">
    <div class="cart-item-name">${p.name}</div>
    <div class="cart-item-variant">${p.brand} · Qty: ${p.qty || 1}</div>
    <div class="cart-item-price">$${p.price * (p.qty || 1)}</div>
    </div>
    <span class="cart-item-remove" onclick="removeFromCart(${p.id})" title="Remove">✕</span>
</div>`,
        )
        .join("");
    const subtotal = cart.reduce((s, c) => s + c.price * (c.qty || 1), 0);
    document.getElementById("cart-subtotal").textContent = "$" + subtotal;
    document.getElementById("cart-total").textContent = "$" + subtotal;
    }
    function toggleCart() {
    const sidebar = document.getElementById("cart-sidebar");
    const bg = document.getElementById("overlay-bg");
    const wishSide = document.getElementById("wishlist-sidebar");
    wishSide.classList.remove("open");
    sidebar.classList.toggle("open");
    if (sidebar.classList.contains("open")) {
        bg.classList.add("active");
        document.body.style.overflow = "hidden";
    } else {
        bg.classList.remove("active");
        document.body.style.overflow = "";
    }
    }

    // ============================
    // WISHLIST
    // ============================
    function toggleWish(id, e) {
    if (e) e.stopPropagation();
    const phone = phones.find((p) => p.id === id);
    if (!phone) return;
    const idx = wishlist.findIndex((w) => w.id === id);
    if (idx >= 0) {
        wishlist.splice(idx, 1);
        showToast("💔", `${phone.name} removed from wishlist`);
    } else {
        wishlist.push(phone);
        showToast("❤️", `${phone.name} added to wishlist!`);
    }
    updateWishUI();
    // Update card heart
    document
        .querySelectorAll(`.phone-card[data-id="${id}"] .phone-card-wish`)
        .forEach((el) => {
        el.classList.toggle(
            "active",
            wishlist.find((w) => w.id === id),
        );
        });
    }
    function updateWishUI() {
    const el = document.getElementById("wishlist-items");
    if (!wishlist.length) {
        el.innerHTML =
        '<div class="cart-empty"><div class="cart-empty-icon">💝</div><p class="cart-empty-text">No saved items yet.<br>Heart any phone to add!</p></div>';
        return;
    }
    el.innerHTML = wishlist
        .map(
        (p) => `
<div class="wishlist-item">
    <div class="cart-item-img">${p.emoji}</div>
    <div style="flex:1">
    <div class="cart-item-name">${p.name}</div>
    <div class="cart-item-variant">${p.brand}</div>
    <div class="cart-item-price">$${p.price}</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px;align-items:flex-end">
    <span class="cart-item-remove" onclick="toggleWish(${p.id})" title="Remove">✕</span>
    <button class="btn btn-primary btn-sm" onclick="addToCart(${p.id})">Add to Cart</button>
    </div>
</div>`,
        )
        .join("");
    }
    function toggleWishlist() {
    const sidebar = document.getElementById("wishlist-sidebar");
    const bg = document.getElementById("overlay-bg");
    const cartSide = document.getElementById("cart-sidebar");
    cartSide.classList.remove("open");
    sidebar.classList.toggle("open");
    if (sidebar.classList.contains("open")) {
        bg.classList.add("active");
        document.body.style.overflow = "hidden";
    } else {
        bg.classList.remove("active");
        document.body.style.overflow = "";
    }
    }

    // ============================
    // CLOSE ALL
    // ============================
    function closeAll() {
    document.getElementById("cart-sidebar").classList.remove("open");
    document.getElementById("wishlist-sidebar").classList.remove("open");
    document.getElementById("modal-overlay").classList.remove("active");
    document.getElementById("overlay-bg").classList.remove("active");
    document.body.style.overflow = "";
    }

    // ============================
    // MOBILE NAV
    // ============================
    function toggleMobileNav() {
    document.getElementById("mobile-nav").classList.toggle("open");
    document.getElementById("overlay-bg").classList.toggle("active");
    }

    // ============================
    // TOAST
    // ============================
    let toastTimer;
    function showToast(icon, msg) {
    const toast = document.getElementById("toast");
    document.getElementById("toast-icon").textContent = icon;
    document.getElementById("toast-msg").textContent = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(hideToast, 3000);
    }
    function hideToast() {
    document.getElementById("toast").classList.remove("show");
    }

    // ============================
    // COMPARISON TABLE
    // ============================
    function renderComparison() {
    const idx1 = parseInt(document.getElementById("compare-1").value);
    const idx2 = parseInt(document.getElementById("compare-2").value);
    const idx3 = parseInt(document.getElementById("compare-3").value);
    const selected = [comparePhones[idx1], comparePhones[idx2]];
    if (idx3 >= 0) selected.push(comparePhones[idx3]);
    const table = document.getElementById("compare-table");
    let html = "<thead><tr><th>Specification</th>";
    selected.forEach((p) => {
        html += `<th><div class="phone-col-header"><div class="phone-col-icon">${p.icon}</div><div><div class="phone-col-name">${p.name}</div><div class="phone-col-brand">${p.brand}</div></div></div></th>`;
    });
    html += "</tr></thead><tbody>";
    compareRows.forEach((row) => {
        html += `<tr><td>${row.label}</td>`;
        const vals = selected.map((p) => p[row.key]);
        // Determine winner for numeric-like fields
        selected.forEach((p, i) => {
        const isWinner = determineWinner(row.key, vals, i);
        html += `<td class="${isWinner ? "compare-winner" : ""}">${p[row.key]}</td>`;
        });
        html += "</tr>";
    });
    html += "</tbody>";
    table.innerHTML = html;
    }
    function determineWinner(key, vals, idx) {
    if (["display", "chip", "os"].includes(key)) return false;
    if (key === "price") {
        const nums = vals.map((v) => parseInt(v.replace(/\D/g, "")));
        return nums[idx] === Math.min(...nums);
    }
    if (key === "battery") {
        const nums = vals.map((v) => parseInt(v.replace(/\D/g, "")));
        return nums[idx] === Math.max(...nums);
    }
    if (key === "charging") {
        const nums = vals.map((v) => parseInt(v.replace(/\D/g, "")));
        return nums[idx] === Math.max(...nums);
    }
    if (key === "ram") {
        const nums = vals.map((v) => parseInt(v.replace(/\D/g, "")));
        return nums[idx] === Math.max(...nums);
    }
    if (key === "weight") {
        const nums = vals.map((v) => parseInt(v.replace(/\D/g, "")));
        return nums[idx] === Math.min(...nums);
    }
    return false;
    }

    // ============================
    // RENDER ACCESSORIES
    // ============================
    function renderAccessories(data) {
    document.getElementById("acc-grid").innerHTML = data
        .map(
        (a) => `
<div class="acc-card">
    <div class="acc-img">
    <div class="acc-emoji">${a.emoji}</div>
    </div>
    <div class="acc-body">
    ${a.badge ? `<div style="margin-bottom:6px"><span class="badge ${a.badgeType}">${a.badge}</span></div>` : ""}
    <div class="acc-cat">${a.cat}</div>
    <div class="acc-name">${a.name}</div>
    <div class="acc-desc">${a.desc}</div>
    <div class="acc-footer">
        <div>
        <div class="acc-price">$${a.price}</div>
        ${a.oldPrice ? `<div style="font-size:12px;color:var(--text-muted);text-decoration:line-through">$${a.oldPrice}</div>` : ""}
        </div>
        <button class="btn btn-primary btn-sm" onclick="showToast('✅','${a.name} added to cart!')">+ Cart</button>
    </div>
    </div>
</div>`,
        )
        .join("");
    }
    function filterAcc(cat, btn) {
    document
        .querySelectorAll("#accessories .filter-btn")
        .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const data =
        cat === "all"
        ? accessories
        : accessories.filter((a) => a.cat === cat);
    renderAccessories(data);
    }

    // ============================
    // RENDER SERVICES
    // ============================
    function renderServices() {
    document.getElementById("services-grid").innerHTML = services
        .map(
        (s) => `
<div class="service-card">
    <div class="service-icon ${s.iconClass}">${s.icon}</div>
    <div class="service-name">${s.name}</div>
    <div class="service-desc">${s.desc}</div>
    <div class="service-features">
    ${s.features.map((f) => `<div class="service-feature">${f}</div>`).join("")}
    </div>
    <div style="display:flex;align-items:flex-end;justify-content:space-between;margin-top:auto">
    <div>
        <div class="service-price-from">${s.priceFrom}</div>
        <div class="service-price">${s.price}</div>
    </div>
    <a href="#booking" class="btn btn-outline btn-sm">Book Now</a>
    </div>
</div>`,
        )
        .join("");
    }

    // ============================
    // BOOKING
    // ============================
    function submitBooking() {
    showToast("📅", "Repair appointment booked! We'll contact you soon.");
    }

    // ============================
    // NEWSLETTER
    // ============================
    function subscribeNewsletter() {
    const email = document.getElementById("newsletter-email").value.trim();
    if (!email || !email.includes("@")) {
        showToast("⚠️", "Please enter a valid email");
        return;
    }
    showToast("📧", "Subscribed! Welcome to NEXUS newsletter.");
    document.getElementById("newsletter-email").value = "";
    }

    // ============================
    // COUNTDOWN
    // ============================
    function updateCountdown() {
    if (countdownSeconds <= 0) return;
    countdownSeconds--;
    const h = Math.floor(countdownSeconds / 3600);
    const m = Math.floor((countdownSeconds % 3600) / 60);
    const s = countdownSeconds % 60;
    document.getElementById("cd-h").textContent = String(h).padStart(
        2,
        "0",
    );
    document.getElementById("cd-m").textContent = String(m).padStart(
        2,
        "0",
    );
    document.getElementById("cd-s").textContent = String(s).padStart(
        2,
        "0",
    );
    }
    setInterval(updateCountdown, 1000);

    // ============================
    // SCROLL EFFECTS
    // ============================
    window.addEventListener("scroll", () => {
    const btn = document.getElementById("back-top");
    btn.classList.toggle("visible", window.scrollY > 400);
    });

    // ============================
    // INIT
    // ============================
    document.addEventListener("DOMContentLoaded", () => {
    renderPhones(phones);
    renderAccessories(accessories);
    renderServices();
    renderComparison();
    });