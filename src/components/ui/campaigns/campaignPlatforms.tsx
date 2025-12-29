import { getPlatformIcon } from "@/lib/helper";
import { ICampaignPlatformsProps } from "@/models/campaigns";

const CampaignPlatforms = ({ platforms }: ICampaignPlatformsProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border p-6">
      <h2 className="text-lg font-semibold mb-4">Platforms</h2>

      <div className="flex flex-wrap gap-3">
        {platforms.map((platform, index) => {
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
  );
};

export default CampaignPlatforms;
