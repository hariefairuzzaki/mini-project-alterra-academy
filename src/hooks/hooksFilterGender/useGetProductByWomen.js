import { useQuery } from "@apollo/client";
import { GetProductByWomen } from "../../graphql/queries";
export default function useGetProductByWomen() {
  const {
    data: dataProductByWomen,
    loading: loadingProductByWomen,
    error: errorProductByWomen,
  } = useQuery(GetProductByWomen);

  return {
    dataProductByWomen,
    loadingProductByWomen,
    errorProductByWomen,
  };
}
