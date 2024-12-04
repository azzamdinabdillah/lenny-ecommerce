import { useState } from "react";

export default function Dropdown({
  children,
  menu,
  width = 'w-fit',
}: {
  children: string;
  menu: string[];
  width?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown relative">
      <div
        className={`btn flex gap-1 p-[10px] rounded-lg border border-d-grey-01 cursor-pointer lg:py-[11px] lg:px-[16px] justify-between ${width}`}
        onClick={() => setOpen(!open)}
      >
        <h1 className="h4-fw-500 select-none lg:par-2 lg:font-medium text-black-01">{children}</h1>
        <img src="/assets/icons/arrow-down.svg" alt="" />
      </div>

      <div
        className={`menu absolute left-0 right-0 -bottom-2 translate-y-full bg-white border-grey z-10 ${
          !open ? "hidden" : ""
        }`}
      >
        {menu.map((value, index) => (
          <>
            <p key={index} className="py-3 px-4 h4-fw-500 text-black-03">
              {value}
            </p>
            {index < menu.length - 1 && <hr />}
          </>
        ))}
      </div>
    </div>
  );
}
