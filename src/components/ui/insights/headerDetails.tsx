import { BarChart3 } from "lucide-react";
import Link from "next/link";

// Component: Header Section
const HeaderDetails = ({
  campaignId,
  timestamp,
}: {
  campaignId: string;
  timestamp: string;
}) => (
  <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
    <div className="flex items-center justify-between flex-wrap gap-4">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-slate-800">
            Campaign Insights
          </h1>
        </div>
        <p className="text-slate-600 md:ml-14">Campaign ID: {campaignId}</p>
      </div>
      <div className="text-right flex flex-col gap-2">
        <p className="text-sm text-slate-500">Last Updated</p>
        <p className="text-sm font-medium text-slate-700">{timestamp}</p>
        <Link href={`/campaigns/${campaignId}/insights/streams`} className="bg-green-400 h-10 px-4 py-2 rounded-2xl ">
          View streams
        </Link>
      </div>
    </div>
  </div>
);

export default HeaderDetails;
