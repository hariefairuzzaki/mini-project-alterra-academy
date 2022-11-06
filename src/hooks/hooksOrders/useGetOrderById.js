import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GetOrderById } from "../../graphql/queries";

export default function useGetOrderById() {
  const { id } = useParams();

  const {
    data: dataOrderById,
    loading: loadingOrderById,
    error: errorOrderById,
  } = useQuery(GetOrderById, { variables: { id } });

  return {
    dataOrderById,
    loadingOrderById,
    errorOrderById,
  };
}
