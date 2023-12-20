import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { insertActiveChildVideos as insertActiveChildVideosApi } from "services/apiVideos";

function useInsertActiveChildVideos() {
  const queryClient = useQueryClient();

  const { mutate: insertActiveChildVideos, isPending } = useMutation({
    mutationFn: insertActiveChildVideosApi,
    onSuccess: () => {
      toast.success("new video updated");
      queryClient.invalidateQueries({
        queryKey: ["activeVideos"],
      });
    },
  });

  return { insertActiveChildVideos, isPending };
}

export default useInsertActiveChildVideos;
