import StatCard from "./StatCard";

export default function MonthlyStats() {
  return (
    <div className="flex gap-[26px] w-full">
      <StatCard
        title="💰 Revenue"
        amount={12234}
        period="From Last month"
        percentageAmount={25}
        type="pos"
      />

      <StatCard
        title="💸 Costs"
        amount={2495}
        period="From Last month"
        percentageAmount={5}
        type="neg"
      />

      <StatCard
        title="💵 Profit"
        amount={9274}
        period="From Last month"
        percentageAmount={15}
        type="pos"
      />

      <StatCard
        title="🚚 Shipment"
        amount={8472}
        period="From Last month"
        percentageAmount={15}
        type="neg"
      />
    </div>
  );
}
