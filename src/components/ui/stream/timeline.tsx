import { formatCurrency, formatNumber, formatTime } from "@/lib/helper";
import { ITimelineItemProps } from "@/models/stream";
import { Clock, Activity } from "lucide-react";

export const TimelineItem = ({ insight, index }: ITimelineItemProps) => {
  return (
    <div className="relative pl-8 pb-8 last:pb-0">
      {/* Timeline line */}
      <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-500 last:bg-none" />

      {/* Timeline dot */}
      <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 border-4 border-white shadow-lg" />

      {/* Content */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-slate-500" />
            <span className="text-sm font-medium text-slate-700">
              {formatTime(insight.timestamp)}
            </span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-green-50 rounded-full">
            <Activity className="w-3.5 h-3.5 text-green-600" />
            <span className="text-xs font-semibold text-green-700">Live</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <p className="text-xs text-slate-500 mb-1">Impressions</p>
            <p className="text-lg font-bold text-slate-800">
              {formatNumber(insight.impressions)}
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-500 mb-1">Clicks</p>
            <p className="text-lg font-bold text-slate-800">
              {formatNumber(insight.clicks)}
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-500 mb-1">Conversions</p>
            <p className="text-lg font-bold text-slate-800">
              {formatNumber(insight.conversions)}
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-500 mb-1">Spend</p>
            <p className="text-lg font-bold text-slate-800">
              {formatCurrency(insight.spend)}
            </p>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-xs text-slate-500 mb-1">CTR</p>
            <p className="text-sm font-semibold text-blue-600">
              {insight.ctr}%
            </p>
          </div>
          <div className="text-center">
            <p className="text-xs text-slate-500 mb-1">CPC</p>
            <p className="text-sm font-semibold text-purple-600">
              {formatCurrency(insight.cpc)}
            </p>
          </div>
          <div className="text-center">
            <p className="text-xs text-slate-500 mb-1">Conv. Rate</p>
            <p className="text-sm font-semibold text-green-600">
              {insight.conversion_rate}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
