import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { insertActiveChildGames as insertActiveChildGamesApi } from "services/apiGames";

function useInsertActiveChildGames() {
  const queryClient = useQueryClient();

  const { mutate: insertActiveChildGames, isPending } = useMutation({
    mutationFn: insertActiveChildGamesApi,
    onSuccess: (data) => {
      toast.success(data ? "new game updated" : "game already played");
      queryClient.invalidateQueries({
        queryKey: ["activeGames"],
      });
    },
  });

  return { insertActiveChildGames, isPending };
}

export default useInsertActiveChildGames;
