import Button from "../components/Button";
import CartProductCard from "../components/CartProductCard";
import Dropdown from "../components/Dropdown";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { cartListProducts } from "../datas/cartListProducts";
import { productSummary } from "../datas/productSummary";
import RelatedProducts from "../layouts/RelatedProducts";
import { Left, Right, UsersTransaction } from "../layouts/UsersTransaction";

export default function Cart() {
  return (
    <>
      <div>
        <Navbar />

        {/* <div className="wrapper relative py-8 px-6 md:py-[60px] after:h-[240px] after:bg-d-grey-03 after:absolute after:top-0 after:left-0 after:right-0 after:-z-10">
          <div className="screen-max-size flex gap-6 flex-col mx-auto md:gap-8">
            <div className="gap-8 flex flex-col md:gap-14">
              <div className="flex flex-col gap-6 md:flex-row justify-between">
                <div className="flex flex-col gap-1 flex-grow w-full">
                  <h1 className="h2 text-black-01 lg:eh-6 xl:eh-5">
                    Shopping Chart
                  </h1>
                  <p className="par-3 text-grey-01 lg:par-2 xl:par-1-16">
                    Showing your choices product
                  </p>
                </div>

                <div className="flex gap-2 items-center w-full md:w-[245px] lg:w-[278px] xl:gap-4">
                  <p className="par-2 text-grey-01 md:whitespace-nowrap xl:par-1-16">
                    Sort By:
                  </p>
                  <div className="flex-grow md:w-full">
                    <Dropdown
                      menu={["By Price", "By Category", "By Date"]}
                      width="100%"
                    >
                      Latest Added
                    </Dropdown>
                  </div>
                </div>
              </div>

              <div className="gap-8 flex flex-col md:grid md:grid-cols-5 md:items-start xl:grid-cols-9">
                <div className="gap-7 flex flex-col md:col-span-3 xl:col-span-6">
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

                              {lists.products.length - 1 > productIndex ? (
                                <hr />
                              ) : (
                                ""
                              )}
                            </>
                          ))}
                        </div>
                      </div>
                    </>
                  ))}
                </div>

                <hr className="md:hidden" />

                <div className="flex gap-6 flex-col md:col-span-2 md:bg-white md:border-grey md:p-6 md:sticky top-4 xl:col-span-3">
                  <h1 className="eh text-black-01 xl:eh-6">Product Summary</h1>

                  <div className="gap-3 flex flex-col xl:gap-4">
                    {productSummary.map((value, index) => (
                      <div
                        className="flex justify-between items-center gap-2"
                        key={index}
                      >
                        <p className="par-2 text-black-01 xl:par-1-16">
                          {value.name}
                        </p>
                        <p className="par-2 text-black-01 xl:par-1-16">
                          ${value.price}
                        </p>
                      </div>
                    ))}
                  </div>

                  <hr />

                  <div className="flex flex-col gap-3 xl:gap-4">
                    <div className="flex items-center justify-between">
                      <p className="par-2 text-grey-01 xl:par-1-16">
                        Total Price
                      </p>
                      <p className="par-2 text-black-01 xl:par-1-16">$280</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="par-2 text-grey-01 xl:par-1-16">
                        Total Price (Discount)
                      </p>
                      <p className="par-2 text-black-01 xl:par-1-16">$98</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="par-2 text-grey-01 xl:par-1-16">
                        Tax & Fee
                      </p>
                      <p className="par-2 text-black-01 xl:par-1-16">$46</p>
                    </div>
                  </div>

                  <hr />

                  <div className="flex items-center justify-between">
                    <h4 className="eh text-black-01 xl:eh-6">Total Price</h4>
                    <h4 className="eh text-black-01 xl:eh-6">$385</h4>
                  </div>

                  <div className="promo border-grey p-3 rounded-xl xl:py-[19px] xl:px-4">
                    <div className="flex justify-between items-center">
                      <div className="gap-3 flex items-center lg:gap-4">
                        <img
                          src="/assets/icons/promo.svg"
                          alt=""
                          className="lg:w-[20px] lg:h-[20px] xl:w-[24px] xl:h-[24px]"
                        />
                        <div>
                          <h3 className="h3 text-black-01 xl:eh">
                            Promo applied
                          </h3>
                          <p className="par-3 text-grey-01 mt-1 xl:par-1-16">
                            1x shipping discount used
                          </p>
                        </div>
                      </div>
                      <img
                        src="/assets/icons/arrow-right.svg"
                        alt=""
                        className="lg:w-[16px] lg:h-[16px]"
                      />
                    </div>
                  </div>

                  <Button variant="primary">Checkout</Button>
                </div>
              </div>

              <hr />
            </div>
          </div>
        </div> */}

        <UsersTransaction>
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

          <Right />
        </UsersTransaction>

        <RelatedProducts />

        <div className="mt-[23px] lg:mt-[120px]">
          <Footer />
        </div>
      </div>
    </>
  );
}
