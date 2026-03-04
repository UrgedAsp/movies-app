import MainSlidesShow from "@/presentation/components/movies/MainSlidesShow";
import MovieHorizontalList from "@/presentation/components/movies/MovieHorizontalList";
import { useMovies } from "@/presentation/hooks/useMovies";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } =
    useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator color={"purple"} size={40} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View className="mt-2 pb-10" style={{ paddingTop: safeArea.top }}>
        <Text className="text-3xl font-bold px-4 mb-2">MoviesApp</Text>
        {/* Carousel de imagenes */}
        <MainSlidesShow movies={nowPlayingQuery.data ?? []} />
        {/* Popular */}
        <MovieHorizontalList
          className="mb-5"
          title="Populares"
          movies={popularQuery.data ?? []}
        />
        {/* Top Rated */}
        <MovieHorizontalList
          className="mb-5"
          title="Mejor calificadas"
          movies={topRatedQuery.data?.pages.flat() ?? []}
          loadNextPage={topRatedQuery.fetchNextPage}
        />
        {/* Upcoming */}
        <MovieHorizontalList
          className="mb-5"
          title="Próximamente"
          movies={upcomingQuery.data ?? []}
        />
        {/* Upcoming */}
        <MovieHorizontalList
          className="mb-5"
          movies={upcomingQuery.data ?? []}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
