import { IInsightData } from "./insights";

export interface IMetricCardProps {
  title: string;
  value: string;
  trend?: number;
  icon: React.ComponentType<{ className?: string }>;
  colorScheme: IColorScheme;
}

export interface IColorScheme {
  bg: string;
  icon: string;
  trend: string;
}

export interface ITimelineItemProps {
  insight: IInsightData;
  index: number;
}

export interface IMetricTrendProps {
  current: number;
  previous?: number;
  suffix?: string;
  prefix?: string;
}
