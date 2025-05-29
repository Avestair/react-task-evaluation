interface smallPercentCardProps {
  amount: number;
  type: "neg" | "pos";
  className?: string;
}

export default function SmallPercentCard({
  amount,
  type,
  className,
}: smallPercentCardProps) {
  if (type === "pos") {
    return (
      <div
        className={`flex gap-2 w-fit h-fit bg-green-600/30 rounded-full px-2 p-1 ${className}`}
      >
        <img
          src="/chartStatSmallPosArrow.svg"
          className="size-[13px]"
          alt="small chart icon"
        />
        <p className="text-xs text-green-600">{amount}%</p>
      </div>
    );
  } else {
    return (
      <div
        className={`flex gap-2 w-fit h-fit bg-red-600/30 rounded-full px-2 p-1 ${className}`}
      >
        <img
          src="/chartStatSmallNegArrow.svg"
          className="size-[13px]"
          alt="small chart Icon"
        />
        <p className="text-xs text-red-600">{amount}%</p>
      </div>
    );
  }
}
