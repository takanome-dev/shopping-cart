const categories = [
	"All",
	"Electronics",
	"Jewelery",
	"Men's Clothing",
	"Women's Clothing",
];

export const filterElements = (currentFilter) =>
	categories
		.map(
			(c) =>
				`
          <span class=${
						currentFilter === c.toLowerCase() ? "active" : ""
					}>${c}</span>
        `
		)
		.join("");
