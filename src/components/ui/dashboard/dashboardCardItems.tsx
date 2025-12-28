import React from "react";
import DashboardCard from "./dashboardCard";
import { ICampaignInsights, IInsights } from "@/models/insights";

const DashboardCardItems = ({
  campaignsInsights,
}: {
  campaignsInsights: ICampaignInsights;
}) => {
  const { insights } = campaignsInsights;
  //   console.log("Insights in DashboardCardItems:", insights);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <DashboardCard
        title="Total Campaigns"
        value={insights.total_campaigns}
        description="All campaigns created"
      />

      <DashboardCard
        title="Active Campaigns"
        value={insights.active_campaigns}
      />

      <DashboardCard
        title="Total Impressions"
        value={insights.total_impressions}
      />

      <DashboardCard
        title="Avg CTR"
        value={`${insights.avg_ctr}%`}
        footer="Click-through rate"
      />
    </div>
  );
};

export default DashboardCardItems;
