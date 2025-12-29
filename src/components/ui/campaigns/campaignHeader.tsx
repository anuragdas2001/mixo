import { ICampaignHeaderProps } from "@/models/campaigns";

const CampaignHeader = ({ name, id, brandId }: ICampaignHeaderProps) => {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold text-slate-900 mb-2">{name}</h1>
      <p className="text-slate-600">Campaign ID: {id}</p>
      <p className="text-slate-600">Brand ID: {brandId}</p>
    </div>
  );
};

export default CampaignHeader;
