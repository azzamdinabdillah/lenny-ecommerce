export function InputText({
  labelName,
  placeholder,
  value,
  labelSize = 'regular'
}: {
  labelName: string;
  placeholder: string;
  value?: string;
  labelSize?: string;
}) {

  const labelSizing: {[key: string]: string} = {
    regular: 'h3 text-black-01 lg:eh',
    lg: 'eh text-black-01',
  }

  return (
    <>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor={labelName} className={`${labelSizing[labelSize]}`}>
          {labelName}
        </label>
        <input
          value={value}
          type="text"
          placeholder={placeholder}
          className="py-[10px] px-4 border-grey rounded-xl bg-white placeholder:par-3 lg:placeholder:par-1-16 lg:par-1-16 placeholder:text-grey-01 par-3"
        />
      </div>
    </>
  );
}

export function InputNumber({
  labelName,
  placeholder,
  value,
}: {
  labelName: string;
  placeholder: string;
  value?: number;
}) {
  return (
    <>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor={labelName} className="h3 text-black-01 lg:eh">
          {labelName}
        </label>
        <input
          value={value}
          type="text"
          placeholder={placeholder}
          className="py-[10px] px-4 border-grey rounded-xl bg-white placeholder:par-3 lg:placeholder:par-1-16 lg:par-1-16 placeholder:text-grey-01 par-3"
        />
      </div>
    </>
  );
}

export function InputDate({
  labelName,
  placeholder,
  value,
}: {
  labelName: string;
  placeholder: string;
  value?: string;
}) {
  return (
    <>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor={labelName} className="h3 text-black-01 lg:eh">
          {labelName}
        </label>
        <input
          value={value}
          type="date"
          placeholder={placeholder}
          className="py-[6px] lg:py-[9px] px-4 border-grey rounded-xl bg-white placeholder:par-3 lg:placeholder:par-1-16 lg:par-1-16 placeholder:text-grey-01 par-3 text-grey-01"
        />
      </div>
    </>
  );
}
