"use client";

import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  // CardDescription,
  // CardHeader,
  // CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A simple pie chart";

const chartData = [
  { attribute: "team", percentage: 10, fill: "var(--vibezly-border)" },
  { attribute: "marketing", percentage: 15, fill: "var(--vibezly-cyan)" },
  { attribute: "ecosystem", percentage: 10, fill: "var(--vibezly-green)" },
  { attribute: "openmarket", percentage: 65, fill: "var(--vibezly-purple)" },
];

const chartConfig = {
  percentage: {
    label: "Percentage",
  },
  team: {
    label: "Team",
    color: "var(--chart-1)",
  },
  marketing: {
    label: "Marketing",
    color: "var(--chart-2)",
  },
  ecosystem: {
    label: "Ecosystem",
    color: "var(--chart-3)",
  },
  openmarket: {
    label: "Open Market",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig;

export default function TokenomicsChart() {
  return (
    <Card className="flex flex-col border-0 bg-transparent p-0">
      <CardContent className="flex-1 p-0 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[350px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  hideLabel
                  className="border-0"
                  labelClassName="text-white"
                />
              }
            />
            <Pie data={chartData} dataKey="percentage" nameKey="attribute" />
            <ChartLegend
              content={<ChartLegendContent nameKey="attribute" />}
              className="font-orbitron -translate-y-2 flex-wrap gap-2 gap-x-3 text-white *:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
