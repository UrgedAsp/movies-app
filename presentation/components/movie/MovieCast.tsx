import { Cast } from "@/infrastructure/interfaces/cast";
import { FlatList, Text, View } from "react-native";
import { ActorCard } from "./ActorCard";

interface Props {
  cast: Cast[];
}

const MovieCast = ({ cast }: Props) => {
  return (
    <View className="mt-5 mb-20">
      <Text className="font-bold text-2xl px-5 mb-4">Actores</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={cast}
        keyExtractor={(cast, index) => `${cast} ${index}`}
        renderItem={(cast) => <ActorCard actor={cast.item} />}
      />
    </View>
  );
};

export default MovieCast;
