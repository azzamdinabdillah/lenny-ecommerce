import Button from "../../components/Button";
import { InputText } from "../../components/Input";

export function ModalSignIn({ setOpenSignIn }: { setOpenSignIn: Function }) {
  return (
    <>
      <div
        className="vh-100 vw-100 bg-black-01/50 flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 z-30 p-6 outer"
        onClick={(e) => {
          const target = e.target as HTMLElement;
          if (target.classList.contains("outer")) {
            setOpenSignIn(false);
          }
        }}
      >
        <div className="bg-white py-8 px-6 flex flex-col gap-[34px] rounded-lg border-grey shadow-lg w-[327px] md:max-w-[440px] md:w-full inner">
          <div className="top flex flex-col gap-6 lg:gap-8">
            <h1 className="eh-6 text-black-01 lg:eh-5">Sign In</h1>
            <div>
              <InputText
                labelName="Phone Number or Email"
                labelSize="lg"
                placeholder="Enter your phone number or email"
              />

              <p className="par-3 text-[#1D9E34] text-end mt-2 w-full lg:par-2 lg:mt-4 font-medium lg:font-medium">
                Getting Trouble?
              </p>
            </div>

            <Button variant="primary">Sign In</Button>
          </div>

          <div className="relative lg:py-2">
            <hr />
            <p className="bg-white par-3 text-[#818B9C] p-[10px] absolute left-1/2 -translate-x-1/2 right-1/2 -translate-y-1/2 w-[142px] lg:par-2 lg:w-[162px] font-medium lg:font-medium">
              Or using other method
            </p>
          </div>

          <Button variant="grey-light">
            <div className="gap-2 flex items-center justify-center">
              <svg
                width="29"
                height="28"
                viewBox="0 0 29 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.6454 14.8745L18.0443 12.342H15.5868V10.6959C15.5868 10.0034 15.9299 9.32674 17.027 9.32674H18.16V7.17015C17.5002 7.06503 16.8335 7.00816 16.1653 7C14.1427 7 12.8221 8.21481 12.8221 10.411V12.342H10.5801V14.8745H12.8221V21H15.5868V14.8745H17.6454Z"
                  fill="#337FFF"
                />
              </svg>
              <p className="text-black-01 h3 lg:eh">Sign In with Facebook</p>
            </div>
          </Button>
        </div>
      </div>
    </>
  );
}
