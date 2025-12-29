import React from "react";
import { FaMeta } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { TrendingUp } from "lucide-react";

const getStatusColor = (status: string) => {
  const statusLower = status.toLowerCase();
  if (statusLower === "active")
    return "bg-green-500/10 text-green-700 border-green-200";
  if (statusLower === "paused")
    return "bg-yellow-500/10 text-yellow-700 border-yellow-200";
  if (statusLower === "completed")
    return "bg-blue-500/10 text-blue-700 border-blue-200";
  return "bg-gray-500/10 text-gray-700 border-gray-200";
};

const getPlatformIcon = (platform: string) => {
  const platformLower = platform.toLowerCase();
  switch (platformLower) {
    case "facebook":
    case "meta":
      return FaMeta;
    case "instagram":
      return RiInstagramLine;
    case "twitter":
    case "x":
      return FaTwitter;
    case "linkedin":
      return FaLinkedin;
    case "youtube":
      return FaYoutube;
    case "google":
      return FaGoogle;
    default:
      return TrendingUp;
  }
};

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};
const formatTime = (timestamp: string) => {
  return new Date(timestamp).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
};
const formatDate = (dateString: string | Date) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};
const formatNumber = (num: number) =>
  new Intl.NumberFormat("en-US").format(num);

export {
  getStatusColor,
  getPlatformIcon,
  formatCurrency,
  formatTime,
  formatDate,
  formatNumber,
};
