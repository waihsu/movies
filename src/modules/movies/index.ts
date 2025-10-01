import Elysia, { t } from "elysia";
import { MoviesPage } from "./model";
import { Movies } from "./service";

export const movies = new Elysia({ prefix: "/movies" })

  .get(
    "/",
    async ({ query }) => {
      const { page } = query;
      const response = await Movies.getMovies({ page });
      return response;
    },
    {
      query: MoviesPage.getMovies,
    }
  )

  .get(
    "/:slug",
    async ({ params }) => {
      const { slug } = params;

      try {
        const res = await Movies.getMovie({ slug });
        return res;
      } catch (err) {
        console.log(err);
        return { messg: err };
      }
    },
    {
      params: t.Object({
        slug: t.String(),
      }),
    }
  );
