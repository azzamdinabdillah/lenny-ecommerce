import { CartProductList } from "../interfaces/Cart";

export const cartListProducts: CartProductList[] = [
  {
    brand: {
      brandName: "Logitech Indonesia",
      location: "Central Jakarta",
      img: "/assets/images/merchant.png",
    },
    products: [
      {
        img: "/assets/images/cart-product-1.png",
        title: "Logitech G435 Gaming Headset",
        location: "Central Jakarta",
        price: 280,
      },
      {
        img: "/assets/images/cart-product-2.png",
        title: "Logitech G502 Hero",
        location: "Central Jakarta",
        price: 89,
      },
      {
        img: "/assets/images/cart-product-3.png",
        title: "Logitech G303 Shroud Edition",
        location: "Central Jakarta",
        price: 46,
      },
    ],
  },

  {
    brand: {
      brandName: "Uniqlo",
      location: "Central Jakarta",
      img: "/assets/images/brand-2.png",
    },
    products: [
      {
        img: "/assets/images/cart-product-4.png",
        title: "Uniqlo Shirt XXL",
        location: "Central Jakarta",
        price: 280,
      },
    ],
  },
];
