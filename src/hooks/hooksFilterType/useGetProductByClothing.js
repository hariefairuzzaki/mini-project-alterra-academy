import { useQuery } from "@apollo/client";
import { GetProductByClothing } from "../../graphql/queries";
export default function useGetProductByClothing() {
  const {
    data: dataProductByClothing,
    loading: loadingProductByClothing,
    error: errorProductByClothing,
  } = useQuery(GetProductByClothing, { fetchPolicy: "network-only" });

  return {
    dataProductByClothing,
    loadingProductByClothing,
    errorProductByClothing,
  };
}
