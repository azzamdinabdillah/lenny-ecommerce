import { Products } from "../interfaces/Products";

export default function CartProductCard({
  img,
  title,
  location,
  price,
}: Products) {
  return (
    <div className="gap-4 flex flex-col md:flex-row justify-between md:items-center">
      <div className="gap-4 flex items-center lg:gap-6">
        <input type="checkbox" className="checkbox" />
        <div className="gap-3 flex items-center lg:gap-4 xl:gap-6">
          <div className="images p-[10px] rounded-lg bg-l-grey-02 xl:p-2">
            <img
              src={img}
              alt=""
              className="w-[38px] h-[38px] lg:w-[60px] lg:h-[60px] xl:w-[84px] xl:h-[84px]"
            />
          </div>
          <div className="flex flex-col gap-1 lg:gap-2 xl:gap-3">
            <div>
              <h1 className="h4 text-black-01 lg:h3 xl:eh-6">{title}</h1>
              <p className="mt-[2px] par-4 text-grey-01 lg:par-2 lg:mt-1 xl:par-1-16">
                {location}
              </p>
            </div>
            <h4 className="h4 text-dark-green-03 lg:eh xl:eh-6">${price}</h4>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="par-4 text-grey-01 md:hidden">Add to Favourite</p>
        <div className="gap-2 flex items-center ml-auto lg:gap-3">
          <div className="border-grey p-1 flex items-center xl:p-2 xl:gap-2">
            <img src="/assets/icons/minus.svg" alt="" />
            <p className="par-3 text-black-01 w-6 flex place-content-center lg:par-2 xl:par-1-16 font-medium lg:font-medium xl:font-medium">
              1
            </p>
            <img src="/assets/icons/plus.svg" alt="" />
          </div>
          <div className="border-grey p-[6px] xl:p-2">
            <img
              src="/assets/icons/trash.svg"
              alt=""
              className="lg:w-[20px] lg:h-[20px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
