import { IInsightData } from "@/models/insights";
import { Activity } from "lucide-react";

export const StreamStats = ({ insights }: { insights: IInsightData[] }) => {
  const safeInsights = insights.filter(
    (i): i is IInsightData =>
      i !== undefined && i !== null && typeof i.impressions === "number"
  );

  if (safeInsights.length === 0) {
    return null;
  }

  const totalImpressions = safeInsights.reduce(
    (sum, i) => sum + i.impressions,
    0
  );
  const totalClicks = safeInsights.reduce((sum, i) => sum + i.clicks, 0);
  const totalConversions = safeInsights.reduce(
    (sum, i) => sum + i.conversions,
    0
  );
  const totalSpend = safeInsights.reduce((sum, i) => sum + i.spend, 0);
  const avgCTR =
    safeInsights.reduce((sum, i) => sum + i.ctr, 0) / safeInsights.length;
  const avgCPC =
    safeInsights.reduce((sum, i) => sum + i.cpc, 0) / safeInsights.length;

  return (
    <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl shadow-lg p-6 text-white">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        <Activity className="w-5 h-5" />
        Stream Summary
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <Stat label="Total Impressions" value={totalImpressions} />
        <Stat label="Total Clicks" value={totalClicks} />
        <Stat label="Total Conversions" value={totalConversions} />
        <Stat label="Total Spend" value={`$${totalSpend}`} />
        <Stat label="Avg CTR" value={`${avgCTR.toFixed(2)}%`} />
        <Stat label="Avg CPC" value={`$${avgCPC.toFixed(2)}`} />
      </div>
    </div>
  );
};

const Stat = ({ label, value }: { label: string; value: string | number }) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
    <p className="text-xs text-white/80 mb-1">{label}</p>
    <p className="text-lg font-bold">
      {typeof value === "number"
        ? new Intl.NumberFormat("en-US").format(value)
        : value}
    </p>
  </div>
);
