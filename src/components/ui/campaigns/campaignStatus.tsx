import { Button } from "@/components/ui/button";
import { formatDate, getStatusColor } from "@/lib/helper";
import { ICampaignStatusProps } from "@/models/campaigns";
import { useRouter } from "next/navigation";

const CampaignStatus = ({ id, status, createdAt }: ICampaignStatusProps) => {
  const router = useRouter();

  return (
    <div className="bg-white rounded-2xl shadow-sm border p-6">
      <h2 className="text-lg font-semibold mb-4">Status</h2>

      <div className="flex justify-between items-center gap-3">
        <div className="flex flex-col gap-2">
          <span
            className={`px-4 py-2 rounded-full text-sm font-medium border ${getStatusColor(
              status
            )}`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>

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
