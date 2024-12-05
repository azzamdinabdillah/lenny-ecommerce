export function RatingStar({ amount }: { amount: number }) {
  return (
    <div className="flex gap-1 items-center">
      {Array.from({ length: amount }, (_, index) => (
        <img src="/assets/icons/star.svg" alt="" key={index} />
      ))}
    </div>
  );
}
