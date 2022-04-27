import formatMoney from "../utils/formatMoney";
import getRatings from "../utils/getRatings";

export const cardElements = (products) =>
	products
		.map(
			(p) => `
        <div class="card" key=${p.id}>
          <div class="card-media">
            <img
              src=${p.image}
              alt=${p.title}
            />
          </div>
          <div class="card-content">
            <p class="content-title">
            ${p.title}
            </p>
            <div class="content-rating">
              ${getRatings(p.rating.rate)}
              <p class="rating-count">${p.rating.count}</p>
            </div>
            <div class="content-footer">
              <p>${formatMoney(p.price)}</p>
              <i class="fa-solid fa-cart-plus"></i>
            </div>
          </div>
        </div>
      `
		)
		.join("");
