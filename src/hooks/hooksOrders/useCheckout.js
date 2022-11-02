import { useMutation } from "@apollo/client";
import { Checkout } from "../../graphql/mutations";
import { Orders } from "../../graphql/queries";

export default function useCheckout() {
  const [checkout, { loading: loadingCheckout }] = useMutation(Checkout, {
    refetchQueries: [Orders],
  });
  return {
    checkout,
    loadingCheckout,
  };
}
