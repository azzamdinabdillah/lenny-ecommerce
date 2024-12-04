export default function Footer() {
  return (
    <footer className="">
      <div className="px-[24px] bg-d-grey-03 py-[40px] lg:py-[60px] xl:py-[80px]">
        <div className="wrapper screen-max-size mx-auto lg:flex lg:gap-12 xl:gap-[96px]">
          <div className="top">
            <div className="lg:w-[221px] xl:w-[313px]">
              <img src="/assets/icons/logo.svg" alt="" />
              <p className="par-2 text-black-01 mt-4 lg:par-3 xl:par-1-16 lg:mt-[27px]">
                The biggest marketplace managed by Ideologist corp, which
                provides various kinds of daily needs and hobbies.
              </p>
            </div>
          </div>
          <div className="list-links mt-8 grid grid-cols-2 gap-7 gap-y-11 md:grid-cols-4 lg:mt-0 lg:gap-8 lg:flex xl:gap-[80px]">
            <div className="gap-4 flex flex-col flex-1 ">
              <h2 className="eh xl:eh-6 whitespace-nowrap">About Lenny</h2>
              <div className="link gap-3 flex flex-col par-2 text-black-01 break-words lg:whitespace-nowrap xl:par-1-16">
                <a href="">Information</a>
                <a href="">Store Lactor</a>
                <a href="">Bulk Purchase</a>
                <a href="">Alteration Services</a>
                <a href="">Gift Delivery Service</a>
                <a href="">Live Station</a>
              </div>
            </div>
            <div className="gap-4 flex flex-col flex-1">
              <h2 className="eh xl:eh-6 whitespace-nowrap">About Lenny</h2>
              <div className="link gap-3 flex flex-col par-2 text-black-01 break-words xl:par-1-16">
                <a href="">FAQ</a>
                <a href="">Return Policy</a>
                <a href="">Privacy Policy</a>
                <a href="">Accessibillity</a>
                <a href="">Contact Us</a>
              </div>
            </div>
            <div className="gap-4 flex flex-col flex-1">
              <h2 className="eh xl:eh-6 whitespace-nowrap">Account</h2>
              <div className="link gap-3 flex flex-col par-2 text-black-01 break-words xl:par-1-16">
                <a href="">Membership</a>
                <a href="">Address</a>
                <a href="">Cupons</a>
              </div>
            </div>
            <div className="gap-4 flex flex-col flex-1">
              <h2 className="eh xl:eh-6 whitespace-nowrap">Contact Us</h2>
              <div className="link gap-3 flex flex-col par-2 text-black-01 break-words xl:par-1-16">
                <a href="">For Lenny Consumer Complaint Services</a>
                <a href="">(684) 555-0102 and curtis.weaver@example.com</a>
                <hr className="border border-[#E4E9EE]" />
                <a href="">Customers Complaint Service</a>
                <a href="">Directorate Generate of the Republic of Indonesia</a>
                <a href="">(480) 555-0103</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 px-[26px] bg-l-grey-01 lg:py-[18px]">
        <div className="wrapper screen-max-size mx-auto md:flex justify-between items-center">
          <p className="par-2 text-black-01 break-words text-center xl:par-1-16">
            COPYRIGHT © LENNY CO., LTD. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 justify-center par-2 text-black-01 mt-3 md:mt-0 xl:par-1-16">
            <p>Terms of use</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
