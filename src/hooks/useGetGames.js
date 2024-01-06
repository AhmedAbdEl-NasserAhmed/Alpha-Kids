import { useQuery } from "@tanstack/react-query";
import { getGames as getGamessApi } from "services/apiGames";

export function useGetGames() {
  const { data: games, isPending } = useQuery({
    queryFn: getGamessApi,
    queryKey: ["games"],
  });

  return { games, isPending };
}
