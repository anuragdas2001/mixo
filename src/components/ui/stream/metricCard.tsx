import { IMetricCardProps } from "@/models/stream";
import MetricTrend from "./metricTrend";

export const MetricCard = ({ title, value, trend, icon: Icon, colorScheme }: IMetricCardProps) => (
  <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 hover:shadow-md transition-shadow">
    <div className="flex items-start justify-between mb-3">
      <div className={`p-2 ${colorScheme.bg} rounded-lg`}>
        <Icon className={`w-5 h-5 ${colorScheme.icon}`} />
      </div>
      {trend !== undefined && (
        <MetricTrend current={trend} previous={trend * 0.95} />
      )}
    </div>
    <h3 className="text-sm font-medium text-slate-600 mb-1">{title}</h3>
    <p className="text-2xl font-bold text-slate-800">{value}</p>
  </div>
);