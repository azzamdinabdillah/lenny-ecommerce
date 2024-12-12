import Button from "../components/Button";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function PaymentSuccess() {
  return (
    <>
      <Navbar />

      <div className="py-[60px] px-6 lg:py-[80px] xl:py-[100px]">
        <div className="screen-max-size mx-auto">
          <div className="flex flex-col gap-6 items-center md:max-w-[525px] mx-auto lg:gap-8 xl:max-w-[600px]">
            <img
              src="/assets/images/payment-success.png"
              alt=""
              className="w-[84px] h-[84px] lg:w-[100px] lg:h-[100px] xl:w-[138px] xl:h-[138px]"
            />
            <div className="gap-3 flex flex-col">
              <h1 className="h2 text-black-01 text-center lg:eh-5 xl:eh-3">
                Your Payment is Succesfull
              </h1>
              <p className="par-3 text-grey-01 text-center lg:par-2 xl:par-1-16">
                Your payment will be proceed in 30 mins. If any problem please
                chat to customer service. Detail information will included
                below.
              </p>
            </div>

            <div className="gap-4 flex flex-col mt-2 w-full md:max-w-[256px] md:flex-row xl:max-w-[336px] lg:mt-0">
              <Button variant="primary" customStyleClass="lg:h3 xl:eh">
                Back to Home
              </Button>
              <Button variant="grey" customStyleClass="lg:h3 xl:eh">
                Check Detail
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
