import React from "react";

const CircularProgress = ({ value, max = 5 }) => {
  const radius = 45; // Radius lingkaran
  const circumference = 2 * Math.PI * radius; // Keliling lingkaran
  const progress = (value / max) * circumference; // Panjang arc progress

  return (
    <div className="relative w-32 h-[118px] flex items-center justify-center">
      {/* SVG Lingkaran */}
      <svg
        className="w-[100px] h-[100px]"
        width="100"
        height="100"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32C0 14.3269 14.3269 0 32 0C49.6731 0 64 14.3269 64 32ZM4.48 32C4.48 47.1989 16.8011 59.52 32 59.52C47.1989 59.52 59.52 47.1989 59.52 32C59.52 16.8011 47.1989 4.48 32 4.48C16.8011 4.48 4.48 16.8011 4.48 32Z"
          fill="#E4E9EE"
        />
      </svg>
      <svg
        className="w-full h-full -rotate-90 absolute -top-[5px] -left-[1px] bottom-0 right-0"
        width="200"
        height="10"
      >
        {/* Background Lingkaran */}
        {/* <circle
          cx="600"
          cy="600"
          r={radius}
          fill="none"
          stroke="#e5e7eb" // Warna Tailwind untuk bg-gray-200
          strokeWidth="10"
        /> */}

        {/* <svg
        className="w-[100px] h-[100px]"
          width="100"
          height="100"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32C0 14.3269 14.3269 0 32 0C49.6731 0 64 14.3269 64 32ZM4.48 32C4.48 47.1989 16.8011 59.52 32 59.52C47.1989 59.52 59.52 47.1989 59.52 32C59.52 16.8011 47.1989 4.48 32 4.48C16.8011 4.48 4.48 16.8011 4.48 32Z"
            fill="#E4E9EE"
          />
        </svg> */}

        {/* Progress Lingkaran */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#f59e0b" // Warna Tailwind untuk amber-500
          strokeWidth="7"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
        />
      </svg>

      {/* Nilai di Tengah */}
      <span className="absolute text-2xl font-bold text-black">
        {value.toFixed(1)}
      </span>
    </div>
  );
};

export default CircularProgress;
