import { useQuery } from "@tanstack/react-query";

export const useGetTvDetails = ({ slug }: { slug: string }) => {
  return useQuery({
    queryKey: [slug],
    queryFn: async () => await getTvseroesDetails({ slug }),
  });
};

async function getTvseroesDetails({ slug }: { slug: string }) {
  const resp = await fetch(`/api/v1/tvseries/${slug}`);
  if (!resp.ok) throw new Error("Fetch errror");
  const data = await resp.json();
  return data;
}
