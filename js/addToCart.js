
const detailPage = document.querySelector(".description");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");
console.log(id);

const url = "https://www.yvonnewara.no/wp-json/wc/v3/products/" + "?consumer_key=ck_a7f7c9f743fe258d24ddab10dc3aad6854d32fa1&consumer_secret=cs_ef0232301b0ad35cc4872523664c64ae1686e0d9";



async function fetchProduct() {
    
   try {
    const response = await fetch(url);
    const details = await response.json();

    console.log(details);

    createHtml(details);
   }
   catch(error) {
       console.log(error);
       detailPage.innerHTML = message("error", error);
   }
}


fetchProduct();

function createHtml(details) {
    detailPage.innerHTML += `
   <div class="detail-box">
   <h2>${details.name}name</h2>
   <div class"image">${details.images}</div>
   <div class="description">${details.description}Description</div>
   <div class="product-detail">${details.price} kr</div>
   <div>Size${details.options}</div>
   </div>
    `;
}
