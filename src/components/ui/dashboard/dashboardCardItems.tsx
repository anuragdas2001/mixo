import React from "react";
import DashboardCard from "./dashboardCard";
import { ICampaignInsights, IInsights } from "@/models/insights";
import { 
  BarChart3, 
  TrendingUp, 
  Eye, 
  MousePointerClick 
} from "lucide-react";

const DashboardCardItems = ({
  campaignsInsights,
}: {
  campaignsInsights: ICampaignInsights;
}) => {
  const { insights } = campaignsInsights;

  // Check if insights exist
  if (!insights) {
    return (
      <div className="mx-4 my-8">
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-8 text-center">
          <p className="text-gray-500">No insights data available</p>
        </div>
      </div>
    );
  }

  // Helper function to safely format numbers
  const formatValue = (value: number | undefined | null): string => {
    if (value === undefined || value === null) return "N/A";
    return value.toLocaleString();
  };

  // Helper function to safely format CTR
  const formatCTR = (value: number | undefined | null): string => {
    if (value === undefined || value === null) return "N/A";
    return `${value.toFixed(2)}%`;
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="mx-4">
        <h1 className="text-2xl font-bold text-gray-900">Insights Overview</h1>
        <p className="mt-1 text-sm text-gray-500">
          Track your campaign performance at a glance
        </p>
      </div>

      {/* Cards Grid */}
      <div className="mx-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Total Campaigns"
          value={formatValue(insights?.total_campaigns)}
          description="All campaigns created"
          icon={<BarChart3 className="h-5 w-5" />}
          iconColor="text-blue-600"
          iconBgColor="bg-blue-100"
        />

        <DashboardCard
          title="Active Campaigns"
          value={formatValue(insights?.active_campaigns)}
          description="Currently running"
          icon={<TrendingUp className="h-5 w-5" />}
          iconColor="text-green-600"
          iconBgColor="bg-green-100"
        />

        <DashboardCard
          title="Total Impressions"
          value={formatValue(insights?.total_impressions)}
          description="Across all campaigns"
          icon={<Eye className="h-5 w-5" />}
          iconColor="text-purple-600"
          iconBgColor="bg-purple-100"
        />

        <DashboardCard
          title="Avg CTR"
          value={formatCTR(insights?.avg_ctr)}
          footer="Click-through rate"
          icon={<MousePointerClick className="h-5 w-5" />}
          iconColor="text-orange-600"
          iconBgColor="bg-orange-100"
        />
      </div>
    </div>
  );
};

export default DashboardCardItems;