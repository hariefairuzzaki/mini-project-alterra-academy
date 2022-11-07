import { useQuery } from "@apollo/client";
import { GetProductByMen } from "../../graphql/queries";
export default function useGetProductByMen() {
  const {
    data: dataProductByMen,
    loading: loadingProductByMen,
    error: errorProductByMen,
  } = useQuery(GetProductByMen, {
    fetchPolicy: "network-only",
  });

  return {
    dataProductByMen,
    loadingProductByMen,
    errorProductByMen,
  };
}
