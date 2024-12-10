import CartProductCard from "../components/CartProductCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { cartListProducts } from "../datas/cartListProducts";
import RelatedProducts from "../layouts/RelatedProducts";
import { Left, Right, UsersTransaction } from "../layouts/UsersTransaction";

export default function Cart() {
  return (
    <>
      <div>
        <Navbar />

        <UsersTransaction
          title="Shopping Chart"
          subTitle="Showing your choices product"
        >
          <Left>
            {cartListProducts.map((lists, listsIndex) => (
              <>
                <div
                  className="border-grey p-4 rounded-xl bg-white lg:py-8 lg:px-6"
                  key={listsIndex}
                >
                  <div className="brand flex items-center gap-2">
                    <img
                      src={lists.brand.img}
                      alt=""
                      className="w-[40px] h-[40px] lg:w-[44px] lg:h-[44px] xl:w-[46px] xl:h-[46px]"
                    />
                    <div className="gap-1 flex flex-col">
                      <h1 className="h4 text-black-01 lg:h3 xl:eh">
                        {lists.brand.brandName}
                      </h1>
                      <p className="par-4 text-grey-01 lg:par-3 xl:par-2">
                        {lists.brand.location}
                      </p>
                    </div>
                  </div>
                  <div className="gap-6 flex flex-col mt-6 xl:mt-8">
                    {lists.products.map((product, productIndex) => (
                      <>
                        <div key={productIndex}>
                          <CartProductCard
                            location={product.location}
                            title={product.title}
                            img={product.img}
                            price={product.price}
                          />
                        </div>

                        {lists.products.length - 1 > productIndex ? <hr /> : ""}
                      </>
                    ))}
                  </div>
                </div>
              </>
            ))}
          </Left>

          <hr className="md:hidden" />

          <Right btnHref="/cart/checkout" />
        </UsersTransaction>

        <RelatedProducts />

        <div className="mt-[23px] md:mt-[80px] xl:mt-[120px]">
          <Footer />
        </div>
      </div>
    </>
  );
}
