import { ReactNode } from "react";

export default function Button({
  children,
  variant,
}: {
  children: ReactNode;
  variant: string;
}) {
  const variants: { [key: string]: string } = {
    primary: "btn-primary text-white",
    "primary-light": "btn-primary-light",
  };

  const className: string = `${variants[variant]} w-full h-full lg:eh xl:h2`;

  return <button className={className}>{children}</button>;
}
