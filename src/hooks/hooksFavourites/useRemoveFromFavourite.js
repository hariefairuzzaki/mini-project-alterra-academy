import { useMutation } from "@apollo/client";
import { RemoveFromFavourite } from "../../graphql/mutations";
import { FavouriteItem } from "../../graphql/queries";

export default function useRemoveFromFavourite() {
  const [removeFromFavourite, { loading: loadingRemoveFromFavourite }] = useMutation(RemoveFromFavourite, {
    refetchQueries: [FavouriteItem],
  });
  return {
    removeFromFavourite,
    loadingRemoveFromFavourite,
  };
}
