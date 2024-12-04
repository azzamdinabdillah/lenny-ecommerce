import { ReactNode, useRef, useState } from "react";

export default function Accordion({
  title,
  children,
  isOpen = false,
}: {
  title: string;
  children: ReactNode;
  isOpen: boolean;
}) {
  const [open, setOpen] = useState(isOpen);
  const accordionRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={`accordion gap-3 flex flex-col overflow-hidden transition-all duration-300 pb-[5px]`}
      ref={accordionRef}
      style={{
        height: open ? `${accordionRef.current?.scrollHeight}px` : "23px",
      }}
    >
      <div
        className="btn flex justify-between items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <h1 className="eh text-black-01">{title}</h1>
        <img
          src="/assets/icons/arrow-down-sm.svg"
          alt=""
          className={`rotate-180 ${open ? "rotate-0" : ""}`}
        />
      </div>
      <div className={``}>{children}</div>
    </div>
  );
}
