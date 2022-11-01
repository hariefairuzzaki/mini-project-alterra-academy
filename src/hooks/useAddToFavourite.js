import { useMutation } from "@apollo/client";
import { AddToFavourite } from "../graphql/mutations";
import { FavouriteItem } from "../graphql/queries";

export default function useAddToFavourite() {
  const [addToFavourite, { loading: loadingAddToFavourite }] = useMutation(AddToFavourite, {
    refetchQueries: [FavouriteItem],
  });
  return {
    addToFavourite,
    loadingAddToFavourite,
  };
}
