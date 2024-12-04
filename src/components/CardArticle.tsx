interface Articles {
  img: string;
  date: string;
  title: string;
  description: string;
}

export const listArticles: Articles[] = [
  {
    img: "/assets/images/article-1.png",
    date: "22 Dec 2022",
    title: "Make your desk more neat and beautiful",
    description:
      "Lorem ipsum dolor sit amet consectetur. Arcu pellentesque etiam scelerisque pharetra id. Maecenas diam eu amet cras",
  },
  {
    img: "/assets/images/article-2.png",
    date: "22 Dec 2022",
    title: "What are the fashion trend in 2023?",
    description:
      "Lorem ipsum dolor sit amet consectetur. Arcu pellentesque etiam scelerisque pharetra id. Maecenas diam eu amet cras",
  },
  {
    img: "/assets/images/article-3.png",
    date: "22 Dec 2022",
    title: "Tips for Work Life Balance ",
    description:
      "Lorem ipsum dolor sit amet consectetur. Arcu pellentesque etiam scelerisque pharetra id. Maecenas diam eu amet cras",
  },
];

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
          <h3 className="par-2 xl:par-1-16 font-normal text-grey-01">
            {date}
          </h3>
          <div className="flex flex-col gap-1">
            <h1 className="eh xl:eh-6 text-black-01">{title}</h1>
            <p className="par-2 xl:par-1-16 text-grey-01">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
