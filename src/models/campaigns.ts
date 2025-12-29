type TStatus = "active" | "paused" | "completed";

export interface ICampaigns {
  id: string;
  name: string;
  brand_id: string;
  status: TStatus;
  budget: number;
  daily_budget: number;
  platforms: string[];
  created_at: Date;
}

export interface ICampaignsList {
  campaigns: ICampaigns[];
  total: number;
}

export interface ICampaignHeaderProps {
  name: string;
  id: string;
  brandId: string;
}

export interface ICampaignPlatformsProps {
  platforms: string[];
}

export interface ICampaignBudgetProps {
  budget: number;
  dailyBudget: number;
}

export interface ICampaignStatusProps {
  id: string;
  status: string;
  createdAt: string;
}