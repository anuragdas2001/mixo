import { Button } from "@/components/ui/button";
import { formatDate, getStatusColor } from "@/lib/helper";
import { ICampaignStatusProps } from "@/models/campaigns";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
const CampaignStatus = ({ id, status, createdAt }: ICampaignStatusProps) => {
  const router = useRouter();

  return (
    <div className="bg-white rounded-2xl shadow-sm border p-6">
      <div className="flex">
        <h2 className="text-lg font-semibold mb-4">Status</h2>
        <Badge
          className={`px-4 h-8 w-20 ml-auto rounded-full text-sm font-medium border ${getStatusColor(
            status
          )}`}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>
      </div>

      <div className="flex justify-between items-center gap-3">
        <div className="flex flex-col gap-2">
          <span className="text-sm text-slate-500">
            Created {formatDate(createdAt)}
          </span>
        </div>

        <Button onClick={() => router.push(`/campaigns/${id}/insights`)}>
          View Insights
        </Button>
      </div>
    </div>
  );
};

export default CampaignStatus;
