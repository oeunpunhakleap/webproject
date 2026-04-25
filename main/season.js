document.addEventListener("DOMContentLoaded", () => {

    const now = new Date();
    const month = now.getMonth() + 1;

    // Season logic (Cambodia)
    function getSeason(month) {
        if (month >= 5 && month <= 10) return "rainy";
        return "dry";
    }

    const season = getSeason(month);

    // Rainy season dishes (May–Oct)
    const rainyDishes = [
        {
            name: "Amok Fish",
            link: "../Dish/amok.html",
            img: "../images/ah_mok.jpg",
            time: "60 mins",
            level: "Medium",
            desc: "Traditional Khmer steamed fish curry"
        },
        {
            name: "Samlor Machu",
            link: "../Dish/samlor_maju.html",
            img: "../images/samlur_machu.jpg",
            time: "45 mins",
            level: "Medium",
            desc: "Sour Cambodian vegetable soup"
        },
        {
            name: "Prohok Ktis",
            link: "../Dish/prohok_ktis.html",
            img: "../images/prohok_ktis.jpg",
            time: "40 mins",
            level: "Medium",
            desc: "Fermented fish dip with coconut milk"
        },
        {
            name: "Beef Lok Lak",
            link: "../Dish/beef_lok_lak.html",
            img: "../images/lok_lak.jpg",
            time: "30 mins",
            level: "Medium",
            desc: "Shaken beef with lime pepper sauce"
        }
    ];

    // ☀️ Dry season dishes (Nov–Apr)
    const dryDishes = [
        {
            name: "Num Ansom Chruk",
            link: "../Dish/ansom_chruk.html",
            img: "../images/ansom.jpg",
            time: "60 mins",
            level: "Medium",
            desc: "Sticky rice cake with pork and mung bean"
        },
        {
            name: "Khmer Curry",
            link: "../Dish/curry.html",
            img: "../images/curry.jpg",
            time: "60 mins",
            level: "Medium",
            desc: "Rich coconut chicken curry"
        },
        {
            name: "Khor Sach Jruk",
            link: "../Dish/khor_sach_jruk1.html",
            img: "../images/braised_pork_eggs.jpg",
            time: "90 mins",
            level: "Hard",
            desc: "Braised pork belly in palm sugar sauce"
        },
        {
            name: "Pumpkin Custard",
            link: "../Dish/pumkin_custard.html",
            img: "../images/pumkin_custard.jpg",
            time: "45 mins",
            level: "Easy",
            desc: "Pumpkin steamed with coconut custard"
        }
    ];

    // 🔀 Select season dishes
    const dishes = season === "rainy" ? rainyDishes : dryDishes;

    // 📝 Change title
    const title = document.getElementById("rec-title");
    if (title) {
        title.innerText =
            season === "rainy"
                ? "Recommended Dishes for Rainy Season 🌧️"
                : "Recommended Dishes for Dry Season ☀️";
    }

    // 🧱 Generate cards
    const grid = document.getElementById("rec-grid");
    if (!grid) return;

    grid.innerHTML = "";

    dishes.forEach(dish => {
        grid.innerHTML += `
        <a href="${dish.link}" class="card">
            <div class="card-image">
                <img src="${dish.img}" alt="${dish.name}">
                <div class="card-details">
                    <p><i class="fa-solid fa-clock"></i> ${dish.time}</p>
                    <p><i class="fa-solid fa-layer-group"></i> ${dish.level}</p>
                </div>
            </div>

            <div class="card-content">
                <h2 class="pr">${dish.name}</h2>
                <p>${dish.desc}</p>
            </div>
        </a>
        `;
    });

});