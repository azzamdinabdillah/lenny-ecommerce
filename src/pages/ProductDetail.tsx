import { MouseEvent, useState } from "react";
import { Breadcrump } from "../components/Breadcrump";
import Navbar from "../components/Navbar";
import Dropdown from "../components/Dropdown";
import Button from "../components/Button";
import Badge from "../components/Badge";
import { RatingStar } from "../components/RatingStar";
import ProgressBar from "../components/ProgressBar";
import RadialProgress from "../components/RadialProgress";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { reviewLists } from "../datas/reviews";
import Pagination from "../components/Pagination";
import { listProducts } from "../datas/products";
import { CardProduct } from "../components/CardProduct";
import Footer from "../components/Footer";
import { dateFormatter } from "../helpers/dateFormatter";
import Accordion from "../components/Accordion";
import { filterReviews } from "../datas/filters";
import RelatedProducts from "../layouts/RelatedProducts";

export default function ProductDetail() {
  const [select, setSelect] = useState<number | null>(0);
  const [mainImageSrc, setMainImageSrc] = useState<string>(
    "/assets/images/mouse-1.png"
  );
  const [openFilter, setOpenFilter] = useState<boolean>(false);

  const subImage: string[] = [
    "/assets/images/mouse-2.png",
    "/assets/images/mouse-3.png",
    "/assets/images/mouse-4.png",
    "/assets/images/mouse-5.png",
  ];

  const handleImageClick = (e: MouseEvent<HTMLImageElement>): void => {
    setMainImageSrc(e.currentTarget.src);
  };

  const tableSpec: { spec: string; value: string }[] = [
    {
      spec: "Brand",
      value: "Logitech",
    },
    {
      spec: "Type",
      value: "Wired",
    },
    {
      spec: "Resolution",
      value: "100-25600 dpi",
    },
    {
      spec: "Max Speed",
      value: ">40G2",
    },
    {
      spec: "Max Acceleration",
      value: ">300 IPS",
    },
  ];

  const inTheBox: string[] = [
    "UG502 X LIGHTSPEED Wireless Gaming Mouse",
    "DPI-Shift button cover",
    "USB-C charging cable",
    "LIGHTSPEED USB-A receiver",
    "USB extension cable",
    "User Documentation",
  ];

  const reviewsTotal: { rating: string; total: number }[] = [
    {
      rating: "5.0",
      total: 2823,
    },
    {
      rating: "4.0",
      total: 4,
    },
    {
      rating: "3.0",
      total: 0,
    },
    {
      rating: "2.0",
      total: 0,
    },
    {
      rating: "1.0",
      total: 0,
    },
  ];

  const Filter = () => {
    return (
      <div className="flex gap-6 flex-col border-grey px-4 py-6 w-[220px] h-fit lg:w-[278px] bg-white">
        <h1 className="h2 text-black-01 xl:eh-6">Reviews Filter</h1>
        <hr />

        {filterReviews.map((filter, index) => (
          <>
            <Accordion title={filter.category} isOpen={true} key={index}>
              <div className="menu gap-3 flex flex-col">
                {filter.filter.map((filterName, index) => (
                  <div className="gap-2 flex items-center lg:gap-3" key={index}>
                    <input type="checkbox" className="checkbox" />
                    <p className="par-2 text-grey-01 lg:par-1-16">
                      {filterName}
                    </p>
                  </div>
                ))}
              </div>
            </Accordion>

            {filterReviews.length - 1 > index ? <hr /> : ""}
          </>
        ))}
      </div>
    );
  };

  // const Filter = () => {
  //   return (
  //     <div className="flex gap-6 flex-col border-grey px-4 py-6 w-[220px] h-fit xl:w-[278px] bg-white">
  //       <h1 className="h2 text-black-01 xl:eh-6">Reviews Filter</h1>
  //       <hr />

  //       {filterReviews.map((filter, index) => (
  //         <>
  //           <Accordion title={filter.category} isOpen={true} key={index}>
  //             <div className="menu gap-3 flex flex-col">
  //               {filter.filter.map((filterName, index) => (
  //                 <div className="gap-2 flex items-center" key={index}>
  //                   <input type="checkbox" className="checkbox" />
  //                   <p className="par-2 text-grey-01 xl:par-1-16">
  //                     {filterName}
  //                   </p>
  //                 </div>
  //               ))}
  //             </div>
  //           </Accordion>

  //           {filterReviews.length - 1 > index ? <hr /> : ""}
  //         </>
  //       ))}
  //     </div>
  //   );
  // };

  return (
    <>
      <Navbar />

      <div className="wrapper py-8 px-6 md:py-[60px]">
        <div className="screen-max-size flex gap-6 flex-col mx-auto md:gap-8">
          <div className="breadcump">
            <Breadcrump
              title={["Home", "Electronic", "G502 x Lightspeed Wireless..."]}
            />
          </div>

          <div className="flex gap-6 flex-col lg:gap-[52px]">
            <div className="flex gap-6 flex-col md:flex-row md:grid grid-cols-2 md:gap-8 lg:items-center xl:gap-[42px]">
              <div className="images gap-3 flex flex-col">
                <div className="main w-full h-[280px] lg:h-[380px] flex justify-center items-center rounded-lg bg-l-grey-02 xl:h-[460px]">
                  <img
                    src={mainImageSrc}
                    alt=""
                    className="object-contain w-[200px] h-[200px] lg:w-[240px] lg:h-[240px] xl:w-[300px] xl:h-[300px]"
                  />
                </div>

                <div className="sub flex gap-2">
                  {subImage.map((value, index) => (
                    <div
                      onClick={() => setSelect(index)}
                      className={`item w-full h-[75px] lg:h-[100px] xl:h-[134px] flex justify-center items-center rounded-lg bg-l-grey-02 transition-all duration-300 ease-in-out cursor-pointer ${
                        select == index && "border-[2px] border-dark-green-01"
                      }`}
                    >
                      <img
                        onClick={handleImageClick}
                        key={index}
                        src={value}
                        alt=""
                        className="object-contain w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] xl:w-[86px] xl:h-[86px]"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-6 flex-col">
                <div className="flex flex-col gap-4">
                  <div>
                    <h1 className="eh-5 text-black-01 xl:eh-2">
                      G502 X Lightspeed Wireless Gaming Mouse
                    </h1>
                    <div className="bottom mt-1 flex gap-2 items-center lg:mt-2">
                      <div className="rating flex gap-2 items-center par-2 text-black-01 lg:par-2 xl:par-1-16">
                        <img src="/assets/icons/star.svg" alt="" />
                        4,8
                      </div>
                      <svg
                        width="4"
                        height="4"
                        viewBox="0 0 4 4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="2" cy="2" r="2" fill="#E4E9EE" />
                      </svg>
                      <p className="par-2 text-black-01 lg:par-2 xl:par-1-16">
                        1,238 sold
                      </p>
                    </div>
                  </div>

                  <h2 className="eh-6 text-dark-green-03 xl:eh-4">$139.99</h2>
                </div>

                <p className="par-2 text-grey-01 xl:par-1-16">
                  G502 X LIGHTSPEED is the latest addition to legendary G502
                  lineage. Featuring our first-ever LIGHTFORCE hybrid
                  optical-mechanical switches and updated LIGHTSPEED wireless
                  protocol with 68% faster response rate.
                </p>
                {/* <p className="par-2 text-grey-01 xl:par-1-16">
                  G502 X LIGHTSPEED is the latest addition to legendary G502
                  lineage. Featuring our first-ever LIGHTFORCE hybrid
                  optical-mechanical...{" "}
                  <span className="pl-1 text-dark-green-03 font-medium cursor-pointer hover:underline">
                    Read More
                  </span>
                </p> */}

                <hr />

                <div className="gap-3 flex flex-col">
                  <h1 className="eh text-black-01 lg:h2">Product Variant:</h1>

                  <div className="gap-[17px] flex w-full xl:max-w-[300px]">
                    <div className="flex gap-2 flex-col w-full">
                      <label
                        htmlFor=""
                        className="par-2 text-black-01 xl:par-1-16"
                      >
                        Type
                      </label>
                      <Dropdown width="w-full" menu={["Wired", "Hall Effect"]}>
                        Wireless
                      </Dropdown>
                    </div>
                    <div className="flex gap-2 flex-col w-full">
                      <label
                        htmlFor=""
                        className="par-2 text-black-01 xl:par-1-16"
                      >
                        Color
                      </label>
                      <Dropdown width="w-full" menu={["Wired", "Hall Effect"]}>
                        Wireless
                      </Dropdown>
                    </div>
                  </div>
                </div>

                <div className="gap-4 flex flex-col mt-2 md:flex-row xl:mt-[20px]">
                  <div className="w-full xl:h-[53px]">
                    <Button variant="primary">Buy Now</Button>
                  </div>
                  <div className="h-[48px] w-full xl:h-[53px]">
                    <Button variant="primary-light">
                      <div className="flex items-center gap-2 justify-center">
                        <img src="/assets/icons/btn-cart.svg" alt="" />
                        Add to Chart
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-6 flex-col lg:gap-8">
              <div className="tab flex border-b-[2px] border-[#E4E9EE] overflow-x-scroll scrollbar-none sticky top-0 bg-white z-10">
                <div className="item py-[11px] px-4 lg:py-3 lg:px-6 border-b-[2px] border-dark-green-01">
                  <a
                    href=""
                    className="par-1-16 whitespace-nowrap h3 font-semibold text-dark-green-01 xl:par-1-18 xl:font-semibold"
                  >
                    Detail Product
                  </a>
                </div>
                <div className="item py-[11px] px-4 lg:py-3 lg:px-6">
                  <a
                    href=""
                    className="par-1-16 text-grey-01 font-medium whitespace-nowrap xl:par-1-18 xl:font-medium"
                  >
                    Merchant
                  </a>
                </div>
                <div className="item py-[11px] px-4 lg:py-3 lg:px-6">
                  <a
                    href=""
                    className="par-1-16 text-grey-01 font-medium whitespace-nowrap xl:par-1-18 xl:font-medium"
                  >
                    Reviews
                  </a>
                </div>
                <div className="item py-[11px] px-4 lg:py-3 lg:px-6">
                  <a
                    href=""
                    className="par-1-16 text-grey-01 font-medium whitespace-nowrap xl:par-1-18 xl:font-medium"
                  >
                    Related Product
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-2 lg:max-w-[670px] xl:max-w-[893px]">
                <h1 className="h2 text-black-01 lg:eh-6 xl:eh-4">
                  G502 X Lightspeed Wireless Gaming Mouse
                </h1>
                <p className="par-3 text-grey-01 lg:par-2 xl:par-1-16">
                  G502 X LIGHTSPEED is the latest addition to legendary G502
                  lineage. Featuring our first-ever LIGHTFORCE hybrid
                  optical-mechanical switches and updated LIGHTSPEED wireless
                  protocol with 68% faster response rate.
                </p>
              </div>

              <div className="flex gap-6 flex-col md:flex-row lg:gap-8 xl:grid grid-cols-3">
                <div className="gap-4 flex flex-col ">
                  <h1 className="eh text-black-01 xl:h2">Specification</h1>
                  <table>
                    {tableSpec.map((value, index) => (
                      <tr
                        key={index}
                        className={`${
                          index % 2 == 0 ? "bg-l-grey-03" : "bg-white"
                        }`}
                      >
                        <td className="py-[11px] px-4 par-2 xl:par-1-16 text-grey-01">
                          {value.spec}
                        </td>
                        <td className="py-[11px] px-4 par-2 xl:par-1-16 text-black-01 font-medium xl:font-medium">
                          {value.value}
                        </td>
                      </tr>
                    ))}
                  </table>
                </div>

                <div className="gap-4 flex flex-col mt-2 flex-1 lg:mt-0">
                  <h1 className="eh text-black-01 xl:h2">In The Box</h1>

                  <div className="gap-3 flex flex-col">
                    {inTheBox.map((value, index) => (
                      <div className="flex gap-[10px] items-center" key={index}>
                        <img src="/assets/icons/tick-circle.svg" alt="" />
                        <p className="par-2 font-medium text-black-01 xl:par-1-16 xl:font-medium">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="gap-4 flex flex-col mt-2 flex-1 lg:mt-0">
                  <h1 className="eh text-black-01 xl:h2">System Required</h1>

                  <div className="flex flex-col">
                    <p className="par-3 lg:par-2 xl:par-1-16 text-grey-01">
                      - USB port
                    </p>
                    <p className="par-3 lg:par-2 xl:par-1-16 text-grey-01">
                      - Internet access for optional software download
                    </p>
                    <p className="par-3 lg:par-2 xl:par-1-16 text-grey-01">
                      - Windows® 10 or later
                    </p>
                    <p className="par-3 lg:par-2 xl:par-1-16 text-grey-01">
                      - macOS 10.14 or later
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <hr />

            <div className="gap-4 flex flex-col lg:gap-6">
              <h1 className="eh text-black-01 lg:eh-6">Merchant Information</h1>

              <div className="gap-6 flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="gap-4 flex flex-col">
                  <div className="flex gap-4 items-center">
                    <img
                      src="/assets/images/merchant.png"
                      alt=""
                      className="w-[52px] h-[52px] rounded-full lg:w-[84px] lg:h-[84px]"
                      style={{
                        boxShadow: "0px 4px 60px 0px rgba(129, 139, 156, 0.12)",
                      }}
                    />
                    <div className="gap-1 flex flex-col lg:gap-3">
                      <div className="lg:flex flex-col gap-1">
                        <h2 className="h3 text-black-01 lg:eh">
                          Logitech Indonesia
                        </h2>
                        <p className="par-3 text-grey-01 lg:par-2">
                          Jakarta Pusat
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Badge>Top Rated Merchant</Badge>
                        <Badge>Best Merchant</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-[17px]">
                  <div className="w-full md:w-[115px]">
                    <Button variant="primary-light">
                      <div className="gap-2 flex items-center justify-center">
                        <img src="/assets/icons/message.svg" alt="" />
                        Chat
                      </div>
                    </Button>
                  </div>
                  <div className="w-full md:w-[197px]">
                    <Button variant="primary-light">
                      <div className="gap-2 flex items-center justify-center">
                        <img src="/assets/icons/shop.svg" alt="" />
                        Visit Merchant
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <hr />

            <div className="flex gap-6 flex-col lg:gap-8">
              <div className="gap-6 flex flex-col">
                <div className="gap-4 flex flex-col lg:gap-6">
                  <h1 className="eh text-black-01 lg:eh-6">Product Reviews</h1>

                  <div className="border-grey p-4 flex flex-col gap-6 md:flex-row md:items-start lg:gap-[42px] lg:p-6 xl:gap-[120px]">
                    <div className="flex items-center gap-4">
                      <RadialProgress
                        rating={4.5}
                        maxRating={5}
                        size={84}
                        color="#FFA439"
                      />
                      <div className="flex flex-col gap-1 lg:gap-2">
                        <RatingStar amount={5} />
                        <p className="par-3 font-medium lg:par-2 lg:font-medium">
                          from 1,25k reviews
                        </p>
                      </div>
                    </div>

                    <div className="gap-3 flex flex-col flex-1">
                      {reviewsTotal.map((value, index) => (
                        <div
                          className="flex gap-7 items-center justify-between"
                          key={index}
                        >
                          <div className="gap-1 flex items-center justify-between ">
                            <p className="par-3 font-medium text-black-01 translate-y-[2px]">
                              {value.rating}
                            </p>
                            <img src="/assets/icons/star.svg" alt="" />
                          </div>
                          <div className="w-full">
                            <ProgressBar rating={parseInt(value.rating)} />
                          </div>
                          <p className="par-3 font-medium text-black-01">
                            {value.total}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:flex gap-8">
                <div className="hidden md:block">
                  <Filter />
                </div>

                <div className="gap-6 flex flex-col flex-grow-1 w-full lg:gap-4">
                  <h1 className="eh text-black-01 lg:eh-6">Review Lists</h1>

                  <Tabs defaultIndex={0} className={"gap-8 flex-col flex"}>
                    <div className="flex justify-between gap-3 items-start">
                      <TabList className="flex gap-2 flex-wrap">
                        {reviewLists.map((value, index) => (
                          <>
                            <Tab
                              selectedClassName="border-dark-green-03 text-dark-green-03"
                              className={`rounded-lg border border-d-grey-01 p-[10px] par-3 font-medium text-black-01 h-8 w-fit flex justify-center items-center focus-visible:outline-none cursor-pointer lg:par-2 lg:font-medium lg:py-2 lg:px-4`}
                              key={index}
                            >
                              {value.category}
                            </Tab>
                          </>
                        ))}
                      </TabList>

                      <div className="relative">
                        <img
                          src="/assets/icons/filter.svg"
                          alt=""
                          className="p-2 border-grey md:hidden cursor-pointer"
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
                    </div>

                    {reviewLists.map((lists, listsIndex) => (
                      <>
                        <TabPanel
                          key={listsIndex}
                          className={"flex-col gap-6 flex review-tabs lg:gap-8"}
                        >
                          {lists.reviews.map((value, index) => (
                            <>
                              <div key={index} className="flex flex-col gap-4">
                                <div className="top gap-3 flex flex-col lg:gap-4">
                                  <div className="star flex gap-1 items-center">
                                    {Array.from(
                                      { length: value.rating },
                                      (_, index) => (
                                        <img
                                          key={index}
                                          src="/assets/icons/star.svg"
                                          alt=""
                                        />
                                      )
                                    )}
                                  </div>

                                  <div className="">
                                    <h3 className="h3 text-black-01 lg:eh xl:h2">
                                      {value.text}
                                    </h3>
                                    <p className="mt-[2px] par-3 text-grey-01 lg:par-2 lg:mt-[4px] xl:par-1-16">
                                      {dateFormatter(value.date)}
                                    </p>
                                  </div>
                                </div>

                                <div className="flex justify-between items-center">
                                  <div className="flex items-center gap-2 lg:gap-3">
                                    <img
                                      src={value.profilePicture}
                                      alt=""
                                      className="w-6 lg:w-7 xl:w-8"
                                    />
                                    <h2 className="par-3 text-black-01 font-medium lg:par-2 lg:font-medium xl:par-1-16 xl:font-medium">
                                      {value.reviewer}
                                    </h2>
                                  </div>

                                  <div className="flex gap-2 items-center">
                                    <div className="border-grey px-[10px] py-[6px] flex gap-1 items-center lg:p-3 lg:gap-2">
                                      <img
                                        src={`/assets/icons/${
                                          value.isLike ? "like-active" : "like"
                                        }.svg`}
                                        alt=""
                                      />
                                      <p className="par-3 text-black-01 lg:par-2">
                                        {value.like}
                                      </p>
                                    </div>
                                    <div className="border-grey px-[10px] py-[6px] flex gap-1 items-center lg:p-3">
                                      <img
                                        src="/assets/icons/dislike.svg"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {index !== lists.reviews.length - 1 && <hr />}
                            </>
                          ))}
                        </TabPanel>
                      </>
                    ))}
                  </Tabs>

                  <div className="mt-4">
                    <Pagination number={["1", "2", "...", "274"]} />
                  </div>
                </div>
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
    </>
  );
}
