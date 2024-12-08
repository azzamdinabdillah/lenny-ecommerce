import { Brands } from "./Brands";
import { Products } from "./Products";

export interface CartProductList {
  brand: Brands;
  products: Products[];
}
