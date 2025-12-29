import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DollarSign, Calendar, TrendingUp } from "lucide-react";
import {
  formatCurrency,
  formatDate,
  getPlatformIcon,
  getStatusColor,
} from "@/lib/helper";
import Link from "next/link";
import { ICampaigns } from "@/models/campaigns";

const CampaignCard = ({
  id,
  name,
  brand_id,
  status,
  budget,
  daily_budget,
  platforms,
  created_at,
}: ICampaigns) => {
  return (
    <Card className="mx-4 hover:shadow-lg transition-shadow duration-300 border-border/50 overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-xl font-semibold line-clamp-1 group-hover:text-blue-600 transition-colors">
            {name}
          </CardTitle>
          <Badge
            variant="outline"
            className={`${getStatusColor(status)} capitalize shrink-0`}
          >
            {status}
          </Badge>
        </div>
        <CardDescription className="text-sm mt-1 flex flex-col gap-1">
          <span>Campaign ID: {id}</span>
          <span>Brand ID: {brand_id}</span>
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-blue-500/10 rounded-full">
                <DollarSign className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">
                  Total Budget
                </p>
                <p className="text-2xl font-bold text-foreground">
                  {formatCurrency(budget)}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
            <TrendingUp className="w-4 h-4 text-muted-foreground" />
            <div className="flex-1">
              <p className="text-xs text-muted-foreground">Daily Budget</p>
              <p className="text-sm font-semibold">
                {formatCurrency(daily_budget)}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            Platforms
          </p>
          <div className="flex flex-wrap gap-2">
            {platforms.map((platform) => {
              const PlatformIcon = getPlatformIcon(platform);
              return (
                <Badge
                  key={platform}
                  variant="secondary"
                  className="flex items-center gap-1.5 px-3 py-1 bg-background border hover:bg-accent transition-colors"
                >
                  <PlatformIcon className="size-4" />
                  <span className="capitalize text-xs font-medium">
                    {platform}
                  </span>
                </Badge>
              );
            })}
          </div>
        </div>
      </CardContent>

      <CardFooter className="text-xs text-muted-foreground border-t py-3">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>Created on {formatDate(created_at)}</span>
          </div>
          <Link
            href={`/campaigns/${id}`}
            className="font-medium hover:text-foreground transition-colors"
          >
            View Details
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CampaignCard;
