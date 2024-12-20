import { useState } from "react";
import ProfilePopUp from "../layouts/ProfilePopUp";
import { ModalSignIn } from "../layouts/Modals/ModalSignIn";
import { ModalSignUp } from "../layouts/Modals/ModalSignUp";

export default function Navbar() {
  const [openProfile, setOpenProfile] = useState<Boolean>(false);
  const [openSignIn, setOpenSignIn] = useState<Boolean>(false);
  const [openSignUp, setOpenSignUp] = useState<Boolean>(false);

  return (
    <div className="wrapper w-full border-b-2 border-d-grey-01 bg-white">
      {openSignIn ? <ModalSignIn setOpenSignIn={setOpenSignIn} /> : ""}
      {openSignUp ? <ModalSignUp setOpenSignUp={setOpenSignUp} /> : ""}
      <div className="navbar screen-max-size flex px-[24px] md:px-0 py-[13px] lg:py-[16px] xl:py-[22px] items-center gap-[16px] xl:gap-[35px] flex-wrap mx-auto md:justify-between">
        <div className="left hidden md:block">
          <a href="/">
            <img src="/assets/icons/logo.svg" alt="" className="" />
          </a>
        </div>
        <div className="mid w-[171px] md:max-w-[480px] xl:max-w-[856px] grow">
          <div className="input-wrapper py-[8px] md:py-[11px] px-[12px] md:px-[16px] relative bg-d-grey-02 rounded-[8px] md:flex items-center">
            <div className="select-wrapper select-category relative">
              <select
                name=""
                id=""
                className="hidden md:block bg-transparent par-3 xl:text-[14px] text-black-01 font-medium"
              >
                <option value="">All Categories</option>
              </select>
            </div>
            <input
              type="text"
              placeholder="Search product"
              className="bg-transparent placeholder:h4-fw-500"
            />
            <a href="/search-result">
              <img
                src="/assets/icons/search-normal.svg"
                alt=""
                className="absolute top-1/2 -translate-y-1/2 right-4 w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
              />
            </a>
          </div>
        </div>

        <div className="right flex gap-[12px] items-center">
          <div className="flex gap-[16px]">
            <a href="/cart" className="cart relative">
              <img
                src="/assets/icons/shopping-cart.svg"
                alt=""
                className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
              />
              <p className="w-[18px] h-[18px] text-[12px] font-semibold rounded-[30px] border-[1.5px] text-white border-white bg-red-01 flex place-content-center absolute -top-2 -right-2">
                6
              </p>
            </a>
            <img
              src="/assets/icons/notification.svg"
              alt=""
              className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
            />
            <img
              src="/assets/icons/sms.svg"
              alt=""
              className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
            />
          </div>
          <img src="/assets/icons/line-1.svg" alt="" className="" />
          <img
            src="/assets/icons/menu.svg"
            alt=""
            className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] md:hidden"
            onClick={() => setOpenProfile(!openProfile)}
          />
          <div className="relative">
            <img
              src="/assets/images/user.png"
              alt=""
              className="w-[38px] h-[38px] hidden md:block cursor-pointer hover:scale-105 transition"
              onClick={() => setOpenProfile(!openProfile)}
            />

            <div
              className={`fixed w-[90%] left-1/2 -translate-x-1/2 translate-y-10 md:absolute z-20 md:translate-x-[unset] md:left-[unset] md:translate-y-14 right-0 md:w-[410px] shadow-lg border-grey rounded-lg overflow-hidden ${
                openProfile ? "block" : "hidden"
              }`}
            >
              <ProfilePopUp
                setOpenSignIn={setOpenSignIn}
                setOpenSignUp={setOpenSignUp}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
