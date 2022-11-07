import { useMutation } from "@apollo/client";
import { Checkout } from "../../graphql/mutations";
import { CartItem, Orders } from "../../graphql/queries";

export default function useCheckout() {
  const [checkout, { loading: loadingCheckout }] = useMutation(Checkout, {
    refetchQueries: [Orders, CartItem],
    fetchPolicy: "network-only",
  });
  return {
    checkout,
    loadingCheckout,
  };
}
