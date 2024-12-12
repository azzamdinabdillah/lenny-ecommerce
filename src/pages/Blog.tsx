import { CardArticle } from "../components/CardArticle";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { listArticles } from "../datas/articles";

export default function Blog() {
  return (
    <>
      <Navbar />

      <div className="wrapper relative py-8 px-6 top-grey-background">
        <div className="screen-max-size mx-auto">
          <div>
            <h1 className="h2 text-black-01 text-center">The Lenny Blog</h1>
            <p className="par-3 text-grey-01 mt-1 text-center">
              All things recruiting: real stories, best practices
            </p>
          </div>

          <div className="mt-8 gap-8 flex flex-col">
            <div className="main-blog border-grey bg-white p-[10px] rounded-xl">
              <div className="card-article-component gap-4 flex flex-col w-full">
                <img
                  src="/assets/images/article-4.png"
                  alt=""
                  className="object-cover rounded-lg h-[180px] xl:h-[280px]"
                />
                <div className="text gap-2 xl:gap-3 flex flex-col px-[6px] pb-[6px]">
                  <div className="flex flex-col gap-3">
                    <h1 className="eh xl:eh-6 text-black-01">
                      I’m an Lenny delivery driver in Baltimore. My favorite
                      features on our vans from Rivian are the air-conditioned
                      seats and the screen built into the dash.
                    </h1>
                    <p className="par-2 xl:par-1-16 text-grey-01">
                      Jerome Stanline is a delivery driver for Kangaroo Direct,
                      an Lenny Delivery Service Partner in the Baltimore,
                      Maryland area. Follow her...
                    </p>
                    <div className="flex gap-2 items-center mt-1">
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
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {listArticles.map(({ title, date, description, img }, index) => (
                <CardArticle
                  img={img}
                  title={title}
                  date={date}
                  description={description}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
