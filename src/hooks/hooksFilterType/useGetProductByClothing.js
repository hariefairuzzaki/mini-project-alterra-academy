import { useQuery } from "@apollo/client";
import { GetProductByClothing } from "../../graphql/queries";
export default function useGetProductByClothing() {
  const {
    data: dataProductByClothing,
    loading: loadingProductByClothing,
    error: errorProductByClothing,
  } = useQuery(GetProductByClothing);

  return {
    dataProductByClothing,
    loadingProductByClothing,
    errorProductByClothing,
  };
}
