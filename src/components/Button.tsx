import { ReactNode } from "react";

export default function Button({
  children,
  variant,
  size = "regular",
  customStyleClass,
}: {
  children: ReactNode;
  variant: string;
  size?: string;
  customStyleClass?: string;
}) {
  const variants: { [key: string]: string } = {
    primary: "btn-primary text-white",
    "primary-light": "btn-primary-light",
    "grey": "rounded-lg text-black-01 h3 bg-d-grey-01",
    "grey-light": "border-grey rounded-lg text-black-01 h3",
  };

  const sizes: { [key: string]: string } = {
    sm: "px-[12px] py-[6px] lg:px-[16px] lg:py-[10px]",
    regular: "py-[12px] px-[10px]",
  };

  const className: string = `${variants[variant]} w-full h-full lg:eh xl:h2 ${sizes[size]}`;

  return (
    <button className={`${className} ${customStyleClass}`}>{children}</button>
  );
}
