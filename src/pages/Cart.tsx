import Dropdown from "../components/Dropdown";
import Navbar from "../components/Navbar";
import { cartListProducts } from "../datas/cartListProducts";

export default function Cart() {
  return (
    <>
      <Navbar />

      <div className="wrapper py-8 px-6 md:py-[60px] h-[240px] bg-d-grey-03">
        <div className="screen-max-size flex gap-6 flex-col mx-auto md:gap-8">
          <div className="gap-8 flex flex-col">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <h1 className="h2 text-black-01">Shopping Chart</h1>
                <p className="par-3 text-grey-01">
                  Showing your choices product
                </p>
              </div>

              <div className="flex gap-2 items-center w-full">
                <p className="par-2 text-grey-01">Sort By:</p>
                <div className="flex-grow">
                  <Dropdown
                    menu={["By Price", "By Category", "By Date"]}
                    width="100%"
                  >
                    Sort By Latest Added
                  </Dropdown>
                </div>
              </div>
            </div>

            <div className="gap-7 flex flex-col">
              {cartListProducts.map((lists, listsIndex) => (
                <div className="border-grey p-4 rounded-xl bg-white" key={listsIndex}>
                  <div className="brand flex items-center gap-2">
                    <img src={lists.brand.img} alt="" className="w-[40px] h-[40px]"/>
                    <div className="gap-1 flex flex-col">
                      <h1 className="h4 text-black-01">
                        {lists.brand.brandName}
                      </h1>
                      <p className="par-4 text-grey-01">
                        {lists.brand.location}
                      </p>
                    </div>
                  </div>
                  <div className="gap-6 flex flex-col mt-6">
                    {lists.products.map((product, productIndex) => (
                      <>
                        <div className="gap-4 flex flex-col" key={productIndex}>
                          <div className="gap-4 flex items-center">
                            <input type="checkbox" className="checkbox" />
                            <div className="gap-3 flex items-center">
                              <div className="images p-[9px] rounded-lg bg-l-grey-02">
                                <img
                                  src={product.img}
                                  alt=""
                                  className="w-[38px] h-[38px]"
                                />
                              </div>
                              <div className="flex flex-col gap-1">
                                <div>
                                  <h1 className="h4 text-black-01">
                                    {product.title}
                                  </h1>
                                  <p className="mt-[2px] par-4 text-grey-01">{product.location}</p>
                                </div>
                                <h4 className="h4 text-dark-green-03">
                                  ${product.price}
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>

                        <hr />
                      </>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
