export const getCampaignsInsights = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/campaigns/insights`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  console.log("Fetched insights data:", data);
  console.log("fetch data inside", data.insights);
  return data;
};

export const getCampaignsInsightsById = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/campaigns/insights/${id}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data;
};

export const getInsights = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/campaigns/${id}/insights`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data;
};

export const getInsightsStream = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/campaigns/${id}/insights/stream`,
    { cache: "no-store" }
  );

  const text = await res.text();

  const insights = text
    .split("\n")
    .filter((line) => line.startsWith("data: "))
    .map((line) => JSON.parse(line.replace("data: ", "").trim()));

  return insights; // array of insight snapshots
};
