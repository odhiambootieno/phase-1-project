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

   // Populate brand filter dropdown
   function populateBrandFilter(products) {
    const brands = [...new Set(products.map(product => product.brand))];
    brands.forEach(brand => {
        const option = document.createElement("option");
        option.value = brand;
        option.textContent = brand;
        brandFilter.appendChild(option);
    });
}

// Display products
function displayProducts(products) {
    productList.innerHTML = "";
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
            <img src="${product.image_link}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Brand: ${product.brand}</p>
            <p>Price: $${product.price}</p>
        `;
        productList.appendChild(productDiv);
    });
}

// Search functionality
searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
});

// Filter functionality
filterButton.addEventListener("click", () => {
    const selectedBrand = brandFilter.value;
    const priceMin = parseFloat(priceMinInput.value) || 0;
    const priceMax = parseFloat(priceMaxInput.value) || Infinity;

    const filteredProducts = products.filter(product => {
        const isBrandMatch = selectedBrand ? product.brand === selectedBrand : true;
        const isPriceMatch = product.price > priceMin && product.price < priceMax;
        return isBrandMatch && isPriceMatch;
    });

    displayProducts(filteredProducts);
    });
});