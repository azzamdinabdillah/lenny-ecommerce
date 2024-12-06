import { Articles } from "../interfaces/Articles";

export function CardArticle({ img, date, title, description }: Articles) {
  return (
    <>
      <div className="card-article-component gap-4 flex flex-col w-full">
        <img
          src={img}
          alt=""
          className="object-cover rounded-lg h-[180px] xl:h-[280px]"
        />
        <div className="text gap-2 xl:gap-3 flex flex-col">
          <h3 className="par-2 xl:par-1-16 font-normal text-grey-01">{date}</h3>
          <div className="flex flex-col gap-1">
            <h1 className="eh xl:eh-6 text-black-01">{title}</h1>
            <p className="par-2 xl:par-1-16 text-grey-01">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
