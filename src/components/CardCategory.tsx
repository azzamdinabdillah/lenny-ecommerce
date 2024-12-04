interface Categories {
  img: string;
  title: string;
  total: string;
}

export const listCategories: Categories[] = [
  {
    img: "/assets/icons/category-1.svg",
    title: "Electronics",
    total: "8,9k",
  },
  {
    img: "/assets/icons/category-2.svg",
    title: "Fashion",
    total: "18,2k",
  },
  {
    img: "/assets/icons/category-3.svg",
    title: "Action Figure",
    total: "4,1k",
  },
  {
    img: "/assets/icons/category-4.svg",
    title: "Electronics",
    total: "22,9k",
  },
  {
    img: "/assets/icons/category-5.svg",
    title: "Book",
    total: "128k",
  },
  {
    img: "/assets/icons/category-6.svg",
    title: "Gaming",
    total: "82k",
  },
  {
    img: "/assets/icons/category-2.svg",
    title: "Fashion",
    total: "18,2k",
  },
];

export function CardCategory({ img, title, total }: Categories) {
  return (
    <div className="item flex justify-center items-center flex-col border-[1.5px] border-d-grey-01 rounded-xl p-6 gap-2 min-w-[120px] lg:min-w-[124px] lg:gap-3 lg:rounded-[12px] xl:gap-6 xl:min-w-44">
      <img src={img} alt="" className="w-8 lg:w-11 xl:w-[52px]" />
      <div>
        <h4 className="h3 lg:eh-16 xl:eh-6 text-center whitespace-nowrap text-black-01">{title}</h4>
        <p className="par-3 xl:par-1-16 text-center whitespace-nowrap text-grey-01 mt-[2px]">
          {total} products
        </p>
      </div>
    </div>
  );
}
