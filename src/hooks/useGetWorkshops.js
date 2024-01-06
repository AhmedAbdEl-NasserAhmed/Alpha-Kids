import { useQuery } from "@tanstack/react-query";
import { getWorkshops } from "services/apiWorkshops";

export function useGetWorkshops() {
  const { data: workshops, isLoading } = useQuery({
    queryKey: ["allWorkshops"],
    queryFn: getWorkshops,
  });

  return { workshops, isLoading };
}
