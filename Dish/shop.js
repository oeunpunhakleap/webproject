let selectedIngredient = "";

const links = {
    // replace the link here
    aeon: {
        fish: "https://m.aeononlineshopping.com/product/-/17724?store_id=1",
        coconut_milk: "https://m.aeononlineshopping.com/product/-/65375?store_id=1",
        eggs: "https://m.aeononlineshopping.com/product/-/36032?store_id=1",
        lemon_grass: "https://m.aeononlineshopping.com/product/-/2562?store_id=3",
        kaffir: "https://m.aeononlineshopping.com/product/-/14770?store_id=1",
        galangal: "https://m.aeononlineshopping.com/product/-/23053?store_id=1",
        turmeric: "https://m.aeononlineshopping.com/product/-/43840?store_id=1",
        garlic: "https://m.aeononlineshopping.com/product/-/14339?store_id=1",
        shallots: "https://m.aeononlineshopping.com/product/-/25160?store_id=1",
        banana_leaves: "",
        noni_leaves: "",
        red_chili: "https://m.aeononlineshopping.com/product/-/17400?store_id=3",
        coconut_cream: "https://m.aeononlineshopping.com/product/-/67296?store_id=1",
        
    },
    makro: {
        fish: "https://www.makrocambodiaclick.com/en/products/920302/",
        coconut_milk: "https://www.makrocambodiaclick.com/en/products/504300/",
        eggs: "https://www.makrocambodiaclick.com/en/products/428119/",
        lemon_grass: "",
        kaffir: "https://www.makrocambodiaclick.com/en/products/441967/",
        galangal: "https://www.makrocambodiaclick.com/en/products/441964/",
        turmeric: "",
        garlic: "https://www.makrocambodiaclick.com/en/products/23803/",
        shallots: "",
        banana_leaves: "",
        noni_leaves: "",
        red_chili: "https://www.makrocambodiaclick.com/en/products/436813/",
        coconut_cream: ""
    },

    deli: {
        fish: "https://delishop.asia/product/snakehead-fish-dieb-fish",
        coconut_milk: "https://delishop.asia/product/red-chilli-pepper-small",
        eggs: "https://delishop.asia/product/uv-eggs-10-eggs-delishop-fresh",
        lemon_grass: "https://delishop.asia/product/lemongrass-300g0",
        kaffir: "https://delishop.asia/product/kaffir-lime-leaf",
        galangal: "https://delishop.asia/product/galangal",
        turmeric: "https://delishop.asia/product/turmeric",
        garlic: "https://delishop.asia/product/garlic-peeled",
        shallots: "https://delishop.asia/product/organic-shallot-bunch-1kg-12kg-delishop-fresh",
        banana_leaves: "",
        noni_leaves: "",
        red_chili: "https://delishop.asia/product/red-chilli-pepper-small",
        coconut_cream: "https://delishop.asia/product/red-chilli-pepper-small"
        
    }
};

function openModal(ingredient) {
    selectedIngredient = ingredient;

    document.getElementById("modalTitle").innerText =
        "Buy " + ingredient + " from:";

    document.getElementById("shopMessage").innerText = "";

    document.getElementById("shopModal").style.display = "block";
}

function closeModal() {
    document.getElementById("shopModal").style.display = "none";
}

function goToShop(shop) {
    const url = links[shop][selectedIngredient];

    if (url && url !== "") {
        window.location.href = url; 
    } else {
        document.getElementById("shopMessage").innerText =
            shop.toUpperCase() + " does not have " + selectedIngredient + ". Try another store!";
    }
}


window.onclick = function(event) {
    const modal = document.getElementById("shopModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};