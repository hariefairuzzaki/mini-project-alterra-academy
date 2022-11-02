import { useMutation } from "@apollo/client";
import { RemoveFromCart } from "../../graphql/mutations";
import { CartItem } from "../../graphql/queries";

export default function useRemoveFromCart() {
  const [removeFromCart, { loading: loadingRemoveFromCart }] = useMutation(RemoveFromCart, {
    refetchQueries: [CartItem],
  });
  return {
    removeFromCart,
    loadingRemoveFromCart,
  };
}
