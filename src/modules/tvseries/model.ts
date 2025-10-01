import { t } from "elysia";

export namespace TvseriesPage {
  export const getTvseriesQuery = t.Object({
    page: t.Any(),
  });
  export const getTvseriesParams = t.Object({
    slug: t.String(),
  });
  export type getTvseriesParams = typeof getTvseriesParams.static;

  export type getTvseriesQuery = typeof getTvseriesQuery.static;

  export const getTvSeriesResponse = t.Any();

  export type getTvSeriesResponse = typeof getTvSeriesResponse.static;

  export const getTvInvalidResponse = t.Literal("Get tvseries error");

  export type getTvInvalidResponse = typeof getTvInvalidResponse.static;
}
