import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { PiDotsThreeLight } from "react-icons/pi";
import Divider from "@/ui/Divider";

const chartData = [
  { day: "Sat", cost: 186 },
  { day: "Sun", cost: 305 },
  { day: "Monday", cost: 237 },
  { day: "Tue", cost: 73 },
  { day: "Wen", cost: 209 },
  { day: "Thr", cost: 214 },
  { day: "Fri", cost: 40 },
];

const chartConfig = {
  cost: {
    label: "cost: ",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export default function SingleBarChart() {
  return (
    <Card className="w-fit h-fit">
      <CardHeader>
        <CardTitle>
          <div className="grid gap-6">
            <div className="flex justify-between">
              <p className="text-my-text">Carrying Chart</p>
              <PiDotsThreeLight className="size-6 rotate-90 cursor-pointer" />
            </div>
            <Divider direction="horazintal" />
            <div className="grid gap-4">
              <p className="text-[26px] font-semibold text-my-text">
                $2,900.89
              </p>
              <div className="flex gap-3">
                <div className="flex gap-2 w-fit h-fit bg-my-primary/30 rounded-full px-2 p-1">
                  <img
                    src="/smallChartstatNegPurpleArrow.svg"
                    alt="purple arrow stat"
                    className="size-[13px]"
                  />
                  <p className="text-xs text-my-primary">15%</p>
                </div>
                <p className="text-gray-400 text-sm font-light">
                  From Last Week
                </p>
              </div>
            </div>
          </div>
        </CardTitle>
        {/* <CardDescription>Week 45</CardDescription> */}
      </CardHeader>
      <CardContent>
        <ChartContainer className="h-[126px]" config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="cost" fill="var(--color-my-primary)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter> */}
    </Card>
  );
}
