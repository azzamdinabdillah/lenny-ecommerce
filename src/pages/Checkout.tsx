import Badge from "../components/Badge";
import Button from "../components/Button";
import CartProductCard from "../components/CartProductCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { cartListProducts } from "../datas/cartListProducts";
import RelatedProducts from "../layouts/RelatedProducts";
import { Left, Right, UsersTransaction } from "../layouts/UsersTransaction";

export default function Checkout() {
  return (
    <>
      <div>
        <Navbar />

        <UsersTransaction
          title="Shopping Chart"
          subTitle="Showing your choices product"
        >
          <Left>
            <div className="flex flex-col gap-6 lg:gap-8">
              <div className="bg-white p-4 border-grey rounded-xl lg:py-8 lg:px-6">
                <h1 className="title">Shipping Address</h1>

                <div className="mt-7 gap-5 flex flex-col md:flex-row md:items-center">
                  <div className="gap-4 flex items-start md:w-full">
                    <img
                      src="/assets/icons/location.svg"
                      alt=""
                      className="translate-y-[11px]"
                    />
                    <div className="gap-1 flex flex-col">
                      <div className="gap-3 flex items-center">
                        <h1 className="h3 text-black-01 lg:eh xl:eh-6">
                          Gofanny Karina
                        </h1>
                        <Badge>Main Address</Badge>
                      </div>
                      <p className="par-3 text-grey-01 lg:par-2 xl:par-1-16">
                        081277939572
                      </p>
                      <p className="par-3 text-grey-01 mt-1 lg:mt-2 lg:par-2 xl:par-1-16">
                        2021 Royalty Boulevard Portland, OR 98199
                      </p>
                    </div>
                  </div>

                  <div className="w-fit">
                    <Button
                      variant="grey-light"
                      customStyleClass="whitespace-nowrap lg:px-[16px] lg:py-[14px] lg:h3"
                    >
                      Other Address
                    </Button>
                  </div>
                </div>
              </div>

              <div className="border-grey p-4 gap-6 flex flex-col lg:py-8 lg:px-6 lg:gap-6">
                <h1 className="title">Selected Product</h1>

                <div className="flex flex-col gap-8 lg:gap-10">
                  {cartListProducts.map((lists, listsIndex) => (
                    <>
                      <div className="" key={listsIndex}>
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
                              <div
                                key={productIndex}
                                data-aos="zoom-in"
                                data-aos-delay={`${productIndex * 100}`}
                              >
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

                <div className="gap-6 flex flex-col">
                  <h1 className="title">Shipping</h1>

                  <div className="border-grey p-3 flex justify-between items-center md:py-5 md:px-4 xl:p-6">
                    <div className="gap-3 flex items-center lg:gap-4">
                      <img
                        src="/assets/images/shipping-1.png"
                        alt=""
                        className="w-[63px] lg:w-[84px] xl:w-[100px]"
                      />
                      <div>
                        <h4 className="h4 text-black-01 lg:h3 xl:eh-6">TIKI</h4>
                        <p className="text-grey-01 par-4 lg:par-3 xl:par-1-16">
                          4 - 7 Days
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2 items-center lg:gap-6">
                      <h5 className="h4 text-black-01 lg:h3 xl:eh-6">$129</h5>
                      <img
                        src="/assets/icons/arrow-down.svg"
                        alt=""
                        className="lg:mt-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Left>

          <hr className="md:hidden" />

          <Right btnHref="/cart/checkout/payment-method" />
        </UsersTransaction>

        <RelatedProducts />

        <div className="mt-[23px] md:mt-[80px] xl:mt-[120px]">
          <Footer />
        </div>
      </div>
    </>
  );
}
