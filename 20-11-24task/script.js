async function productData() {
  let data = await fetch("https://fakestoreapi.com/products");
  let productData = await data.json();
  let filterData = productData.filter(
    (item) => item.price > 200 && item.rating.rate > 3.5
  );
  //   console.log(filterData);
  displayData(filterData);
}

function displayData(items) {
  let mainContainer = document.createElement("div");
  mainContainer.style.cssText =
    "display: flex; justify-content: space-between; flex-wrap: wrap; gap: 20px; padding: 20px; background-color:grey";

  items.forEach((item) => {
    let container = document.createElement("div");
    container.style.cssText =
      "border: 1px solid #ddd; color:white;border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); padding: 15px; text-align: center; width: 300px;";

    container.innerHTML += `<img src=${item.image} style="width: 200px; height:200px; border-radius: 8px;">
    <h2 style="font-size: 18px;">${item.title}</h2>
    <p style="font-size: 16px";>$${item.price}</p>
    <h3 style="font-size: 14px;">${item.rating.rate}</h3>`;

    mainContainer.appendChild(container);
    document.body.appendChild(mainContainer);
  });
}
productData();
