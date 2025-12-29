import { IMetric } from "@/models/insights";

// Component: Metric Card
const MetricCard = ({ metric }: { metric: IMetric }) => {
  const Icon = metric.icon;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1">
      <div className={`p-3 ${metric.bgColor} rounded-xl mb-4 w-fit`}>
        <Icon className={`w-6 h-6 ${metric.iconColor}`} />
      </div>
      <h3 className="text-sm font-medium text-slate-600 mb-1">
        {metric.title}
      </h3>
      <p className="text-3xl font-bold text-slate-800">{metric.value}</p>
    </div>
  );
};
export default MetricCard;
