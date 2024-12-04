import Accordion from "../components/Accordion";
import { Breadcrump } from "../components/Breadcrump";
import { CardProduct, listProducts } from "../components/CardProduct";
import Dropdown from "../components/Dropdown";
import Footer from "../components/Footer";
import InputWithSelect from "../components/InputWithSelect";
import Navbar from "../components/Navbar";
import Toggle from "../components/Toggle";

export default function SearchResult() {
  return (
    <>
      <Navbar />

      <div className="wrapper py-8 px-6 md:py-[60px]">
        <div className="gap-6 flex flex-col screen-max-size mx-auto lg:gap-8">
          <div className="breadcump">
            <Breadcrump title={["Home", "Electronic", "Gaming Gear"]} />
          </div>

          <div className="gap-6 flex flex-col md:flex-row justify-between md:items-center">
            <div className="gap-1 flex flex-col">
              <h1 className="h2 lg:eh-6 text-black-01 xl:eh-5">
                Showing product for “Gaming Gear”
              </h1>
              <h2 className="h4 font-normal lg:par-2 text-grey-01 xl:par-1-16 xl:par-1-16">
                Showing 1 - 60 Products
              </h2>
            </div>

            <div className="filter flex justify-between items-center gap-5">
              <div className="flex gap-3 items-center">
                <p className="par-2 text-grey-01 xl:par-1-16 hidden md:block xl:par-1-16">Sort By : </p>
                <Dropdown menu={["Laptop", "PC", "Handphone"]}>
                  Sort By Relevant Product
                </Dropdown>
              </div>

              <div className="right gap-3 flex items-center md:gap-5">
                <img
                  src="/assets/icons/filter.svg"
                  alt=""
                  className="p-[7px] md:p-[10px] border-grey md:hidden"
                />

                <svg
                  width="1"
                  height="24"
                  viewBox="0 0 1 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="0.5"
                    y1="2.18557e-08"
                    x2="0.499999"
                    y2="24"
                    stroke="#E4E9EE"
                  />
                </svg>

                <div className="gap-2 flex items-center">
                  <img
                    src="/assets/icons/menu-kotak.svg"
                    alt=""
                    className="bg-dark-green-01 rounded-lg p-[7px] md:p-[10px]"
                  />
                  <img
                    src="/assets/icons/menu-sm.svg"
                    alt=""
                    className="p-[7px] md:p-[10px] border-grey"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="md:flex gap-8 md:mt-[20px] items-start xl:gap-10">
            <div className="filter-side hidden md:block h-fit">
              <div className="flex gap-6 flex-col border-grey px-4 py-6 w-[220px] h-fit xl:w-[278px]">
                <h1 className="h2 text-black-01 xl:eh-6">Filter Option</h1>
                <hr />
                {/* <div className="accordion gap-3 flex flex-col">
                  <div className="btn flex justify-between items-center">
                    <h1 className="eh text-black-01">Best Filter</h1>
                    <img src="/assets/icons/arrow-down-sm.svg" alt="" />
                  </div>
                  <div className="menu gap-3 flex flex-col">
                    <div className="gap-2 flex items-center">
                      <input type="checkbox" className="checkbox"/>
                      <p className="par-2 text-grey-01 xl:par-1-16">
                        <img src="/assets/icons/star" alt="" /> 4 stars or upper
                      </p>
                    </div>
                    <div className="gap-2 flex items-center">
                      <input type="checkbox" className="checkbox"/>
                      <p className="par-2 text-grey-01 xl:par-1-16">Same-day delivery</p>
                    </div>
                  </div>
                </div> */}

                <Accordion title="Best Filter" isOpen={true}>
                  <div className="menu gap-3 flex flex-col">
                    <div className="gap-2 flex items-center">
                      <input type="checkbox" className="checkbox" />
                      <p className="par-2 text-grey-01 xl:par-1-16">
                        <img src="/assets/icons/star" alt="" /> 4 stars or upper
                      </p>
                    </div>
                    <div className="gap-2 flex items-center">
                      <input type="checkbox" className="checkbox" />
                      <p className="par-2 text-grey-01 xl:par-1-16">Same-day delivery</p>
                    </div>
                    <div className="gap-2 flex items-center">
                      <input type="checkbox" className="checkbox" />
                      <p className="par-2 text-grey-01 xl:par-1-16">COD</p>
                    </div>
                    <div className="gap-2 flex items-center">
                      <input type="checkbox" className="checkbox" />
                      <p className="par-2 text-grey-01 xl:par-1-16">Discount</p>
                    </div>
                  </div>
                </Accordion>

                <hr />

                <Accordion title="Location" isOpen={true}>
                  <div className="menu gap-3 flex flex-col">
                    <div className="gap-2 flex items-center">
                      <input type="checkbox" className="checkbox" />
                      <p className="par-2 text-grey-01 xl:par-1-16">Bandung</p>
                    </div>
                    <div className="gap-2 flex items-center">
                      <input type="checkbox" className="checkbox" />
                      <p className="par-2 text-grey-01 xl:par-1-16">Jakarta</p>
                    </div>
                    <div className="gap-2 flex items-center">
                      <input type="checkbox" className="checkbox" />
                      <p className="par-2 text-grey-01 xl:par-1-16">Medan</p>
                    </div>
                    <div className="gap-2 flex items-center">
                      <input type="checkbox" className="checkbox" />
                      <p className="par-2 text-grey-01 xl:par-1-16">Surabaya</p>
                    </div>
                    <div className="gap-2 flex items-center">
                      <input type="checkbox" className="checkbox" />
                      <p className="par-2 text-grey-01 xl:par-1-16">Jogja</p>
                    </div>
                    <p className="par-2 text-dark-green-03 font-medium xl:par-1-16 xl:font-medium">
                      Show All
                    </p>
                  </div>
                </Accordion>

                <hr />

                <Accordion title="Category" isOpen={true}>
                  <div className="menu gap-3 flex flex-col">
                    <div className="gap-2 flex items-center">
                      <input type="checkbox" className="checkbox" />
                      <p className="par-2 text-grey-01 xl:par-1-16">Electronic</p>
                    </div>
                    <div className="gap-2 flex items-center">
                      <input type="checkbox" className="checkbox" />
                      <p className="par-2 text-grey-01 xl:par-1-16">Fashion</p>
                    </div>
                    <div className="gap-2 flex items-center">
                      <input type="checkbox" className="checkbox" />
                      <p className="par-2 text-grey-01 xl:par-1-16">Action Figure</p>
                    </div>
                    <div className="gap-2 flex items-center">
                      <input type="checkbox" className="checkbox" />
                      <p className="par-2 text-grey-01 xl:par-1-16">Book</p>
                    </div>
                    <div className="gap-2 flex items-center">
                      <input type="checkbox" className="checkbox" />
                      <p className="par-2 text-grey-01 xl:par-1-16">Gaming</p>
                    </div>
                    <p className="par-2 text-dark-green-03 font-medium xl:par-1-16 xl:font-medium">
                      Show All Categories
                    </p>
                  </div>
                </Accordion>

                <hr />

                <Accordion title="Price Range" isOpen={true}>
                  <div className="menu gap-3 flex flex-col">
                    {/* <div className="input-wrapper py-[8px] md:py-[11px] px-[12px] md:px-[16px] relative bg-d-grey-02 rounded-[8px] md:flex items-center">
                      <div className="select-wrapper select-category relative">
                        <select
                          name=""
                          id=""
                          className="hidden md:block bg-transparent par-3 xl:text-[14px] text-black-01 font-medium"
                        >
                          <option value="">USD</option>
                        </select>
                      </div>
                      <input
                        type="text"
                        placeholder="Minimum price"
                        className="bg-transparent placeholder:h4-fw-500"
                      />
                      <a href="/search-result">
                        <img
                          src="/assets/icons/search-normal.svg"
                          alt=""
                          className="absolute top-1/2 -translate-y-1/2 right-4 w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
                        />
                      </a>
                    </div> */}

                    <InputWithSelect option={["USD", "IDR", "YEN"]} variant="light" placeholder="Minimum price"/>
                    <InputWithSelect option={["USD", "IDR", "YEN"]} variant="light" placeholder="Maximum price"/>
                    <Toggle variant="light">$0 - $200</Toggle>
                    <Toggle variant="light">$200 - $500</Toggle>
                    <Toggle variant="light">$500 - $1500</Toggle>
                  </div>
                </Accordion>
              </div>
            </div>
            <div className="list-products grid grid-cols-2 gap-4 gap gap-y-6 md:grid-cols-3 lg:gap-6 w-full lg:grid-cols-3 xl:gap-6">
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
        </div>
      </div>

      <Footer/>
    </>
  );
}
