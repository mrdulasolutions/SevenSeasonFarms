export type Review = {
  name: string;
  date: string; // ISO
  rating: number; // 0-5
  products: string[]; // product labels the customer bought
  body: string;
  verified?: boolean;
};

export const REVIEW_STATS = {
  average: 4.9,
  count: 37,
};

export const REVIEWS: Review[] = [
  {
    name: "Elisha Kemp",
    date: "2026-03-11",
    rating: 5,
    products: ["Fresh Milk, Gallon", "Fresh Milk, Half Gallon"],
    body: "Wonderful owners and love meeting their daughter at the market each week! The milk is impeccable, so yummy! Their bacon is delicious, we love making biscuits with it.",
    verified: true,
  },
  {
    name: "Robyn Rock",
    date: "2026-03-21",
    rating: 5,
    products: ["Fresh Milk, Half Gallon"],
    body: "Super easy to order. Convenient pick up spot. Grateful for local farmers in this area!",
    verified: true,
  },
  {
    name: "Christopher Adams",
    date: "2026-02-16",
    rating: 5,
    products: ["Fresh Milk, Gallon"],
    body: "We are continually pleased with the quality of raw milk and beef supplied by Seven Seasons Farm. We heartily recommend this family-run business!",
    verified: true,
  },
  {
    name: "Shelley Cowperthwait",
    date: "2026-02-04",
    rating: 5,
    products: ["Fresh Milk, Gallon"],
    body: "Super friendly!",
    verified: true,
  },
  {
    name: "Zoey Cameron",
    date: "2026-02-02",
    rating: 5,
    products: ["Fresh Milk, Gallon"],
    body: "I've ordered milk from Seven Seasons off and on for years. It's the best I've ever received, fresh and convenient pick up! Thanks guys!",
    verified: true,
  },
  {
    name: "Sandra Akay",
    date: "2026-02-01",
    rating: 5,
    products: ["Fresh Milk, Gallon"],
    body: "Great milk!",
    verified: true,
  },
  {
    name: "Gerald Pottern",
    date: "2026-01-10",
    rating: 5,
    products: ["Fresh Milk, Gallon"],
    body: "Great products (pork, milk) and pleasant, attentive interactions with the Wilkins family.",
    verified: true,
  },
];
