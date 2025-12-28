export const getCampaigns = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/campaigns`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  console.log("Fetched insights data:", data);
  console.log("fetch data inside", data.insights);
  return data;
};

export const getCampaignsById = async (id: number) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/campaigns/${id}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data;
};
