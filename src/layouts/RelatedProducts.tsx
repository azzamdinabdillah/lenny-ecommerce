import Button from "../components/Button";
import { CardProduct } from "../components/CardProduct";
import { listProducts } from "../datas/products";

export default function RelatedProducts() {
  return (
    <div className="">
      <div className="top flex justify-between items-center">
        <h1 className="h2 text-black-01 lg:eh-6">Related Product</h1>
        <div>
          <Button variant="primary-light" size="sm">
            View Detail
          </Button>
        </div>
      </div>
      <div className="list-products grid grid-cols-2 gap-4 gap gap-y-6 mt-7 md:grid-cols-4 lg:mt-[52px] lg:gap-6">
        {listProducts.map(
          ({ img, location, price, rating, title, totalSold }) => (
            <CardProduct
              img={img}
              location={location}
              price={price}
              rating={rating}
              title={title}
              totalSold={totalSold}
            />
          )
        )}
      </div>
    </div>
  );
}