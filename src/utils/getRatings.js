export default function getRatings(rate) {
	const rounded = Math.round(rate);

	switch (rounded) {
		case 2:
			return `
	      <div class="rating-rate">
	        <i class="fa-solid fa-star"></i>
	        <i class="fa-solid fa-star"></i>
	        <i class="fa-regular fa-star"></i>
	        <i class="fa-regular fa-star"></i>
	        <i class="fa-regular fa-star"></i>
	      </div>
	    `;
		case 3:
			return `
	      <div class="rating-rate">
	        <i class="fa-solid fa-star"></i>
	        <i class="fa-solid fa-star"></i>
	        <i class="fa-solid fa-star"></i>
	        <i class="fa-regular fa-star"></i>
	        <i class="fa-regular fa-star"></i>
	      </div>
	    `;
		case 4:
			return `
	      <div class="rating-rate">
	        <i class="fa-solid fa-star"></i>
	        <i class="fa-solid fa-star"></i>
	        <i class="fa-solid fa-star"></i>
	        <i class="fa-solid fa-star"></i>
	        <i class="fa-regular fa-star"></i>
	      </div>
	    `;
		case 5:
			return `
	      <div class="rating-rate">
	        <i class="fa-solid fa-star"></i>
	        <i class="fa-solid fa-star"></i>
	        <i class="fa-solid fa-star"></i>
	        <i class="fa-solid fa-star"></i>
	        <i class="fa-solid fa-star"></i>
	      </div>
	    `;
		default:
			break;
	}
}
