"use client";

import { useEffect, useState } from "react";
import {
  Eye,
  MousePointer,
  Target,
  DollarSign,
  BarChart3,
  Radio,
} from "lucide-react";
import { MetricCard } from "@/components/ui/stream/metricCard";
import { StreamStats } from "@/components/ui/stream/streamStats";
import { TimelineItem } from "@/components/ui/stream/timeline";
import { IInsightData } from "@/models/insights";
import { formatCurrency, formatNumber } from "@/lib/helper";
import { Button } from "@/components/ui/button";

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

export default function StreamsClient({
  campaignId,
  initialInsight,
}: {
  campaignId: string;
  initialInsight: IInsightData;
}) {
  const [insights, setInsights] = useState<IInsightData[]>([initialInsight]);
  const [hasReceivedStreamData, setHasReceivedStreamData] = useState(false);
  const [streamError, setStreamError] = useState(false);

  useEffect(() => {
    const source = new EventSource(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/campaigns/${campaignId}/insights/stream`
    );

    const timeoutId = setTimeout(() => {
      if (!hasReceivedStreamData) {
        setStreamError(true);
        source.close();
      }
    }, 10000);

    source.onmessage = (event) => {
      const data: IInsightData = JSON.parse(event.data);
      setHasReceivedStreamData(true);
      setInsights((prev) => [...prev.slice(-100), data]);
    };

    source.onerror = () => {
      if (!hasReceivedStreamData) {
        setStreamError(true);
      }
      source.close();
    };

    return () => {
      clearTimeout(timeoutId);
      source.close();
    };
  }, [campaignId, hasReceivedStreamData]);

  if (streamError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-lg font-semibold text-red-600">
            Failed to stream insights
          </p>
          <p className="text-sm text-slate-600">Please try again.</p>
          <Button
            variant="default"
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 rounded-xl bg-black text-white"
          >
            Retry
          </Button>
        </div>
      </div>
    );
  }

  const latest = insights[insights.length - 1];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-600 rounded-xl">
                <Radio className="text-white" />
              </div>
              <div>
                <h1 className="text-xs sm:text-sm md:text-xl lg:text-3xl font-bold">
                  Live Insight Stream
                </h1>
                <p className="text-xs text-slate-500">
                  Campaign ID: {latest?.campaign_id}
                </p>
              </div>
            </div>
            <span className="text-xs font-semibold text-green-700">
              {insights?.length} Updates
            </span>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            title="Impressions"
            value={formatNumber(latest?.impressions)}
            icon={Eye}
            colorScheme={COLOR_SCHEMES.blue}
          />
          <MetricCard
            title="Clicks"
            value={formatNumber(latest?.clicks)}
            icon={MousePointer}
            colorScheme={COLOR_SCHEMES.purple}
          />
          <MetricCard
            title="Conversions"
            value={formatNumber(latest?.conversions)}
            icon={Target}
            colorScheme={COLOR_SCHEMES.green}
          />
          <MetricCard
            title="Spend"
            value={formatCurrency(latest?.spend)}
            icon={DollarSign}
            colorScheme={COLOR_SCHEMES.orange}
          />
        </div>

        <StreamStats insights={insights} />

        {/* Timeline */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border">
          <div className="flex items-center gap-3 mb-6">
            <BarChart3 className="text-indigo-600" />
            <h2 className="text-2xl font-bold">Activity Timeline</h2>
          </div>

          {insights?.map((insight, i) => (
            <TimelineItem
              key={`${insight?.timestamp}-${i}`}
              insight={insight}
              index={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
