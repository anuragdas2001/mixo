import { ICampaignsList } from "@/models/campaigns";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CampaignCard from "./campaignsCard";
const CampaignsList = ({
  campaignsList,
}: {
  campaignsList: ICampaignsList;
}) => {
  const { campaigns } = campaignsList;
  console.log("Campaigns List:", campaigns);
  if (!campaigns) {
    return (
      <div className="mx-4 my-8">
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-8 text-center">
          <p className="text-gray-500">No campaign data available</p>
        </div>
      </div>
    );
  }
  return (
    <>
      <h1 className="m-4 text-2xl font-bold text-gray-900">Campaigns List</h1>
      <div className="grid grid-cols-1 gap-4">
        {campaigns?.map((campaign) => (
          <CampaignCard key={campaign.id} {...campaign} />
        ))}
      </div>
    </>
  );
};

export default CampaignsList;
