export default function ProgressBar({ rating }: { rating: number }) {
  const progress = (rating / 5) * 100;
  return (
    <div className="h-2 w-full bg-d-grey-01 rounded-full">
      <div
        style={{ width: progress + '%' }}
        className={`h-full bg-dark-green-03 rounded-full`}
      ></div>
    </div>
  );
}
