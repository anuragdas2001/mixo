"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  formatCurrency,
  formatDate,
  getPlatformIcon,
  getStatusColor,
} from "@/lib/helper";
import { getCampaignsById } from "@/services/campaigns";

const CampaignsPage = () => {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const [campaign, setCampaign] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!id) return;

    const fetchCampaign = async () => {
      try {
        const { campaign } = await getCampaignsById(id);
        if (!campaign) {
          setNotFound(true);
        } else {
          setCampaign(campaign);
        }
      } catch (error) {
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCampaign();
  }, [id]);

  // 🔄 Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-600 text-lg">Loading campaign…</p>
      </div>
    );
  }

  // ❌ Not found state
  if (notFound) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-semibold text-slate-900">
          404 Campaign does not exist.
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            {campaign.name}
          </h1>
          <p className="text-slate-600">Campaign ID: {campaign.id}</p>
          <p className="text-slate-600">Brand ID: {campaign.brand_id}</p>
        </div>

        <div className="space-y-6">
          {/* Status */}
          <div className="bg-white rounded-2xl shadow-sm border p-6">
            <h2 className="text-lg font-semibold mb-4">Status</h2>

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

              <Button
                onClick={() =>
                  router.push(`/campaigns/${campaign.id}/insights`)
                }
              >
                View Insights
              </Button>
            </div>
          </div>

          {/* Budget */}
          <div className="bg-white rounded-2xl shadow-sm border p-6">
            <h2 className="text-lg font-semibold mb-6">Budget Overview</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5 border">
                <div className="text-sm font-medium mb-2">Total Budget</div>
                <div className="text-3xl font-bold">
                  {formatCurrency(campaign.budget)}
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-5 border">
                <div className="text-sm font-medium mb-2">Daily Budget</div>
                <div className="text-3xl font-bold">
                  {formatCurrency(campaign.daily_budget)}
                </div>
              </div>
            </div>
          </div>

          {/* Platforms */}
          <div className="bg-white rounded-2xl shadow-sm border p-6">
            <h2 className="text-lg font-semibold mb-4">Platforms</h2>

            <div className="flex flex-wrap gap-3">
              {campaign.platforms.map((platform: string, index: number) => {
                const PlatformIcon = getPlatformIcon(platform);
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-slate-100 px-4 py-3 rounded-xl border"
                  >
                    <PlatformIcon className="size-4" />
                    <span className="font-medium capitalize">{platform}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignsPage;
