export async function getTvseriesByPage({ page }: { page: number }) {
  const resp = await fetch(`/api/v1/tvseries?page=${page}`);
  if (!resp.ok) throw new Error("Fetch errror");
  const data = await resp.json();
  return data;
}

export async function getTvseroesDetails({ slug }: { slug: string }) {
  const resp = await fetch(`/api/v1/tvseries/${slug}`);
  if (!resp.ok) throw new Error("Fetch errror");
  const data = await resp.json();
  return data;
}
