"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getCampaignsById } from "@/services/campaigns";

import CampaignHeader from "@/components/ui/campaigns/campaignHeader";
import CampaignStatus from "@/components/ui/campaigns/campaignStatus";
import CampaignBudget from "@/components/ui/campaigns/campaignBudget";
import CampaignPlatforms from "@/components/ui/campaigns/campaignPlatforms";

const CampaignsPage = () => {
  const { id } = useParams<{ id: string }>();

  const [campaign, setCampaign] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!id) return;

    const fetchCampaign = async () => {
      try {
        const { campaign } = await getCampaignsById(id);
        if (!campaign) setNotFound(true);
        else setCampaign(campaign);
      } catch {
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCampaign();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-600 text-lg">Loading campaign…</p>
      </div>
    );
  }

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
      <div className="max-w-7xl mx-auto space-y-6">
        <CampaignHeader
          name={campaign.name}
          id={campaign.id}
          brandId={campaign.brand_id}
        />

        <CampaignStatus
          id={campaign.id}
          status={campaign.status}
          createdAt={campaign.created_at}
        />

        <CampaignBudget
          budget={campaign.budget}
          dailyBudget={campaign.daily_budget}
        />

        <CampaignPlatforms platforms={campaign.platforms} />
      </div>
    </div>
  );
};

export default CampaignsPage;
