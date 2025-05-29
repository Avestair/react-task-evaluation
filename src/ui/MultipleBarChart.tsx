import { Bar, BarChart, XAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { PiDotsThreeLight } from "react-icons/pi";
import Divider from "./Divider";
import SmallPercentCard from "./SmallPercentCard";
const chartData = [
  { month: "January", delivered: 186, inProggress: 80 },
  { month: "February", delivered: 305, inProggress: 200 },
  { month: "March", delivered: 237, inProggress: 120 },
  { month: "April", delivered: 73, inProggress: 190 },
  { month: "May", delivered: 209, inProggress: 130 },
  { month: "June", delivered: 214, inProggress: 140 },
];

const chartConfig = {
  delivered: {
    label: "Delivered",
    color: "var(--chart-1)",
  },
  inProggress: {
    label: "In Proggress",
    color: "var(--chart-1-opacity)",
  },
} satisfies ChartConfig;

export default function MultipleBarChart() {
  return (
    <Card className="w-full py-0 pb-3 pt-6 !grid">
      <CardHeader>
        <CardTitle>
          <div className="grid">
            <div className="flex justify-between">
              <p className="text-my-text capitalize">delivery status</p>
              <PiDotsThreeLight className="size-6 rotate-90 cursor-pointer" />
            </div>
            <Divider direction="horazintal" className="mt-4 mb-4" />

            <div className="flex w-full justify-between mt-1">
              <div className="grid gap-2">
                <div className="flex gap-2">
                  <span className="rounded-full size-5 bg-my-primary"></span>
                  <p className="capitalize text-my-text font-light text-sm">
                    Delivered
                  </p>
                </div>

                <div className="flex gap-4">
                  <p className="text-[38px] text-my-text mt-[1px]">2,948</p>
                  <div className="grid gap-1">
                    <SmallPercentCard
                      type="pos"
                      className="w-[55px] h-[21px]"
                      amount={25}
                    />
                    <p className="capitalize text-my-text text-xs font-light">
                      from last week
                    </p>
                  </div>
                </div>
              </div>

              <Divider direction="vertical" />

              <div className="grid gap-2">
                <div className="flex gap-2">
                  <span className="rounded-full size-5 bg-my-primary/20"></span>
                  <p className="capitalize text-my-text font-light text-sm">
                    On Proggress
                  </p>
                </div>

                <div className="flex gap-4">
                  <p className="text-[38px] text-my-text mt-[1px]">673</p>
                  <div className="grid gap-1">
                    <SmallPercentCard
                      type="pos"
                      className="w-[55px] h-[21px]"
                      amount={25}
                    />
                    <p className="capitalize text-my-text text-xs font-light">
                      from last week
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardTitle>
        {/* <CardDescription>January - June 2024</CardDescription> */}
      </CardHeader>
      <CardContent>
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
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="delivered" fill="var(--color-delivered)" radius={4} />
            <Bar
              dataKey="inProggress"
              fill="var(--color-inProggress)"
              radius={4}
            />
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
