import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [searchParams] = useSearchParams();
  //Filter
  const filterValue = searchParams.get("status") || "all";
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue, method: "eq" };
  // :{ field: "totalPrice", value: 5000, method: "gte" };
  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings", filter],
    queryFn: () => {
      return getBookings({ filter });
    }, //getBookings,
  });
  return { isLoading, error, bookings };
}
