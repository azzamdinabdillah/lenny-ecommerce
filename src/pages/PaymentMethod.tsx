import Footer from "../components/Footer";
import Button from "../components/Button";
import { InputDate, InputText } from "../components/Input";
import Navbar from "../components/Navbar";
import { paymentMethods } from "../datas/paymentMethods";
import { Left, Right, UsersTransaction } from "../layouts/UsersTransaction";

export default function PaymentMethod() {
  return (
    <>
      <div>
        <Navbar />

        <UsersTransaction
          title="Payment Methods"
          subTitle="Showing your choices payment methods"
          sortView={false}
        >
          <Left>
            <div className="flex flex-col gap-6 lg:gap-8">
              <div
                className="bg-white p-4 border-grey rounded-xl lg:py-8 lg:px-6"
                data-aos="fade-up"
              >
                <h1 className="title">Payment Method</h1>

                <div className="flex flex-col gap-6 mt-6">
                  {paymentMethods.map((method, index) => (
                    <>
                      <label
                        className="gap-4 flex items-center cursor-pointer"
                        key={index}
                        htmlFor={`payment-method-${index}`}
                      >
                        <input
                          type="radio"
                          id={`payment-method-${index}`}
                          name="payment-method"
                          className="radio"
                        />
                        <div className="gap-3 flex items-center lg:gap-4">
                          <div className="images rounded-lg bg-l-grey-02">
                            <img
                              src={method.img}
                              alt=""
                              className="h-[42px] lg:h-[53px] lg:w-[80px] xl:w-[100px] object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="h4 text-black-01 lg:h3 xl:eh-6">
                              {method.name}
                            </h4>
                            <p className="mt-1 par-4 text-grey-01 lg:par-2 xl:par-1-16">
                              {method.accountNumber}
                            </p>
                          </div>
                        </div>
                      </label>
                      {paymentMethods.length - 1 > index ? <hr /> : ""}
                    </>
                  ))}
                </div>
              </div>

              <div data-aos="fade-up">
                <div className="bg-white p-4 border-grey rounded-xl lg:py-8 lg:px-6">
                  <h1 className="title">Add Debit Card</h1>

                  <div className="flex flex-col gap-8 mt-6 lg:gap-6 lg:mt-6 xl:gap-8">
                    <div className="gap-4 flex flex-col">
                      <div className="gap-4 flex flex-col lg:gap-4 lg:flex-row">
                        <InputText
                          labelName="Holder Name"
                          placeholder="Enter your name"
                        />
                        <InputText
                          labelName="Card Number"
                          placeholder="0000 - 0000 - 0000 - 0000"
                        />
                      </div>

                      <div className="gap-4 flex flex-col lg:gap-4 lg:flex-row">
                        <InputDate
                          labelName="Expiry Date"
                          placeholder="0000 - 0000 - 0000 - 0000"
                        />
                        <InputText
                          labelName="CVV"
                          placeholder="Enter your cvv"
                        />
                      </div>
                    </div>

                    <div className="gap-4 flex flex-col lg:w-[236px] lg:ml-auto lg:flex-row-reverse xl:w-[336px]">
                      <Button variant="primary">Add New</Button>
                      <Button variant="grey">Discard</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Left>

          <hr className="md:hidden" />

          <Right btnHref="/payment-success" />
        </UsersTransaction>

        <div className="">
          <Footer />
        </div>
      </div>
    </>
  );
}
