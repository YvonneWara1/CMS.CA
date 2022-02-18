const baseUrl = "https://www.yvonnewara.no/wp-json/wc/v3/products?consumer_key=ck_a7f7c9f743fe258d24ddab10dc3aad6854d32fa1&consumer_secret=cs_ef0232301b0ad35cc4872523664c64ae1686e0d9";
const productContainer = document.querySelector(".product-info");
const perPage = document.querySelector(".per-page-selection");
const addToCart = document.querySelector(".add-to-cart");
const categories = document.querySelectorAll(".categories");
const searchButton = document.querySelector("#search-button");

async function getProducts(url){
    const response = await fetch(url);
    const products = await response.json();

    productContainer.innerHTML = "";


    products.forEach(function(product) {
        productContainer.innerHTML += `
        <div class="product-info">
        <div class="products"><h2>${product.name}</h2></div>
        <div class="product-image"style="background-image: url(${product.images[0].src});"</div>
        <button class="add-to-cart"><a class="a-button" href="productPage.html?id=${product.id}${product.url}"});">View</a></button>
        </div>
        `;
        
        
    });
    console.log(products);
    
}

getProducts(baseUrl);

perPage.onchange = function(event) {
    const newUrl = baseUrl + `?per_page=${event.target.value}`;
    productContainer.innerHTML = "";
    getProducts(newUrl);

}

categories.forEach(function(category) {
    category.onclick = function(event){
        let newUrl;
        if(event.target.id === "featured") {
            newUrl = baseUrl + "?featured=true";
        }
        else{
            const categoryChosen = event.target.value;
            newUrl = baseUrl + `?category=${categoryChosen}`
        }
        productContainer.innerHTML = "";
        getProducts(newUrl);
    }
})

searchButton.onclick = function(){
    const searchInput = document.querySelector("#search-button").value;
    const newUrl = baseUrl + `?search=${searchInput}`;
    productContainer.innerHTML = "";
    getProducts(newUrl);
}


