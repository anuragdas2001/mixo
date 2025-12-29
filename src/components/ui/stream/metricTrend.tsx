import { IMetricTrendProps } from "@/models/stream";
import { TrendingUp, TrendingDown } from "lucide-react";

const MetricTrend = ({ current, previous, suffix = "", prefix = "" }: IMetricTrendProps) => {
  if (!previous) return null;
  
  const change = ((current - previous) / previous) * 100;
  const isPositive = change > 0;
  const Icon = isPositive ? TrendingUp : TrendingDown;
  
  return (
    <div className={`flex items-center gap-1 text-xs font-medium ${
      isPositive ? "text-green-600" : "text-red-600"
    }`}>
      <Icon className="w-3 h-3" />
      <span>{Math.abs(change).toFixed(1)}%</span>
    </div>
  );
};

export default MetricTrend;
