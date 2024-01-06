import { useQuery } from "@tanstack/react-query";
import { getVideos as getVideosApi } from "services/apiVideos";

export function useGetVideos() {
  const { data: videos, isPending } = useQuery({
    queryKey: ["videos"],
    queryFn: getVideosApi,
  });

  return { videos, isPending };
}
