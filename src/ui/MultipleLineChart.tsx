import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", mah: 186, Week: 80 },
  { month: "February", mah: 305, Week: 200 },
  { month: "March", mah: 237, Week: 120 },
  { month: "April", mah: 73, Week: 190 },
  { month: "May", mah: 209, Week: 130 },
  { month: "June", mah: 214, Week: 140 },
];

const chartConfig = {
  mah: {
    label: "Month",
    color: "var(--chart-1)",
  },
  Week: {
    label: "Week",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export default function MutipleLineChart() {
  return (
    <Card className="w-full h-fit">
      <CardHeader>
        <CardTitle className="mb-4">
          <div className="flex justify-between  text-my-text">
            <p>Year Order Rate</p>
            <div className="flex gap-8">
              <div className="flex gap-2">
                <span className="rounded-full size-2 mt-2 bg-chart-2"></span>
                <p className="text-sm font-light">Week</p>
              </div>

              <div className="flex gap-2">
                <span className="rounded-full size-2 mt-2 bg-chart-1"></span>
                <p className="text-sm font-light">Month</p>
              </div>
            </div>

            <select className="rounded-sm border relative bottom-1.5 border-gray-300 bg-white text-sm p-2 px-6">
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
            </select>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer className="h-[214px] w-full" config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="mah"
              type="monotone"
              stroke="var(--color-chart-1)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="Week"
              type="monotone"
              stroke="var(--color-chart-2)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
