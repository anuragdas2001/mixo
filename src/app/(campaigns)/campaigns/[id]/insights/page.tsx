import { getInsights } from "@/services/campaigns";

const CampaignInsights = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const { campaignInsights: insights } = await getInsights(id);
  console.log("Campaign Insights Page Data:", campaignInsights);
  return <div>CampaignInsights</div>;
};

export default CampaignInsights;
