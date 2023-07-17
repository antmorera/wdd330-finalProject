import { findProductById } from "./externalServices.mjs";
import { getLocalStorage, setLocalStorage } from "./utils.mjs";

let product = {};

export default async function productDetails(productId) {
  // get the information for the product. findProductByID will return. awaut will process that return.
  product = await findProductById(productId);
  // When we get the product detail we can redner it out to our html.
  renderProductDetails(product);
  // Once the html is rendered we will add a listener to add to cart button.
  document.getElementById("addToCart").addEventListener("click", addToCart);
}

function addToCart() {
  let cartItems = getLocalStorage("so-cart");
  if (!Array.isArray(cartItems)) {
    cartItems = [];
  }
  cartItems.push(product);
  setLocalStorage("so-cart", cartItems);
}

function renderProductDetails() {
  document.querySelector("#productName").innerText = product.Brand.Name;
  document.querySelector("#productNameWithoutBrand").innerText =
    product.NameWithoutBrand;
  document.querySelector("#productImage").src = product.Images.PrimaryLarge;
  document.querySelector("#productImage").alt = product.Name;
  document.querySelector("#productFinalPrice").innerText = product.FinalPrice;
  document.querySelector("#productColorName").innerText =
    product.Colors[0].ColorName;
  document.querySelector("#productDescriptionHtmlSimple").innerHTML =
    product.DescriptionHtmlSimple;
  document.querySelector("#addToCart").dataset.id = product.Id;
}
