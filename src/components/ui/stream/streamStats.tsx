import { IInsightData } from "@/models/insights";
import { Activity } from "lucide-react";

export const StreamStats = ({ insights }: { insights: IInsightData[] }) => {
  const totalImpressions = insights.reduce((sum, i) => sum + i.impressions, 0);
  const totalClicks = insights.reduce((sum, i) => sum + i.clicks, 0);
  const totalConversions = insights.reduce((sum, i) => sum + i.conversions, 0);
  const totalSpend = insights.reduce((sum, i) => sum + i.spend, 0);
  const avgCTR = insights.reduce((sum, i) => sum + i.ctr, 0) / insights.length;
  const avgCPC = insights.reduce((sum, i) => sum + i.cpc, 0) / insights.length;

  return (
    <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl shadow-lg p-6 text-white">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        <Activity className="w-5 h-5" />
        Stream Summary
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
          <p className="text-xs text-white/80 mb-1">Total Impressions</p>
          <p className="text-lg font-bold">
            {new Intl.NumberFormat("en-US").format(totalImpressions)}
          </p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
          <p className="text-xs text-white/80 mb-1">Total Clicks</p>
          <p className="text-lg font-bold">
            {new Intl.NumberFormat("en-US").format(totalClicks)}
          </p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
          <p className="text-xs text-white/80 mb-1">Total Conversions</p>
          <p className="text-lg font-bold">
            {new Intl.NumberFormat("en-US").format(totalConversions)}
          </p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
          <p className="text-xs text-white/80 mb-1">Total Spend</p>
          <p className="text-lg font-bold">
            ${new Intl.NumberFormat("en-US").format(totalSpend)}
          </p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
          <p className="text-xs text-white/80 mb-1">Avg CTR</p>
          <p className="text-lg font-bold">{avgCTR.toFixed(2)}%</p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
          <p className="text-xs text-white/80 mb-1">Avg CPC</p>
          <p className="text-lg font-bold">${avgCPC.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};
