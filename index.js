let contentDiv = document.getElementById("content");
let images = [1, 2, 3, 4, 5];
function bhargavi() {
  setTimeout(function () {
    contentDiv.innerHTML = `<h2>Joggers</h2>`;

    for (const img of images) {
      contentDiv.innerHTML += `
            <div style="display:flex; flex-direction:column; margin-bottom: 10px;">
              <img src="https://bluetyga.com/cdn/shop/products/denim-travel-joggers-blue-tyga-14.jpg?v=1697555763" alt="Joggers" width="150px" />

            </div>
          `;
    }
    contentDiv.innerHTML += `
      <button style="width: 100px;">Buy Now</button>
    `;
  }, 2000);
}
