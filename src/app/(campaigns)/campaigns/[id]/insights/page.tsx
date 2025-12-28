import React from "react";
import {
  TrendingUp,
  MousePointer,
  Eye,
  DollarSign,
  Target,
  BarChart3,
} from "lucide-react";

const CampaignInsights = ({ insights }) => {
  // Default data for demonstration
  const data = insights || {
    campaign_id: "camp_012",
    timestamp: "2025-12-28T14:39:04.311Z",
    impressions: 42225,
    clicks: 1920,
    conversions: 33,
    spend: 1411,
    ctr: 4.55,
    cpc: 0.73,
    conversion_rate: 1.72,
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat("en-US").format(num);
  };

  const formatCurrency = (num) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(num);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const metrics = [
    {
      title: "Impressions",
      value: formatNumber(data.impressions),
      icon: Eye,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      title: "Clicks",
      value: formatNumber(data.clicks),
      icon: MousePointer,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      title: "Conversions",
      value: formatNumber(data.conversions),
      icon: Target,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      title: "Total Spend",
      value: formatCurrency(data.spend),
      icon: DollarSign,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
    },
  ];

  const performanceMetrics = [
    {
      label: "Click-Through Rate",
      value: `${data.ctr}%`,
      description: "Percentage of impressions that resulted in clicks",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      label: "Cost Per Click",
      value: formatCurrency(data.cpc),
      description: "Average cost for each click received",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      label: "Conversion Rate",
      value: `${data.conversion_rate}%`,
      description: "Percentage of clicks that converted",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-3xl font-bold text-slate-800">
                  Campaign Insights
                </h1>
              </div>
              <p className="text-slate-600 ml-14">
                Campaign ID: {data.campaign_id}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-500">Last Updated</p>
              <p className="text-sm font-medium text-slate-700">
                {formatDate(data.timestamp)}
              </p>
            </div>
          </div>
        </div>

        {/* Main Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 ${metric.bgColor} rounded-xl`}>
                    <Icon className={`w-6 h-6 ${metric.iconColor}`} />
                  </div>
                </div>
                <h3 className="text-sm font-medium text-slate-600 mb-1">
                  {metric.title}
                </h3>
                <p className="text-3xl font-bold text-slate-800">
                  {metric.value}
                </p>
              </div>
            );
          })}
        </div>

        {/* Performance Metrics */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-6 h-6 text-indigo-600" />
            <h2 className="text-2xl font-bold text-slate-800">
              Performance Metrics
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {performanceMetrics.map((metric, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200 hover:border-slate-300 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`px-3 py-1 ${metric.bgColor} rounded-lg`}>
                    <span className={`text-2xl font-bold ${metric.color}`}>
                      {metric.value}
                    </span>
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-slate-700 mb-1">
                  {metric.label}
                </h3>
                <p className="text-xs text-slate-500">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl shadow-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-6">Campaign Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <p className="text-sm text-white/80 mb-1">Cost per Conversion</p>
              <p className="text-2xl font-bold">
                {formatCurrency(data.spend / data.conversions)}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <p className="text-sm text-white/80 mb-1">Engagement Rate</p>
              <p className="text-2xl font-bold">
                {((data.clicks / data.impressions) * 100).toFixed(2)}%
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <p className="text-sm text-white/80 mb-1">Revenue per Click</p>
              <p className="text-2xl font-bold">
                {formatCurrency(data.spend / data.clicks)}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <p className="text-sm text-white/80 mb-1">Total Reach</p>
              <p className="text-2xl font-bold">
                {formatNumber(data.impressions)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignInsights;
