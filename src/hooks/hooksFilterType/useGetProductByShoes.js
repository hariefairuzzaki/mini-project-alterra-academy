import { useQuery } from "@apollo/client";
import { GetProductByShoes } from "../../graphql/queries";

export default function useGetProductByShoes() {
  const {
    data: dataProductByShoes,
    loading: loadingProductByShoes,
    error: errorProductByShoes,
  } = useQuery(GetProductByShoes);

  return {
    dataProductByShoes,
    loadingProductByShoes,
    errorProductByShoes,
  };
}
