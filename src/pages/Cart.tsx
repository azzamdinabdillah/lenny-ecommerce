import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { cartListProducts } from "../datas/cartListProducts";
import { productSummary } from "../datas/productSummary";
import RelatedProducts from "../layouts/RelatedProducts";

export default function Cart() {
  return (
    <>
      <div>
        <Navbar />

        <div className="wrapper relative py-8 px-6 md:py-[60px] after:h-[240px] after:bg-d-grey-03 after:absolute after:top-0 after:left-0 after:right-0 after:-z-10">
          <div className="screen-max-size flex gap-6 flex-col mx-auto md:gap-8">
            <div className="gap-8 flex flex-col md:gap-14">
              <div className="flex flex-col gap-6 md:flex-row justify-between">
                <div className="flex flex-col gap-1 flex-grow w-full">
                  <h1 className="h2 text-black-01 lg:eh-6">Shopping Chart</h1>
                  <p className="par-3 text-grey-01 lg:par-2">
                    Showing your choices product
                  </p>
                </div>

                <div className="flex gap-2 items-center w-full md:w-[245px] lg:w-[278px]">
                  <p className="par-2 text-grey-01 md:whitespace-nowrap">
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

              <div className="gap-8 flex flex-col md:grid md:grid-cols-5 md:items-start">
                <div className="gap-7 flex flex-col md:col-span-3">
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
                            className="w-[40px] h-[40px] lg:w-[44px] lg:h-[44px]"
                          />
                          <div className="gap-1 flex flex-col">
                            <h1 className="h4 text-black-01 lg:h3">
                              {lists.brand.brandName}
                            </h1>
                            <p className="par-4 text-grey-01 lg:par-3">
                              {lists.brand.location}
                            </p>
                          </div>
                        </div>
                        <div className="gap-6 flex flex-col mt-6">
                          {lists.products.map((product, productIndex) => (
                            <>
                              <div
                                className="gap-4 flex flex-col md:flex-row justify-between md:items-center"
                                key={productIndex}
                              >
                                <div className="gap-4 flex items-center lg:gap-6">
                                  <input type="checkbox" className="checkbox" />
                                  <div className="gap-3 flex items-center lg:gap-4">
                                    <div className="images p-[10px] rounded-lg bg-l-grey-02">
                                      <img
                                        src={product.img}
                                        alt=""
                                        className="w-[38px] h-[38px] lg:w-[60px] lg:h-[60px]"
                                      />
                                    </div>
                                    <div className="flex flex-col gap-1 lg:gap-2">
                                      <div>
                                        <h1 className="h4 text-black-01 lg:h3">
                                          {product.title}
                                        </h1>
                                        <p className="mt-[2px] par-4 text-grey-01 lg:par-2 lg:mt-1">
                                          {product.location}
                                        </p>
                                      </div>
                                      <h4 className="h4 text-dark-green-03 lg:eh">
                                        ${product.price}
                                      </h4>
                                    </div>
                                  </div>
                                </div>

                                <div className="flex items-center justify-between">
                                  <p className="par-4 text-grey-01 md:hidden">
                                    Add to Favourite
                                  </p>
                                  <div className="gap-2 flex items-center ml-auto lg:gap-3">
                                    <div className="border-grey p-1 flex items-center">
                                      <img
                                        src="/assets/icons/minus.svg"
                                        alt=""
                                      />
                                      <p className="par-3 text-black-01 w-6 flex place-content-center lg:par-2">
                                        1
                                      </p>
                                      <img
                                        src="/assets/icons/plus.svg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="border-grey p-[6px]">
                                      <img
                                        src="/assets/icons/trash.svg"
                                        alt=""
                                        className="lg:w-[20px] lg:h-[20px]"
                                      />
                                    </div>
                                  </div>
                                </div>
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

                <div className="flex gap-6 flex-col md:col-span-2 md:bg-white md:border-grey md:p-6 md:sticky top-4">
                  <h1 className="eh text-black-01 xl:eh-6">Review Lists</h1>

                  <div className="gap-3 flex flex-col">
                    {productSummary.map((value, index) => (
                      <div
                        className="flex justify-between items-center gap-2"
                        key={index}
                      >
                        <p className="par-2 text-black-01">{value.name}</p>
                        <p className="par-2 text-black-01">${value.price}</p>
                      </div>
                    ))}
                  </div>

                  <hr />

                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <p className="par-2 text-grey-01">Total Price</p>
                      <p className="par-2 text-grey-01">$280</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="par-2 text-grey-01">
                        Total Price (Discount)
                      </p>
                      <p className="par-2 text-grey-01">$98</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="par-2 text-grey-01">Tax & Fee</p>
                      <p className="par-2 text-grey-01">$46</p>
                    </div>
                  </div>

                  <hr />

                  <div className="flex items-center justify-between">
                    <h4 className="eh text-black-01">Total Price</h4>
                    <h4 className="eh text-black-01">$385</h4>
                  </div>

                  <div className="promo border-grey p-3 rounded-xl">
                    <div className="flex justify-between items-center">
                      <div className="gap-3 flex items-center">
                        <img src="/assets/icons/promo.svg" alt="" />
                        <div>
                          <h3 className="h3 text-black-01">Promo applied</h3>
                          <p className="par-3 text-grey-01 mt-1">
                            1x shipping discount used
                          </p>
                        </div>
                      </div>
                      <img src="/assets/icons/arrow-right.svg" alt="" />
                    </div>
                  </div>

                  <Button variant="primary">Checkout</Button>
                </div>
              </div>

              <hr />

              <RelatedProducts />
            </div>
          </div>
        </div>

        <div className="mt-[23px]">
          <Footer />
        </div>
      </div>
    </>
  );
}
