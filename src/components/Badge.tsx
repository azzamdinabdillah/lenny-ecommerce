import { ReactNode } from "react";

export default function Badge({ children }: { children: ReactNode }) {
  return (
    <div
      style={{ backgroundColor: "rgba(29, 158, 52, 0.1)" }}
      className="badge py-[5px] px-2 rounded text-dark-green-03 par-3 font-medium w-fit lg:par-2 lg:font-medium"
    >
      {children}
    </div>
  );
}
