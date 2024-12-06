import Button from "../components/Button";
import { CardArticle } from "../components/CardArticle";
import { CardCategory } from "../components/CardCategory";
import { CardProduct } from "../components/CardProduct";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { listArticles } from "../datas/articles";
import { listCategories } from "../datas/categories";
import { listProducts } from "../datas/products";

export function Home() {
  return (
    <>
      <Navbar />
      <div className="tes bg-hero md:bg-hero-tablet xl:bg-hero-dekstop bg-no-repeat bg-center bg-cover relative px-[24px] pt-[52px] md:py-24 md:px-[80px] min-h-[100vh] md:min-h-full lg:pt-[60px] lg:pb-[134px] xl:pt-[100px] xl:pb-[192px] lg:h-[436px] xl:h-[620px]">
        <div className="hero md:bg-none screen-max-size m-auto">
          <div className="left flex gap-[16px] flex-wrap md:w-[330px] lg:w-[384px] xl:w-[657px]">
            <h1 className="eh-4 lg:h1 xl:eh-1 text-black-01">
              Upgrade Your Wardrobe With Our Collection
            </h1>

            <p className="par-2 lg:par-1-16 xl:par-1-18 text-grey-01 xl:w-[585px]">
              Eget neque aenean viverra aliquam tortor diam nunc. Dis
              pellentesque lectus quis velit fusce aenean nunc dui consectetur.
              Eu lorem est ullamcorper nisl amet non mollis.
            </p>

            <div className="flex flex-col gap-[16px] w-full mt-[18px] md:flex-row md:mt-0 lg:w-[416px] xl:mt-[16px]">
              <Button variant="primary">Buy Now</Button>
              <Button variant="primary-light">View Detail</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="category py-[60px] px-[24px] xl:py-[80px]">
        <div className="wrapper screen-max-size gap-[34px] flex flex-col mx-auto xl:gap-[52px]">
          <div className="top flex justify-between items-center">
            <h1 className="h2 text-black-01 lg:eh-4 xl:eh-2">
              Featured Category
            </h1>
            <div>
              <Button variant="primary-light" size="sm">
                View Detail
              </Button>
            </div>
          </div>
          <div className="list-category flex gap-4 overflow-x-scroll pb-8 lg:gap-6 xl:pb-12">
            {listCategories.map((value) => (
              <CardCategory
                img={value.img}
                title={value.title}
                total={value.total}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="popular-product pb-[60px] px-[24px] lg:py-[80px] xl:py-[100px]">
        <div className="wrapper screen-max-size mx-auto">
          <div className="top gap-3 flex flex-col xl:gap-4">
            <h1 className="h2 text-center lg:eh-4 xl:eh-2">
              Popular Product on Lenny
            </h1>
            <p className="par-2 text-center text-grey-01 lg:par-1-16 xl:par-1-18">
              Lorem ipsum dolor sit amet consectetur. Integer cursus cursus in
            </p>
          </div>

          <div className="list-products grid grid-cols-2 gap-4 gap gap-y-6 mt-7 md:grid-cols-4 lg:mt-[52px] lg:gap-6">
            {listProducts.map(
              ({ img, location, price, rating, title, totalSold }) => (
                <CardProduct
                  img={img}
                  location={location}
                  price={price}
                  rating={rating}
                  title={title}
                  totalSold={totalSold}
                />
              )
            )}
          </div>
          <div className="w-full flex justify-center mt-8 lg:mt-[52px]">
            <button className="btn-primary-light py-[14px] px-[32px] h3 lg:eh lg:py-[10px] lg:px-4 xl:h2 mx-auto lg:w-[180px] lg:h-[48px] xl:w-[200px] xl:h-[53px]">
              Load More
            </button>
          </div>
        </div>
      </div>

      <div className="ipad px-6  py-10 lg:py-[60px] xl:py-[80px]">
        <div className="wrapper screen-max-size mx-auto">
          <div className="rounded-2xl bg-orange-03 px-6 py-5 gap-8 flex flex-col md:flex-row md:items-center md:py-[42px] md:px-[50px] lg:py-[76px] lg:gap-14 xl:py-[94px] xl:px-[135px] xl:gap-40">
            <div className="md:flex-1 md:w-full">
              <img
                src="/assets/images/ipad.png"
                alt=""
                className="w-[157px] mt-[11px] md:mx-auto md:scale-[1.7] lg:scale-[2.1] xl:scale-[2.5] md:mt-0"
              />
            </div>
            <div className="gap-8 flex flex-col md:w-[300px] lg:w-[400px] xl:w-[483px]">
              <div className="text gap-3 flex flex-col lg:gap-4">
                <h1 className="h2 text-black-01 lg:eh-4 xl:eh-2">
                  Ipad Air Gen 5
                </h1>
                <p className="par-2 text-grey-01 lg:par-1-18">
                  Lorem ipsum dolor sit amet consectetur. Integer cursus cursus
                  in sapien quam risus sed diam.
                </p>
              </div>
              <div className="flex gap-3">
                {/* <button className="btn-primary w-full lg:eh xl:h2 text-white">
                  Buy $900
                </button>
                <button className="btn-primary-light w-full lg:eh xl:h2">
                  View Detail
                </button> */}

                <Button variant="primary">Buy $900</Button>
                <Button variant="primary-light">View Detail</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="category py-[60px] px-[24px] lg:py-[20px] xl:py-[40px]">
        <div className="wrapper screen-max-size gap-[34px] flex flex-col mx-auto xl:gap-[52px]">
          <div className="top flex justify-between items-center">
            <h1 className="h2 text-black-01 lg:eh-4 xl:eh-2">
              Lenny’s Article
            </h1>
            <div>
              <Button variant="primary-light" size="sm">
                View Detail
              </Button>
            </div>
          </div>
          <div className="list-category flex flex-col gap-6 pb-8 xl:pb-12 lg:gap-6 md:grid grid-cols-3">
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

      <Footer />
    </>
  );
}
