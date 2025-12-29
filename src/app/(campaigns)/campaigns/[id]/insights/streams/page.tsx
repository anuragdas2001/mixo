import { MetricCard } from "@/components/ui/stream/metricCard";
import { StreamStats } from "@/components/ui/stream/streamStats";
import { TimelineItem } from "@/components/ui/stream/timeline";
import { getInsightsStream } from "@/services/campaignInsights";
import {
  Eye,
  MousePointer,
  Target,
  DollarSign,
  BarChart3,
  Radio,
} from "lucide-react";

const COLOR_SCHEMES = {
  blue: { bg: "bg-blue-50", icon: "text-blue-600", trend: "text-blue-600" },
  purple: {
    bg: "bg-purple-50",
    icon: "text-purple-600",
    trend: "text-purple-600",
  },
  green: { bg: "bg-green-50", icon: "text-green-600", trend: "text-green-600" },
  orange: {
    bg: "bg-orange-50",
    icon: "text-orange-600",
    trend: "text-orange-600",
  },
};

const InsightStream = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const insightStream = await getInsightsStream(id);

  // Get latest insight for current metrics
  const latestInsight = insightStream[insightStream.length - 1];

  const formatNumber = (num: number) =>
    new Intl.NumberFormat("en-US").format(num);

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(amount);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl">
                <Radio className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-slate-800">
                  Live Insight Stream
                </h1>
                <p className="text-slate-600 text-sm mt-1">
                  Campaign ID: {latestInsight.campaign_id}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-green-700">
                {insightStream.length} Updates
              </span>
            </div>
          </div>
        </div>

        {/* Current Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            title="Impressions"
            value={formatNumber(latestInsight.impressions)}
            trend={latestInsight.impressions}
            icon={Eye}
            colorScheme={COLOR_SCHEMES.blue}
          />
          <MetricCard
            title="Clicks"
            value={formatNumber(latestInsight.clicks)}
            trend={latestInsight.clicks}
            icon={MousePointer}
            colorScheme={COLOR_SCHEMES.purple}
          />
          <MetricCard
            title="Conversions"
            value={formatNumber(latestInsight.conversions)}
            trend={latestInsight.conversions}
            icon={Target}
            colorScheme={COLOR_SCHEMES.green}
          />
          <MetricCard
            title="Spend"
            value={formatCurrency(latestInsight.spend)}
            trend={latestInsight.spend}
            icon={DollarSign}
            colorScheme={COLOR_SCHEMES.orange}
          />
        </div>

        {/* Stream Summary */}
        <StreamStats insights={insightStream} />

        {/* Timeline */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <BarChart3 className="w-6 h-6 text-indigo-600" />
            <h2 className="text-2xl font-bold text-slate-800">
              Activity Timeline
            </h2>
          </div>

          <div className="mt-6">
            {insightStream.map((insight, index) => (
              <TimelineItem
                key={`${insight.timestamp}-${index}`}
                insight={insight}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightStream;
