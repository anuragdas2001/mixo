import { getCampaignsInsights } from "@/services/campaignInsights";
import DashboardCardItems from "@/components/ui/dashboard/dashboardCardItems";
import CampaignsList from "@/components/ui/campaigns/campaignsCardItems";
import { getCampaigns } from "@/services/campaigns";
const Dashboard = async () => {
  const campaignsInsights = await getCampaignsInsights();
  const campaignsList = await getCampaigns();

  //   console.log("Campaigns List in Dashboard:", campaignsList);
  //   console.log(campaignsInsights);
  return (
    <>
      <div className="m-4">
        <DashboardCardItems campaignsInsights={campaignsInsights} />
        <CampaignsList campaignsList={campaignsList} />
      </div>
    </>
  );
};

export default Dashboard;
