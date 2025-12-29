import { LucideIcon } from "lucide-react";

export interface IInsights {
  timestamp: string;
  total_campaigns: number;
  active_campaigns: number;
  paused_campaigns: number;
  completed_campaigns: number;
  total_impressions: number;
  total_clicks: number;
  total_conversions: number;
  total_spend: number;
  avg_ctr: number;
  avg_cpc: number;
  avg_conversion_rate: number;
}

export interface IInsightData {
  campaign_id: string;
  timestamp: string;
  impressions: number;
  clicks: number;
  conversions: number;
  spend: number;
  ctr: number;
  cpc: number;
  conversion_rate: number;
}

export interface ICampaignInsights {
  insights: IInsights;
}
export interface IDashboardCardProps {
  title: string;
  value: string | number;
  description?: string;
  footer?: string;
}

// Types
export interface IMetric {
  title: string;
  value: string;
  icon: LucideIcon;
  bgColor: string;
  iconColor: string;
}

export interface IPerformanceMetric {
  label: string;
  value: string;
  description: string;
  color: string;
  bgColor: string;
}

export interface ICampaignInsightsProps {
  params: Promise<{ id: string }>;
}

