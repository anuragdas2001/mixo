import { formatCurrency } from "@/lib/helper";
import { ICampaignBudgetProps } from "@/models/campaigns";



const CampaignBudget = ({ budget, dailyBudget }: ICampaignBudgetProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border p-6">
      <h2 className="text-lg font-semibold mb-6">Budget Overview</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5 border">
          <div className="text-sm font-medium mb-2">Total Budget</div>
          <div className="text-3xl font-bold">
            {formatCurrency(budget)}
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-5 border">
          <div className="text-sm font-medium mb-2">Daily Budget</div>
          <div className="text-3xl font-bold">
            {formatCurrency(dailyBudget)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignBudget;
