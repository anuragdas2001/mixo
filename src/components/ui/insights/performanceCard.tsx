import { IPerformanceMetric } from "@/models/insights";

const PerformanceMetricCard = ({ metric }: { metric: IPerformanceMetric }) => (
  <div className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
    <div className={`inline-block px-3 py-1 ${metric.bgColor} rounded-lg mb-3`}>
      <span className={`text-2xl font-bold ${metric.color}`}>
        {metric.value}
      </span>
    </div>
    <h3 className="text-sm font-semibold text-slate-700 mb-1">
      {metric.label}
    </h3>
    <p className="text-xs text-slate-500">{metric.description}</p>
  </div>
);

export default PerformanceMetricCard;
