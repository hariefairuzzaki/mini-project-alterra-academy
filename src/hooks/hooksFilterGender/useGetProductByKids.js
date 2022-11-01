import { useQuery } from "@apollo/client";
import { GetProductByKids } from "../../graphql/queries";
export default function useGetProductByKids() {
  const {
    data: dataProductByKids,
    loading: loadingProductByKids,
    error: errorProductByKids,
  } = useQuery(GetProductByKids);

  return {
    dataProductByKids,
    loadingProductByKids,
    errorProductByKids,
  };
}
