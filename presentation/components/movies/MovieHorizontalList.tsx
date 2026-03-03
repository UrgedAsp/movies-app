import { Movie } from "@/infrastructure/interfaces/movie.interface";
import { FlatList, Text, View } from "react-native";
import MoviePoster from "./MoviePoster";

interface Props {
  title?: string;
  className?: string;
  movies: Movie[];
}

const MovieHorizontalList = ({ title, className, movies }: Props) => {
  return (
    <View className={`${className}`}>
      {title && <Text className="text-3xl font-bold px-4 mb-2">{title}</Text>}
      <FlatList
        horizontal
        data={movies}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster={true} />
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default MovieHorizontalList;
