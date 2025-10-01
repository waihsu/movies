import Layout from "@/components/layout";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getMovieDetails } from "../api/useGetMovies";
import { useParams } from "react-router";
import { reactLogo } from "@/lib/logoAssets";

export default function MovieDetails() {
  const { slug } = useParams<{ slug: string }>();
  const { data, isFetched, isPending, isLoading } = useQuery({
    queryKey: ["page"],
    queryFn: async () => await getMovieDetails({ slug }),
  });

  if (isLoading && isPending)
    return (
      <img
        src={reactLogo}
        alt="React Logo"
        className="h-36 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa] [animation:spin_20s_linear_infinite]"
      />
    );
  console.log(data);
  if (!data) return null;
  return (
    <Layout>
      <div>MovieDetails</div>
    </Layout>
  );
}
