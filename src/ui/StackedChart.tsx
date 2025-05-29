import { Bar, BarChart, XAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { PiDotsThreeLight } from "react-icons/pi";
import Divider from "./Divider";
const chartData = [
  { month: "January", east: 186, west: 40, north: 50, south: 300 },
  { month: "February", east: 186, west: 80, north: 100, south: 80 },
  { month: "March", east: 300, west: 30, north: 500, south: 60 },
  { month: "April", east: 200, west: 400, north: 300, south: 100 },
  { month: "May", east: 100, west: 100, north: 70, south: 400 },
  { month: "June", east: 205, west: 300, north: 200, south: 140 },
];

const chartConfig = {
  east: {
    label: "East",
    color: "var(--chart-1)",
  },
  west: {
    label: "West",
    color: "var(--chart-2)",
  },
  north: {
    label: "North",
    color: "var(--chart-3)",
  },
  south: {
    label: "South",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig;

export default function StackedBarChart() {
  return (
    <Card className="w-full py-0 pt-6 !grid">
      <CardHeader>
        <CardTitle>
          <div className="grid">
            <div className="flex justify-between">
              <p className="text-my-text">Sales By Store Location</p>
              <PiDotsThreeLight className="size-6 rotate-90 cursor-pointer" />
            </div>
            <Divider direction="horazintal" className="mt-4 mb-4" />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3">
          <ChartContainer config={chartConfig}>
            <BarChart accessibilityLayer data={chartData}>
              {/* <CartesianGrid vertical={false} /> */}
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip content={<ChartTooltipContent hideLabel />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar
                barSize={35}
                dataKey="east"
                stackId="a"
                fill="var(--color-east)"
                radius={[0, 0, 4, 4]}
              />
              <Bar
                dataKey="west"
                stackId="a"
                fill="var(--color-west)"
                radius={[0, 0, 0, 0]}
              />
              <Bar
                dataKey="north"
                stackId="a"
                fill="var(--color-south)"
                radius={[0, 0, 0, 0]}
              />
              <Bar
                dataKey="south"
                stackId="a"
                fill="var(--color-north)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ChartContainer>
          <Divider direction="horazintal" />
          <p className="capitalize text-my-text text-center text-sm">
            data from the year of 2023
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
