import {
  formatCurrency,
  formatDate,
  getPlatformIcon,
  getStatusColor,
} from "@/lib/helper";
import { getCampaignsById } from "@/services/campaigns";
import Link from "next/link";

const CampaignsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  console.log("Campaign ID from params:", id);
  const { campaign } = await getCampaignsById(id);
  if (!campaign) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-semibold text-slate-900">
          404 Campaign does not exist.
        </h2>
      </div>
    );
  }
  console.log("campaign details page:", campaign);
  return (
    <div className="min-h-screen  p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            {campaign.name}
          </h1>
          <p className="text-slate-600">Campaign ID: {campaign.id}</p>
          <p className="text-slate-600">Brand ID: {campaign.brand_id}</p>
        </div>

        <div className="">
          {/* Main Content */}
          <div className=" space-y-6">
            {/* Status Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-4">
                Status
              </h2>
              <div className="flex justify-between items-center gap-3">
                <div className="flex flex-col gap-2">
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-medium border ${getStatusColor(
                      campaign.status
                    )}`}
                  >
                    {campaign.status.charAt(0).toUpperCase() +
                      campaign.status.slice(1)}
                  </span>
                  <span className="text-sm text-slate-500">
                    Created {formatDate(campaign.created_at)}
                  </span>
                </div>
                <Link href={`/campaigns/${campaign.id}/insights`}>
                  <span className="text-sm text-blue-600 hover:text-blue-800">
                    View Insights
                  </span>
                </Link>
              </div>
            </div>

            {/* Budget Overview */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-6">
                Budget Overview
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5 border border-blue-200">
                  <div className="text-sm font-medium text-blue-900 mb-2">
                    Total Budget
                  </div>
                  <div className="text-3xl font-bold text-blue-900">
                    {formatCurrency(campaign.budget)}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-5 border border-purple-200">
                  <div className="text-sm font-medium text-purple-900 mb-2">
                    Daily Budget
                  </div>
                  <div className="text-3xl font-bold text-purple-900">
                    {formatCurrency(campaign.daily_budget)}
                  </div>
                </div>
              </div>
            </div>

            {/* Platforms */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-4">
                Platforms
              </h2>
              <div className="flex flex-wrap gap-3">
                {campaign.platforms.map((platform: string, index: number) => {
                  const PlatformIcon = getPlatformIcon(platform);
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 transition-colors px-4 py-3 rounded-xl border border-slate-200"
                    >
                      <span className="text-2xl">
                        <PlatformIcon className="size-4" />
                      </span>
                      <span className="font-medium text-slate-900 capitalize">
                        {platform}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignsPage;
