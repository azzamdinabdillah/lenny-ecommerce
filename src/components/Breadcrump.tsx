export function Breadcrump({ title }: { title: string[] }) {
  return (
    <div className="flex gap-2 items-center">
      {title.map((value: string, index: number) => (
        <p
          key={index}
          className="gap-2 h4 font-medium text-dark-green-03 flex last:text-black-01 items-center lg:par-2 lg:font-medium xl:par-1-16 max-w-[150px] whitespace-nowrap overflow-hidden text-ellipsis"
        >
          {value}
          {index < title.length - 1 && (
            <img src="/assets/icons/arrow-right.svg" alt="" />
          )}
        </p>
      ))}
    </div>
  );
}
