import { useState } from "react";
import Accordion from "../components/Accordion";
import { Breadcrump } from "../components/Breadcrump";
import { CardProduct } from "../components/CardProduct";
import Dropdown from "../components/Dropdown";
import Footer from "../components/Footer";
import InputWithSelect from "../components/InputWithSelect";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";
import Toggle from "../components/Toggle";
import { listProducts } from "../datas/products";
import { filterSearchResult } from "../datas/filters";

export default function SearchResult() {
  const [openFilter, setOpenFilter] = useState<boolean>(false);

  const Filter = () => {
    return (
      <div className="flex gap-6 flex-col border-grey px-4 py-6 w-[220px] h-fit xl:w-[278px] bg-white">
        <h1 className="h2 text-black-01 xl:eh-6">Filter Option</h1>
        <hr />

        {/* <Accordion title="Best Filter" isOpen={true}>
          <div className="menu gap-3 flex flex-col">
            <div className="gap-2 flex items-center">
              <input type="checkbox" className="checkbox" />
              <p className="par-2 text-grey-01 xl:par-1-16">
                <img src="/assets/icons/star" alt="" /> 4 stars or upper
              </p>
            </div>
            <div className="gap-2 flex items-center">
              <input type="checkbox" className="checkbox" />
              <p className="par-2 text-grey-01 xl:par-1-16">
                Same-day delivery
              </p>
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
        </Accordion> */}

        {/* <hr /> */}

        {filterSearchResult.map((filter, index) => (
          <>
            <Accordion title={filter.category} isOpen={true} key={index}>
              <div className="menu gap-3 flex flex-col">
                {(filter.filter.length > 5 &&
                (filter.category === "Location" ||
                  filter.category === "Category")
                  ? filter.filter.slice(0, filter.filter.length - 2)
                  : filter.filter
                ).map((filterName, index) => (
                  <div className="gap-2 flex items-center" key={index}>
                    <input type="checkbox" className="checkbox" />
                    <p className="par-2 text-grey-01 xl:par-1-16">
                      {filterName}
                    </p>
                  </div>
                ))}

                <p className="par-2 text-dark-green-03 font-medium xl:par-1-16 xl:font-medium">
                  {filter.filter.length > 5
                    ? filter.category === "Location"
                      ? "Show All"
                      : filter.category === "Category"
                      ? "Show All Categories"
                      : ""
                    : ""}
                </p>
              </div>
            </Accordion>

            <hr />
          </>
        ))}

        <Accordion title="Price Range" isOpen={true}>
          <div className="menu gap-3 flex flex-col">
            <InputWithSelect
              option={["USD", "IDR", "YEN"]}
              variant="light"
              placeholder="Minimum price"
            />
            <InputWithSelect
              option={["USD", "IDR", "YEN"]}
              variant="light"
              placeholder="Maximum price"
            />
            <Toggle variant="light">$0 - $200</Toggle>
            <Toggle variant="light">$200 - $500</Toggle>
            <Toggle variant="light">$500 - $1500</Toggle>
          </div>
        </Accordion>
      </div>
    );
  };

  return (
    <>
      <Navbar />

      <div className="wrapper py-8 px-6 md:py-[60px] lg:pb-20 xl:pb-[120px]">
        <div className="gap-6 flex flex-col screen-max-size mx-auto lg:gap-8">
          <div className="breadcump">
            <Breadcrump title={["Home", "Electronic", "Gaming Gear"]} />
          </div>

          <div className="gap-6 flex flex-col md:flex-row justify-between md:items-center">
            <div className="gap-1 flex flex-col">
              <h1 className="h2 lg:eh-6 text-black-01 xl:eh-5">
                Showing product for “Gaming Gear”
              </h1>
              <h2 className="h4 font-normal lg:par-2 text-grey-01 xl:par-1-16">
                Showing 1 - 60 Products
              </h2>
            </div>

            <div className="filter flex justify-between items-center gap-5">
              <div className="flex gap-3 items-center">
                <p className="par-2 text-grey-01 xl:par-1-16 hidden md:block">
                  Sort By :{" "}
                </p>
                <Dropdown menu={["Laptop", "PC", "Handphone"]}>
                  Sort By Relevant Product
                </Dropdown>
              </div>

              <div className="right gap-3 flex items-center md:gap-5">
                <div className="relative">
                  <img
                    src="/assets/icons/filter.svg"
                    alt=""
                    className="p-[7px] md:p-[10px] border-grey md:hidden cursor-pointer"
                    onClick={() => setOpenFilter(!openFilter)}
                  />

                  <div
                    className={`absolute -bottom-2 translate-y-full z-20 right-0 ${
                      openFilter ? "block" : "hidden"
                    }`}
                  >
                    <div className="overflow-y-auto h-[400px] shadow-lg">
                      <Filter />
                    </div>
                  </div>
                </div>

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

          <div className="md:flex gap-8 md:mt-[20px] items-start xl:gap-10 w-full">
            <div className="filter-side hidden md:block h-fit">
              <Filter />
            </div>
            <div className="flex flex-col gap-8 md:gap-8 xl:gap-14 w-full">
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
              <Pagination number={["1", "2", "...", "274"]} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
