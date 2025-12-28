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

function DashboardCard({
  title,
  value,
  description,
  footer,
  icon,
  iconColor = "text-gray-600",
  iconBgColor = "bg-gray-100",
}: IDashboardCardProps) {
  return (
    <Card className="w-full max-w-sm transition-shadow hover:shadow-md">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <CardTitle className="text-base font-semibold">{title}</CardTitle>
            {description && (
              <CardDescription className="mt-1">{description}</CardDescription>
            )}
          </div>
          {icon && (
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-lg ${iconBgColor}`}
            >
              <div className={iconColor}>{icon}</div>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-3xl font-bold text-gray-900">{value}</p>
      </CardContent>

      {footer && (
        <CardFooter className="text-sm text-muted-foreground">
          {footer}
        </CardFooter>
      )}
    </Card>
  );
}

export default DashboardCard;