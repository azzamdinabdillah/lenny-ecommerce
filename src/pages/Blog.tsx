import { CardArticle } from "../components/CardArticle";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { listArticles2 } from "../datas/articles";

export default function Blog() {
  return (
    <>
      <Navbar />

      <div className="wrapper relative py-8 px-6 top-grey-background lg:py-[60px]">
        <div className="screen-max-size mx-auto">
          <div>
            <h1 className="h2 text-black-01 text-center lg:eh-5 xl:eh-3">
              The Lenny Blog
            </h1>
            <p className="par-3 text-grey-01 mt-1 text-center lg:par-1-16">
              All things recruiting: real stories, best practices
            </p>
          </div>

          <div className="mt-8 gap-8 flex flex-col lg:mt-[52px] lg:gap-[52px]">
            <div
              className="main-blog border-grey bg-white p-[10px] rounded-xl"
              data-aos="fade"
            >
              <div className="card-article-component gap-4 flex flex-col w-full md:grid grid-cols-2 md:items-center lg:gap-6">
                <img
                  src="/assets/images/article-4.png"
                  alt=""
                  className="object-cover rounded-lg h-[180px] lg:h-[300px] xl:lg:h-[356px] md:w-full md:h-full"
                />
                <div className="text gap-2 xl:gap-3 flex flex-col px-[6px] pb-[6px]">
                  <div className="flex flex-col gap-3">
                    <h1 className="eh lg:eh-6 text-black-01 xl:eh-5">
                      I’m an Lenny delivery driver in Baltimore. My favorite
                      features on our vans from Rivian are the air-conditioned
                      seats and the screen built into the dash.
                    </h1>
                    <p className="par-2 text-grey-01 xl:par-1-16">
                      Jerome Stanline is a delivery driver for Kangaroo Direct,
                      an Lenny Delivery Service Partner in the Baltimore,
                      Maryland area. Follow her...
                    </p>
                    <div className="flex gap-2 items-center mt-3">
                      <p className="par-2 text-black-01 font-medium xl:par-1-16 lg:font-semibold lg:eh xl:font-semibold">
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

            <div className="flex flex-col gap-6 md:grid grid-cols-3 lg:gap-y-8 lg:gap-x-6">
              {listArticles2.map(
                ({ title, category, readTime, img }, index) => (
                  <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={`${index * 100}`}
                  >
                    <CardArticle
                      href="/blog/detail"
                      img={img}
                      title={title}
                      readTime={readTime}
                      category={category}
                      key={index}
                    />
                  </div>
                )
              )}
            </div>

            <div className="w-full flex justify-center lg:mt-[52px] mx-auto">
              <button className="btn-primary-light py-[14px] px-[32px] h3 lg:eh lg:py-[10px] lg:px-4 xl:h2 mx-auto lg:w-[180px] lg:h-[48px] xl:w-[200px] xl:h-[53px] mx-auto">
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:mt-[80px]"></div>
      <Footer />
    </>
  );
}
