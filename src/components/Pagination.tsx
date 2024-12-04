export default function Pagination({ number }: { number: string[] }) {
  return (
    <div className="pagination flex gap-2 items-center justify-center">
      <svg
        className="rotate-180"
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.9502 14.08L25.4702 20.6C26.2402 21.37 26.2402 22.63 25.4702 23.4L18.9502 29.92"
          stroke="#1D9E34"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      {number.map((value, index) => (
        <div
          key={index}
          className="border-grey w-[41px] h-[41px] flex justify-center items-center par-3 hover:text-dark-green-03 text-grey-01 font-medium cursor-pointer md:par-2 md:font-medium md:w-[44px] md:h-[44px]"
        >
          {value}
        </div>
      ))}

      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.9502 14.08L25.4702 20.6C26.2402 21.37 26.2402 22.63 25.4702 23.4L18.9502 29.92"
          stroke="#1D9E34"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}
