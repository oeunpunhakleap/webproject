document.addEventListener("DOMContentLoaded", () => {

    const now = new Date();
    const month = now.getMonth() + 1;

    function getSeason(month) {
        if (month >= 3 && month <= 10) return "summer";
        return "winter";
    }

    const season = getSeason(month);

    const summerDishes = [
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

const winterDishes = [
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

    const dishes = season === "summer" ? summerDishes : winterDishes;

    // TITLE CHANGE
    const title = document.getElementById("rec-title");
    title.innerText =
        season === "summer"
            ? "Recommended Dishes for Summer ☀️"
            : "Recommended Dishes for Winter ❄️";

    // GRID
    const grid = document.getElementById("rec-grid");
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