import { useQuery } from "@tanstack/react-query";
import { getVideos as getVideosApi } from "services/apiVideos";

export function useGetVideos() {
  const { data: videos, isPending } = useQuery({
    queryFn: getVideosApi,
    queryKey: ["videos"],
  });

  return { videos, isPending };
}
