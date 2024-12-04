import { ReactNode, useState } from "react";

export default function Toggle({
  children,
  variant,
}: {
  children: ReactNode;
  variant: string;
}) {
  const variants: { [key: string]: string } = {
    light: "border-grey rounded-xl",
  };

  const [select, setSelect] = useState(false);

  return (
    <div
      onClick={() => setSelect(!select)}
      className={`py-[11px] px-4 w-fit transition-all cursor-pointer par-2 xl:par-1-16 ${
        variants[variant]
      } ${
        select
          ? "bg-black-01 text-white font-medium xl:font-medium "
          : "bg-transparent text-black-01"
      }`}
    >
      {children}
    </div>
  );
}
