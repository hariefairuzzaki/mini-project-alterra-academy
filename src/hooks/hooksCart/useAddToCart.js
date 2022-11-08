import { useMutation } from "@apollo/client";
import { AddToCart } from "../../graphql/mutations";
import { CartItem } from "../../graphql/queries";

export default function useAddToCart() {
  const [addToCart, { loading: loadingAddToCart }] = useMutation(AddToCart, {
    refetchQueries: [CartItem],
  });
  return {
    addToCart,
    loadingAddToCart,
  };
}
