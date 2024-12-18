document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");
    const searchInput = document.getElementById("search");
    const brandFilter = document.getElementById("brand-filter");
    const priceMinInput = document.getElementById("price-min");
    const priceMaxInput = document.getElementById("price-max");
    const filterButton = document.getElementById("filter-button");

    let products = [];

    // Fetch products from the Makeup API
    fetch("https://makeup-api.herokuapp.com/api/v1/products.json")
        .then(response => response.json())
        .then(data => {
            products = data;
            populateBrandFilter(products);
            displayProducts(products);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            productList.innerHTML = "<p>Failed to load products. Please try again later.</p>";
        });

    
