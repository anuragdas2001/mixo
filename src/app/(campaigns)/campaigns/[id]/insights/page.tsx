import React from "react";
import {
  TrendingUp,
  MousePointer,
  Eye,
  DollarSign,
  Target,
  BarChart3,
  type LucideIcon,
} from "lucide-react";
import { getInsights } from "@/services/campaignInsights";
import { formatCurrency, formatDate, formatNumber } from "@/lib/helper";
import {
  ICampaignInsightsProps,
  IMetric,
  IPerformanceMetric,
} from "@/models/insights";
import HeaderDetails from "@/components/ui/insights/headerDetails";
import MetricCard from "@/components/ui/insights/metricCard";
import PerformanceMetricCard from "@/components/ui/insights/performanceCard";

// Constants
const METRIC_CONFIGS: Omit<IMetric, "value">[] = [
  {
    title: "Impressions",
    icon: Eye,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    title: "Clicks",
    icon: MousePointer,
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    title: "Conversions",
    icon: Target,
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    title: "Total Spend",
    icon: DollarSign,
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
  },
];

const PERFORMANCE_METRIC_CONFIGS: Omit<IPerformanceMetric, "value">[] = [
  {
    label: "Click-Through Rate",
    description: "Percentage of impressions that resulted in clicks",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    label: "Cost Per Click",
    description: "Average cost for each click received",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    label: "Conversion Rate",
    description: "Percentage of clicks that converted",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
];

// Main Component
const CampaignInsights = async ({ params }: ICampaignInsightsProps) => {
  const { id } = await params;
  const { insights } = await getInsights(id);

  // Build metrics with actual data
  const metrics: IMetric[] = [
    { ...METRIC_CONFIGS[0], value: formatNumber(insights.impressions) },
    { ...METRIC_CONFIGS[1], value: formatNumber(insights.clicks) },
    { ...METRIC_CONFIGS[2], value: formatNumber(insights.conversions) },
    { ...METRIC_CONFIGS[3], value: formatCurrency(insights.spend) },
  ];

  // Build performance metrics with actual data
  const performanceMetrics: IPerformanceMetric[] = [
    { ...PERFORMANCE_METRIC_CONFIGS[0], value: `${insights.ctr}%` },
    { ...PERFORMANCE_METRIC_CONFIGS[1], value: formatCurrency(insights.cpc) },
    { ...PERFORMANCE_METRIC_CONFIGS[2], value: `${insights.conversion_rate}%` },
  ];

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <HeaderDetails
          campaignId={insights.campaign_id}
          timestamp={formatDate(insights.timestamp)}
        />

        {/* Main Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <MetricCard key={`metric-${index}`} metric={metric} />
          ))}
        </div>

        {/* Performance Metrics Section */}
        <section className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-6 h-6 text-indigo-600" />
            <h2 className="text-2xl font-bold text-slate-800">
              Performance Metrics
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {performanceMetrics.map((metric, index) => (
              <PerformanceMetricCard
                key={`performance-${index}`}
                metric={metric}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CampaignInsights;
