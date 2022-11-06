import { useQuery } from "@apollo/client";
import { FavouriteItem } from "../graphql/queries";

export default function useFavouriteItem() {
  const { data: dataFavouriteItem, loading: loadingFavouriteItem, error: errorFavouriteItem } = useQuery(FavouriteItem);

  return {
    dataFavouriteItem,
    loadingFavouriteItem,
    errorFavouriteItem,
  };
}
