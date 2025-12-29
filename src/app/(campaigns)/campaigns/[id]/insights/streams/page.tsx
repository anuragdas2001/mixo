import { MetricCard } from "@/components/ui/stream/metricCard";
import StreamsClient from "@/components/ui/stream/streamClient";
import { StreamStats } from "@/components/ui/stream/streamStats";
import { TimelineItem } from "@/components/ui/stream/timeline";
import { getInsightsStream } from "@/services/campaignInsights";

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

  return <StreamsClient campaignId={id} initialInsight={latestInsight} />;
};

export default InsightStream;
