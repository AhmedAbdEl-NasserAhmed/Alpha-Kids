import { useQuery } from "@tanstack/react-query";
import { getActiveChildVideos } from "services/apiVideos";
import { useGetActiveChild } from "./useGetActiveChild";

export function useGetActiveChildVideos() {
  const { data: activeChild } = useGetActiveChild();

  const { data, isPending } = useQuery({
    queryKey: ["activeVideos", activeChild],
    queryFn: () => getActiveChildVideos(activeChild[0].id || null),
  });

  return { data, isPending };
}
