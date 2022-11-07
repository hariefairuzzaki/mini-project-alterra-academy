import { useQuery } from "@apollo/client";
import { Orders } from "../../graphql/queries";

export default function useOrders() {
  const {
    data: dataOrders,
    loading: loadingOrders,
    error: errorOrders,
  } = useQuery(Orders, { fetchPolicy: "network-only" });

  return {
    dataOrders,
    loadingOrders,
    errorOrders,
  };
}
