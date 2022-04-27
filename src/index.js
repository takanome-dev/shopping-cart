import * as assets from "./assets";
import { cardElements } from "./html/card";
import { cartIconElements } from "./html/cartIcon";
import { cartItemsElements } from "./html/cartItem";
import { filterElements } from "./html/filter";
// import products from "./products.json";
import { store } from "./store";
import { addItemToCart } from "./store/cartItems";
import { filterProducts, getProducts } from "./store/products";
import { updateCartNumber, updateFilter } from "./store/ui";
import "./styles/style.scss";

// DOM Elements
const main = document.getElementById("main");
const fav96 = document.getElementById("fav96");
const fav32 = document.getElementById("fav32");
const logoImg = document.getElementById("logo");
const fav196 = document.getElementById("fav196");
const fav128 = document.getElementById("fav128");
const filterDiv = document.querySelector(".filter");
const cartIconDiv = document.querySelector(".cartIcon");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close");
const modalContent = document.querySelector(".modal-content");

// Add images to html elements
logoImg.src = assets.Logo;
fav196.href = assets.Favicon196;
fav128.href = assets.Favicon128;
fav96.href = assets.Favicon96;
fav32.href = assets.Favicon32;

let products = [];
let numberItems = 0;

// subscribe to the store
store.subscribe(() => {
	const currentFilter = store.getState().ui.filter;
	const numberInCart = store.getState().ui.numberInCart;
	const cartItems = store.getState().entities.cartItems.items;

	if (currentFilter === "all")
		products = store.getState().entities.products.list;
	else products = filterProducts(store.getState());

	// html elements
	main.innerHTML = cardElements(products);
	filterDiv.innerHTML = filterElements(currentFilter);
	cartIconDiv.innerHTML = cartIconElements(numberInCart);
	modalContent.innerHTML = cartItemsElements(cartItems, numberItems);

	// handle filter products
	const filters = filterDiv.querySelectorAll("span");
	for (let i = 0; i < filters.length; i++) {
		filters[i].addEventListener("click", (e) => {
			const filter = e.target.textContent.toLowerCase();
			store.dispatch(updateFilter(filter));
		});
	}

	// handle add to cart
	const addToCartIcons = document.querySelectorAll(".fa-cart-plus");
	for (let i = 0; i < addToCartIcons.length; i++) {
		addToCartIcons[i].addEventListener("click", (e) => {
			const itemId =
				e.target.parentNode.parentNode.parentNode.attributes[1].nodeValue;
			store.dispatch(updateCartNumber());
			store.dispatch(addItemToCart(+itemId));
		});
	}
});

// Event listeners
document.addEventListener("DOMContentLoaded", () =>
	// store.dispatch(getProducts(products))
	store.dispatch(getProducts())
);

cartIconDiv.addEventListener("click", () => {
	overlay.classList.add("showCart");
	modal.classList.add("showCart");
});

overlay.addEventListener("click", () => {
	overlay.classList.remove("showCart");
	modal.classList.remove("showCart");
});

closeBtn.addEventListener("click", () => {
	overlay.classList.remove("showCart");
	modal.classList.remove("showCart");
});
