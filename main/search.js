const dishes = [
    { name: "Fish Amok", link: "../Dish/amok.html" },
    { name: "Khmer Curry", link: "../Dish/curry.html" },
    { name: "Samlor Machu", link: "../Dish/samlor_maju.html" },
    { name: "Pumpkin Custard", link: "../Dish/pumpkin_custard.html" },
    { name: "Num Ansom Chrouk", link: "../Dish/ansom_chruk.html" },
    { name: "Terk Kroeung", link: "../Dish/terk_kroeung.html" },
    { name: "Prohok Ktis", link: "../Dish/prohok_ktis.html" },
    { name: "Bay Sach Jruk", link: "../Dish/bay_sach_jruk.html" },
    { name: "Beef Lok Lak", link: "../Dish/beef_lok_lak.html" },
    { name: "Bitter Melon Soup", link: "../Dish/bitter_melon_soup.html" },
    { name: "Cha Ju Em", link: "../Dish/cha_ju_em.html" },
    { name: "Cha Kdav Sach Morn", link: "../Dish/cha_kdav_sach_morn.html" },
    { name: "Squid Green Pepper", link: "../Dish/cha_merk_greenpeper.html" },
    { name: "Jruk Sach Ko", link: "../Dish/jruk_sach_ko.html" },
    { name: "Khor Sach Jruk", link: "../Dish/khor_sach_jruk1.html" },
    { name: "Korko", link: "../Dish/koko.html" },
    { name: "Lot Cha", link: "../Dish/lot_cha.html" },
    { name: "Minced Pork Cabbage Soup", link: "../Dish/minced_pork_napa_cabbage_soup.html" },
    { name: "Samlor Phoher", link: "../Dish/somlar_proher.html" },
    { name: "Samlor Tropeang", link: "../Dish/somlor_tropeang.html" },
];

function searchDish() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const resultsDiv = document.getElementById("results");

    resultsDiv.innerHTML = "";

    dishes.forEach(dish => {
        if (dish.name.toLowerCase().includes(input) && input !== "") {
            resultsDiv.innerHTML += `
                <a href="${dish.link}" class="result-item">
                    ${dish.name}
                </a>
            `;
        }
    });

    if (resultsDiv.innerHTML === "" && input !== "") {
        resultsDiv.innerHTML = "<p style='padding:10px;'>No dish found</p>";
    }
}