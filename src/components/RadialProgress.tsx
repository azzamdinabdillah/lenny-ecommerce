const RadialProgress = ({
  rating,
  maxRating = 5,
  size = 100,
  strokeWidth = 4,
  color = "blue",
}) => {
  const progress = (rating / maxRating) * 100; // Konversi rating menjadi persentase
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {/* Background Circle */}
      <svg className="absolute" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#e5e7eb" // Tailwind gray-200
          strokeWidth={strokeWidth}
        />
      </svg>

      {/* Progress Circle */}
      <svg className="absolute" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{
            transition: "stroke-dashoffset 0.3s ease",
          }}
        />
      </svg>

      {/* Rating Text */}
      <span className="h2 text-black-01 lg:eh-6">{rating.toFixed(1)}</span>
    </div>
  );
};

export default RadialProgress;
