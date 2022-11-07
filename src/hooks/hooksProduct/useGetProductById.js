import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GetProductById } from "../../graphql/queries";

export default function useGetProductById() {
  const { id } = useParams();
  const {
    data: dataProductById,
    loading: loadingProductById,
    error: errorProductById,
  } = useQuery(GetProductById, { variables: { id }, fetchPolicy: "network-only" });

  return {
    dataProductById,
    loadingProductById,
    errorProductById,
  };
}
