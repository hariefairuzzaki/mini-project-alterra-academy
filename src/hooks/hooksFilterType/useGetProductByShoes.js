import { useQuery } from "@apollo/client";
import { GetProductByShoes } from "../../graphql/queries";

export default function useGetProductByShoes() {
  const {
    data: dataProductByShoes,
    loading: loadingProductByShoes,
    error: errorProductByShoes,
  } = useQuery(GetProductByShoes, { fetchPolicy: "network-only" });

  return {
    dataProductByShoes,
    loadingProductByShoes,
    errorProductByShoes,
  };
}
