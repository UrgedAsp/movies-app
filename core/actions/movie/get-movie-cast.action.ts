import { movieApi } from "@/core/api/movie-api";
import { Cast } from "@/infrastructure/interfaces/cast";
import { MovieDBCreditsResponse } from "@/infrastructure/interfaces/moviedb-credits.response";

import { CastMapper } from "@/infrastructure/mappers/cast.mapper";

export const getMovieCastAction = async (
  movieId: string | number,
): Promise<Cast[]> => {
  try {
    const { data } = await movieApi.get<MovieDBCreditsResponse>(
      `/${movieId}/credits`,
    );

    return data.cast.map((cast) => CastMapper.fromMovieDBCastToEntity(cast));
  } catch (error) {
    console.log(error);
    throw "Cannot load cast movie";
  }
};
