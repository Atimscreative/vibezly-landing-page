"use client";

import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
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
  { attribute: "development", percentage: 2, fill: "var(--vibezly-border)" },
  { attribute: "marketing", percentage: 3, fill: "var(--vibezly-cyan)" },
  { attribute: "reserved", percentage: 30, fill: "var(--vibezly-green)" },
  { attribute: "liquidity", percentage: 75, fill: "var(--vibezly-purple)" },
];

const chartConfig = {
  percentage: {
    label: "Percentage",
  },
  development: {
    label: "Development",
    color: "var(--chart-1)",
  },
  marketing: {
    label: "Marketing",
    color: "var(--chart-2)",
  },
  reserved: {
    label: "Reserved",
    color: "var(--chart-3)",
  },
  liquidity: {
    label: "Liquidity",
    color: "var(--chart-4)",
  },
  // other: {
  //   label: "Other",
  //   color: "var(--chart-5)",
  // },
} satisfies ChartConfig;

export default function TokenomicsChart() {
  return (
    <Card className="flex flex-col border-0 bg-transparent p-0">
      <CardHeader className="items-center pb-0">
        <CardTitle className="font-orbitron text-white">Total Supply</CardTitle>
        <CardDescription className="font-orbitron text-vibezly-purple text-3xl font-bold">
          100,000 VBZ
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 p-0 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[450px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie data={chartData} dataKey="percentage" nameKey="attribute" />
            <ChartLegend
              content={<ChartLegendContent nameKey="attribute" />}
              className="font-orbitron -translate-y-2 flex-wrap gap-2 text-white *:basis-1/4 *:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
