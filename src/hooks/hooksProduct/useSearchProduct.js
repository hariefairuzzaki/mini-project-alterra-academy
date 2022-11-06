import { useLazyQuery } from "@apollo/client";
import { SearchProduct } from "../../graphql/queries";

export default function useSearchProduct() {
  const [executeSearch, { data: dataSearchProduct, loading: loadingSearchProduct, error: errorSearchProduct }] =
    useLazyQuery(SearchProduct);

  return {
    executeSearch,
    dataSearchProduct,
    loadingSearchProduct,
    errorSearchProduct,
  };
}
