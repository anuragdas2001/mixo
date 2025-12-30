"use client";
import { BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
const HeaderDetails = ({
  campaignId,
  timestamp,
}: {
  campaignId: string;
  timestamp: string;
}) => {
  const router = useRouter();
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xs sm:text-sm md:text-xl lg:text-3xl font-bold text-slate-800">
                Campaign Insights
              </h1>
              <p className="text-slate-600 text-xs">
                Campaign ID: {campaignId}
              </p>
            </div>
          </div>
        </div>
        <div className="text-right flex flex-col gap-2">
          <p className="text-sm text-slate-500">Last Updated</p>
          <p className="text-sm font-medium text-slate-700">{timestamp}</p>
          <Button
            variant="default"
            onClick={() =>
              router.push(`/campaigns/${campaignId}/insights/streams`)
            }
            className=" h-10 w-32 rounded-2xl text-xs"
          >
            Stream insights
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeaderDetails;
