export default function InputWithSelect({
  option,
  variant,
  placeholder
}: {
  option: string[];
  variant: string;
  placeholder: string
}) {
  const variantBg: { [key: string]: string } = {
    light: "bg-white border-grey rounded-xl",
  };

  return (
    <div
      className={`input-wrapper py-[8px] md:py-[11px] px-[12px] md:px-[16px] relative ${variantBg[variant]} rounded-[8px] flex items-center`}
    >
      <div className="select-wrapper select-category relative">
        <select
          name=""
          id=""
          className="bg-transparent par-2 text-black-01 font-medium xl:par-1-16 xl:font-medium"
        >
          {option.map((value, index) => (
            <option value="" key={index}>
              {value}
            </option>
          ))}
        </select>
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent placeholder:par-2 placeholder:text-grey-01 placeholder:font-normal xl:placeholder:par-1-16 xl:placeholder:font-normal"
      />
    </div>
  );
}
