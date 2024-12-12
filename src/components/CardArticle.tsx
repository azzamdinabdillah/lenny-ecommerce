import { Articles } from "../interfaces/Articles";
import Badge from "./Badge";

export function CardArticle({
  img,
  date,
  title,
  description,
  category,
  readTime,
}: Articles) {
  return (
    <>
      <div className="card-article-component gap-4 flex flex-col w-full">
        <img
          src={img}
          alt=""
          className="object-cover rounded-lg h-[180px] xl:h-[280px]"
        />
        <div className="text gap-2 xl:gap-3 flex flex-col">
          <div className="flex gap-4 items-center">
            {category && <Badge>{category}</Badge>}
            <h3 className="par-2 xl:par-1-16 font-normal text-grey-01">
              {date}{" "}
              {readTime ? (
                <>
                  <span>&nbsp; | &nbsp; {readTime} &nbsp; Min Read</span>
                </>
              ) : (
                ""
              )}
            </h3>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="eh xl:eh-6 text-black-01">{title}</h1>
            <p className="par-2 xl:par-1-16 text-grey-01">
              {description ? description : (
                <div className="flex gap-2 items-center">
                  <p className="par-2 text-black-01 font-medium xl:par-1-16 xl:font-medium">
                    Read More
                  </p>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.93945 13.28L10.2861 8.9333C10.7995 8.41997 10.7995 7.57997 10.2861 7.06664L5.93945 2.71997"
                      stroke="#0B0F0E"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              )}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
