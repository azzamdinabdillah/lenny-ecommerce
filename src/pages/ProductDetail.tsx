import { MouseEvent, useState } from "react";
import { Breadcrump } from "../components/Breadcrump";
import Navbar from "../components/Navbar";
import Dropdown from "../components/Dropdown";
import Button from "../components/Button";
import Badge from "../components/Badge";

export default function ProductDetail() {
  const [select, setSelect] = useState<number | null>(0);
  const [mainImageSrc, setMainImageSrc] = useState<string>(
    "/assets/images/mouse-1.png"
  );
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

  return (
    <>
      <Navbar />

      <div className="wrapper py-8 px-6 md:py-[60px] pb-[500px]">
        <div className="screen-max-size flex gap-6 flex-col mx-auto">
          <div className="breadcump">
            <Breadcrump
              title={["Home", "Electronic", "G502 x Lightspeed Wireless..."]}
            />
          </div>

          <div className="flex gap-6 flex-col">
            <div className="images gap-3 flex flex-col">
              <div className="main h-[280px] w-full flex justify-center items-center rounded-lg bg-l-grey-02">
                <img
                  src={mainImageSrc}
                  alt=""
                  className="object-contain w-[200px] h-[200px] "
                />
              </div>

              <div className="sub flex gap-2">
                {subImage.map((value, index) => (
                  <div
                    onClick={() => setSelect(index)}
                    className={`item w-[75px] h-[75px] flex justify-center items-center rounded-lg bg-l-grey-02 transition-all duration-300 ease-in-out ${
                      select == index && "border-[2px] border-dark-green-01"
                    }`}
                  >
                    <img
                      onClick={handleImageClick}
                      key={index}
                      src={value}
                      alt=""
                      className="object-contain w-[50px] h-[50px] "
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <h1 className="eh-5 text-black-01">
                  G502 X Lightspeed Wireless Gaming Mouse
                </h1>
                <div className="bottom mt-1 flex gap-2 items-center">
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

              <h2 className="eh-6 text-dark-green-03">$139.99</h2>
            </div>

            <p className="par-2 text-grey-01">
              G502 X LIGHTSPEED is the latest addition to legendary G502
              lineage. Featuring our first-ever LIGHTFORCE hybrid
              optical-mechanical...{" "}
              <span className="pl-1 text-dark-green-03 font-medium cursor-pointer hover:underline">
                Read More
              </span>
            </p>

            <hr />

            <div className="gap-3 flex flex-col">
              <h1 className="eh text-black-01">Product Variant:</h1>

              <div className="gap-[17px] flex w-full">
                <div className="flex gap-2 flex-col w-full">
                  <label htmlFor="" className="par-2 text-black-01">
                    Type
                  </label>
                  <Dropdown width="w-full" menu={["Wired", "Hall Effect"]}>
                    Wireless
                  </Dropdown>
                </div>
                <div className="flex gap-2 flex-col w-full">
                  <label htmlFor="" className="par-2 text-black-01">
                    Color
                  </label>
                  <Dropdown width="w-full" menu={["Wired", "Hall Effect"]}>
                    Wireless
                  </Dropdown>
                </div>
              </div>
            </div>

            <div className="gap-4 flex flex-col mt-2">
              <Button variant="primary">Buy Now</Button>
              <div className="h-[48px]">
                <Button variant="primary-light">
                  <div className="flex items-center gap-2 justify-center">
                    <img src="/assets/icons/btn-cart.svg" alt="" />
                    Add to Chart
                  </div>
                </Button>
              </div>
            </div>

            <div className="tab flex border-b-[2px] border-[#E4E9EE] overflow-x-scroll scrollbar-none sticky top-0 bg-white">
              <div className="item py-[11px] px-4 lg:py-3 lg:px-6 border-b-[2px] border-dark-green-01">
                <a
                  href=""
                  className="par-1-16 whitespace-nowrap h3 font-semibold text-dark-green-01"
                >
                  Detail Product
                </a>
              </div>
              <div className="item py-[11px] px-4 lg:py-3 lg:px-6">
                <a
                  href=""
                  className="par-1-16 text-grey-01 font-medium whitespace-nowrap"
                >
                  Merchant
                </a>
              </div>
              <div className="item py-[11px] px-4 lg:py-3 lg:px-6">
                <a
                  href=""
                  className="par-1-16 text-grey-01 font-medium whitespace-nowrap"
                >
                  Reviews
                </a>
              </div>
              <div className="item py-[11px] px-4 lg:py-3 lg:px-6">
                <a
                  href=""
                  className="par-1-16 text-grey-01 font-medium whitespace-nowrap"
                >
                  Related Product
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="h2 text-black-01">
                G502 X Lightspeed Wireless Gaming Mouse
              </h1>
              <p className="par-3 text-grey-01">
                G502 X LIGHTSPEED is the latest addition to legendary G502
                lineage. Featuring our first-ever LIGHTFORCE hybrid
                optical-mechanical switches and updated LIGHTSPEED wireless
                protocol with 68% faster response rate.
              </p>
            </div>

            <div className="gap-4 flex flex-col">
              <h1 className="eh text-black-01">Specification</h1>
              <table>
                {tableSpec.map((value, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 == 0 ? "bg-l-grey-03" : "bg-white"
                    }`}
                  >
                    <td className="py-[11px] px-4 par-2 text-grey-01">
                      {value.spec}
                    </td>
                    <td className="py-[11px] px-4 par-2 text-black-01 font-medium">
                      {value.value}
                    </td>
                  </tr>
                ))}
              </table>
            </div>

            <div className="gap-4 flex flex-col mt-2">
              <h1 className="eh text-black-01">In The Box</h1>

              <div className="gap-3 flex flex-col">
                {inTheBox.map((value, index) => (
                  <div className="flex gap-[10px] items-center" key={index}>
                    <img src="/assets/icons/tick-circle.svg" alt="" />
                    <p className="par-2 font-medium text-black-01">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="gap-4 flex flex-col mt-2">
              <h1 className="eh text-black-01">System Required</h1>

              <div className="flex flex-col">
                <p className="par-3 text-grey-01">- USB port</p>
                <p className="par-3 text-grey-01">
                  - Internet access for optional software download
                </p>
                <p className="par-3 text-grey-01">- Windows® 10 or later</p>
                <p className="par-3 text-grey-01">- macOS 10.14 or later</p>
              </div>
            </div>

            <hr />

            <div className="gap-6 flex flex-col">
              <div className="gap-4 flex flex-col">
                <h1 className="eh text-black-01">Merchant Information</h1>

                <div className="flex gap-4 items-center">
                  <img
                    src="/assets/images/merchant.png"
                    alt=""
                    className="w-[52px] h-[52px] rounded-full"
                    style={{
                      boxShadow: "0px 4px 60px 0px rgba(129, 139, 156, 0.12)",
                    }}
                  />
                  <div className="gap-1 flex flex-col">
                    <div>
                      <h2 className="h3 text-black-01">Logitech Indonesia</h2>
                      <p className="par-3 text-grey-01">Jakarta Pusat</p>
                    </div>
                    <div className="flex gap-2">
                      <Badge>Top Rated Merchant</Badge>
                      <Badge>Best Merchant</Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-[17px]">
                <Button variant="primary-light">
                  <div className="gap-2 flex items-center justify-center">
                    <img src="/assets/icons/message.svg" alt="" />
                    Chat
                  </div>
                </Button>
                <Button variant="primary-light">
                  <div className="gap-2 flex items-center justify-center">
                    <img src="/assets/icons/shop.svg" alt="" />
                    Visit Merchant
                  </div>
                </Button>
              </div>
            </div>

            <hr />
          </div>
        </div>
      </div>
    </>
  );
}
