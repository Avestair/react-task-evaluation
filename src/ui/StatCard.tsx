import Card from "./Card";
import SmallPercentCard from "./SmallPercentCard";

interface statCardProps {
  title: string;
  amount: number;
  period: string;
  percentageAmount: number;
  type: "pos" | "neg";
}

export default function StatCard({
  title,
  amount,
  period,
  percentageAmount,
  type,
}: statCardProps) {
  return (
    <Card className="!w-full">
      <div className="flex w-full gap-[40px] py-3 px-2 justify-items-center justify-center">
        <div className="grid gap-2 h-fit text-my-text">
          <p>{title}</p>
          <p className="font-semibold text-2xl">${amount.toLocaleString()}</p>
          <p className="text-gray-400 text-sm">{period}</p>
        </div>

        {type === "pos" ? (
          <div className="grid justify-self-end">
            <img
              src="/chartStatPosArrow.svg"
              className="w-[56px] h-[49px]"
              alt=""
            />
            <SmallPercentCard amount={percentageAmount} type="pos" />
          </div>
        ) : (
          <div className="grid justify-self-end">
            <img
              src="/chartStatNegArrow.svg"
              className="w-[56px] h-[49px]"
              alt="chart image"
            />
            <SmallPercentCard amount={percentageAmount} type="neg" />
          </div>
        )}
      </div>
    </Card>
  );
}
