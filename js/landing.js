"use strict";
const productsEl = document.querySelector(".products-card");
(async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    data?.map((item) => {
      productsEl.innerHTML += ` <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
    <div class="card h-100 shadow-sm">
        <img src="${item.image}" class="card-img-top" alt="${item.title}">
        <div class="card-body d-flex flex-column">
            <h5 class="card-title">
                ${item.title.split(" ").slice(0, 3).join(" ")}
            </h5>

            <p class="card-text">
                ${item.description.split(" ").slice(0, 8).join(" ")}
            </p>

            <a href="#" class="btn btn-primary mt-auto">
                Go Somewhere
            </a>
        </div>
    </div>
</div>
              `;
    });
  } catch (error) {
    console.log(error);
  }
})();
cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        detailTitle.textContent=...

        detailImage.src=...

        detailPrice.textContent=...

    })

})
