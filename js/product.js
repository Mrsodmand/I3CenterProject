(async () => {
  const response = await fetch(
    "https://faradars.org/api/client/v2/landings/36486/products?page=1&limit=6",
  );
  const data = await response.json();
  const courses = document.querySelector(".courses-area");
  const popular = document.querySelector(".popular-area");
  const favCourses = document.querySelector(".fav-coureses-area");
  const productsArea = document.querySelector(".products-area");
  let count = 0;
  for (const key of data["products"]) {
    count++;
    if (count <= 4) {
      courses.innerHTML += `
       <div class="col-12 col-md-6 col-lg-3 mb-3">
                    <div class="card">

                        <div>
                            <img src="${key.png_image}"
                                alt="آموزش مبانی برنامه نویسی و انواع زبان های برنامه نویسی (رایگان)" class="img-fluid">
                            <div class="p-3">
                                <div class="d-flex justify-content-between cat-price-items">
                                    <span class="badge bg-danger h-auto w-auto">
${key.status}
                                    </span>
                                    <p>
                                       ${key.price}
                                    </p>
                                </div>
                                <p class="mt-3">
                                    آموزش مبانی برنامه نویسی و انواع زبان های برنامه نویسی (رایگان)
                                </p>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="d-flex justify-content-between cat-price-items">
                                    <span class="">
${key.rating}
                                    </span>
                                    <p>
                                       ${key.student_count} دانش آموز
                                    </p>
                                </div>

                        </div>
                    </div>
                </div>
    `;
    }
  }

  const Popular = await fetch(
    "https://faradars.org/api/client/v1/utils/popular",
  );
  const PopularItems = await Popular.json();
  count = 0;
  for (const key of PopularItems["data"]["populars"]) {
     count++
    if (count <= 6) {
      popular.innerHTML += `
      <div class=" col-2 colo-sm-2 col-md-4 col-lg-2 mt-1">
     <div class="card   p-4 popular-border">
                    <h3 class="text-center">
                       ${key.title}
                    </h3>
                </div>
                </div>
    `;
   
    }
    
  }


   const favresponse = await fetch(
    "https://faradars.org/api/client/v1/home/cards/mostRateProductMonetary?category_id=333231&page=1&count=16",
  );
  const favdata = await favresponse.json();

 count = 0;
  for (const key of favdata["data"]["products"]) {
    count++;
    if (count <= 4) {
      favCourses.innerHTML += `
       <div class="col-12 col-md-6 col-lg-3 mb-3">
                    <div class="card">

                        <div>
                            <img src="${key.png_image}"
                                alt="آموزش مبانی برنامه نویسی و انواع زبان های برنامه نویسی (رایگان)" class="img-fluid">
                            <div class="p-3">
                                <div class="d-flex justify-content-between cat-price-items">
                                    <span class="badge bg-danger h-auto w-auto">
${key.status}
                                    </span>
                                    <p>
                                       ${key.price}
                                    </p>
                                </div>
                                <p class="mt-3">
                                    آموزش مبانی برنامه نویسی و انواع زبان های برنامه نویسی (رایگان)
                                </p>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="d-flex justify-content-between cat-price-items">
                                    <p>
                                       ${key.instructors[0].first_name} ${key.instructors[0].last_name}
                                    </p>
                                </div>

                        </div>
                    </div>
                </div>
    `;
    }
  }

    const products = await fetch(
    "https://faradars.org/api/client/v2/landings/36486/products?page=1&limit=6",
  );
  const productsData = await products.json();
    for (const key of productsData["products"]) {
    count++;
  
      productsArea.innerHTML += `
       <div class="col-12 col-md-6 col-lg-3 mb-3">
                    <div class="card">

                        <div>
                            <img src="${key.png_image}"
                                alt="آموزش مبانی برنامه نویسی و انواع زبان های برنامه نویسی (رایگان)" class="img-fluid">
                            <div class="p-3">
                                <div class="d-flex justify-content-between cat-price-items">
                                    <span class="badge bg-danger h-auto w-auto">
${key.status}
                                    </span>
                                    <p>
                                       ${key.price}
                                    </p>
                                </div>
                                <p class="mt-3">
                                    آموزش مبانی برنامه نویسی و انواع زبان های برنامه نویسی (رایگان)
                                </p>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="d-flex justify-content-between cat-price-items">
                                    <span class="">
${key.rating}
                                    </span>
                                    <p>
                                       ${key.student_count} دانش آموز
                                    </p>
                                </div>

                        </div>
                    </div>
                </div>
    `;
    
  }

})();
