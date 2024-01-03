import { useQuery } from "@tanstack/react-query";
import { getActiveChildWorkshops } from "services/apiWorkshops";
import { useGetActiveChild } from "./useGetActiveChild";

export function useGetActiveChildWorkshops() {
  const { data: activeChild } = useGetActiveChild();

  const { data, isLoading } = useQuery({
    queryKey: ["activeChildWorkshops", activeChild],
    queryFn: () => getActiveChildWorkshops(activeChild[0].id || null),
  });

  return { data, isLoading };
}
