import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IDashboardCardProps } from "@/models/insights";

function CampaignCard({
  id,
  name,
  brand_id,
  status,
  budget,
  daily_budget,
  platforms,
  created_at,
}: IDashboardCardProps) {
  console.log("value", value);
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>

      <CardContent>
        <p className="text-3xl font-bold">{value}</p>
      </CardContent>

      {footer && (
        <CardFooter className="text-sm text-muted-foreground">
          {footer}
        </CardFooter>
      )}
    </Card>
  );
}

export default CampaignCard;
