import { useQuery } from "@tanstack/react-query";

export const useGetTvSeries = ({ page }: { page: number }) => {
  return useQuery({
    queryKey: ["series", page],
    queryFn: async () => await getTvseriesByPage({ page }),
  });
};

async function getTvseriesByPage({ page }: { page: number }) {
  const resp = await fetch(`/api/v1/tvseries?page=${page}`);
  if (!resp.ok) throw new Error("Fetch errror");
  const data = await resp.json();
  return data;
}
