interface Products {
  img: string;
  title: string;
  price: number;
  location: string;
  rating: number;
  totalSold: number;
}

export const listProducts: Products[] = [
  {
    img: "/assets/images/product-1.png",
    title: "Spy x Family Tshirt",
    location: "North Purwokerto",
    rating: 4.8,
    price: 26,
    totalSold: 1.238,
  },
  {
    img: "/assets/images/product-2.png",
    title: "Green Man Jacket",
    location: "North Purwokerto",
    rating: 4.8,
    price: 49,
    totalSold: 1.238,
  },
  {
    img: "/assets/images/product-3.png",
    title: "Iphone 14 Pro Max",
    location: "North Purwokerto",
    rating: 4.8,
    price: 1200,
    totalSold: 1.238,
  },
  {
    img: "/assets/images/product-4.png",
    title: "Oversized Tshirt",
    location: "North Purwokerto",
    rating: 4.8,
    price: 48,
    totalSold: 1.238,
  },
  {
    img: "/assets/images/product-5.png",
    title: "Brown Woman Jacket",
    location: "North Purwokerto",
    rating: 4.8,
    price: 49,
    totalSold: 1.238,
  },
  {
    img: "/assets/images/product-6.png",
    title: "Airpod Pro 2022",
    location: "North Purwokerto",
    rating: 4.8,
    price: 459,
    totalSold: 1.238,
  },
  {
    img: "/assets/images/product-7.png",
    title: "DJI Mini 3 Pro",
    location: "North Purwokerto",
    rating: 4.8,
    price: 824,
    totalSold: 1.238,
  },
  {
    img: "/assets/images/product-8.png",
    title: "Ipad Pro Gen 3",
    location: "North Purwokerto",
    rating: 4.8,
    price: 1200,
    totalSold: 1.238,
  },
];

export function CardProduct({
  img,
  location,
  price,
  rating,
  title,
  totalSold,
}: Products) {
  return (
    <>
      <div className="card-product-component flex gap-6 flex-col pb-5 md:pb-0 flex-grow-1 h-fit">
        <div className="images bg-l-grey-02 rounded-lg relative h-[130px] flex items-center justify-center lg:h-48 xl:h-[280px]">
          <img src={img} alt="" className="w-[90px] lg:w-[120px] xl:w-[180px]"/>

          <div className="love bg-white rounded-full flex items-center justify-center absolute top-3 right-3 p-2">
            <img src="/assets/icons/love.svg" alt="" />
          </div>
        </div>

        <div className="text flex gap-1 flex-col">
          <div className="top flex justify-between items-center">
            {/* <h1 className="h3 text-black-01 w-[60%] whitespace-nowrap overflow-hidden text-ellipsis lg:eh xl:eh-6">{title}</h1> */}
            <h1 className="h3 text-black-01 w-[60%] whitespace-nowrap overflow-hidden text-ellipsis lg:h2 xl:eh-6">{title}</h1>
            {/* <h2 className="h3 text-dark-green-03 lg:eh xl:eh-6">${price}</h2> */}
            <h2 className="h3 text-dark-green-03 lg:h2 xl:eh-6">${price}</h2>
          </div>
          <h3 className="par-3 text-grey-01 lg:par-2 xl:par-1-16">{location}</h3>
          <div className="bottom mt-1 flex gap-2 items-center">
            <div className="rating flex gap-2 items-center par-3 text-black-01 lg:par-2 xl:par-1-16">
              <img src="/assets/icons/star.svg" alt="" />
              {rating}
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
            <p className="par-3 text-black-01 lg:par-2 xl:par-1-16">{totalSold} sold</p>
          </div>
        </div>
      </div>
    </>
  );
}
