import { getCampaignsInsights } from "@/services/campaignInsights";
import DashboardCardItems from "@/components/ui/dashboard/dashboardCardItems";
const Dashboard = async () => {
  const campaignsInsights = await getCampaignsInsights();
  console.log(campaignsInsights);
  return (
    <>
      <h1>Dashboard</h1>
      <DashboardCardItems campaignsInsights={campaignsInsights} />
    </>
  );
};

export default Dashboard;
