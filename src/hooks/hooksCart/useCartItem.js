import { useQuery } from "@apollo/client";
import { CartItem } from "../../graphql/queries";

export default function useCartItem() {
  const { data: dataCartItem, loading: loadingCartItem, error: errorCartItem } = useQuery(CartItem);

  return {
    dataCartItem,
    loadingCartItem,
    errorCartItem,
  };
}
