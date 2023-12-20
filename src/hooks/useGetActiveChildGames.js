import { useQuery } from "@tanstack/react-query";
import { getActiveChildGames } from "services/apiGames";
import { useGetActiveChild } from "./useGetActiveChild";

export function useGetActiveChildGames() {
  const { data: activeChild } = useGetActiveChild();

  const { data, isPending } = useQuery({
    queryKey: ["activegames", activeChild],
    queryFn: () => getActiveChildGames(activeChild[0].id || null),
  });

  return { data, isPending };
}
