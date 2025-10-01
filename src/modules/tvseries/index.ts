import Elysia, { t } from "elysia";
import { TvseriesPage } from "./model";
import { Tvseries } from "./service";

export const tvseries = new Elysia()
  .get(
    "/tvseries",
    async ({ query }) => {
      const { page } = query;
      const data = await Tvseries.getTvserieByPage({ page });
      return data;
    },
    {
      query: TvseriesPage.getTvseriesQuery,
    }
  )
  .get(
    "/tvseries/:slug",
    async ({ params }) => {
      const { slug } = params;
      const data = await Tvseries.getTvseriesByName({ slug });
      return data;
    },
    {
      params: TvseriesPage.getTvseriesParams,
    }
  );
