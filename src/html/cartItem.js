import formatMoney from "../utils/formatMoney";
import getRatings from "../utils/getRatings";

export const cartItemsElements = (cartItems, numberItems) => {
	if (cartItems.length <= 0)
		return `
      <div class="empty-cart">
        <h3>You cart is empty</h3>
        <p>Start by adding products to the cart</p>
      </div>
    `;

	return cartItems
		.map(
			(i) => `
          <div class="cartItem">
            <div class="card-media">
              <img
                src=${i.image}
                alt=${i.title}
              />
            </div>
            <div class="card-content">
              <p class="content-title">
                ${i.title}
              </p>
              <div class="content-rating">
                ${getRatings(i.rating.rate)}
                <p class="price">${formatMoney(i.price)}</p>
              </div>
              <div class="content-footer">
                <div class="quantity">
                  <button id="decrease">-</button>
                  <p>${numberItems}</p>
                  <button id="increase">+</button>
                </div>
                <i class="fa-regular fa-trash-can del"></i>
              </div>
            </div>
          </div>
        `
		)
		.join("");
};
