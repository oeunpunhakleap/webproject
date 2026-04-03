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
        chicken: "https://m.aeononlineshopping.com/product/-/4866?store_id=1",
        potatoes: "https://m.aeononlineshopping.com/product/-/13832?store_id=1",
        carrots: "https://m.aeononlineshopping.com/product/-/15252?store_id=1",
        morning_glory: "https://m.aeononlineshopping.com/product/-/16877?store_id=1",
        pineapple: "https://m.aeononlineshopping.com/product/-/3669?store_id=1",
        tomatoes: "https://m.aeononlineshopping.com/product/-/6176?store_id=1",
        tamarind:"https://m.aeononlineshopping.com/product/-/2601?store_id=1",
        pumpkin: "https://m.aeononlineshopping.com/product/-/16865?store_id=1",
        palm_sugar: "https://m.aeononlineshopping.com/product/-/1021?store_id=1",
        pandan: "",
        vanilla_extract: "",
        glutinous_rice: "https://aeononlineshopping.com/product/-/49235?store_id=1",
        pork_belly: "https://aeononlineshopping.com/product/-/52642?store_id=1",
        mung_beans: "https://aeononlineshopping.com/product/item/16558?store_id=1",
        black_pepper: "https://aeononlineshopping.com/product/item/46010?store_id=1",
        cucumber: "https://m.aeononlineshopping.com/product/-/15111?store_id=1",
        cabbage: "https://m.aeononlineshopping.com/product/-/3456?store_id=1",
        long_beans: "https://m.aeononlineshopping.com/product/-/3664?store_id=1",
        fish_sauce: "",
        soy_sauce: " https://m.aeononlineshopping.com/product/-/438?store_id=2",
        palm_sugar: "",
        oyster_sauce: "https://m.aeononlineshopping.com/product/-/39858?store_id=2",
        rice: " https://m.aeononlineshopping.com/product/-/1915?store_id=2",
        radish: "https://m.aeononlineshopping.com/product/-/66958?store_id=2",
        green_onions: "https://m.aeononlineshopping.com/product/-/2487?store_id=2",
        prohok: "https://m.aeononlineshopping.com/product/-/19938?store_id=1",
        minced_pork: "https://m.aeononlineshopping.com/product/-/2940?store_id=1",
        pea_eggplant: "",


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
        coconut_cream: "",
        chicken: "https://www.makrocambodiaclick.com/en/products/437721/",
        potatoes: "https://www.makrocambodiaclick.com/en/products/842871/",
        carrots: "https://www.makrocambodiaclick.com/en/products/430751/",
        morning_glory: "https://www.makrocambodiaclick.com/en/products/826829/",
        pineapple: "https://www.makrocambodiaclick.com/en/products/120253/",
        tomatoes: "https://www.makrocambodiaclick.com/en/products/838235/",
        tamarind:"https://www.makrocambodiaclick.com/en/products/144146/",
        pumpkin: "",
        palm_sugar: "https://www.makrocambodiaclick.com/en/products/419749/",
        pandan: "",
        vanilla_extract: "https://www.makrocambodiaclick.com/en/products/417013/",
        glutinous_rice: "https://www.psarplus.com/en/p/Yf3B1L75-743069537290705?info=JTdCJTIyaXNTZWFyY2hQYWdlJTIyJTNBdHJ1ZSUyQyUyMmluZGV4Q2xpY2tlZCUyMiUzQTAlMkMlMjJxdWVyeSUyMiUzQSUyMmdsdXRpbm91cyUyMHJpY2UlMjBmbG91ciUyMiUyQyUyMnNvdXJjZUV2ZW50JTIyJTNBJTIyc2VhcmNoJTIyJTJDJTIyY2F0ZWdvcnlOYW1lJTIyJTNBJTIyJTIyJTJDJTIyY29sbGVjdGlvbklkJTIyJTNBJTIyJTIyJTdE",
        pork_belly: "https://www.psarplus.com/en/p/uz13wwc-7606380298435?info=JTdCJTIyaXNTZWFyY2hQYWdlJTIyJTNBdHJ1ZSUyQyUyMmluZGV4Q2xpY2tlZCUyMiUzQTAlMkMlMjJxdWVyeSUyMiUzQSUyMnBvcmslMjBiZWxseSUyMiUyQyUyMnNvdXJjZUV2ZW50JTIyJTNBJTIyc2VhcmNoJTIyJTJDJTIyY2F0ZWdvcnlOYW1lJTIyJTNBJTIyJTIyJTJDJTIyY29sbGVjdGlvbklkJTIyJTNBJTIyJTIyJTdE",
        mung_beans: "https://www.psarplus.com/en/p/ZZMPG_jp-643629419587423?info=JTdCJTIyaXNTZWFyY2hQYWdlJTIyJTNBdHJ1ZSUyQyUyMmluZGV4Q2xpY2tlZCUyMiUzQTglMkMlMjJxdWVyeSUyMiUzQSUyMm11bmclMjBiZWFucyUyMiUyQyUyMnNvdXJjZUV2ZW50JTIyJTNBJTIyc2VhcmNoJTIyJTJDJTIyY2F0ZWdvcnlOYW1lJTIyJTNBJTIyJTIyJTJDJTIyY29sbGVjdGlvbklkJTIyJTNBJTIyJTIyJTdE",
        black_pepper: "https://www.psarplus.com/en/p/Vm2Oij_8-141755760260284?info=JTdCJTIyaXNTZWFyY2hQYWdlJTIyJTNBdHJ1ZSUyQyUyMmluZGV4Q2xpY2tlZCUyMiUzQTAlMkMlMjJxdWVyeSUyMiUzQSUyMmJsYWNrJTIwcGVwcGVyJTIyJTJDJTIyc291cmNlRXZlbnQlMjIlM0ElMjJzZWFyY2glMjIlMkMlMjJjYXRlZ29yeU5hbWUlMjIlM0ElMjIlMjIlMkMlMjJjb2xsZWN0aW9uSWQlMjIlM0ElMjIlMjIlN0Q",
        cucumber: "https://www.psarplus.com/en/p/uidlmq_-6976617611459?info=JTdCJTIyYm9vc3RlZFNjb3JlJTIyJTNBMiUyQyUyMmlzU2VhcmNoUGFnZSUyMiUzQXRydWUlMkMlMjJpbmRleENsaWNrZWQlMjIlM0EwJTJDJTIycXVlcnklMjIlM0ElMjJjdWN1bWJlciUyMiUyQyUyMnNvdXJjZUV2ZW50JTIyJTNBJTIyc2VhcmNoJTIyJTJDJTIyY2F0ZWdvcnlOYW1lJTIyJTNBJTIyJTIyJTJDJTIyY29sbGVjdGlvbklkJTIyJTNBJTIyJTIyJTdE",
        cabbage: "https://www.psarplus.com/en/p/o0iv52w-971438786910181?info=JTdCJTIyYm9vc3RlZFNjb3JlJTIyJTNBMiUyQyUyMmlzU2VhcmNoUGFnZSUyMiUzQXRydWUlMkMlMjJpbmRleENsaWNrZWQlMjIlM0ExJTJDJTIycXVlcnklMjIlM0ElMjJjdWN1bWJlciUyMiUyQyUyMnNvdXJjZUV2ZW50JTIyJTNBJTIyc2VhcmNoJTIyJTJDJTIyY2F0ZWdvcnlOYW1lJTIyJTNBJTIyJTIyJTJDJTIyY29sbGVjdGlvbklkJTIyJTNBJTIyJTIyJTdE",
        long_beans: "https://www.psarplus.com/en/p/_bo4pcf-7422332502211?info=JTdCJTIyaXNTZWFyY2hQYWdlJTIyJTNBdHJ1ZSUyQyUyMmluZGV4Q2xpY2tlZCUyMiUzQTE1JTJDJTIycXVlcnklMjIlM0ElMjJsb25nJTIwYmVhbnMlMjIlMkMlMjJzb3VyY2VFdmVudCUyMiUzQSUyMnNlYXJjaCUyMiUyQyUyMmNhdGVnb3J5TmFtZSUyMiUzQSUyMiUyMiUyQyUyMmNvbGxlY3Rpb25JZCUyMiUzQSUyMiUyMiU3RA",
        fish_sauce: " https://www.psarplus.com/en/p/7-DPQf3E-243313826733984?info=JTdCJTIyaXNTZWFyY2hQYWdlJTIyJTNBdHJ1ZSUyQyUyMmluZGV4Q2xpY2tlZCUyMiUzQTklMkMlMjJxdWVyeSUyMiUzQSUyMiVFMSU5RSU5MSVFMSU5RSVCOSVFMSU5RSU4MCVFMSU5RSU4RiVFMSU5RiU5MiVFMSU5RSU5QSVFMSU5RSVCOCUyMiUyQyUyMnNvdXJjZUV2ZW50JTIyJTNBJTIyc2VhcmNoJTIyJTJDJTIyY2F0ZWdvcnlOYW1lJTIyJTNBJTIyJTIyJTJDJTIyY29sbGVjdGlvbklkJTIyJTNBJTIyJTIyJTdE",
        soy_sauce: " https://www.psarplus.com/en/p/7ykKLfZw-540085700402633?info=JTdCJTIyaXNTZWFyY2hQYWdlJTIyJTNBdHJ1ZSUyQyUyMmluZGV4Q2xpY2tlZCUyMiUzQTE1JTJDJTIycXVlcnklMjIlM0ElMjIlRTElOUUlOTElRTElOUUlQjklRTElOUUlODAlRTElOUUlOUYlRTElOUYlOEElRTElOUUlQjglRTElOUUlQTIlRTElOUYlOEElRTElOUUlQjglRTElOUUlOUMlMjIlMkMlMjJzb3VyY2VFdmVudCUyMiUzQSUyMnNlYXJjaCUyMiUyQyUyMmNhdGVnb3J5TmFtZSUyMiUzQSUyMiUyMiUyQyUyMmNvbGxlY3Rpb25JZCUyMiUzQSUyMiUyMiU3RA",
        palm_sugar: "https://www.psarplus.com/en/p/bmt58GXA-342909899406556?info=JTdCJTIyaXNTZWFyY2hQYWdlJTIyJTNBdHJ1ZSUyQyUyMmluZGV4Q2xpY2tlZCUyMiUzQTklMkMlMjJxdWVyeSUyMiUzQSUyMnN1Z2FyJTIyJTJDJTIyc291cmNlRXZlbnQlMjIlM0ElMjJzZWFyY2glMjIlMkMlMjJjYXRlZ29yeU5hbWUlMjIlM0ElMjIlMjIlMkMlMjJjb2xsZWN0aW9uSWQlMjIlM0ElMjIlMjIlN0Q",
        oyster_sauce: "",
        rice: " https://www.psarplus.com/en/p/072uFc93-343268178127215?info=JTdCJTIyaXNTZWFyY2hQYWdlJTIyJTNBdHJ1ZSUyQyUyMmluZGV4Q2xpY2tlZCUyMiUzQTMlMkMlMjJxdWVyeSUyMiUzQSUyMnJpY2UlMjIlMkMlMjJzb3VyY2VFdmVudCUyMiUzQSUyMnNlYXJjaCUyMiUyQyUyMmNhdGVnb3J5TmFtZSUyMiUzQSUyMiUyMiUyQyUyMmNvbGxlY3Rpb25JZCUyMiUzQSUyMiUyMiU3RA",
        radish: "https://www.psarplus.com/en/p/nd9Tzfv-445532213220531?info=JTdCJTIyaXNTZWFyY2hQYWdlJTIyJTNBdHJ1ZSUyQyUyMmluZGV4Q2xpY2tlZCUyMiUzQTAlMkMlMjJxdWVyeSUyMiUzQSUyMnJhZGlzaCUyMiUyQyUyMnNvdXJjZUV2ZW50JTIyJTNBJTIyc2VhcmNoJTIyJTJDJTIyY2F0ZWdvcnlOYW1lJTIyJTNBJTIyJTIyJTJDJTIyY29sbGVjdGlvbklkJTIyJTNBJTIyJTIyJTdE",
        green_onions: "https://www.psarplus.com/en/p/0icxzsi-7275698028739?info=JTdCJTIyaXNTZWFyY2hQYWdlJTIyJTNBdHJ1ZSUyQyUyMmluZGV4Q2xpY2tlZCUyMiUzQTAlMkMlMjJxdWVyeSUyMiUzQSUyMiVFMSU5RSU5RiVFMSU5RiU5MiVFMSU5RSU5QiVFMSU5RSVCOSVFMSU5RSU4MCVFMSU5RSU4MSVFMSU5RiU5MiVFMSU5RSU5MSVFMSU5RSVCOSVFMSU5RSU5OCUyMiUyQyUyMnNvdXJjZUV2ZW50JTIyJTNBJTIyc2VhcmNoJTIyJTJDJTIyY2F0ZWdvcnlOYW1lJTIyJTNBJTIyJTIyJTJDJTIyY29sbGVjdGlvbklkJTIyJTNBJTIyJTIyJTdE",
        prohok: "https://www.psarplus.com/en/p/5uIApzsS-842035736949237?info=JTdCJTIyaXNTZWFyY2hQYWdlJTIyJTNBdHJ1ZSUyQyUyMmluZGV4Q2xpY2tlZCUyMiUzQTIlMkMlMjJxdWVyeSUyMiUzQSUyMmZlcm1lbnRlZCUyMGZpc2glMjIlMkMlMjJzb3VyY2VFdmVudCUyMiUzQSUyMnNlYXJjaCUyMiUyQyUyMmNhdGVnb3J5TmFtZSUyMiUzQSUyMiUyMiUyQyUyMmNvbGxlY3Rpb25JZCUyMiUzQSUyMiUyMiU3RA",
        minced_pork: "https://www.psarplus.com/en/p/4Nv4DeI-129102427473312?info=JTdCJTIyaXNTZWFyY2hQYWdlJTIyJTNBdHJ1ZSUyQyUyMmluZGV4Q2xpY2tlZCUyMiUzQTUlMkMlMjJxdWVyeSUyMiUzQSUyMnBvcmslMjIlMkMlMjJzb3VyY2VFdmVudCUyMiUzQSUyMnNlYXJjaCUyMiUyQyUyMmNhdGVnb3J5TmFtZSUyMiUzQSUyMiUyMiUyQyUyMmNvbGxlY3Rpb25JZCUyMiUzQSUyMiUyMiU3RA",
        pea_eggplant: "https://www.psarplus.com/en/p/YmnptnN-543313972515947?info=JTdCJTIyaXNTZWFyY2hQYWdlJTIyJTNBdHJ1ZSUyQyUyMmluZGV4Q2xpY2tlZCUyMiUzQTAlMkMlMjJxdWVyeSUyMiUzQSUyMnBlYSUyMGVnZ3BsYW50JTIyJTJDJTIyc291cmNlRXZlbnQlMjIlM0ElMjJzZWFyY2glMjIlMkMlMjJjYXRlZ29yeU5hbWUlMjIlM0ElMjIlMjIlMkMlMjJjb2xsZWN0aW9uSWQlMjIlM0ElMjIlMjIlN0Q",
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
        coconut_cream: "https://delishop.asia/product/red-chilli-pepper-small",
        chicken: "https://delishop.asia/product/chicken-small",
        potatoes: "https://delishop.asia/product/potato-1kg-delishop-fresh",
        carrots: "https://delishop.asia/product/carrot-big",
        morning_glory: "https://delishop.asia/product/water-morning-glory",
        pineapple: "https://delishop.asia/product/pineapple",
        tomatoes: "https://delishop.asia/product/ripe-tomato-500g-delishop-fresh",
        tamerind:"https://delishop.asia/product/tamarind-cinnamon-sweet-sauce",
        pumpkin: "https://delishop.asia/product/pumpkin",
        palm_sugar: "https://delishop.asia/product/palm-sugar-bottle",
        pandan: "",
        vanilla_extract: "https://delishop.asia/product/vanilla-syrup",
        glutinous_rice: "https://delishop.asia/product/glutinous-rice-flour-two-parrots-1kg",
        pork_belly: "https://delishop.asia/product/pork-belly-ruminant",
        mung_beans: "",
        black_pepper: "https://delishop.asia/product/ground-black-pepper-500g-sela-pepper",
        cucumber: "https://delishop.asia/product/cucumber",
        cabbage: "https://delishop.asia/product/mondolkiri-green-cabbage",
        long_beans: "https://delishop.asia/product/long-bean-300g-delishop-fresh",
        fish_sauce:" https://delishop.asia/product/premium-fish-sauce-leang-leng-700ml",
        soy_sauce: "https://delishop.asia/product/sweet-sauce-tiger-brand",
        palm_sugar: "https://delishop.asia/product/palm-sugar-sovannak-500g0",
        oyster_sauce: "https://delishop.asia/product/oyster-sauce-beksul",
        rice: "https://delishop.asia/product/organic-semi-milled-long-grain-rice-1kg-1kg-ibis-rice",
        radish:" https://delishop.asia/product/white-radish",
        green_onions: "https://delishop.asia/product/spring-onion-100g-khmer-organic",
        prohok: "",
        minced_pork: "https://delishop.asia/product/pork-minced-meat",
        pea_eggplant: "https://delishop.asia/product/cherry-egg-plant",
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