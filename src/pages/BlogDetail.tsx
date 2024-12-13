import { Breadcrump } from "../components/Breadcrump";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { listArticles } from "../datas/articles";

export default function BlogDetail() {
  return (
    <>
      <Navbar />

      <div className="wrapper relative py-8 px-6 top-grey-background lg:py-[60px]">
        <div className="screen-max-size mx-auto">
          <div>
            <Breadcrump
              title={["Home", "Article", "Company News", "Detail Article"]}
            />
          </div>

          <div className="mt-6 gap-8 flex flex-col lg:mt-[52px] lg:gap-[52px]">
            <img
              src="/assets/images/article-4.png"
              alt=""
              className="h-[180px] rounded-lg w-full"
            />

            <div>
              <div className="left"></div>

              <div className="right">
                <h1 className="article-detail-h1">
                  I’m an Lenny delivery driver in Baltimore. My favorite
                  features on our vans from Rivian are the air-conditioned seats
                  and the screen built into the dash.
                </h1>

                <p className="article-detail-p">
                  Lorem ipsum dolor sit amet consectetur. Venenatis sit
                  dignissim vel lacus aliquet massa quam nisi tincidunt. Ante eu
                  ut arcu ultrices vitae libero interdum. Ac tempus elementum
                  suspendisse amet massa nec nunc ullamcorper venenatis. Sed id
                  tortor in nibh tortor commodo. Ultricies et vitae massa ut et
                  mi. Quam amet nulla lobortis rhoncus ipsum pharetra elementum
                  magna vitae. Eget orci feugiat lectus aliquet. Amet pretium
                  dui nunc laoreet sed lorem. Pretium volutpat mauris sit
                  curabitur pellentesque orci. Integer egestas dictum quis eget
                  in libero eget. Elementum magna amet quam sem rhoncus lacus.
                  Augue dignissim enim elementum egestas at sed dui. Consequat
                  nibh ut urna morbi a. Convallis nulla a pulvinar augue cursus
                  neque tortor. Accumsan erat ultrices magna mattis egestas vel.
                  Consequat at arcu risus a enim at orci velit. Nam consequat
                  mauris malesuada phasellus vel consequat varius vitae
                  suspendisse. Adipiscing adipiscing lacus nulla tortor ultrices
                  sed eget. Aliquet ornare adipiscing lacus non elit vel. Tortor
                  sed adipiscing imperdiet tortor quam dolor augue molestie.
                  Interdum turpis in tortor velit urna augue.
                </p>

                <h2 className="article-detail-h2">
                  Sed id tortor in nibh tortor commodo
                </h2>
                <p className="article-detail-p">
                  Lectus sed eu suscipit et rhoncus quis massa. Tincidunt diam
                  massa id id scelerisque. Id in egestas sed duis duis congue.
                  Arcu suspendisse habitant mauris elementum aliquet. Sit
                  blandit id pellentesque tempor. Turpis tortor malesuada
                  pulvinar sollicitudin felis eget. Vulputate enim at varius
                  nec. Pellentesque senectus pellentesque sollicitudin cursus
                  lacus.
                </p>
                <h2 className="article-detail-h2">
                  Sed id tortor in nibh tortor commodo
                </h2>
                <p className="article-detail-p">
                  Lorem vitae tristique aliquam at id morbi. Quis sit lectus
                  orci accumsan neque diam scelerisque euismod. Vulputate
                  parturient dictum eget et elit phasellus. Eget ullamcorper sed
                  imperdiet orci arcu nibh sit potenti fringilla. Vel enim est
                  cursus eu phasellus porttitor. Etiam donec senectus viverra
                  sit pretium amet mattis quis adipiscing. Tristique blandit
                  enim laoreet elit commodo. Sit nascetur auctor porta velit id
                  nec ultricies aenean dolor. Tincidunt sagittis a commodo
                  tellus. Vulputate ullamcorper facilisis in ac eu risus quis
                  placerat. Id egestas gravida sit aliquam neque in ut quam.
                  Tempus adipiscing tortor viverra sociis elementum adipiscing
                  nisi cras.
                </p>
                <h2 className="article-detail-h2">
                  Sed id tortor in nibh tortor commodo
                </h2>
                <p className="article-detail-p">
                  Scelerisque elementum eget eu quam blandit sit rutrum tortor.
                  Dictumst venenatis suspendisse mauris cras. Amet nunc euismod
                  condimentum id leo praesent etiam feugiat. Sollicitudin amet
                  parturient pellentesque sapien. At sollicitudin leo amet sed
                  ut. A egestas imperdiet et non turpis vestibulum. Dolor
                  pharetra nam quis facilisis tempus. Aliquam aliquam turpis
                  neque et ornare massa quam. Consequat sem est quis imperdiet
                  nam. Nisl consequat dapibus purus id fermentum tortor egestas.
                  Facilisi purus fringilla ac mus duis et faucibus nunc.
                  Scelerisque felis at ipsum faucibus aliquam sagittis gravida.
                  Vitae in feugiat sit malesuada mus viverra quam ante. In
                  feugiat ut mauris nibh ante. Est nunc donec amet ligula urna.
                  Consequat nisl lacus eget sit non ut. Odio condimentum eu
                  pharetra mollis ipsum condimentum tristique pharetra nullam.
                  Ultricies sit at etiam augue tincidunt aliquet amet sed
                  suspendisse. Facilisi at elit eget viverra mattis consectetur
                  egestas accumsan eu. Ac penatibus viverra diam augue nulla
                  sed. Viverra ut sapien diam amet porttitor. Scelerisque nulla
                  tristique cursus a sagittis non. Nec viverra quis massa proin.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <h1 className="title">Related Article</h1>

            <div className="gap-6 flex flex-col">
              {listArticles.map((value, index) => (
                <>
                  <div className="flex gap-4 flex-col" key={index}>
                    <img
                      src={value.img}
                      alt=""
                      className="h-[180px] object-cover rounded-lg"
                    />
                    <h2 className="eh text-black-01">{value.title}</h2>
                  </div>
                </>
              ))}
            </div>

            <hr />

            <div className="flex justify-between items-center">
              <p className="par-1-16 text-black-01 font-medium">Share to :</p>

              <div className="gap-2 flex">
                <img src="/assets/icons/fb.svg" alt="" />
                <img src="/assets/icons/ig.svg" alt="" />
                <img src="/assets/icons/twitter.svg" alt="" />
                <img src="/assets/icons/wa.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:mt-[80px]"></div>
      <Footer />
    </>
  );
}
