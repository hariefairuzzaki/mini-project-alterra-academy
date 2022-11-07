import { useQuery } from "@apollo/client";
import { RetrieveProduct } from "../../graphql/queries";

export default function useRetrieveProduct() {
  const {
    data: dataProduct,
    loading: loadingProduct,
    error: errorProduct,
  } = useQuery(RetrieveProduct, { fetchPolicy: "network-only" });

  return {
    dataProduct,
    loadingProduct,
    errorProduct,
  };
}
