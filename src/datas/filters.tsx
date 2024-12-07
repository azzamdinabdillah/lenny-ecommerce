interface Filter {
  category: string;
  filter: string[];
}

export const filterSearchResult: Filter[] = [
  {
    category: "Best Filter",
    filter: ["4 stars or upper", "Same-day delivery", "COD", "Discount"],
  },
  {
    category: "Location",
    filter: [
      "Bandung",
      "Jakarta",
      "Medan",
      "Surabaya",
      "Jogja",
      "Kediri",
      "Ngadiluwih",
    ],
  },
  {
    category: "Category",
    filter: [
      "Electronic",
      "Fashion",
      "Action Figure",
      "Book",
      "Gaming",
      "Simulator",
      "Headset",
    ],
  },
];

export const filterReviews: Filter[] = [
  {
    category: "Best Filter",
    filter: ["5 Star", "4 Star", "3 Star", "2 Star", "1 Star"],
  },
  {
    category: "Review Topics",
    filter: [
      "Product Quality",
      "Seller Services",
      "Product Price",
      "Shipment",
      "Match with Description",
    ],
  },
];
